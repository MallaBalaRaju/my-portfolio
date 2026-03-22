import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path = /my-portfolio/ to match https://mallabalaraju.github.io/my-portfolio/
  base: '/my-portfolio/',
})
