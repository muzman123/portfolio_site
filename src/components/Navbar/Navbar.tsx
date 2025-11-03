import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
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
          <a href="https://medium.com/@muzammilmuhammad12" target="_blank" rel="noopener noreferrer">Blog</a>
        </li>
        <li>
          <a href="/resume.html" target="_blank">Resume</a>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar