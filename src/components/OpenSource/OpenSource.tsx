import Card from '../Card/Card'
import styles from './OpenSource.module.css'

const contributions = [
  {
    repo: 'wasp-lang/wasp',
    stars: '18.2k',
    desc: 'Full-stack framework for the AI era',
    url: 'https://github.com/wasp-lang/wasp/pulls?q=author%3Amuzman123',
  },
  {
    repo: 'Agenta-AI/agenta',
    stars: '3.9k',
    desc: 'Open-source LLMOps platform',
    url: 'https://github.com/Agenta-AI/agenta/pulls?q=author%3Amuzman123',
  },
  {
    repo: 'stacklok/toolhive',
    stars: '1.7k',
    desc: 'MCP server deployment tool',
    url: 'https://github.com/stacklok/toolhive/pulls?q=author%3Amuzman123',
  },
]

interface OpenSourceProps {
  onOpenGithub?: () => void
}

function OpenSource({ onOpenGithub }: OpenSourceProps) {
  return (
    <Card bgColor="var(--card-purple)" title="Open Source" linkHref="https://github.com/muzman123" className={styles.osCard} delay={0.3} onCardClick={onOpenGithub}>
      <div className={styles.repoList}>
        {contributions.map((c) => (
          <a
            key={c.repo}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoRow}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.repoInfo}>
              <span className={styles.repoName}>{c.repo}</span>
              <span className={styles.repoDesc}>{c.desc}</span>
            </div>
            <div className={styles.repoMeta}>
              <span className={styles.stars}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {c.stars}
              </span>
              <span className={styles.mergedBadge}>Merged</span>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.badge}>
        <span className={styles.badgeIcon}>🦈</span>
        <span className={styles.badgeText}>Pull Shark x2</span>
      </div>
      <p className={styles.clickHint}>Click card for live GitHub activity</p>
    </Card>
  )
}

export default OpenSource
