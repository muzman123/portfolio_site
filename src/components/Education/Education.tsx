import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Education.module.css'

const educationData = [
  {
    school: 'University of Calgary',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Calgary, AB',
    dates: '2022 - 2027 (Expected)',
    highlights: [
      'Dean\'s List (2022, 2023)',
      'AWS Keyera Technical Case Competition: Runner Ups',
      'Software Dev at UofC Solar Car Team'
    ],
    courses: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Management',
      'Machine Learning',
      'Web Development',
      'Operating Systems',
      'Natural Language Programming'
    ]
  }
]

const Education = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className={styles.educationSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      
      <motion.div 
        className={styles.educationContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className={styles.educationCard}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
          >
            <div className={styles.educationHeader}>
              <div className={styles.schoolInfo}>
                <h3 className={styles.schoolName}>{edu.school}</h3>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.location}>📍 {edu.location}</p>
              </div>
              <div className={styles.eduMeta}>
                <span className={styles.dates}>{edu.dates}</span>
              </div>
            </div>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className={styles.highlights}>
                <h5>Achievements</h5>
                <ul>
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>🏆 {highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {edu.courses && edu.courses.length > 0 && (
              <div className={styles.courses}>
                <h5>Relevant Coursework</h5>
                <div className={styles.courseGrid}>
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className={styles.courseTag}>{course}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education