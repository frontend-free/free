import { EditOutlined, EyeOutlined } from '@fe-free/icons';
import { message, Tooltip } from 'antd';
import { isString } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { OperateDelete } from './crud_delete';
import { CRUDDetail } from './crud_detail';
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
    [actionRef, deleteProps, requestDeleteByRecord],
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
            <Tooltip title={readProps?.operateText || '查看'}>
              <span key="read" className="cursor-not-allowed text-lg text-03">
                {readProps?.operateText || <EyeOutlined />}
              </span>
            </Tooltip>
          );
        } else {
          return (
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
            <Tooltip title={readProps?.operateText || '查看'}>
              <span key="read" className="cursor-not-allowed text-lg text-03">
                {readProps?.operateText || <EyeOutlined />}
              </span>
            </Tooltip>
          );
        } else {
          return (
            <Tooltip title={readProps?.operateText || '查看'}>
              <Link
                key="read_detail"
                to={`./detail/${record[detailIdIndex || 'id']}`}
                target={readProps?.target}
                className="text-lg"
              >
                {readProps?.operateText || <EyeOutlined />}
              </Link>
            </Tooltip>
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
            <Tooltip title={updateProps?.operateText || '编辑'}>
              <span key="update" className="cursor-not-allowed text-lg text-03">
                {updateProps?.operateText || <EditOutlined />}
              </span>
            </Tooltip>
          );
        } else {
          return (
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
