import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className={styles.aboutContent}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          I'm a Computer Science student at the University of Calgary with a passion for creating engaging software experiences. My interests span from full-stack web development to game development, where I enjoy bringing creative ideas to life through code.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies, working on game projects, or diving into the latest developments in software engineering. I believe in writing clean, maintainable code and continuously learning to improve my craft.
        </p>
      </motion.div>
    </section>
  )
}

export default About