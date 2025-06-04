import type { ActionType } from '@ant-design/pro-components';
import { Button, message, Space } from 'antd';
import { isString } from 'lodash-es';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { TableProps } from '../table';
import { Table } from '../table';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
import './style.scss';
import type { CRUDMethods, CRUDProps } from './types';
import { useRowSelection } from './use_row_selection';
import { useTips } from './use_tips';

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
    requestUpdateById,
    requestUpdateByValues,
    detailFormInstance,
    requestDeleteByRecords,
    batchActions: originBatchActions,
  } = props;

  useTips(props);

  const actionRef = useRef<ActionType | undefined>(undefined);

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
      requestUpdateByValues,
      detailFormInstance,
      createProps,
      readProps,
      updateProps,
    }),
    [
      detailForm,
      requestGetByRecord,
      requestCreateByValues,
      requestUpdateById,
      requestUpdateByValues,
      detailFormInstance,
      createProps,
      readProps,
      updateProps,
    ],
  );

  const getHandleDelete = useCallback(
    (record) => {
      return () => {
        if (requestDeleteByRecord) {
          let content = '删除成功';
          if (deleteProps?.successText) {
            content = isString(deleteProps.successText)
              ? deleteProps.successText
              : deleteProps.successText();
          }
          return requestDeleteByRecord(record).then(() => {
            message.open({
              type: 'success',
              content,
            });
            actionRef.current?.reload();
          });
        }

        throw new Error('没有传 requestDeleteByRecord');
      };
    },
    [deleteProps, requestDeleteByRecord],
  );

  const handleReload = useCallback(() => {
    actionRef.current?.reload();
  }, []);

  const newColumns = useMemo(() => {
    const idField = tableProps.rowKey || 'id';

    const operateColumn = {
      title: '操作',
      fixed: 'right',
      width: operateColumnProps?.width || 120,
      render: function (_, record) {
        const btns: React.ReactNode[] = [];

        if (actions.includes('read')) {
          btns.push(
            <CRUDDetail
              key="read"
              id={record[idField]}
              record={record}
              onSuccess={handleReload}
              trigger={<a>{readProps?.operateText || '查看'}</a>}
              action="read"
              {...detailProps}
            />,
          );
        }

        if (actions.includes('read_detail')) {
          btns.push(
            <Link
              key="read_detail"
              to={`./detail/${record[detailIdIndex || 'id']}`}
              target={readProps?.target}
            >
              {readProps?.operateText || '查看'}
            </Link>,
          );
        }

        if (actions.includes('update')) {
          const disabled = updateProps?.operateIsDisabled?.(record) || false;

          if (disabled) {
            btns.push(
              <a key="update" disabled>
                {updateProps?.operateText || '编辑'}
              </a>,
            );
          } else {
            btns.push(
              <CRUDDetail
                key="update"
                id={record[idField]}
                record={record}
                onSuccess={handleReload}
                trigger={<a>{updateProps?.operateText || '编辑'}</a>}
                action="update"
                {...detailProps}
              />,
            );
          }
        }

        if (actions.includes('delete') && deleteProps) {
          const disabled = deleteProps?.operateIsDisabled?.(record) || false;
          btns.push(
            <OperateDelete
              key="delete"
              name={record[deleteProps.nameIndex]}
              desc={deleteProps.desc}
              operateText={deleteProps.operateText}
              disabled={disabled}
              onDelete={getHandleDelete(record)}
            />,
          );
        }

        return (
          <Space>
            {operateColumnProps?.moreOperator && operateColumnProps.moreOperator(record)}
            {btns}
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
    tableProps.rowKey,
    tableProps.columns,
    operateColumnProps,
    actions,
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
    (...args) =>
      [
        <div key="placeholder" />,
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
      ].filter(Boolean),
    [actions, createButton, detailProps, handleReload, tableProps],
  );

  const batchActions = useMemo(() => {
    const bas = [...(originBatchActions || [])];

    if (actions.includes('batch_delete') && requestDeleteByRecords) {
      const batchDeleteAction = {
        btnText: '批量删除',
        danger: true,
        onClick: async (_, { selectedRows }) => {
          await requestDeleteByRecords(selectedRows);
        },
      };
      bas.push(batchDeleteAction);
    }

    return bas;
  }, [actions, originBatchActions, requestDeleteByRecords]);

  const { rowSelection, tableAlertRender, tableAlertOptionRender } = useRowSelection<
    DataSource,
    Key
  >({
    batchActions,
    actionRef,
  });

  return (
    <div className="crud-table">
      <Table<DataSource>
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
