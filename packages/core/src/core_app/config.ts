import { themeVariables } from '../theme';

const themeConfig = {
  cssVar: true,
  token: {
    colorPrimary: themeVariables.color.theme08,
  },
  components: {
    Table: {
      headerBg: themeVariables.color.theme02,
      headerBorderRadius: 0,
    },
  },
};

export { themeConfig };
