import { motion } from 'framer-motion'
import Card from '../Card/Card'
import styles from './Hero.module.css'

const Hero = () => {
  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  }

  return (
    <Card bgColor="var(--card-yellow)" title="About Me" className={styles.heroCard} delay={0}>
      <div className={styles.heroContent}>
        <div className={styles.textSide}>
          <p className={styles.intro}>
            I'm a CS major at UofC, passionate about building software and solving real problems.
          </p>
          <p className={styles.intro}>
            Aspiring Software Developer, Hobbyist Game Dev.
          </p>
          <div className={styles.nameRow}>
            <span className={styles.nameTypewriter}>Muhammad Muzammil</span>
            <motion.span
              className={styles.wave}
              variants={waveVariants}
              animate="wave"
            >
              👋
            </motion.span>
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <img src="/images/profile.jpg" alt="Muhammad Muzammil" className={styles.avatar} />
        </div>
      </div>
    </Card>
  )
}

export default Hero
