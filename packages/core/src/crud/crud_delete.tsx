import { useCallback } from 'react';
import { Modal } from 'antd';

interface Params {
  name: string;
  desc?: string;
  operateText?: string;
  onDelete: () => Promise<any>;
}
function useDelete(params: Params) {
  const { name, desc, onDelete } = params;

  const doDelete = useCallback(() => {
    Modal.confirm({
      title: `确认删除 “${name}” 吗？`,
      content: desc || '删除后不可恢复，请谨慎操作',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        onDelete();
      },
    });
  }, [name, desc, onDelete]);

  return {
    doDelete,
  };
}

function OperateDelete(props: Params) {
  const { name, desc, onDelete, operateText } = props;
  const handleClick = useCallback(() => {
    Modal.confirm({
      title: `确认删除 “${name}” 吗？`,
      content: desc || '删除后不可恢复，请谨慎操作',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        onDelete();
      },
    });
  }, [name, desc, onDelete]);

  return (
    <a style={{ color: 'red' }} onClick={handleClick}>
      {operateText || '删除'}
    </a>
  );
}

export { useDelete, OperateDelete };
