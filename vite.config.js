import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration for deployment
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Portfolio/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
