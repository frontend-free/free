import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['src/index.ts'],
    clean: true,
    copy: ['src/build_code/template'],
    dts: true,
    format: 'cjs',
  },
});
