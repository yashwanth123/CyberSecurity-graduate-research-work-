import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: set BASE_PATH=/Your-Repo-Name/ in CI or use default for local dev
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173, host: true },
})
