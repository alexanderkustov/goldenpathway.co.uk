import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src/pages'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        privacy: resolve(__dirname, 'src/pages/privacy.html'),
        terms: resolve(__dirname, 'src/pages/terms.html'),
        cookies: resolve(__dirname, 'src/pages/cookies.html'),
        complaints: resolve(__dirname, 'src/pages/complaints.html'),
        accessibility: resolve(__dirname, 'src/pages/accessibility.html'),
      },
    },
  },
  server: {
    open: '/index.html',
  },
});
