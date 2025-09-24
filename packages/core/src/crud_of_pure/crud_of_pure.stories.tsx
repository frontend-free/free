import { ProFormText } from '@ant-design/pro-components';
import { CRUDOfPure } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { fakeCreate, fakeDeleteByRecord, fakeRequest } from '../crud/demo/data';

const meta: Meta<typeof CRUDOfPure> = {
  title: '@fe-free/core/CRUDOfPure',
  component: CRUDOfPure,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CRUDOfPure>;

export const Basic: Story = {
  render: () => {
    const columns = [
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

    return (
      <CRUDOfPure
        actions={['delete']}
        tableProps={{
          columns,
          request: fakeRequest,
          pagination: false,
          search: {
            optionRender: (_, __, dom) => {
              return [
                ...dom,
                <Button key="1" type="primary" className="ml-2">
                  额外的按钮
                </Button>,
              ];
            },
          },
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'id',
        }}
        detailForm={() => (
          <>
            <ProFormText
              name="name"
              label="名字"
              required
              rules={[{ required: true }]}
              extra="extra extra extra extra"
            />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};

export const WithCreate: Story = {
  render: () => {
    const columns = [
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

    return (
      <CRUDOfPure
        actions={['create', 'delete']}
        tableProps={{
          columns,
          request: fakeRequest,
          pagination: false,
          search: {
            optionRender: (_, __, dom) => {
              return [
                ...dom,
                <Button key="1" type="primary" className="ml-2">
                  额外的按钮
                </Button>,
              ];
            },
          },
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'id',
        }}
        detailForm={() => (
          <>
            <ProFormText
              name="name"
              label="名字"
              required
              rules={[{ required: true }]}
              extra="extra extra extra extra"
            />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};

export const NoSearch: Story = {
  render: () => {
    const columns = [
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
    ];

    return (
      <CRUDOfPure
        actions={['create', 'delete']}
        tableProps={{
          columns,
          request: fakeRequest,
          pagination: false,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'id',
        }}
        detailForm={() => (
          <>
            <ProFormText
              name="name"
              label="名字"
              required
              rules={[{ required: true }]}
              extra="extra extra extra extra"
            />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};
