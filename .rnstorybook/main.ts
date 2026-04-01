import type { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  stories: ['../**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
};

export default main;
