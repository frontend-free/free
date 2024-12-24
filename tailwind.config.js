import config from '@fe-free/core/src/tailwind.config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/*/src/**/*.{js,ts,jsx,tsx,md}'],
  ...config,
};
