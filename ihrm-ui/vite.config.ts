import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  },
  build: {
    // ... other build options
    // Recommended for enterprise apps:
    sourcemap: true, /* Enable source maps for debugging */
    minify: 'terser', /* Minify production builds */
  },
})
