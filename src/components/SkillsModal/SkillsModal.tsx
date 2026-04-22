import styles from './SkillsModal.module.css'

const categories = [
  {
    label: 'Languages',
    accent: 'rgba(60, 180, 120, 0.2)',
    accentBorder: 'rgba(60, 180, 120, 0.4)',
    accentColor: '#3cb478',
    skills: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'TypeScript', logo: '/logos/typescript.png' },
      { name: 'JavaScript', logo: '/logos/javascript.png' },
      { name: 'C++', logo: '/logos/cpp.png' },
      { name: 'Java', logo: '/logos/java.png' },
      { name: 'C#', logo: '/logos/csharp.png' },
    ],
  },
  {
    label: 'Frameworks',
    accent: 'rgba(60, 120, 200, 0.2)',
    accentBorder: 'rgba(60, 120, 200, 0.4)',
    accentColor: '#3c78c8',
    skills: [
      { name: 'React', logo: '/logos/react.png' },
      { name: 'Next.js', logo: '/logos/nextjs.png' },
      { name: 'Node.js', logo: '/logos/nodejs.png' },
      { name: 'PyTorch', logo: '/logos/pytorch.svg' },
      { name: 'Tailwind', logo: '/logos/tailwind.png' },
    ],
  },
  {
    label: 'Tools',
    accent: 'rgba(200, 120, 50, 0.2)',
    accentBorder: 'rgba(200, 120, 50, 0.4)',
    accentColor: '#c87832',
    skills: [
      { name: 'Git', logo: '/logos/git.png' },
      { name: 'Unity', logo: '/logos/unity.png' },
    ],
  },
  {
    label: 'Databases',
    accent: 'rgba(50, 180, 160, 0.2)',
    accentBorder: 'rgba(50, 180, 160, 0.4)',
    accentColor: '#32b4a0',
    skills: [
      { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
      { name: 'MongoDB', logo: '/logos/mongodb.png' },
    ],
  },
]

function SkillsModal() {
  return (
    <div className={styles.wrapper}>
      {categories.map((cat) => (
        <div key={cat.label} className={styles.category}>
          <div className={styles.categoryLabel} style={{ color: cat.accentColor }}>
            {cat.label}
          </div>
          <div className={styles.skillGrid}>
            {cat.skills.map((skill) => (
              <div
                key={skill.name}
                className={styles.skillPill}
                style={{
                  background: cat.accent,
                  borderColor: cat.accentBorder,
                }}
              >
                <img src={skill.logo} alt={skill.name} className={styles.logo} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsModal
