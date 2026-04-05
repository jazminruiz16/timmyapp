import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        
        about: resolve(__dirname, 'src/about.html'),
        thanks: resolve(__dirname, 'src/thanks.html'),
        reportListing: resolve(__dirname, 'src/report_listing/reports.html'),
      },
    },
  },
});