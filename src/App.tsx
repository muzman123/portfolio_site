import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero/Hero'
import StatsCard from './components/StatsCard/StatsCard'
import Stack from './components/Stack/Stack'
import SocialCard from './components/SocialCard/SocialCard'
import Projects from './components/Projects/Projects'
import OpenSource from './components/OpenSource/OpenSource'
import Education from './components/Education/Education'
import BlogWidget from './components/BlogWidget/BlogWidget'
import Experience from './components/Experience/Experience'

import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import Modal from './components/Modal/Modal'
import SkillsModal from './components/SkillsModal/SkillsModal'
import GithubActivity from './components/GithubActivity/GithubActivity'
import ExperienceModal from './components/ExperienceModal/ExperienceModal'
import './App.css'

type View = 'home' | 'projects'
type ActiveModal = null | 'skills' | 'github' | 'experience'

function App() {
  const [view, setView] = useState<View>(() =>
    window.location.pathname === '/projects' ? 'projects' : 'home'
  )
  const [activeModal, setActiveModal] = useState<ActiveModal>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setView(window.location.pathname === '/projects' ? 'projects' : 'home')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateToProjects = () => {
    window.history.pushState({}, '', '/projects')
    setView('projects')
  }

  const navigateToHome = () => {
    window.history.pushState({}, '', '/')
    setView('home')
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {view === 'projects' ? (
          <ProjectsPage key="projects" onBack={navigateToHome} />
        ) : (
          <div key="home" className="bentoWrapper">
            <div className="bentoGrid">
              {/* Row 1: Hero + GitHub Stats */}
              <Hero />
              <StatsCard />
              {/* Row 2: Skills + Social + Blog */}
              <Stack onOpenSkills={() => setActiveModal('skills')} />
              <SocialCard />
              <BlogWidget />
              {/* Row 3: Projects (full width) */}
              <Projects onNavigate={navigateToProjects} />
              {/* Row 4: Open Source + Education */}
              <OpenSource onOpenGithub={() => setActiveModal('github')} />
              <Education />
              {/* Row 5: Experience (full width) */}
              <Experience onOpenExperience={() => setActiveModal('experience')} />
            </div>

          </div>
        )}
      </AnimatePresence>

      <Modal
        isOpen={activeModal === 'skills'}
        onClose={() => setActiveModal(null)}
        title="Skills"
      >
        <SkillsModal />
      </Modal>

      <Modal
        isOpen={activeModal === 'github'}
        onClose={() => setActiveModal(null)}
        title="GitHub Activity"
      >
        <GithubActivity />
      </Modal>

      <Modal
        isOpen={activeModal === 'experience'}
        onClose={() => setActiveModal(null)}
        title="Experience"
      >
        <ExperienceModal />
      </Modal>
    </>
  )
}

export default App
