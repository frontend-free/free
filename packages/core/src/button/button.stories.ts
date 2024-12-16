import { LoadingButton } from '@fe-free/core';

export default {
  title: '@fe-free/core/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
  args: {
    children: 'This is a loading Button',
    onClick: () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
  },
};

export const Default = {};
