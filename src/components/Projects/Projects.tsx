import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Projects.module.css'

const projectsData = [
  {
    title: 'Last Stop',
    description: 'Developed in a week for a game jam, Last Stop is a Unity3D horror game inspired by ps2 low-poly horror. Rated positively with over 6000 downloads',
    tags: ['UNITY3D', 'C#', 'BLENDER3D', 'GLSL'],
    image: '/images/pic10.png',
    link: 'https://muzmil.itch.io/last-stop',
    github: 'https://github.com/muzman123/last_stop_unity3D',
  },
  {
    title: 'Note to Self',
    description: 'Note to Self is a PSX style indie horror game made for a 10 day game jam. Rated positively with over 200 downloads',
    tags: ['UNITY3D', 'C#', 'BLENDER3D'],
    image: '/images/pic09.png',
    link: 'https://muzmil.itch.io/note-to-self',
    github: null,
  },
  {
    title: 'RateXpose',
    description: 'Started off as a hackathon idea. Currently developing and rebranding a platform that allows users to anonymously share and compare costs for services like auto and home insurance and utility bills.',
    tags: ['NEXTJS', 'TYPESCRIPT', 'SUPABASE', 'HTML', 'CSS', 'VERCEL'],
    image: '/images/ratexpose.png',
    link: 'https://www.ratexpose.ca/',
    github: 'https://github.com/muzman123/rateXpose',
  },
  {
    title: 'Double-top Stock Signaller',
    description: 'Professional stock market scanner that detects bearish reversal patterns (double tops) across 250+ stocks with email alerts',
    tags: ['PYTHON', 'PANDAS', 'NUMPY'],
    image: '/images/dashcam.png',
    link: null,
    github: 'https://github.com/muzman123/double_top_scanner',
  },
  {
    title: 'Globe News',
    description: 'A web application that combines 3D visualization with real-time news aggregation webscraped off Google news. It offers users an engaging way to explore global news by interacting with a 3D model of Earth.',
    tags: ['REACT', 'JAVASCRIPT', 'THREEJS', 'HTML', 'CSS'],
    image: '/images/functionalgif.gif',
    link: null,
    github: 'https://github.com/muzman123/globenews',
  },
  
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className={styles.projectCard}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              
              {project.link && (
                <a 
                  href={project.link} 
                  className={styles.projectButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it in Action
                </a>
              )}
              
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectTags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              {project.github && (
                <div className={styles.projectIcons}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img 
                      src="/logos/git.png" 
                      alt="GitHub"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              )}
            </div>
            
            <div className={styles.projectImages}>
              <motion.img 
                src={project.image} 
                alt={`${project.title} Screenshot`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects