import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use /portfolio/ base only for GitHub Pages builds (set GH_PAGES=true)
  // Vercel and Netlify use '/' automatically
  base: process.env.GH_PAGES === 'true' ? '/portfolio/' : '/',
})
