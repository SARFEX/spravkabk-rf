import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// Ensure __dirname works in ESM (package.json has "type": "module")
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Separate client vs SSR build options
  build: isSsrBuild
    ? {
        target: 'es2019',
        minify: false,
        sourcemap: true,
        rollupOptions: {
          // Keep SSR bundle simple; let Vite decide externals
        },
      }
    : {
        target: 'es2015',
        minify: 'esbuild', // Быстрый минификатор для клиента
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
          output: {
            // Упрощённое разделение чанков только для клиента
            manualChunks: {
              vendor: ['react', 'react-dom'],
              ui: [
                '@radix-ui/react-slot',
                '@radix-ui/react-separator',
                'class-variance-authority',
                'clsx',
                'tailwind-merge',
              ],
              icons: ['lucide-react'],
            },
          },
        },
        chunkSizeWarningLimit: 1000,
        assetsInlineLimit: 4096,
      },
  // Help SSR by bundling certain UI libs instead of externalizing them
  ssr: {
    noExternal: [
      'lucide-react',
      /@radix-ui\//,
      'sonner',
      'embla-carousel-react',
      'recharts',
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  css: {
    devSourcemap: false,
  },
}));