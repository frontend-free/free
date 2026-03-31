import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ['zh-CN', 'zh-HK', 'en-US'],
  extract: {
    primaryLanguage: 'zh-CN',
    secondaryLanguages: ['zh-HK', 'en-US'],
    input: ['./src/**/*.{js,jsx,ts,tsx}', './todo/**/*.{js,jsx,ts,tsx}'],
    output: './src/locales/{{language}}/{{namespace}}.json',
  },
});
