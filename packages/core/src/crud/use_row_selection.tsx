import type { ActionType } from '@ant-design/pro-components';
import { App } from 'antd';
import type { MutableRefObject } from 'react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../button';
import type { CRUDProps } from './types';

function useRowSelection<DataSource, Key>({
  rowSelection: originRowSelection,
  batchActions,
  actionRef,
}: {
  rowSelection?: CRUDProps<DataSource, Key>['tableProps']['rowSelection'];
  batchActions?: CRUDProps<DataSource, Key>['batchActions'];
  actionRef?: MutableRefObject<ActionType | undefined>;
}) {
  const { modal } = App.useApp();
  const { t } = useTranslation();

  const rowSelection = useMemo(
    () => ({
      ...originRowSelection,
    }),
    [originRowSelection],
  );

  const tableAlertRender = useCallback(
    ({ selectedRowKeys, onCleanSelected }) => {
      return (
        <div>
          <span>
            {t('core.crud.selectedItems', '已选 {num} 项', { num: selectedRowKeys.length })}
            <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
              {t('core.crud.clearSelection', '取消选择')}
            </a>
          </span>
        </div>
      );
    },
    [t],
  );

  const tableAlertOptionRender = useCallback(
    ({ selectedRowKeys, selectedRows }) => {
      return (
        <div className="flex items-center gap-2">
          {batchActions?.map((action) => (
            <LoadingButton
              key={action.btnText}
              type="link"
              danger={action.danger}
              className="!px-0"
              disabled={selectedRowKeys.length === 0}
              onClick={async (event) => {
                if (action.danger) {
                  await new Promise((resolve) => {
                    modal.confirm({
                      title: t('core.crud.batchActionConfirm', '确定要执行 {action} 吗？', {
                        action: action.btnText,
                      }),
                      onOk: () => {
                        resolve(
                          action.onClick(event, {
                            selectedRowKeys,
                            selectedRows,
                          }),
                        );
                      },
                      onCancel: () => {
                        resolve(undefined);
                      },
                    });
                  });
                } else {
                  await action.onClick(event, {
                    selectedRowKeys,
                    selectedRows,
                  });
                }

                actionRef?.current?.reload();
              }}
            >
              {action.btnText}
            </LoadingButton>
          ))}
        </div>
      );
    },
    [actionRef, batchActions, modal, t],
  );

  if (!batchActions || batchActions.length === 0) {
    return {
      rowSelection: undefined,
      tableAlertRender: undefined,
      tableAlertOptionRender: undefined,
    };
  }

  return {
    rowSelection,
    tableAlertRender,
    tableAlertOptionRender,
  };
}

export { useRowSelection };
