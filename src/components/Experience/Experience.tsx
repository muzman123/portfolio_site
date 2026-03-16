import Card from '../Card/Card'
import styles from './Experience.module.css'

const experienceData = [
  {
    company: 'UofC Solar Car',
    title: 'Software Engineer',
    dates: "Oct '22 – May '25",
    color: '#FF8F00',
  },
  {
    company: 'Cenovus Energy',
    title: 'SWE Intern',
    dates: "May '25 – Present",
    color: '#E53935',
  },
  {
    company: 'Thinkera',
    title: 'Full-Stack Engineer',
    dates: "Jul '25 – Present",
    color: '#6C63FF',
  },
]

interface ExperienceProps {
  onOpenExperience?: () => void
}

const Experience = ({ onOpenExperience }: ExperienceProps) => {
  return (
    <Card bgColor="var(--card-cyan)" title="Experience" className={styles.experienceCard} delay={0.42} onCardClick={onOpenExperience}>
      <p className={styles.subtitle}>Professional roles and organizations</p>
      <div className={styles.timeline}>
        {experienceData.map((exp, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.iconCircle} style={{ backgroundColor: exp.color }}>
              <span className={styles.iconLetter}>{exp.company[0]}</span>
            </div>
            <div className={styles.companyName}>{exp.company}</div>
            <div className={styles.role}>{exp.title}</div>
            <div className={styles.dates}>{exp.dates}</div>
          </div>
        ))}
        <div className={styles.timelineLine} />
      </div>
      <p className={styles.clickHint}>Click card for details</p>
    </Card>
  )
}

export default Experience
