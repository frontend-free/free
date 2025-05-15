import type { ActionType } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import type { TableProps } from '../table';
import { Table } from '../table';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
import './style.scss';
import type { CRUDMethods, CRUDProps } from './types';
import { useRowSelection } from './use_row_selection';

function CRUDComponent<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(props: CRUDProps<DataSource, Key>, ref: React.ForwardedRef<CRUDMethods>) {
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
    requestUpdateById: originalRequestUpdateById,
    requestUpdateByValues: originalRequestUpdateByValues,
    detailFormInstance,
    batchActions,
  } = props;

  const requestUpdateById = originalRequestUpdateByValues || originalRequestUpdateById;

  const actionRef = useRef<ActionType>();

  useImperativeHandle(ref, () => {
    return {
      getActionRef: () => actionRef,
    };
  }, [actionRef]);

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
    ],
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
    [requestDeleteByRecord],
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
              <a href={`./detail/${record[detailIdIndex || 'id']}`} target={readProps?.target}>
                {readProps?.operateText || '查看'}
              </a>
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
            {operateColumnProps?.moreOperatorAfter && operateColumnProps.moreOperatorAfter(record)}
          </Space>
        );
      },
    };

    if (
      actions.includes('read') ||
      actions.includes('read_detail') ||
      actions.includes('update') ||
      actions.includes('delete') ||
      operateColumnProps?.moreOperator ||
      operateColumnProps?.moreOperatorAfter
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
    detailIdIndex,
    updateProps?.operateText,
    deleteProps,
    getHandleDelete,
  ]);

  const toolBarRender = useCallback(
    (...args) => [
      // @ts-ignore
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
    [actions, createButton, detailProps, handleReload, tableProps],
  );

  const { rowSelection, tableAlertRender, tableAlertOptionRender } = useRowSelection<
    DataSource,
    Key
  >({
    batchActions,
  });

  return (
    <div className="crud-table">
      <Table
        rowKey="id"
        {...tableProps}
        actionRef={actionRef}
        toolBarRender={toolBarRender}
        columns={newColumns}
        rowSelection={rowSelection}
        tableAlertRender={tableAlertRender}
        tableAlertOptionRender={tableAlertOptionRender}
      />
    </div>
  );
}

const CRUD = forwardRef(CRUDComponent) as <
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(
  props: CRUDProps<DataSource, Key> & { ref?: React.ForwardedRef<CRUDMethods> },
) => JSX.Element;

export { CRUD };
