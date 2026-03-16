import styles from './ExperienceModal.module.css'

const experiences = [
  {
    company: 'UofC Solar Car',
    color: '#FF8F00',
    title: 'Software Engineer',
    dates: 'Oct 2022 – May 2025',
    location: 'Calgary',
    description:
      'Developed 3,000+ lines of C++ and QML for a real-time telemetry dashboard displaying 20+ vehicle metrics with sub-100ms latency. Implemented a CAN bus data parser processing 1k+ messages/sec for live driver feedback during 1000km+ races.',
    tags: ['C++', 'QML', 'Qt', 'CAN Bus', 'Linux', 'Jira'],
  },
  {
    company: 'Cenovus Energy',
    color: '#E53935',
    title: 'Software Engineering Intern',
    dates: 'May 2025 – Present',
    location: 'Calgary',
    description:
      'Automated sensor data processing with Python and PowerShell, eliminating 200+ hours of quarterly manual work and saving $40k annually. Diagnosed critical PLC communication failures using Wireshark, restoring 99%+ uptime across 50+ field devices.',
    tags: ['Python', 'PowerShell', 'SQL', 'PowerBI', 'Wireshark', 'OPC UA'],
  },
  {
    company: 'Thinkera',
    color: '#6C63FF',
    title: 'Full-Stack Engineer',
    dates: 'Jul 2025 – Present',
    location: 'Calgary',
    description:
      'Designed an end-to-end FastAPI-based intelligence platform with agentic architecture and multi-agent orchestration. Architected parallel research system with RAG pipelines and vector search using PostgreSQL and Supabase.',
    tags: ['FastAPI', 'PostgreSQL', 'Supabase', 'RAG', 'LangChain', 'Python'],
  },
]

function ExperienceModal() {
  return (
    <div className={styles.list}>
      <p className={styles.subtitle}>Professional roles and organizations</p>
      {experiences.map((exp, i) => (
        <div key={i} className={styles.entry}>
          <div className={styles.entryHeader}>
            <div className={styles.logoCircle} style={{ backgroundColor: exp.color }}>
              <span className={styles.logoLetter}>{exp.company[0]}</span>
            </div>
            <div className={styles.companyInfo}>
              <span className={styles.companyName}>{exp.company}</span>
            </div>
          </div>

          <h3 className={styles.jobTitle}>{exp.title}</h3>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {exp.dates}
            </span>
            <span className={styles.metaItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" /></svg>
              {exp.location}
            </span>
          </div>

          <p className={styles.description}>{exp.description}</p>

          <div className={styles.tags}>
            {exp.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceModal
