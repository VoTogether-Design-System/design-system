import type { StorybookConfig } from '@storybook/react-vite';

const path = require('path');

const resolvePath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@emotion/core': resolvePath('node_modules/@emotion/react'),
        '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
      },
    },
  }),
};
export default config;
