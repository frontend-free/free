import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['src/index.ts'],
    clean: true,
    copy: ['src/react-pages.temp.jsx'],
    dts: true,
    format: 'cjs',
  },
});
