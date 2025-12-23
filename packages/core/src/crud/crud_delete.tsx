import { DeleteOutlined } from '@fe-free/icons';
import { App } from 'antd';
import { useCallback } from 'react';
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

  const doDelete = useCallback(async () => {
    await new Promise((resolve) => {
      modal.confirm({
        title: `确认删除 “${name}” 吗？`,
        content: desc || '删除后不可恢复，请谨慎操作',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          resolve(onDelete());
        },
        onCancel: () => {
          resolve(undefined);
        },
      });
    });
  }, [modal, name, desc, onDelete]);

  return {
    doDelete,
  };
}

function OperateDelete(props: Params) {
  const { name, desc, onDelete, operateText, disabled } = props;
  const { doDelete } = useDelete({ name, desc, onDelete, operateText });

  return (
    <OperateBtn
      title="删除"
      icon={<DeleteOutlined />}
      operateText={operateText}
      disabled={disabled}
      onClick={doDelete}
    />
  );
}

export { OperateDelete, useDelete };
