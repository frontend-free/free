import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import type { DataNode } from 'antd/es/tree';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { OperateDelete } from '../crud/crud_delete';
import { FileCard } from '../file';
import type { TreeProps } from './tree';
import { Tree } from './tree';

type FileTreeAction = 'create' | 'update' | 'delete';

interface FileTreeProps<D extends DataNode> extends TreeProps<D> {
  actions?: FileTreeAction[];
  requestCreateByValues?: (values: { key?: string; title: string }) => Promise<false | void>;
  requestUpdateByValues?: (values: { key: string; title: string }) => Promise<false | void>;
  requestDeleteByRecord?: (values: { key: string }) => Promise<void>;
}

function Detail<D extends DataNode>({
  action,
  nodeData,
  requestCreateByValues,
  requestUpdateByValues,
  trigger,
}: {
  action: FileTreeAction;
  nodeData?: D;
  requestCreateByValues?: FileTreeProps<D>['requestCreateByValues'];
  requestUpdateByValues?: FileTreeProps<D>['requestUpdateByValues'];
  trigger: React.ReactElement;
}) {
  const title = useMemo(() => {
    if (action === 'create') {
      return '新建';
    }

    return '编辑';
  }, [action]);

  return (
    <ModalForm
      title={title}
      trigger={trigger}
      initialValues={nodeData}
      onFinish={async (values) => {
        if (action === 'update') {
          const result = await requestUpdateByValues?.({ ...values });

          if (result !== false) {
            return true;
          }
        } else if (action === 'create') {
          const result = await requestCreateByValues?.({ ...values });

          if (result !== false) {
            return true;
          }
        }
      }}
      autoFocusFirstInput
      modalProps={{
        destroyOnHidden: true,
        width: 400,
      }}
    >
      <ProFormText name="key" hidden />
      <ProFormText name="title" label="目录名称" required rules={[{ required: true }]} />
    </ModalForm>
  );
}

function More({
  actions,
  nodeData,
  requestUpdateByValues,
  requestDeleteByRecord,
  requestCreateByValues,
}) {
  return (
    <Dropdown
      placement="bottomRight"
      menu={{
        items: [
          actions?.includes('create') && {
            label: (
              <Detail
                action="create"
                nodeData={{ key: nodeData.key }}
                requestCreateByValues={(values) => requestCreateByValues?.({ ...values })}
                trigger={<div>新建子目录</div>}
              />
            ),
            key: 'create',
          },
          actions?.includes('update') && {
            label: (
              <Detail
                action="update"
                nodeData={nodeData}
                requestUpdateByValues={(values) => requestUpdateByValues?.({ ...values })}
                trigger={<div>编辑</div>}
              />
            ),
            key: 'update',
          },
          actions?.includes('delete') && {
            label: (
              <OperateDelete
                name={nodeData.title}
                onDelete={() => requestDeleteByRecord?.({ key: nodeData.key })}
              />
            ),
            key: 'delete',
          },
        ].filter(Boolean),
      }}
    >
      <div onClick={(e) => e.preventDefault()}>
        <MoreOutlined />
      </div>
    </Dropdown>
  );
}

function FileTree<D extends DataNode>(props: FileTreeProps<D>) {
  const titleExtra = useMemo(() => {
    if (!props.actions?.includes('create')) {
      return null;
    }

    return (
      <Detail
        action="create"
        trigger={<PlusOutlined />}
        requestCreateByValues={props.requestCreateByValues}
      />
    );
  }, [props.actions, props.requestCreateByValues]);

  const titleRender = useCallback(
    (nodeData) => {
      console.log(nodeData);
      const hasMore = props.actions?.includes('update') || props.actions?.includes('delete');
      return (
        <div className="group flex gap-1">
          {nodeData.children ? (
            <FileCard.FileIcon isDirectory className="text-base" />
          ) : (
            <FileCard.FileIcon name={nodeData.title} className="text-base" />
          )}
          <div className="flex-1 truncate">{nodeData.title}</div>
          <div className={classNames('text-desc', { 'group-hover:hidden': hasMore })}>
            {nodeData.children?.length || 0}
          </div>
          {hasMore && (
            <div className="hidden group-hover:block">
              <More
                actions={props.actions}
                nodeData={nodeData}
                requestCreateByValues={props.requestCreateByValues}
                requestUpdateByValues={props.requestUpdateByValues}
                requestDeleteByRecord={props.requestDeleteByRecord}
              />
            </div>
          )}
        </div>
      );
    },
    [
      props.actions,
      props.requestCreateByValues,
      props.requestDeleteByRecord,
      props.requestUpdateByValues,
    ],
  );

  return (
    <Tree
      titleExtra={titleExtra}
      {...props}
      treeProps={{
        titleRender,
        ...props.treeProps,
        className: classNames('fec-file-tree', props.treeProps?.className),
      }}
    />
  );
}

export { FileTree };
export type { FileTreeProps };
