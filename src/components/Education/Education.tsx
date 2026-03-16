import Card from '../Card/Card'
import styles from './Education.module.css'

const Education = () => {
  const highlights = ["Dean's List '22, '23", 'AWS Competition Runner-ups', 'Solar Car Team']
  const courses = ['Data Structures', 'ML', 'Web Dev', 'OS', 'Databases', 'Software Eng']

  // Progress: 2022-2027, currently in year 4 (started Sep 2022)
  const startYear = 2022
  const endYear = 2027
  const now = new Date()
  const elapsed = now.getFullYear() + (now.getMonth() / 12) - startYear
  const total = endYear - startYear
  const progress = Math.min(Math.round((elapsed / total) * 100), 100)

  return (
    <Card bgColor="var(--card-purple)" title="Education" linkHref="https://www.ucalgary.ca/" className={styles.educationCard} delay={0.36}>
      <div className={styles.school}>University of Calgary</div>
      <div className={styles.degree}>BS Computer Science</div>
      <div className={styles.dates}>2022 – 2027</div>

      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Degree progress</span>
          <span className={styles.progressPct}>{progress}%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={styles.tags}>
        {highlights.map((h) => (
          <span key={h} className={styles.highlightTag}>{h}</span>
        ))}
      </div>

      <div className={styles.courseTags}>
        {courses.map((c) => (
          <span key={c} className={styles.courseTag}>{c}</span>
        ))}
      </div>

      <div className={styles.focusSection}>
        <span className={styles.focusLabel}>Focus areas</span>
        <div className={styles.focusTags}>
          <span className={styles.focusTag}>🧠 Machine Learning</span>
          <span className={styles.focusTag}>🎮 Game Development</span>
          <span className={styles.focusTag}>🌐 Full-Stack Web</span>
        </div>
      </div>
    </Card>
  )
}

export default Education
