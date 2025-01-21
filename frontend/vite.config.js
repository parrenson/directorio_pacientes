import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': resolve(__dirname, './src/*'),
      '@/utils/': resolve(__dirname, './src/utils/*'),
      '@/assets/': resolve(__dirname, './src/assets/*'),
      '@/services/': resolve(__dirname, './src/services/*'),
    },
  }
})
