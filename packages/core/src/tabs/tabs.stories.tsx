import { Tabs } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tabs> = {
  title: '@fe-free/core/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '基于 antd Tabs 封装的 Tabs，设置 withSearchParams 则自动根据 ?tab= 设置 activeKey',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// 基础用法
export const Basic: Story = {
  render: () => {
    return <div>依赖 react-router-dom 的 Route 组件，暂不提供 demo</div>;
  },
};
