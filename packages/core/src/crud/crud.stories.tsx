import type { ProColumns } from '@ant-design/pro-components';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import { CRUD, proFormSelectSearchProps } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'antd';
import { useRef } from 'react';
import {
  fakeCreate,
  fakeDeleteByRecord,
  fakeGetByRecord,
  fakeRequest,
  fakeRequestArea,
  fakeRequestCity,
  fakeRequestSchool,
  fakeUpdateById,
  levels,
} from './demo/data';

const meta: Meta<typeof CRUD> = {
  title: '@fe-free/core/CRUD',
  component: CRUD,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CRUD>;

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
      <CRUD
        actions={['create', 'read', 'delete', 'update']}
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
            <ProFormText
              name="name"
              label="名字"
              required
              rules={[{ required: true }]}
              extra="extra extra extra extra"
            />
          </>
        )}
        requestGetByRecord={fakeGetByRecord}
        requestCreateByValues={fakeCreate}
        requestUpdateById={fakeUpdateById}
      />
    );
  },
};

// 详情页查看
export const ReadDetail: Story = {
  render: () => {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        search: true,
      },
      {
        title: '名字',
        dataIndex: 'name',
        search: true,
      },
    ];

    return (
      <CRUD
        actions={['read_detail']}
        tableProps={{
          columns,
          request: fakeRequest,
        }}
      />
    );
  },
};

export const BatchDelete: Story = {
  render: () => {
    return (
      <CRUD
        actions={['batch_delete']}
        tableProps={{
          columns: [
            {
              title: 'id',
              dataIndex: 'id',
              search: true,
            },
            {
              title: '名字',
              dataIndex: 'name',
              search: true,
            },
          ],
          request: fakeRequest,
        }}
        requestDeleteByRecords={async (records) => {
          console.log(records);
        }}
      />
    );
  },
};

export const MoreCustom: Story = {
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
      <CRUD
        actions={['create', 'read', 'delete', 'update']}
        tableProps={{
          columns,
          request: fakeRequest,
          toolBarRender: () => {
            return [<div key="custom1">自定义1</div>, <div key="custom2">自定义2</div>];
          },
        }}
        operateColumnProps={{
          // 自定义宽度
          width: 300,
          // 自定义操作列
          moreOperator: () => {
            return <div>自定义</div>;
          },
          // 自定义操作列之后
          moreOperatorAfter: () => {
            return <div>自定义</div>;
          },
        }}
        createButton={<Button type="primary">自定义新建文本</Button>}
        readProps={{
          operateIsDisabled: (record) => {
            if (record.id % 3) {
              return false;
            }
            return true;
          },
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        deleteProps={{
          nameIndex: 'name',
          operateIsDisabled: (record) => {
            if (record.id % 3) {
              return false;
            }
            return true;
          },
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
        requestGetByRecord={fakeGetByRecord}
        requestCreateByValues={fakeCreate}
        requestUpdateById={fakeUpdateById}
        updateProps={{
          operateIsDisabled: (record) => {
            if (record.id % 3) {
              return false;
            }
            return true;
          },
          operateIsHidden: (record) => {
            if (record.id % 4) {
              return false;
            }
            return true;
          },
        }}
      />
    );
  },
};

// 表格表单和详情表单 ref
const FormRefComponent = () => {
  const formRef = useRef<any>();
  const [detailFormInstance] = ProForm.useForm();

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <CRUD
      actions={['create', 'read', 'update']}
      tableProps={{
        formRef,
        columns,
        request: fakeRequest,
      }}
      detailFormInstance={detailFormInstance}
      detailForm={() => (
        <>
          <ProFormText
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
            initialValue={'default'}
          />
          <ProFormSwitch name="status" label="开启" initialValue={false} />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreateByValues={fakeCreate}
      requestUpdateByValues={fakeUpdateById}
    />
  );
};

export const FormRef: Story = {
  render: () => <FormRefComponent />,
};

// 通过 ref 获取 actionRef
const ActionRefComponent = () => {
  const ref = useRef<any>();

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CRUD
        ref={ref}
        actions={[]}
        tableProps={{
          columns,
          request: fakeRequest,
        }}
      />
    </>
  );
};

export const ActionRef: Story = {
  render: () => <ActionRefComponent />,
};

// 数据 本地&远程&依赖
export const RemoteData: Story = {
  render: () => {
    const columns: ProColumns<any>[] = [
      {
        title: 'id',
        dataIndex: 'id',
        search: true,
      },
      {
        title: '名字',
        dataIndex: 'name',
        search: true,
      },
      {
        title: '等级(本地数据)',
        dataIndex: 'level',
        search: true,
        valueEnum: levels,
        ...proFormSelectSearchProps,
      },
      {
        title: 'city(远端数据)',
        dataIndex: 'city',
        search: true,
        request: async () => {
          const res = await fakeRequestCity();
          return res.map((item) => ({
            label: item,
            value: item,
          }));
        },
        ...proFormSelectSearchProps,
      },
      {
        title: 'area(联动 city)',
        dataIndex: 'area',
        search: true,
        request: async (params) => {
          const res = await fakeRequestArea(params);
          return res.map((item) => ({
            label: item,
            value: item,
          }));
        },
        dependencies: ['city'],
        ...proFormSelectSearchProps,
      },
      {
        title: '学校(远端数据 label value)',
        dataIndex: 'school',
        search: true,
        valueType: 'select' as const,
        request: () => fakeRequestSchool(),
        ...proFormSelectSearchProps,
      },
    ];

    return (
      <CRUD
        actions={[]}
        tableProps={{
          columns,
          request: fakeRequest,
        }}
      />
    );
  },
};

// 没有搜索
export const NoSearch: Story = {
  render: () => {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '名字',
        dataIndex: 'name',
      },
    ];

    return (
      <CRUD
        actions={[]}
        tableProps={{
          columns,
          request: fakeRequest,
          search: false,
        }}
      />
    );
  },
};

// 自定义文案
export const CustomText: Story = {
  render: () => {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        search: true,
      },
      {
        title: '名字',
        dataIndex: 'name',
        search: true,
      },
    ];

    return (
      <CRUD
        actions={['create', 'read', 'delete', 'update']}
        tableProps={{
          columns,
          request: fakeRequest,
        }}
        createButton={<Button type="primary">新建</Button>}
        createProps={{
          submitText: '自定义新建确定',
          resetText: '自定义新建取消',
        }}
        readProps={{
          submitText: '自定义查看确定',
          resetText: '自定义查看取消',
          operateText: '查看',
        }}
        deleteProps={{
          nameIndex: 'name',
          operateText: '删除',
          desc: '确定要删除吗？',
        }}
        updateProps={{
          operateText: '编辑',
          submitText: '自定义编辑确定',
          resetText: '自定义编辑取消',
          successText: '编辑成功',
        }}
        requestDeleteByRecord={fakeDeleteByRecord}
        detailForm={() => (
          <>
            <ProFormText name="name" label="名字" required rules={[{ required: true }]} />
          </>
        )}
        requestGetByRecord={fakeGetByRecord}
        requestCreateByValues={fakeCreate}
        requestUpdateByValues={fakeUpdateById}
      />
    );
  },
};

export const RowSelection: Story = {
  render: () => {
    return (
      <CRUD
        actions={[]}
        tableProps={{
          columns: [
            {
              title: 'id',
              dataIndex: 'id',
              search: true,
            },
            {
              title: '名字',
              dataIndex: 'name',
              search: true,
            },
          ],
          request: fakeRequest,
          rowSelection: {
            alwaysShowAlert: true,
          },
        }}
        batchActions={[
          {
            btnText: '批量xxx',
            onClick: async (_, { selectedRowKeys }) => {
              console.log(selectedRowKeys);
            },
          },
          {
            btnText: '批量danger',
            danger: true,
            onClick: async (_, { selectedRowKeys }) => {
              console.log(selectedRowKeys);
            },
          },
        ]}
      />
    );
  },
};

export const ExpandedRowRender: Story = {
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
      <CRUD
        actions={['create', 'read', 'delete', 'update']}
        tableProps={{
          columns,
          request: fakeRequest,
          defaultExpandAllRows: true,
          expandable: {
            expandedRowKeys: ['0', '1'],
            expandedRowRender: () => {
              return <div>123</div>;
            },
          },
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
        requestGetByRecord={fakeGetByRecord}
        requestCreateByValues={fakeCreate}
        requestUpdateById={fakeUpdateById}
      />
    );
  },
};
