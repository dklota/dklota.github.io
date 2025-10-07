# Divleen Lota - Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring a professional dark theme and comprehensive showcase of skills, experience, and projects.

## 🚀 Features

- **Modern Dark Theme**: Professional dark mode design with gradient accents
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for search engines
- **Performance Focused**: Optimized loading and smooth scrolling
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Emoji-based icons for cross-platform compatibility
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   └── Footer.js          # Footer with links and contact info
├── sections/
│   ├── Hero.js            # Landing section with introduction
│   ├── About.js           # About section with education and skills
│   ├── Experience.js      # Work experience and internships
│   ├── Projects.js        # Featured projects showcase
│   ├── Skills.js          # Technical skills and certifications
│   └── Contact.js         # Contact form and information
├── App.js                 # Main application component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm install --save-dev gh-pages
   npm run build
   npm run deploy
   ```

## 🎨 Customization

### Colors and Theme

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  'dark-bg': '#0a0a0a',           // Main background
  'dark-surface': '#1a1a1a',      // Card backgrounds
  'dark-card': '#2a2a2a',         // Elevated surfaces
  'accent-blue': '#3b82f6',       // Primary accent
  'accent-purple': '#8b5cf6',     // Secondary accent
  'text-primary': '#ffffff',      // Primary text
  'text-secondary': '#a1a1aa',    // Secondary text
  'text-muted': '#71717a'         // Muted text
}
```

### Content Updates

1. **Personal Information**: Update contact details in `src/sections/About.js` and `src/sections/Contact.js`
2. **Experience**: Modify work experience in `src/sections/Experience.js`
3. **Projects**: Update project information in `src/sections/Projects.js`
4. **Skills**: Adjust skills and certifications in `src/sections/Skills.js`

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add to `src/App.js`
3. Add navigation link to `src/components/Header.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimizations

- **Lazy Loading**: Components load as needed
- **Optimized Images**: WebP format with fallbacks
- **Minimal Bundle**: Tree-shaking and code splitting
- **Smooth Scrolling**: CSS-based smooth scroll behavior
- **Efficient Animations**: CSS transforms and transitions

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

**Divleen Lota**
- Email: divleen2@gmail.com
- Phone: (669) 243-5546
- LinkedIn: [divleen-lota](https://www.linkedin.com/in/divleen-lota/)
- Location: Milpitas, CA

---

Built with ❤️ using React and Tailwind CSS
