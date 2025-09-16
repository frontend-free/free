import { CoreApp } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: '@fe-free/core/CoreApp',
  component: CoreApp,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
CoreApp 组件
- 封装常用 ProConfigProvider
- 封装常用 ConfigProvider
- 封装常用 APP
- 封装常用 Router
- 提供了 @fe-core/app 初始化能力
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <div>hello world</div>,
};
