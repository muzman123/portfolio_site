import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Experience.module.css'

const experienceData = [
  {
    company: 'Cenovus',
    title: 'Software Engineer Student',
    dates: 'May 2025 - Present',
    bullets: [
      'Modernized plant HMI (Human-Machine Interface) screens using HTML and VB scripting to improve operational efficiency and user experience for process control operators',
      'Developed automation solution for tag and point data management for over 13 sites in Lloyd, Cogent DataHub middleware, and corporate databases/PSI systems, eliminating manual import/export processes and saving 100s of hours of labor and around $40k over multi-year projections',
      'Enhanced legacy industrial control systems by redesigning interface workflows and implementing automated data pipelines to streamline plant-to-corporate information transfer',
    ],
  },
  {
    company: 'Thinkera',
    title: 'Full-Stack Engineer',
    dates: 'July 2025 - Present',
    bullets: [
      'Designed end-to-end FastAPI based intelligence platform for teams and individuals with agentic architecture',
      'Architected parallel research orchestration system conducting multiple simultaneous API queries',
      'Implemented comprehensive relational database schema with proper foreign key relationships',
    ],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className={styles.experienceSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      
      <motion.div 
        className={styles.experienceContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            className={styles.experienceCard}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
          >
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.companyTitle}>{exp.company}</h3>
                <h4 className={styles.jobTitle}>{exp.title}</h4>
              </div>
              <span className={styles.experienceDates}>{exp.dates}</span>
            </div>
            <ul className={styles.experienceBullets}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience