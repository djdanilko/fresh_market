import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/fresh_market/',
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
  },
});
