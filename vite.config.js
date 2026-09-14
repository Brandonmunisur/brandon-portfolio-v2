import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
 base: '/brandon-portfolio-v2/',
  server: {
    open: true,
  },
})
