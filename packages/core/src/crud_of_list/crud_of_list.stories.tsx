import { ProFormText } from '@ant-design/pro-components';
import { CRUDOfList } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
        <div className="fec-border h-[500px] w-[300px] overflow-y-auto">
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
    const columns = [
      {
        title: '名字(省略)',
        dataIndex: 'name',
        // search: true,
        ellipsis: true,
      },
    ];

    return (
      <CRUDOfList
        actions={[]}
        tableProps={{
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
