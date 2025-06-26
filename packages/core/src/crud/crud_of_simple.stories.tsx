import { ProFormText } from '@ant-design/pro-components';
import { CRUDOfSimple } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fakeCreate, fakeDeleteByRecord, fakeRequest } from './demo/data';

const meta: Meta<typeof CRUDOfSimple> = {
  title: '@fe-free/core/CRUDOfSimple',
  component: CRUDOfSimple,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CRUDOfSimple>;

// 基础用法
export const Normal: Story = {
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
    ];

    return (
      <CRUDOfSimple
        actions={['create', 'delete']}
        tableProps={{
          columns,
          request: fakeRequest,
          pagination: false,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
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

export const WithSearch: Story = {
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
    ];

    return (
      <CRUDOfSimple
        actions={['create', 'delete']}
        tableProps={{
          columns,
          request: fakeRequest,
          pagination: false,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
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
        simpleSearchProps={{
          name: 'id',
        }}
      />
    );
  },
};
