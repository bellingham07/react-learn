import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  externals: {
    "react-native": true,
  },
  optimizeDeps: {
    exclude: ['react-native'],
  },
})
