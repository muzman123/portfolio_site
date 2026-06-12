import generated from './generated/repos.json'
import meta from './project-meta.json'

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  link?: string
}

interface GeneratedRepo {
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  topics: string[]
  stargazers_count: number
  pushed_at: string
}

interface Override {
  title?: string
  description?: string
  tags?: string[]
  image?: string
  link?: string
}

interface ManualProject {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  link?: string
  date?: string
}

// Sortable project: a Project plus the date we rank on (stripped before export).
type RankedProject = Project & { date: number }

const USER = meta.username
const defaultImage = meta.defaultImage
const overrides = meta.overrides as Record<string, Override>

// Case-insensitive lookup into the overrides map.
const overrideFor = (name: string): Override =>
  overrides[name] ?? overrides[name.toLowerCase()] ?? {}

// Fallback when a repo has no curated image: GitHub's auto-generated OG card.
const ogImage = (name: string) =>
  `https://opengraph.githubassets.com/1/${USER}/${name}`

// "trading_strategy" -> "Trading Strategy" for repos without a curated title.
const prettify = (name: string) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()

function fromRepo(repo: GeneratedRepo): RankedProject {
  const o = overrideFor(repo.name)
  const description = repo.description?.trim() || o.description || ''
  const tags =
    o.tags ?? (repo.topics.length ? repo.topics : repo.language ? [repo.language] : [])
  return {
    title: o.title || prettify(repo.name),
    description,
    tags,
    image: o.image || ogImage(repo.name) || defaultImage,
    github: repo.html_url,
    link: o.link || repo.homepage || undefined,
    date: repo.pushed_at ? Date.parse(repo.pushed_at) : 0,
  }
}

function fromManual(m: ManualProject): RankedProject {
  return {
    title: m.title,
    description: m.description,
    tags: m.tags,
    image: m.image,
    github: m.github,
    link: m.link,
    date: m.date ? Date.parse(m.date) : 0,
  }
}

// Blacklist is also applied here (not just in the fetch script) so editing
// project-meta.json takes effect on reload without re-running fetch:github.
const blacklist = new Set((meta.blacklist ?? []).map((s) => s.toLowerCase()))

const generatedRepos = (generated.repos ?? []).filter(
  (r) => !blacklist.has(r.name.toLowerCase())
) as GeneratedRepo[]
const manual = (meta.manual ?? []) as ManualProject[]

// Newest first, by last-pushed date (manual projects use their `date`).
const ranked: RankedProject[] = [
  ...generatedRepos.map(fromRepo),
  ...manual.map(fromManual),
].sort((a, b) => b.date - a.date)

// Strip the ranking-only field so the public shape stays a clean Project.
export const projectsData: Project[] = ranked.map(
  ({ date: _d, ...project }) => project
)
