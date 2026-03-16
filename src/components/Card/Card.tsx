import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import styles from './Card.module.css'

interface CardProps {
  bgColor: string
  title?: string
  linkHref?: string
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  delay?: number
  onCardClick?: () => void
}

function Card({ bgColor, title, linkHref, className, children, style, delay = 0, onCardClick }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    rotateX.set(-y * 4)
    rotateY.set(x * 4)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${className || ''}`}
      style={{
        backgroundColor: bgColor,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d' as const,
        cursor: onCardClick ? 'pointer' : undefined,
        ...style,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
    >
      {(title || linkHref) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {linkHref && (
            <a href={linkHref} target="_blank" rel="noopener noreferrer" className={styles.arrowLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>
      )}
      {children}
    </motion.div>
  )
}

export default Card
