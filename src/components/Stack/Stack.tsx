import Card from '../Card/Card'
import styles from './Stack.module.css'

const row1 = [
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'TypeScript', logo: '/logos/typescript.png' },
  { name: 'C++', logo: '/logos/cpp.png' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'C#', logo: '/logos/csharp.png' },
  { name: 'React', logo: '/logos/react.png' },
  { name: 'Next.js', logo: '/logos/nextjs.png' },
]

const row2 = [
  { name: 'Node.js', logo: '/logos/nodejs.png' },
  { name: 'PyTorch', logo: '/logos/pytorch.svg' },
  { name: 'Unity', logo: '/logos/unity.png' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
  { name: 'MongoDB', logo: '/logos/mongodb.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'Tailwind', logo: '/logos/tailwind.png' },
  { name: 'Python', logo: '/logos/python.png' },
]

const row3 = [
  { name: 'React', logo: '/logos/react.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'TypeScript', logo: '/logos/typescript.png' },
  { name: 'MongoDB', logo: '/logos/mongodb.png' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'Next.js', logo: '/logos/nextjs.png' },
  { name: 'C++', logo: '/logos/cpp.png' },
  { name: 'Unity', logo: '/logos/unity.png' },
]

interface StackProps {
  onOpenSkills?: () => void
}

const Stack = ({ onOpenSkills }: StackProps) => {
  const doubled1 = [...row1, ...row1]
  const doubled2 = [...row2, ...row2]
  const doubled3 = [...row3, ...row3]

  return (
    <Card bgColor="var(--card-green)" title="Skills" className={styles.skillsCard} delay={0.12} onCardClick={onOpenSkills}>
      <p className={styles.subtitle}>What I work with and know well</p>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {doubled1.map((skill, i) => (
            <div key={`r1-${skill.name}-${i}`} className={styles.skillPill}>
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
          {doubled2.map((skill, i) => (
            <div key={`r2-${skill.name}-${i}`} className={styles.skillPill}>
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack} style={{ animationDuration: '22s' }}>
          {doubled3.map((skill, i) => (
            <div key={`r3-${skill.name}-${i}`} className={styles.skillPill}>
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.clickHint}>Click card to view all skills</p>
    </Card>
  )
}

export default Stack
