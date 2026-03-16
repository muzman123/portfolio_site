import Card from '../Card/Card'
import styles from './BlogWidget.module.css'

const posts = [
  {
    title: 'Understanding AB‑MCTS for LLMs: When to Go Wider vs Go Deeper',
    date: 'Mar 2026',
    url: 'https://muzman123.github.io/blog/posts/ab-mcts-wider-vs-deeper/',
  },
  {
    title: 'Learning from Large Language Diffusion Models (LLaDA)',
    date: 'Mar 2026',
    url: 'https://muzman123.github.io/blog/posts/llada-diffusion-models/',
  },
  {
    title: 'Life 3.0 and the Path to AI Consciousness',
    date: 'Dec 28, 2025',
    url: 'https://muzman123.github.io/blog/posts/life-3.0-and-ai-consciousness/',
  },
]

function BlogWidget() {
  return (
    <Card
      bgColor="var(--card-cyan)"
      title="Blog"
      linkHref="https://muzman123.github.io/blog/"
      className={styles.blogCard}
      delay={0.28}
    >
      <p className={styles.subtitle}>Latest articles</p>
      <div className={styles.postList}>
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.postRow}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.postInfo}>
              <span className={styles.postTitle}>{post.title}</span>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default BlogWidget
