/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'stripe-bg': '#ffffff',
        'stripe-surface': '#f8fafc',
        'stripe-card': '#ffffff',
        'stripe-border': '#e2e8f0',
        'stripe-pink': '#ff0080',
        'stripe-pink-light': '#ff66b3',
        'stripe-blue': '#0066ff',
        'stripe-blue-light': '#4d9aff',
        'accent': '#0066ff',
        'accent-hover': '#0052cc',
        'accent-light': '#4d9aff',
        'text-primary': '#1a202c',
        'text-secondary': '#4a5568',
        'text-muted': '#718096',
        'text-subtle': '#a0aec0'
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
