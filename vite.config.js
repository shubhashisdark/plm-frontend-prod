import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for better HMR
      fastRefresh: true,
    }),
    tailwindcss()
  ],
  server: {
    // Better file watching for Windows
    watch: {
      usePolling: true,  // Required for Windows file system
      interval: 100,     // Check for changes every 100ms
    },
    hmr: {
      overlay: true,     // Show error overlay if hot reload fails
      // Force full page refresh every time (fixes caching issues)
      clientPort: 5173,  // Explicit port helps with HMR reliability
    },
    // Cache busting for better development
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Force re-bundling on changes
    force: false,
  },
  // Disable build-time caching for faster refreshes
  build: {
    sourcemap: true,     // Better debugging
    minify: false,       // Skip minification in dev for speed
  },
  // ESBuild configuration for faster builds
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
