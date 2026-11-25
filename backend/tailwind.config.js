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
        bg:         'hsl(225 35% 6%)',
        card:       'hsl(225 30% 10%)',
        border:     'hsl(225 25% 18%)',
        muted:      'hsl(225 25% 22%)',
        'muted-fg': 'hsl(225 15% 70%)',
        primary:    'hsl(190 90% 55%)',
        primary2:   'hsl(260 90% 65%)',
        primary3:   'hsl(320 90% 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(hsla(225, 35%, 85%, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
