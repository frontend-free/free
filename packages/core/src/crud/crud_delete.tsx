import { Modal } from 'antd';
import { useCallback } from 'react';

interface Params {
  name: string;
  desc?: string;
  operateText?: string;
  onDelete: () => Promise<any>;
}

function useDelete(params: Params) {
  const { name, desc, onDelete } = params;

  const doDelete = useCallback(async () => {
    await new Promise((resolve) => {
      Modal.confirm({
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
  }, [name, desc, onDelete]);

  return {
    doDelete,
  };
}

function OperateDelete(props: Params) {
  const { name, desc, onDelete, operateText } = props;
  const { doDelete } = useDelete({ name, desc, onDelete, operateText });

  return (
    <a style={{ color: 'red' }} onClick={doDelete}>
      {operateText || '删除'}
    </a>
  );
}

export { OperateDelete, useDelete };
