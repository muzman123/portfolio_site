export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  link?: string
}

export const projectsData: Project[] = [
  {
    title: 'Music Cluster Visualization',
    description: 'An interactive web application that visualizes music clustering using a deep learning model with 90%+ accuracy',
    tags: ['Python', 'PyTorch', 'Vite', 'ML'],
    image: '/images/mujica.gif',
    github: 'https://github.com/muzman123/music_cluster_visualization/tree/main',
  },
  {
    title: 'Double-top Stock Signaller',
    description: 'Professional stock market scanner that detects bearish reversal patterns across 250+ stocks with email alerts',
    tags: ['Python', 'Pandas', 'Numpy'],
    image: '/images/dashcam.png',
    github: 'https://github.com/muzman123/double_top_scanner',
  },
  {
    title: 'RateXpose',
    description: 'A platform that allows users to anonymously share and compare costs for services like auto/home insurance and utility bills.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    image: '/images/ratexpose.png',
    link: 'https://www.ratexpose.ca/',
    github: 'https://github.com/muzman123/rateXpose',
  },
  {
    title: 'Note to Self',
    description: 'PSX style indie horror game made for a 10 day game jam. Rated positively with over 200 downloads',
    tags: ['Unity3D', 'C#', 'Blender'],
    image: '/images/pic09.png',
    link: 'https://muzmil.itch.io/note-to-self',
  },
  {
    title: 'Last Stop',
    description: 'Unity3D horror game inspired by ps2 low-poly horror. Rated positively with over 6000 downloads',
    tags: ['Unity3D', 'C#', 'GLSL'],
    image: '/images/pic10.png',
    link: 'https://muzmil.itch.io/last-stop',
    github: 'https://github.com/muzman123/last_stop_unity3D',
  },
  {
    title: 'Globe News',
    description: '3D visualization with real-time news aggregation. Explore global news by interacting with a 3D Earth model.',
    tags: ['React', 'Three.js', 'JavaScript'],
    image: '/images/functionalgif.gif',
    github: 'https://github.com/muzman123/globenews',
  },
]
