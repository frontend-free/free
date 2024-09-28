import React, { useRef } from 'react';
import type { CRUDProps } from '@fe-free/core';
import { CRUD, proFormSelectSearchProps } from '@fe-free/core';
import { Button } from 'antd';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import {
  fakeRequest,
  fakeDeleteByRecord,
  fakeCreate,
  fakeGetByRecord,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
  levels,
  fakeRequestSchool,
} from './data';

const Normal = () => {
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
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
            extra="extra extra extra extra"
          />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreate={fakeCreate}
      requestUpdateById={fakeUpdateById}
    />
  );
};

function ReadDetail() {
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
}

function Ref() {
  const formRef = useRef<any>();
  const [detailFormInstance] = ProForm.useForm();

  // @ts-ignore
  window._detailFormInstance = detailFormInstance;

  const name = ProForm.useWatch('name', formRef.current);
  const detailName = ProForm.useWatch('name', detailFormInstance);

  // 不知道为啥这里 name 不生效，但是项目里是生效的。先忽略
  console.log('useWatch', name, detailName);

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
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
            initialValue={'default'}
          />
          <ProFormSwitch {...formProps} name="status" label="开启" initialValue={false} />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreate={fakeCreate}
      requestUpdateById={fakeUpdateById}
    />
  );
}

function ActionRef() {
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
}

function RemoteData() {
  const columns: CRUDProps['tableProps']['columns'] = [
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
        console.log('request');
        const res = await fakeRequestCity();

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      ...proFormSelectSearchProps,
    },
    {
      title: 'area(联动 city)',
      dataIndex: 'area',
      search: true,
      request: async (params) => {
        console.log('params', params);
        const res = await fakeRequestArea(params);

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      dependencies: ['city'],
      ...proFormSelectSearchProps,
    },
    {
      title: '学校(远端数据 label value)',
      dataIndex: 'school',
      search: true,
      valueType: 'select',
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
}

function NoSearch() {
  const ref = useRef<any>();

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
      ref={ref}
      actions={[]}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
}

const CustomText = () => {
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
      ellipsis: true,
    },
  ];

  return (
    <CRUD
      actions={['create', 'read', 'delete', 'update']}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
      operateColumnProps={{
        width: 230,
        moreOperator: () => <div>custom</div>,
      }}
      readProps={{
        operateText: '查看啦',
      }}
      requestDeleteByRecord={fakeDeleteByRecord}
      deleteProps={{
        nameIndex: 'name',
        operateText: '删除啦',
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
          />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreate={fakeCreate}
      createProps={{
        successText: '新建成功啦',
      }}
      updateProps={{
        operateText: '更新啦',
        successText: '更新成功啦',
      }}
      requestUpdateById={fakeUpdateById}
    />
  );
};

export { Normal, ReadDetail, Ref, ActionRef, RemoteData, NoSearch, CustomText };
