# Muhammad Muzammil's Portfolio - React Version

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. This is an upgraded version of the original HTML/CSS portfolio with enhanced animations, better performance, and improved user experience.

## ✨ Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Smooth Animations**: Framer Motion for elegant scroll-triggered animations and micro-interactions
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Scroll Progress Indicator**: Visual feedback showing page scroll progress
- **Glassmorphism Effects**: Modern UI with backdrop blur and translucent cards
- **Optimized Performance**: Code splitting and lazy loading for fast page loads
- **CSS Modules**: Scoped styling to prevent conflicts and improve maintainability

## 🎨 Design Enhancements

### Visual Improvements
- Gradient text effects on headings
- Enhanced hover states with lift and scale effects
- Glassmorphism cards with backdrop blur
- Smooth scroll-triggered animations
- Interactive tech stack cards
- Modern color gradients and shadows

### User Experience
- Animated wave emoji greeting
- Smooth scroll behavior
- Staggered content animations
- Interactive project cards
- Enhanced navigation with underline effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy.

To preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Animation library
- **CSS Modules**: Scoped styling

## 📁 Project Structure

```
portfolio-react/
├── public/              # Static assets
│   ├── fonts/          # Custom fonts (LilGrotesk)
│   ├── images/         # Project images
│   └── logos/          # Tech stack and social logos
├── src/
│   ├── components/     # React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Stack/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   └── Footer/
│   ├── App.tsx         # Main App component
│   ├── App.css         # App-level styles
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── vite.config.ts      # Vite config
```

## 🎯 Key Components

### Navbar
- Responsive navigation with smooth hover effects
- Animated entrance on page load

### Hero Section
- Split-background design (white/teal gradient)
- Animated greeting with waving emoji
- Gradient text effect on name
- Social media links with hover animations

### About Section
- Glassmorphism card design
- Scroll-triggered fade-in animation
- Hover lift effect

### Stack Section
- Color-coded technology categories
- Staggered entrance animations
- Interactive hover states for each item
- Technology logos with names

### Experience Section
- Timeline-style cards with left border accent
- Company name with gradient text
- Expandable details on hover
- Date badges

### Projects Section
- Featured project cards with images
- Tech stack tags
- External links and GitHub repos
- Image zoom on hover

### Footer
- Gradient background
- Copyright information
- Smooth entrance animation

## 🎨 Color Palette

```css
--primary-color: #243342    /* Dark blue-gray */
--accent-color: #FF3D00     /* Orange-red */
--teal-color: #78b2c0       /* Teal */
--light-green: #e2f0cb      /* Light green */
--orange: #ff9900           /* Orange */
--green: #66cc33            /* Green */
--yellow: #ffcc00           /* Yellow */
```

## 🔄 Upgrading from Original

This React version includes several improvements over the original HTML/CSS portfolio:

1. **Better Performance**: Component-based architecture with code splitting
2. **Enhanced Animations**: Framer Motion for smooth, GPU-accelerated animations
3. **Improved Maintainability**: TypeScript and CSS Modules for better code organization
4. **Better UX**: Scroll progress indicator, smooth scrolling, and micro-interactions
5. **Modern Build System**: Vite for faster development and optimized production builds

## 📝 Customization

### Updating Content

1. **Personal Information**: Edit `src/components/Hero/Hero.tsx`
2. **About Section**: Modify `src/components/About/About.tsx`
3. **Tech Stack**: Update arrays in `src/components/Stack/Stack.tsx`
4. **Experience**: Edit `experienceData` in `src/components/Experience/Experience.tsx`
5. **Projects**: Modify `projectsData` in `src/components/Projects/Projects.tsx`

### Styling

Each component has its own CSS Module file (e.g., `ComponentName.module.css`). Global styles are in `src/index.css`.

### Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #243342;
  --accent-color: #FF3D00;
  /* ... other colors */
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for continuous deployment

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
```json
"deploy": "vite build && gh-pages -d dist"
```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Muzammil**
- GitHub: [@muzman123](https://github.com/muzman123)
- LinkedIn: [Muhammad Muzammil](https://www.linkedin.com/in/muhammad-muzammil-745412185/)
- Medium: [@muzammilmuhammad12](https://medium.com/@muzammilmuhammad12)

---

Made with ❤️ using React and Framer Motion