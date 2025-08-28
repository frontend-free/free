import { Copy } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Copy> = {
  title: '@fe-free/core/Copy',
  component: Copy,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '基于 antd 的 Copy 组件，自动根据 value 显示复制按钮',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  args: {
    value: '点击复制',
    children: 'children 点击复制',
  },
};

export const ShowIcon: Story = {
  args: {
    value: 'icon复制',
    showIcon: true,
    children: 'children 点击复制',
  },
};

export const HoverIcon: Story = {
  args: {
    value: 'hover复制',
    showIcon: true,
    hoverIcon: true,
    children: 'children 点击复制',
  },
};

export const OnCopied: Story = {
  args: {
    value: '点击复制',
    onCopied: () => {
      alert('复制成功');
    },
    children: 'children 点击复制',
  },
};
