import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.footerContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2024 Muhammad Muzammil.</p>
      </motion.div>
    </footer>
  )
}

export default Footer