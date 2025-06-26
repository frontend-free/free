import type { ProColumns } from '@ant-design/pro-components';
import { Table } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fakeData } from '../crud/demo/data';

const meta: Meta = {
  title: '@fe-free/core/Table',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 定义列配置
const columns: ProColumns[] = [
  {
    title: 'id',
    dataIndex: 'id',
    search: true,
  },
  {
    title: '名字(省略)',
    dataIndex: 'name',
    search: true,
    ellipsis: true,
  },
  {
    title: 'city',
    dataIndex: 'city',
  },
  {
    title: 'area',
    dataIndex: 'area',
  },
];

export const Basic: Story = {
  render: () => (
    <Table
      rowKey="id"
      columns={columns}
      request={async (params) => {
        console.log(params);
        return {
          data: fakeData,
          success: true,
          total: fakeData.length,
        };
      }}
    />
  ),
};

export const Search: Story = {
  render: () => (
    <Table
      columns={[
        {
          title: 'id',
          dataIndex: 'id',
        },
        {
          title: '名字(省略)',
          dataIndex: 'name',

          ellipsis: true,
        },
        {
          title: 'city',
          dataIndex: 'city',
        },
        {
          title: 'area',
          dataIndex: 'area',
        },
      ]}
      rowKey="id"
    />
  ),
};
