import { Copy } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Copy> = {
  title: '@fe-free/core/Copy',
  component: Copy,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  args: {
    value: '点击复制',
    children: '点击复制',
  },
};

export const ShowIcon: Story = {
  args: {
    value: 'icon复制',
    showIcon: true,
    children: 'icon复制',
  },
};

export const HoverIcon: Story = {
  args: {
    value: 'hover复制',
    showIcon: true,
    hoverIcon: true,
    children: 'hover复制',
  },
};

export const OnCopied: Story = {
  args: {
    value: '点击复制',
    onCopied: () => {
      alert('复制成功');
    },
    children: '点击复制',
  },
};
