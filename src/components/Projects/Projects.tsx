import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '../Card/Card'
import styles from './Projects.module.css'
import { projectsData } from '../../data/projects'

interface ProjectsProps {
  onNavigate?: () => void
}

const Projects = ({ onNavigate }: ProjectsProps) => {
  const [current, setCurrent] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c === 0 ? projectsData.length - 2 : c - 2))
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c + 2 >= projectsData.length ? 0 : c + 2))
  }

  const visible = projectsData.slice(current, current + 2)
  const displayProjects = visible.length < 2
    ? [...visible, ...projectsData.slice(0, 2 - visible.length)]
    : visible

  return (
    <Card bgColor="var(--card-orange)" title="Projects" linkHref="https://github.com/muzman123" className={styles.projectsCard} delay={0.24} onCardClick={onNavigate}>
      <div className={styles.carousel}>
        <button className={styles.arrowBtn} onClick={prev} aria-label="Previous projects">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.projectsRow}>
          <AnimatePresence mode="wait">
            {displayProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className={styles.projectSlide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.link || project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.slideLink}
                >
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectOverlay}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <div className={styles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button className={styles.arrowBtn} onClick={next} aria-label="Next projects">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      {onNavigate && (
        <p className={styles.clickHint}>Click card to see all projects</p>
      )}
    </Card>
  )
}

export default Projects
