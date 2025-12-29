import { EditOutlined, EyeOutlined } from '@fe-free/icons';
import { App } from 'antd';
import { isString } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { routeTool } from '../route';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
import { OperateBtn } from './helper';
import type { TableProps } from './table';

function useOperate(props, detailProps, actionRef) {
  const {
    actions,
    tableProps,
    operateColumnProps,
    readProps,
    updateProps,
    deleteProps,
    detailIdIndex,
    requestDeleteByRecord,
  } = props;
  const { message } = App.useApp();

  const idField = tableProps.rowKey || 'id';

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
    [actionRef, deleteProps, message, requestDeleteByRecord],
  );

  const handleReload = useCallback(() => {
    actionRef.current?.reload();
  }, [actionRef]);

  const readOperate = useCallback(
    (record) => {
      const hidden = readProps?.operateIsHidden?.(record) || false;

      if (!hidden) {
        const disabled = readProps?.operateIsDisabled?.(record) || false;

        if (disabled) {
          return (
            <OperateBtn
              title="查看"
              icon={<EyeOutlined />}
              operateText={readProps?.operateText}
              disabled
            />
          );
        } else {
          return (
            <CRUDDetail
              key="read"
              id={record[idField]}
              record={record}
              onSuccess={handleReload}
              trigger={
                <OperateBtn
                  title="查看"
                  icon={<EyeOutlined />}
                  operateText={readProps?.operateText}
                />
              }
              action="read"
              {...detailProps}
            />
          );
        }
      }
      return null;
    },
    [detailProps, handleReload, idField, readProps],
  );

  const readDetailOperate = useCallback(
    (record) => {
      const hidden = readProps?.operateIsHidden?.(record) || false;
      if (!hidden) {
        const disabled = readProps?.operateIsDisabled?.(record) || false;
        if (disabled) {
          return (
            <OperateBtn
              title="查看"
              icon={<EyeOutlined />}
              operateText={readProps?.operateText}
              disabled
            />
          );
        } else {
          return (
            <OperateBtn
              title="查看"
              icon={<EyeOutlined />}
              operateText={readProps?.operateText}
              onClick={() => {
                const path = `${window.location.pathname}/detail/${record[detailIdIndex || 'id']}`;
                if (readProps?.target === '_blank') {
                  window.open(path, readProps?.target);
                } else {
                  routeTool.navigateTo({
                    path: path.replace(routeTool.getBaseName(), ''),
                  });
                }
              }}
            />
          );
        }
      }
      return null;
    },
    [detailIdIndex, readProps],
  );

  const updateOperate = useCallback(
    (record) => {
      const hidden = updateProps?.operateIsHidden?.(record) || false;
      if (!hidden) {
        const disabled = updateProps?.operateIsDisabled?.(record) || false;

        if (disabled) {
          return (
            <OperateBtn
              title="编辑"
              icon={<EditOutlined />}
              operateText={updateProps?.operateText}
              disabled
            />
          );
        } else {
          return (
            <CRUDDetail
              key="update"
              id={record[idField]}
              record={record}
              onSuccess={handleReload}
              trigger={
                <OperateBtn
                  title="编辑"
                  icon={<EditOutlined />}
                  operateText={updateProps?.operateText}
                />
              }
              action="update"
              {...detailProps}
            />
          );
        }
      }

      return null;
    },
    [detailProps, handleReload, idField, updateProps],
  );

  const deleteOperate = useCallback(
    (record) => {
      const hidden = deleteProps?.operateIsHidden?.(record) || false;
      if (!hidden) {
        const disabled = deleteProps?.operateIsDisabled?.(record) || false;
        return (
          <OperateDelete
            key="delete"
            name={record[deleteProps.nameIndex]}
            desc={deleteProps.desc}
            operateText={deleteProps.operateText}
            disabled={disabled}
            onDelete={getHandleDelete(record)}
          />
        );
      }
      return null;
    },
    [deleteProps, getHandleDelete],
  );

  const newColumns = useMemo(() => {
    const operateColumn = {
      title: '操作',
      fixed: 'right',
      align: 'center',
      width: operateColumnProps?.width || 120,
      render: function (_, record) {
        const btns: React.ReactNode[] = [];

        if (actions.includes('read')) {
          btns.push(readOperate(record));
        }

        if (actions.includes('read_detail')) {
          btns.push(readDetailOperate(record));
        }

        if (actions.includes('update')) {
          btns.push(updateOperate(record));
        }

        if (actions.includes('delete') && deleteProps) {
          btns.push(deleteOperate(record));
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
    operateColumnProps,
    actions,
    tableProps.columns,
    deleteProps,
    readOperate,
    readDetailOperate,
    updateOperate,
    deleteOperate,
  ]);

  return {
    columns: newColumns,
  };
}

export { useOperate };
