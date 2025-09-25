import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'assets',
    rollupOptions: {
      input: {
        main: 'src/js/main.js'
      },
      output: {
        entryFileNames: 'js/bundle.js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/bundle.css'
          }
          return 'assets/[name].[ext]'
        }
      }
    }
  }
})
