import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          format: {
            comments: false,
          },
        }),
      ],
    },
  },
  server: {
    port: 3000,
    open: false,
    strictPort: true,
    cors: true,
  },
});
