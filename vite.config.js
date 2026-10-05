import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Maximizes performance by stripping whitespace
    cssCodeSplit: true, // Splits CSS into small modules for faster loading
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits third-party libraries out of main code
          }
        }
      }
    }
  }
})

