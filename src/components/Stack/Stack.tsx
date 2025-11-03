import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Stack.module.css'

const stackData = {
  technologies: [
    { name: 'JavaScript', logo: '/logos/javascript.png' },
    { name: 'TypeScript', logo: '/logos/typescript.png' },
    { name: 'HTML', logo: '/logos/html.png' },
    { name: 'CSS', logo: '/logos/css.png' },
    { name: 'Node.js', logo: '/logos/nodejs.png' },
    { name: 'C++', logo: '/logos/cpp.png' },
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'C#', logo: '/logos/csharp.png' },
    { name: 'SQL', logo: '/logos/sql.png' },
  ],
  frameworks: [
    { name: 'React', logo: '/logos/react.png' },
    { name: 'Vue.js', logo: '/logos/vuejs.png' },
    { name: 'Next.js', logo: '/logos/nextjs.png' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.png' },
    { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
    { name: 'Flutter', logo: '/logos/flutter.png' },
  ],
  tools: [
    { name: 'Git', logo: '/logos/git.png' },
    { name: 'Qt', logo: '/logos/qt.png' },
    { name: 'Unity', logo: '/logos/unity.png' },
    { name: 'Unreal Engine', logo: '/logos/unreal-engine.png' },
    { name: 'Blender', logo: '/logos/blender.png' },
    { name: 'Figma', logo: '/logos/figma.png' },
    { name: 'Microsoft Office', logo: '/logos/microsoft.png' },
    { name: 'Tableau', logo: '/logos/tableau.png' },
    { name: 'Eclipse', logo: '/logos/eclipse.png' },
  ],
  databases: [
    { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'MySQL', logo: '/logos/mysql.png' },
  ],
}

const Stack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="my-stack" className={styles.stackSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Stack
      </motion.h2>
      
      <motion.div 
        className={styles.stackContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className={`${styles.stackColumn} ${styles.orange}`}
          variants={itemVariants}
        >
          <h3>Technologies</h3>
          <ul>
            {stackData.technologies.map((tech) => (
              <li key={tech.name}>
                <img src={tech.logo} alt={`${tech.name} Logo`} className={styles.stackLogo} />
                {tech.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className={`${styles.stackColumn} ${styles.green}`}
          variants={itemVariants}
        >
          <h3>Frameworks</h3>
          <ul>
            {stackData.frameworks.map((framework) => (
              <li key={framework.name}>
                <img src={framework.logo} alt={`${framework.name} Logo`} className={styles.stackLogo} />
                {framework.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className={`${styles.stackColumn} ${styles.yellow}`}
          variants={itemVariants}
        >
          <h3>Tools</h3>
          <ul>
            {stackData.tools.map((tool) => (
              <li key={tool.name}>
                <img src={tool.logo} alt={`${tool.name} Logo`} className={styles.stackLogo} />
                {tool.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className={`${styles.stackColumn} ${styles.green}`}
          variants={itemVariants}
        >
          <h3>Database</h3>
          <ul>
            {stackData.databases.map((db) => (
              <li key={db.name}>
                <img src={db.logo} alt={`${db.name} Logo`} className={styles.stackLogo} />
                {db.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Stack