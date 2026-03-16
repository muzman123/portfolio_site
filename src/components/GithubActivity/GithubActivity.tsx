import { useState, useEffect } from 'react'
import styles from './GithubActivity.module.css'

interface GithubEvent {
  id: string
  type: string
  repo: { name: string; url: string }
  payload: {
    action?: string
    pull_request?: { title: string; html_url: string; merged?: boolean }
    issue?: { title: string; html_url: string; number: number }
    comment?: { body: string; html_url: string }
  }
  created_at: string
}

type ActivityItem = {
  type: 'pr_merged' | 'pr_open' | 'issue' | 'review'
  repo: string
  title: string
  url: string
  date: string
}

function parseEvents(events: GithubEvent[]): ActivityItem[] {
  const items: ActivityItem[] = []

  for (const event of events) {
    const date = new Date(event.created_at)
    if (date.getFullYear() < 2025) continue

    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const repoName = event.repo.name

    if (event.type === 'PullRequestEvent' && event.payload.pull_request) {
      const pr = event.payload.pull_request
      items.push({
        type: pr.merged ? 'pr_merged' : 'pr_open',
        repo: repoName,
        title: pr.title,
        url: pr.html_url,
        date: dateStr,
      })
    } else if (event.type === 'IssuesEvent' && event.payload.action === 'opened' && event.payload.issue) {
      const issue = event.payload.issue
      items.push({
        type: 'issue',
        repo: repoName,
        title: issue.title,
        url: issue.html_url,
        date: dateStr,
      })
    } else if (event.type === 'PullRequestReviewCommentEvent' && event.payload.pull_request) {
      const pr = event.payload.pull_request
      items.push({
        type: 'review',
        repo: repoName,
        title: pr.title,
        url: pr.html_url,
        date: dateStr,
      })
    }
  }

  return items
}

const sectionDefs = [
  {
    key: 'pr_merged' as const,
    label: 'Merged PRs',
    dotColor: '#3fb950',
    badge: { background: 'rgba(46,160,67,0.18)', borderColor: 'rgba(46,160,67,0.4)', color: '#3fb950' },
  },
  {
    key: 'pr_open' as const,
    label: 'Open PRs',
    dotColor: '#a371f7',
    badge: { background: 'rgba(140,80,200,0.18)', borderColor: 'rgba(140,80,200,0.4)', color: '#a371f7' },
  },
  {
    key: 'issue' as const,
    label: 'Issues Opened',
    dotColor: '#f78166',
    badge: { background: 'rgba(247,129,102,0.18)', borderColor: 'rgba(247,129,102,0.4)', color: '#f78166' },
  },
  {
    key: 'review' as const,
    label: 'Review Comments',
    dotColor: '#58a6ff',
    badge: { background: 'rgba(88,166,255,0.18)', borderColor: 'rgba(88,166,255,0.4)', color: '#58a6ff' },
  },
]

function GithubActivity() {
  const [items, setItems] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/muzman123/events/public?per_page=100')
      .then((r) => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then((data: GithubEvent[]) => {
        setItems(parseEvents(data))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner} />
        <span className={styles.loadingText}>Fetching GitHub activity...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.error}>
        Could not load GitHub activity. GitHub API rate limits may apply.
      </div>
    )
  }

  const sections = sectionDefs
    .map((def) => ({ ...def, items: items.filter((i) => i.type === def.key) }))
    .filter((s) => s.items.length > 0)

  if (sections.length === 0) {
    return <div className={styles.error}>No public activity found for 2025.</div>
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.subtitle}>Recent public GitHub activity</p>
      {sections.map((section) => (
        <div key={section.label} className={styles.section}>
          <div className={styles.sectionLabel} style={{ color: section.dotColor }}>
            <span className={styles.dot} style={{ background: section.dotColor }} />
            {section.label}
            <span className={styles.count}>({section.items.length})</span>
          </div>
          <div className={styles.itemList}>
            {section.items.slice(0, 6).map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.activityItem}
              >
                <div className={styles.itemInfo}>
                  <span className={styles.repoName}>{item.repo}</span>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <div className={styles.itemMeta}>
                  <span className={styles.badge} style={section.badge as React.CSSProperties}>
                    {section.label.split(' ')[0]}
                  </span>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GithubActivity
