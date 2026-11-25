const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, 'portfolio/templates/**/*.html').replace(/\\/g, '/'),
    path.join(__dirname, 'portfolio/static/portfolio/js/**/*.js').replace(/\\/g, '/'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      colors: {
        bg:         '#090D11',
        card:       '#10161D',
        surface:    '#161E27',
        border:     'rgba(226, 232, 240, 0.10)',
        muted:      '#1E293B',
        'muted-fg': '#94A3B8',
        primary:    '#10B981',
        primary2:   '#38BDF8',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(148, 163, 184, 0.09) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
