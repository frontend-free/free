import { Tree } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tree> = {
  title: '@fe-free/core/Tree',
  component: Tree,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultExpandAll: true,
    treeData: [
      {
        title: '0-0',
        key: '0-0',
        children: [
          { title: '0-0-0', key: '0-0-0' },
          { title: '0-0-1', key: '0-0-1' },
          { title: '0-0-2', key: '0-0-2' },
        ],
      },
    ],
  },
};

export const EnableSearch: Story = {
  args: {
    enableSearch: true,
    defaultExpandAll: true,
    treeData: [
      {
        title: '0-0',
        key: '0-0',
        children: [
          { title: '0-0-0', key: '0-0-0' },
          { title: '0-0-1', key: '0-0-1' },
          { title: '0-0-2', key: '0-0-2' },
        ],
      },
      {
        title: '0-1',
        key: '0-1',
        children: [{ title: '0-1-0', key: '0-1-0' }],
      },
      {
        title: '0-2',
        key: '0-2',
        children: [{ title: '0-2-0', key: '0-2-0' }],
      },
    ],
  },
};
