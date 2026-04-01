import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};
