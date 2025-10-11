import { FileTree } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FileTree> = {
  title: '@fe-free/core/FileTree',
  component: FileTree,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div className="fec-border w-[200px] overflow-y-auto">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '某某公司',
    enableSearch: true,
    actions: ['create', 'update', 'delete'],
    requestCreateByValues: (values) => {
      console.log(values);
      return Promise.resolve();
    },
    requestUpdateByValues: (values) => {
      console.log(values);
      return Promise.resolve();
    },
    requestDeleteByRecord: (values) => {
      console.log(values);
      return Promise.resolve();
    },
    treeProps: {
      defaultExpandAll: true,
      treeData: [
        {
          title: '我的桌面',
          key: '1',
          children: [
            { title: '资料1', key: '1-0', children: [] },
            {
              title: '资料2',
              key: '1-1',
              children: [
                { title: '资料2-1资料2-1资料2-1资料2-1', key: '1-1-0', children: [] },
                { title: '资料2-2', key: '1-1-1', children: [] },
                { title: '资料2-3', key: '1-1-2', children: [] },
              ],
            },

            { title: '资料3', key: '1-2', children: [] },
          ],
        },
        {
          title: '我的文档',
          key: '2',
          children: [
            { title: '资料1', key: '2-0', children: [] },
            {
              title: '资料2',
              key: '2-1',
              children: [
                { title: '资料2-1', key: '2-1-0', children: [] },
                { title: '资料2-2', key: '2-1-1', children: [] },
                { title: '资料2-3', key: '2-1-2', children: [] },
              ],
            },
            { title: '资料3', key: '2-0-2', children: [] },
          ],
        },
        {
          title: '我的下载',
          key: '3',
          children: [
            { title: '资料1', key: '3-0', children: [] },
            {
              title: '资料2',
              key: '3-1',
              children: [],
            },
            { title: '资料3', key: '3-2', children: [] },
          ],
        },
        {
          title: '周杰伦.jpg',
          key: '4',
          children: [],
        },
        {
          title: 'more operateIsDisabled',
          key: '5',
          children: [],
        },
        {
          title: 'more operateIsHidden',
          key: '6',
          children: [],
        },
      ],
    },
    createProps: {
      operateIsDisabled: (nodeData) => nodeData?.key === '5',
      operateIsHidden: (nodeData) => nodeData?.key === '6',
    },
    updateProps: {
      operateIsDisabled: (nodeData) => nodeData.key === '5',
      operateIsHidden: (nodeData) => nodeData.key === '6',
    },
    deleteProps: {
      operateIsDisabled: (nodeData) => nodeData.key === '5',
      operateIsHidden: (nodeData) => nodeData.key === '6',
    },
  },
};

export const FileList: Story = {
  args: {
    title: '某某目录',
    enableSearch: true,
    treeProps: {
      treeData: [
        {
          title: '周杰伦.jpg',
          key: '1',
        },
        {
          title: '周杰伦.mp3',
          key: '2',
        },
        {
          title: '周杰伦.mp4',
          key: '3',
        },
        {
          title: '周杰伦.pdf',
          key: '4',
        },
        {
          title: '周杰伦.doc',
          key: '5',
        },
      ],
    },
  },
};
