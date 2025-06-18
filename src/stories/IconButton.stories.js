import { IconButton } from '../components/IconButton/index.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/IconButton',
  tags: ['autodocs'],
  render: (args) => IconButton(args),
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    variant: 'default',
    size: 'medium',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
  }
};