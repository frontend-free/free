import { ProFormText } from '@ant-design/pro-components';
import type { CRUDRef } from '@fe-free/core';
import { CRUDOfList } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { fakeCreate, fakeDeleteByRecord, fakeRequest } from '../crud/demo/data';

const meta: Meta<typeof CRUDOfList> = {
  title: '@fe-free/core/CRUDOfList',
  component: CRUDOfList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
CRUDOfList 组件。（简洁的列表形态的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="h-[500px] w-[300px] overflow-y-auto border border-01">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof CRUDOfList>;

export const Basic: Story = {
  render: () => {
    const ref = useRef<CRUDRef>(null);
    const columns = [
      {
        title: '名字(省略)',
        dataIndex: 'name',
        // search: true,
        ellipsis: true,
      },
    ];

    return (
      <div>
        <button onClick={() => ref.current?.getActionRef()?.current?.reload()}>reload</button>
        <CRUDOfList
          ref={ref}
          actions={[]}
          tableProps={{
            rowKey: 'id',
            columns,
            request: fakeRequest,
          }}
          requestDeleteByRecord={fakeDeleteByRecord}
          deleteProps={{
            nameIndex: 'name',
          }}
          detailForm={() => (
            <>
              <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
            </>
          )}
          requestCreateByValues={fakeCreate}
        />
      </div>
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    const columns = [
      {
        title: '名字(省略)',
        dataIndex: 'name',
        search: true,
        ellipsis: true,
      },
    ];

    return (
      <CRUDOfList
        actions={['delete']}
        tableProps={{
          rowKey: 'id',
          columns,
          request: fakeRequest,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
          operateIsHidden: (record) => {
            return record.id === '1';
          },
        }}
        detailForm={() => (
          <>
            <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};

export const WithToolbarSticky: Story = {
  render: () => {
    const columns = [
      {
        title: '名字(省略)',
        dataIndex: 'name',
        search: true,
        ellipsis: true,
      },
    ];

    return (
      <CRUDOfList
        toolbarSticky
        actions={['delete']}
        tableProps={{
          rowKey: 'id',
          columns,
          request: fakeRequest,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
        }}
        detailForm={() => (
          <>
            <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};

export const WithCreateDelete: Story = {
  render: () => {
    const columns = [
      {
        title: '名字(省略)',
        dataIndex: 'name',
        search: true,
        ellipsis: true,
      },
    ];

    return (
      <CRUDOfList
        actions={['create', 'delete']}
        tableProps={{
          rowKey: 'id',
          columns,
          request: fakeRequest,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
        }}
        detailForm={() => (
          <>
            <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
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
        title: '名字(省略)',
        dataIndex: 'name',
        ellipsis: true,
      },
    ];

    return (
      <CRUDOfList
        actions={['create', 'delete']}
        tableProps={{
          rowKey: 'id',
          columns,
          request: fakeRequest,
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
        }}
        detailForm={() => (
          <>
            <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
          </>
        )}
        requestCreateByValues={fakeCreate}
      />
    );
  },
};
