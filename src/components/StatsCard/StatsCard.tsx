import Card from '../Card/Card'
import styles from './StatsCard.module.css'

function StatsCard() {
  return (
    <Card
      bgColor="var(--card-dark)"
      linkHref="https://github.com/muzman123"
      className={styles.statsCard}
      delay={0.06}
    >
      <p className={styles.label}>GitHub Contributions</p>
      <img
        className={styles.ghChart}
        src="https://ghchart.rshah.org/6e40c9/muzman123"
        alt="GitHub contributions"
      />
    </Card>
  )
}

export default StatsCard
