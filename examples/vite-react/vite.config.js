import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Help with ESM imports
      'ctt-design-system/react': new URL('../../dist/react/index.esm.js', import.meta.url).pathname,
      'ctt-design-system/css': new URL('../../dist/styles.css', import.meta.url).pathname,
    }
  },
  optimizeDeps: {
    include: ['ctt-design-system/react']
  }
})