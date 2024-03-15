import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath,URL} from 'node:url'
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api-file': {
        target: 'http://file-hosting.ru-do',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-file/, ''),
      },
    },
  },
  resolve:{alias:{'@':fileURLToPath(new URL('./src', import.meta.url))}
  }
});