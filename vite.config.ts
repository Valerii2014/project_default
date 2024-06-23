import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
// import { createHtmlPlugin } from 'vite-plugin-html'
// import olo from './olo.html'
// import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  // plugins: [splitVendorChunkPlugin()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    // sourcemap: true,
    chunkSizeWarningLimit: 5000,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
      // input: {
      //   ugGames: resolve(__dirname, 'index.html'),
      //   vacantion: resolve(__dirname, 'vacantion.html'),
      //   vacantionPage: resolve(__dirname, 'vacantionPage.html'),
      // }
    }
  },
  base: './',
  assetsInclude: ['**/*.gltf'],
  // public: ['**/*.gltf']
})
