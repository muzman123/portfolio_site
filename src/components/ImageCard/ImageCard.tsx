import { motion } from 'framer-motion'
import styles from './ImageCard.module.css'

interface ImageCardProps {
  src: string
  alt: string
  gridColumn: string
  gridRow?: string
}

function ImageCard({ src, alt, gridColumn, gridRow }: ImageCardProps) {
  return (
    <motion.div
      className={styles.imageCard}
      style={{ gridColumn, gridRow }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </motion.div>
  )
}

export default ImageCard
