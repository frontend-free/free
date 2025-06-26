import { LoadingButton } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof LoadingButton> = {
  title: '@fe-free/core/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingButton>;

export const Resolve: Story = {
  args: {
    children: 'click and resolve',
    onClick: () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
  },
};

export const Reject = {
  args: {
    children: 'click and reject',
    onClick: () => {
      return new Promise((_, reject) => {
        setTimeout(reject, 1000);
      });
    },
  },
};
