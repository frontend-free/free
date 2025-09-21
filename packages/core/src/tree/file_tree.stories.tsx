import { FileTree } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FileTree> = {
  title: '@fe-free/core/FileTree',
  component: FileTree,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="c-border w-[200px] overflow-y-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '某某公司',
    enableSearch: true,
    treeProps: {
      defaultExpandAll: true,
      treeData: [
        {
          title: '我的桌面',
          key: '1',
          children: [
            { title: '资料1', key: '1-0' },
            {
              title: '资料2',
              key: '1-1',
              children: [
                { title: '资料2-1资料2-1资料2-1资料2-1', key: '1-1-0' },
                { title: '资料2-2', key: '1-1-1' },
                { title: '资料2-3', key: '1-1-2' },
              ],
            },

            { title: '资料3', key: '1-2' },
          ],
        },
        {
          title: '我的文档',
          key: '2',
          children: [
            { title: '资料1', key: '2-0' },
            {
              title: '资料2',
              key: '2-1',
              children: [
                { title: '资料2-1', key: '2-1-0' },
                { title: '资料2-2', key: '2-1-1' },
                { title: '资料2-3', key: '2-1-2' },
              ],
            },
            { title: '资料3', key: '2-0-2' },
          ],
        },
        {
          title: '我的下载',
          key: '3',
          children: [
            { title: '资料1', key: '3-0' },
            {
              title: '资料2',
              key: '3-1',
            },
            { title: '资料3', key: '3-2' },
          ],
        },
        {
          title: '周杰伦.jpg',
          key: '4',
        },
      ],
    },
  },
};
