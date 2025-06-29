import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'esbuild', // Вернул esbuild - он быстрее для статических сайтов
    cssMinify: true,
    sourcemap: false,
    
    rollupOptions: {
      output: {
        // Упрощенное разделение чанков
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-separator', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          icons: ['lucide-react']
        }
      }
    },
    
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  
  css: {
    devSourcemap: false,
  }
});