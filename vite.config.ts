import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import PurgeIcons from 'vite-plugin-purge-icons';
import prismjs from 'vite-plugin-prismjs';

const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js', '@kangc/v-md-editor/lib/theme/github.js'],
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    PurgeIcons({
      content: ['**/*.html', '**/*.js', '**/*.vue'],
    }),
    prismjs({
      languages: [
        'json',
        'c',
        'go',
        'python',
        'java',
        'shell',
        'powershell',
        'java',
        'typescript',
        'css',
        'log',
        'sql',
        'kotlin',
        'http',
        'url',
        'makefile',
        'php',
        'nginx',
      ],
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
    // 是否开启 https
    https: false,
  },
});
