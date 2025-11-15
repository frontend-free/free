/** @type {import('tailwindcss').Config} */
import { themeVariables } from './theme';

module.exports = {
  theme: {
    extend: {
      colors: themeVariables.color,
      textColor: themeVariables.textColor,
      borderColor: themeVariables.borderColor,
      backgroundColor: themeVariables.backgroundColor,
    },
  },
  plugins: [],
};
