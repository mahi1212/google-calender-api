import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // run vite server in localhost:3000 like: http://localhost:3000
  server: {
    host: process.env.VITE_DEV_SERVER_URL,
    port: 3000
  }


})
