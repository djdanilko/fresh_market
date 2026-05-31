import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
  },
});
