import type { ActionType } from '@ant-design/pro-components';
import { Button } from 'antd';
import classNames from 'classnames';
import { useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CRUDDetail } from './crud_detail';
import './style.scss';
import { getTableScroll, Table } from './table';
import type { CRUDProps } from './types';
import { useNoColumn } from './use_no_column';
import { useOperate } from './use_operate';
import { useRowSelection } from './use_row_selection';
import { useTips } from './use_tips';

function CRUD<DataSource extends Record<string, any> = any, Key extends string | number = string>(
  props: CRUDProps<DataSource, Key>,
) {
  const {
    actions,
    tableProps,
    createButton,
    readProps,
    detailForm,
    requestGetByRecord,
    createProps,
    requestCreateByValues,
    updateProps,
    requestUpdateByValues,
    detailFormInstance,
    requestDeleteByRecords,
    batchActions: originBatchActions,
    fullPage,
    className,
    ref,
  } = props;

  const { t } = useTranslation();
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
      requestUpdateByValues,
      detailFormInstance,
      createProps,
      readProps,
      updateProps,
    ],
  );

  const handleReload = useCallback(() => {
    actionRef.current?.reload();
  }, []);

  const { columns: operateColumns } = useOperate(props, detailProps, actionRef);
  const { columns: noColumnColumns, request: noRequest } = useNoColumn({
    request: tableProps.request,
    columns: operateColumns,
  });

  const newColumns = noColumnColumns;
  const newRequest = noRequest;

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
        btnText: t('core.crud.batchDelete', '批量删除'),
        danger: true,
        onClick: async (_, { selectedRows }) => {
          await requestDeleteByRecords(selectedRows);
        },
      };
      bas.push(batchDeleteAction);
    }

    return bas;
  }, [actions, originBatchActions, requestDeleteByRecords, t]);

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
          ...getTableScroll(newColumns),
          y: '100%',
        },
      };
    }

    return tableProps;
  }, [fullPage, tableProps, newColumns]);

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
        request={newRequest}
        rowSelection={rowSelection}
        tableAlertRender={tableAlertRender}
        tableAlertOptionRender={tableAlertOptionRender}
      />
    </div>
  );
}

export { CRUD };
