import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

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
    <section className={styles.heroSection}>
      {/* Integrated Navbar */}
      <motion.nav
        className={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ul className={styles.navList}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://muzman123.github.io/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </motion.nav>
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.greeting}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello! 
          <motion.span 
            className={styles.wave}
            variants={waveVariants}
            animate="wave"
          >
            👋
          </motion.span>
        </motion.h1>
        
        <motion.h2
          className={styles.name}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          I'm Muhammad Muzammil.
        </motion.h2>
        
        <motion.h2
          className={styles.intro}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <br />CS Major @ UofC, <br />Aspiring Software Developer, <br />Hobbyist Game Dev, <br />...
        </motion.h2>
      </div>

      <motion.div 
        className={styles.contactsList}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a 
          href="https://www.linkedin.com/in/muhammad-muzammil-745412185/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/logos/contacts-logo/linkedin.png" alt="LinkedIn" />
        </motion.a>
        <motion.a 
          href="https://github.com/muzman123"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/logos/contacts-logo/github.png" alt="GitHub" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero