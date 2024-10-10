import type { ProFormInstance, ActionType } from '@ant-design/pro-components';
import { Space, Button } from 'antd';
import type { ReactNode } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { TableProps } from '../table';
import { Table } from '../table';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
import './style.scss';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type CrudAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CRUDProps {
  actions: CrudAction[];

  /** 新建按钮，默认新建 */
  createButton?: ReactNode;

  /** 表格相关 */
  tableProps: TableProps;
  operateColumnProps?: {
    width?: number;
    /** 扩展操作区域 */
    moreOperator?: (record) => ReactNode;
  };
  readProps?: {
    /** 文本 */
    operateText?: string;
    /** 打开方式, action 为 read_detail 有效 */
    target?: '_blank';
  };

  /** 删除接口 */
  requestDeleteByRecord?: (record) => Promise<any>;
  /** 删除相关 */
  deleteProps?: {
    /** 显示名称索引 */
    nameIndex: string;
    /** 删除确认描述 */
    desc?: string;
    /** 文本 */
    operateText?: string;
  };

  /** 弹窗表单 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CrudAction }) => ReactNode;
  /** detailForm 的 formRef */
  detailFormInstance?: ProFormInstance;

  /** 新增接口 */
  requestCreateByValues?: (values) => Promise<any>;
  createProps?: {
    /** 成功文案 */
    successText?: string | (() => string);
  };

  /** 更新接口 */
  requestUpdateById?: (values) => Promise<any>;
  updateProps?: {
    /** 文本 */
    operateText?: string;
    /** 成功文案 */
    successText?: string | (() => string);
  };

  /** 获取详情接口 */
  requestGetByRecord?: (record) => Promise<any>;

  /** 跳转到详情的索引 ，默认 id */
  detailIdIndex?: string;
}

interface CRUDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}

const CRUD = forwardRef<CRUDMethods, CRUDProps>(function CRUD(props, ref) {
  const {
    actions,
    tableProps,
    createButton,
    operateColumnProps,
    readProps,
    requestDeleteByRecord,
    deleteProps,
    detailIdIndex,
    detailForm,
    requestGetByRecord,
    createProps,
    requestCreateByValues,
    updateProps,
    requestUpdateById,
    detailFormInstance,
  } = props;

  const actionRef = useRef<ActionType>();
  const location = useLocation();

  useImperativeHandle(
    ref,
    () => {
      return {
        getActionRef: () => actionRef,
      };
    },
    [actionRef]
  );

  const detailProps = useMemo(
    () => ({
      detailForm,
      requestGetByRecord,
      requestCreateByValues,
      requestUpdateById,
      detailFormInstance,
      createProps,
      updateProps,
    }),
    [
      detailForm,
      requestGetByRecord,
      requestCreateByValues,
      requestUpdateById,
      detailFormInstance,
      createProps,
      updateProps,
    ]
  );

  const getHandleDelete = useCallback(
    (record) => {
      return () => {
        if (requestDeleteByRecord) {
          return requestDeleteByRecord(record).then(() => {
            actionRef.current?.reload();
          });
        }

        throw new Error('没有传 requestDeleteByRecord');
      };
    },
    [requestDeleteByRecord]
  );

  const handleReload = useCallback(() => {
    actionRef.current?.reload();
  }, []);

  const newColumns = useMemo(() => {
    const operateColumn = {
      title: '操作',
      fixed: 'right',
      width: operateColumnProps?.width || 120,
      render: function (_, record) {
        return (
          <Space>
            {operateColumnProps?.moreOperator && operateColumnProps.moreOperator(record)}
            {actions.includes('read') && (
              <CRUDDetail
                id={record.id}
                record={record}
                onSuccess={handleReload}
                trigger={<a>{readProps?.operateText || '查看'}</a>}
                action="read"
                {...detailProps}
              />
            )}
            {actions.includes('read_detail') && (
              <Link
                to={`${location.pathname}/detail/${record[detailIdIndex || 'id']}`}
                target={readProps?.target}
              >
                {readProps?.operateText || '查看'}
              </Link>
            )}
            {actions.includes('update') && (
              <CRUDDetail
                id={record.id}
                record={record}
                onSuccess={handleReload}
                trigger={<a>{updateProps?.operateText || '编辑'}</a>}
                action="update"
                {...detailProps}
              />
            )}
            {actions.includes('delete') && deleteProps && (
              <OperateDelete
                name={record[deleteProps.nameIndex]}
                desc={deleteProps.desc}
                operateText={deleteProps.operateText}
                onDelete={getHandleDelete(record)}
              />
            )}
          </Space>
        );
      },
    };

    if (
      actions.includes('read') ||
      actions.includes('read_detail') ||
      actions.includes('update') ||
      actions.includes('delete') ||
      operateColumnProps?.moreOperator
    ) {
      return [
        ...(tableProps.columns || tableProps.columns || []),
        operateColumn,
      ] as TableProps['columns'];
    }

    return tableProps.columns as TableProps['columns'];
  }, [
    operateColumnProps,
    actions,
    tableProps.columns,
    handleReload,
    readProps?.operateText,
    readProps?.target,
    detailProps,
    location.pathname,
    detailIdIndex,
    updateProps?.operateText,
    deleteProps,
    getHandleDelete,
  ]);

  const toolBarRender = useCallback(
    (...args) => [
      ...(tableProps.toolBarRender ? tableProps.toolBarRender(...args) : []),
      actions.includes('create') && (
        <CRUDDetail
          onSuccess={handleReload}
          trigger={createButton || <Button type="primary">新建</Button>}
          action="create"
          {...detailProps}
        />
      ),
    ],
    [actions, createButton, detailProps, handleReload, tableProps]
  );

  return (
    <div className="crud-table">
      <Table
        rowKey="id"
        {...tableProps}
        actionRef={actionRef}
        toolBarRender={toolBarRender}
        columns={newColumns}
      />
    </div>
  );
});

export { CRUD };
export type { CRUDProps, CRUDMethods };
