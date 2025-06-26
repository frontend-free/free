import { LoadingButton } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof LoadingButton> = {
  title: '@fe-free/core/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'LoadingButton 是一个带有加载状态的按钮组件，适用于异步操作场景。<br/>区别于 antd Button 需要手动传 loading props。',
      },
    },
  },
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
