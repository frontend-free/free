import type { ActionType } from '@ant-design/pro-components';
import { EditOutlined, EyeOutlined } from '@fe-free/icons';
import { Button, message, Tooltip } from 'antd';
import classNames from 'classnames';
import { isString } from 'lodash-es';
import { useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
import './style.scss';
import type { TableProps } from './table';
import { getTableScroll, Table } from './table';
import type { CRUDProps } from './types';
import { useRowSelection } from './use_row_selection';
import { useTips } from './use_tips';

function CRUD<DataSource extends Record<string, any> = any, Key extends string | number = string>(
  props: CRUDProps<DataSource, Key>,
) {
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
    fullPage,
    className,
    ref,
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
      align: 'center',
      width: operateColumnProps?.width || 120,
      render: function (_, record) {
        const btns: React.ReactNode[] = [];

        if (actions.includes('read')) {
          const hidden = readProps?.operateIsHidden?.(record) || false;
          if (!hidden) {
            const disabled = readProps?.operateIsDisabled?.(record) || false;
            if (disabled) {
              btns.push(
                <Tooltip title={readProps?.operateText || '查看'}>
                  <span key="read" className="cursor-not-allowed text-lg text-03">
                    {readProps?.operateText || <EyeOutlined />}
                  </span>
                </Tooltip>,
              );
            } else {
              btns.push(
                <CRUDDetail
                  key="read"
                  id={record[idField]}
                  record={record}
                  onSuccess={handleReload}
                  trigger={
                    <Tooltip title={readProps?.operateText || '查看'}>
                      <a className="text-lg">{readProps?.operateText || <EyeOutlined />}</a>
                    </Tooltip>
                  }
                  action="read"
                  {...detailProps}
                />,
              );
            }
          }
        }

        if (actions.includes('read_detail')) {
          const hidden = readProps?.operateIsHidden?.(record) || false;
          if (!hidden) {
            const disabled = readProps?.operateIsDisabled?.(record) || false;
            if (disabled) {
              btns.push(
                <Tooltip title={readProps?.operateText || '查看'}>
                  <span key="read" className="cursor-not-allowed text-lg text-03">
                    {readProps?.operateText || <EyeOutlined />}
                  </span>
                </Tooltip>,
              );
            } else {
              btns.push(
                <Tooltip title={readProps?.operateText || '查看'}>
                  <Link
                    key="read_detail"
                    to={`./detail/${record[detailIdIndex || 'id']}`}
                    target={readProps?.target}
                    className="text-lg"
                  >
                    {readProps?.operateText || <EyeOutlined />}
                  </Link>
                </Tooltip>,
              );
            }
          }
        }

        if (actions.includes('update')) {
          const hidden = updateProps?.operateIsHidden?.(record) || false;
          if (!hidden) {
            const disabled = updateProps?.operateIsDisabled?.(record) || false;

            if (disabled) {
              btns.push(
                <Tooltip title={updateProps?.operateText || '编辑'}>
                  <span key="update" className="cursor-not-allowed text-lg text-03">
                    {updateProps?.operateText || <EditOutlined />}
                  </span>
                </Tooltip>,
              );
            } else {
              btns.push(
                <CRUDDetail
                  key="update"
                  id={record[idField]}
                  record={record}
                  onSuccess={handleReload}
                  trigger={
                    <Tooltip title={updateProps?.operateText || '编辑'}>
                      <a className="text-lg">{updateProps?.operateText || <EditOutlined />}</a>
                    </Tooltip>
                  }
                  action="update"
                  {...detailProps}
                />,
              );
            }
          }
        }

        if (actions.includes('delete') && deleteProps) {
          const hidden = deleteProps?.operateIsHidden?.(record) || false;
          if (!hidden) {
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
        }

        return (
          <div className="fec-crud-operate-column flex justify-center gap-4">
            {operateColumnProps?.moreOperator && operateColumnProps.moreOperator(record)}
            {btns}
            {operateColumnProps?.moreOperatorAfter && operateColumnProps.moreOperatorAfter(record)}
          </div>
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
    deleteProps,
    readProps,
    handleReload,
    detailProps,
    detailIdIndex,
    updateProps,
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
    rowSelection: tableProps.rowSelection,
    batchActions,
    actionRef,
  });

  const newTableProps = useMemo(() => {
    if (fullPage) {
      return {
        ...tableProps,
        scroll: {
          ...getTableScroll(tableProps.columns),
          y: '100%',
        },
      };
    }

    return tableProps;
  }, [tableProps, fullPage]);

  return (
    <div
      className={classNames(
        'fec-crud',
        {
          'fec-crud-full-page': fullPage,
        },
        className,
      )}
    >
      <Table<DataSource>
        rowKey="id"
        {...newTableProps}
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

export { CRUD };
