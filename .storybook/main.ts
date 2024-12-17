import type { StorybookConfig } from '@storybook/react-vite';
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    console.log(config.plugins);
    config.plugins = [ ...(config.plugins || []), svgr()];

    return config;
  },
};

export default config;
