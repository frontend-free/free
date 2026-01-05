import { DeleteOutlined } from '@fe-free/icons';
import { App } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { OperateBtn } from './helper';

interface Params {
  name: string;
  desc?: string;
  operateText?: string;
  onDelete: () => Promise<any>;
  disabled?: boolean;
}

function useDelete(params: Params) {
  const { name, desc, onDelete } = params;
  const { modal } = App.useApp();
  const { t } = useTranslation();

  const doDelete = useCallback(async () => {
    await new Promise((resolve) => {
      modal.confirm({
        title: t('core.crud.deleteConfirm', '确认删除 "{name}" 吗？', { name }),
        content: desc || t('core.crud.deleteWarning', '删除后不可恢复，请谨慎操作'),
        okText: t('core.crud.confirm', '确定'),
        cancelText: t('core.crud.cancel', '取消'),
        onOk: () => {
          resolve(onDelete());
        },
        onCancel: () => {
          resolve(undefined);
        },
      });
    });
  }, [modal, name, desc, onDelete, t]);

  return {
    doDelete,
  };
}

function OperateDelete(props: Params) {
  const { name, desc, onDelete, operateText, disabled } = props;
  const { doDelete } = useDelete({ name, desc, onDelete, operateText });
  const { t } = useTranslation();

  return (
    <OperateBtn
      title={t('core.crud.delete', '删除')}
      icon={<DeleteOutlined />}
      operateText={operateText}
      disabled={disabled}
      onClick={doDelete}
    />
  );
}

export { OperateDelete, useDelete };
