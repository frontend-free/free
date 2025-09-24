import type { StorybookConfig } from '@storybook/react-vite';
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../common/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../common/*/src/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = [ ...(config.plugins || []), svgr()];

    return config;
  },
};

export default config;
