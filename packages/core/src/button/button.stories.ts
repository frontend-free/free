import { LoadingButton } from '@fe-free/core';

export default {
  title: '@fe-free/core/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
};

export const Default = {
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
