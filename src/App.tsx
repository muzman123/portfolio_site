import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Stack from './components/Stack/Stack'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      
      <Hero />
      <About />
      <Education />
      <Stack />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App