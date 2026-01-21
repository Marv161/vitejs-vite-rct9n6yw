import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto asegura que el juego funcione en GitHub Pages
  base: '/vitejs-vite-rct9n6yw/',
})
