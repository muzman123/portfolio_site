import Card from '../Card/Card'
import styles from './SocialCard.module.css'

const links = [
  {
    name: 'GitHub',
    handle: '@muzman123',
    href: 'https://github.com/muzman123',
    icon: '/logos/contacts-logo/github.png',
    accent: 'rgba(255,255,255,0.1)',
  },
  {
    name: 'LinkedIn',
    handle: '@mmuzamm',
    href: 'https://www.linkedin.com/in/mmuzamm/',
    icon: '/logos/contacts-logo/linkedin.png',
    accent: 'rgba(0, 119, 181, 0.2)',
  },
  {
    name: 'Blog',
    handle: 'muzman123.github.io/blog',
    href: 'https://muzman123.github.io/blog/',
    emoji: '✍',
    accent: 'rgba(255, 107, 53, 0.2)',
  },
  {
    name: 'Resume',
    handle: 'View PDF',
    href: '/resume.html',
    emoji: '📄',
    accent: 'rgba(108, 99, 255, 0.2)',
  },
]

function SocialCard() {
  return (
    <Card bgColor="var(--card-blue)" className={styles.socialCard} delay={0.18}>
      <div className={styles.grid}>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkChip}
            style={{ background: l.accent }}
          >
            <div className={styles.iconWrap}>
              {l.icon ? (
                <img src={l.icon} alt={l.name} className={styles.iconImg} />
              ) : (
                <span className={styles.emoji}>{l.emoji}</span>
              )}
            </div>
            <div className={styles.info}>
              <span className={styles.linkName}>{l.name}</span>
              <span className={styles.handle}>{l.handle}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default SocialCard
