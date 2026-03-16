import Card from '../Card/Card'
import styles from './BrandCard.module.css'

function BrandCard() {
  return (
    <Card bgColor="var(--card-white)" className={styles.brandCard} delay={0.4}>
      <div className={styles.content}>
        <span className={styles.initials}>MM</span>
        <span className={styles.tagline}>Software Developer</span>
      </div>
    </Card>
  )
}

export default BrandCard
