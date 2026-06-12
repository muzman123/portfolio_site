// Build-time GitHub data fetcher.
// Produces baked JSON consumed by the app so there are no runtime API calls
// (and no per-visitor rate limits). Run via `npm run fetch:github`, which the
// build script invokes automatically. A daily GitHub Action re-runs it.
//
// Set GITHUB_TOKEN in the environment to lift the 60 req/hr unauthenticated
// limit to 5000 req/hr (the Action passes the built-in token automatically).

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const metaPath = join(root, 'src', 'data', 'project-meta.json')
const outDir = join(root, 'src', 'data', 'generated')

const meta = JSON.parse(await readFile(metaPath, 'utf8'))
const USER = meta.username
const token = process.env.GITHUB_TOKEN

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio-build`,
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

async function gh(path) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`
  const res = await fetch(url, { headers })
  if (!res.ok) {
    const remaining = res.headers.get('x-ratelimit-remaining')
    throw new Error(
      `GitHub API ${res.status} for ${url}` +
        (remaining === '0' ? ' (rate limit exhausted — set GITHUB_TOKEN)' : '')
    )
  }
  return res.json()
}

function formatStars(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

// ----- Projects: owner repos -----------------------------------------------
async function fetchRepos() {
  const blacklist = new Set((meta.blacklist || []).map((s) => s.toLowerCase()))
  const overrides = new Map(
    Object.entries(meta.overrides || {}).map(([k, v]) => [k.toLowerCase(), v])
  )

  const repos = await gh(
    `/users/${USER}/repos?per_page=100&sort=pushed&type=owner`
  )

  const selected = repos
    // Blacklisted repos never appear, even if curated.
    .filter((r) => !blacklist.has(r.name.toLowerCase()))
    // Keep all of your own (non-fork) repos, plus any explicitly curated repo
    // (so a curated fork like globenews still shows). Forks without an override
    // are dropped. Sorting newest-first happens at runtime in projects.ts.
    .filter((r) => !r.fork || overrides.has(r.name.toLowerCase()))
    .map((r) => ({
      name: r.name,
      description: r.description || '',
      html_url: r.html_url,
      homepage: r.homepage || '',
      language: r.language || '',
      topics: r.topics || [],
      stargazers_count: r.stargazers_count || 0,
      pushed_at: r.pushed_at,
    }))

  console.log(`  projects: ${selected.length} repos selected`)
  return selected
}

// Run a GitHub search query, following pagination up to ~1000 results.
async function searchAll(query) {
  const q = encodeURIComponent(query)
  let page = 1
  const items = []
  while (page <= 10) {
    const data = await gh(
      `/search/issues?q=${q}&per_page=100&page=${page}&sort=created&order=desc`
    )
    items.push(...(data.items || []))
    if (!data.items || data.items.length < 100) break
    page++
  }
  return items
}

// repository_url -> "owner/repo"
const repoFullName = (url) => {
  const m = url.match(/repos\/([^/]+)\/([^/]+)$/)
  return m ? `${m[1]}/${m[2]}` : ''
}

// ----- Open Source: all-time contributions + activity feed -----------------
async function fetchOpenSource() {
  const [mergedItems, openItems, issueItems] = await Promise.all([
    searchAll(`author:${USER} type:pr is:merged`),
    searchAll(`author:${USER} type:pr is:open`),
    searchAll(`author:${USER} type:issue`),
  ])

  // ---- Card data: external (non-own) repos with merged PRs, ranked by stars.
  const byRepo = new Map()
  for (const item of mergedItems) {
    const full = repoFullName(item.repository_url)
    if (!full) continue
    const owner = full.split('/')[0]
    if (owner.toLowerCase() === USER.toLowerCase()) continue // skip own repos
    byRepo.set(full, (byRepo.get(full) || 0) + 1)
  }

  const totalMergedPRs = mergedItems.length
  const externalRepoCount = byRepo.size

  const enriched = []
  for (const [full, prCount] of byRepo) {
    try {
      const r = await gh(`/repos/${full}`)
      enriched.push({
        repo: full,
        starsRaw: r.stargazers_count || 0,
        stars: formatStars(r.stargazers_count || 0),
        desc: r.description || '',
        prCount,
        url: `https://github.com/${full}/pulls?q=author%3A${USER}`,
      })
    } catch (e) {
      console.warn(`  (skipping ${full}: ${e.message})`)
    }
  }
  enriched.sort((a, b) => b.starsRaw - a.starsRaw)
  const contributions = enriched.slice(0, 6)

  // ---- Modal data: an all-time activity feed grouped by kind.
  const toItem = (it, date) => ({
    repo: repoFullName(it.repository_url),
    title: it.title,
    url: it.html_url,
    date,
  })
  const byDateDesc = (a, b) => Date.parse(b.date) - Date.parse(a.date)
  const cap = 30

  const activity = {
    mergedPRs: mergedItems
      .map((it) => toItem(it, it.pull_request?.merged_at || it.closed_at || it.created_at))
      .sort(byDateDesc)
      .slice(0, cap),
    openPRs: openItems
      .map((it) => toItem(it, it.created_at))
      .sort(byDateDesc)
      .slice(0, cap),
    issues: issueItems
      .map((it) => toItem(it, it.created_at))
      .sort(byDateDesc)
      .slice(0, cap),
  }

  console.log(
    `  open source: ${totalMergedPRs} merged PRs across ${externalRepoCount} external repos` +
      ` | activity: ${activity.mergedPRs.length} merged, ${activity.openPRs.length} open, ${activity.issues.length} issues`
  )

  return {
    contributions,
    summary: { totalMergedPRs, externalRepoCount },
    activity,
    generatedAt: new Date().toISOString(),
  }
}

async function main() {
  console.log(`Fetching GitHub data for @${USER}${token ? ' (authenticated)' : ' (unauthenticated)'}...`)
  await mkdir(outDir, { recursive: true })

  const repos = await fetchRepos()
  await writeFile(
    join(outDir, 'repos.json'),
    JSON.stringify({ repos, generatedAt: new Date().toISOString() }, null, 2) + '\n'
  )

  const openSource = await fetchOpenSource()
  await writeFile(
    join(outDir, 'opensource.json'),
    JSON.stringify(openSource, null, 2) + '\n'
  )

  console.log('Wrote src/data/generated/{repos,opensource}.json')
}

main().catch((err) => {
  console.error('\nfetch-github failed:', err.message)
  console.error('Existing generated JSON (if any) is left untouched; build will use it as fallback.')
  process.exit(1)
})
