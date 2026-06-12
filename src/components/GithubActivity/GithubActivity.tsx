import styles from './GithubActivity.module.css'
import { activity, summary, type ActivityItem } from '../../data/opensource'

const sectionDefs = [
  {
    key: 'mergedPRs' as const,
    label: 'Merged PRs',
    badgeWord: 'Merged',
    dotColor: '#3fb950',
    badge: { background: 'rgba(46,160,67,0.18)', borderColor: 'rgba(46,160,67,0.4)', color: '#3fb950' },
  },
  {
    key: 'openPRs' as const,
    label: 'Open PRs',
    badgeWord: 'Open',
    dotColor: '#a371f7',
    badge: { background: 'rgba(140,80,200,0.18)', borderColor: 'rgba(140,80,200,0.4)', color: '#a371f7' },
  },
  {
    key: 'issues' as const,
    label: 'Issues Opened',
    badgeWord: 'Issue',
    dotColor: '#f78166',
    badge: { background: 'rgba(247,129,102,0.18)', borderColor: 'rgba(247,129,102,0.4)', color: '#f78166' },
  },
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function GithubActivity() {
  const sections = sectionDefs
    .map((def) => ({ ...def, items: activity[def.key] as ActivityItem[] }))
    .filter((s) => s.items.length > 0)

  if (sections.length === 0) {
    return <div className={styles.error}>No public activity found yet.</div>
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.subtitle}>
        All-time open-source activity · {summary.totalMergedPRs} merged PRs across{' '}
        {summary.externalRepoCount} external repos
      </p>
      {sections.map((section) => (
        <div key={section.label} className={styles.section}>
          <div className={styles.sectionLabel} style={{ color: section.dotColor }}>
            <span className={styles.dot} style={{ background: section.dotColor }} />
            {section.label}
            <span className={styles.count}>({section.items.length})</span>
          </div>
          <div className={styles.itemList}>
            {section.items.slice(0, 8).map((item, i) => (
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
                    {section.badgeWord}
                  </span>
                  <span className={styles.date}>{formatDate(item.date)}</span>
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
