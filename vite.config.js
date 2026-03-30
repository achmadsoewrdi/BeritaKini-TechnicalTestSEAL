import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://berita-indo-api-next.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})