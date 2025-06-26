import type { ProColumns } from '@ant-design/pro-components';
import { Table } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fakeData } from '../crud/demo/data';

const meta: Meta<typeof Table> = {
  title: '@fe-free/core/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Table 基于 ProTable 做了一些封装：<br>
- props column 需要显示的提供 search: true;
- 列宽默认 120，和滚动条
- 搜索样式做了默认设置，具体见代码
- 页码做了默认设置，具体见代码
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

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

export const ScrollX: Story = {
  render: () => (
    <div className="w-[400px]">
      <Table
        rowKey="id"
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
      />
    </div>
  ),
};
