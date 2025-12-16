import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { MoreOutlined, PlusOutlined } from '@fe-free/icons';
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
  /** 注意，没法控制 title 区域的添加（由 actions 来控制） */
  createProps?: {
    operateIsDisabled?: (nodeData: D) => boolean;
    operateIsHidden?: (nodeData: D) => boolean;
  };
  updateProps?: {
    operateIsDisabled?: (nodeData: D) => boolean;
    operateIsHidden?: (nodeData: D) => boolean;
  };
  deleteProps?: {
    operateIsDisabled?: (nodeData: D) => boolean;
    operateIsHidden?: (nodeData: D) => boolean;
  };

  renderTitleRight?: (nodeData: D) => React.ReactNode;
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
      layout="horizontal"
      labelCol={{ span: 6 }}
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
  createProps,
  updateProps,
  deleteProps,
}) {
  const isCreateDisabled = createProps?.operateIsDisabled?.(nodeData);
  const isCreateHidden = createProps?.operateIsHidden?.(nodeData);
  const isUpdateDisabled = updateProps?.operateIsDisabled?.(nodeData);
  const isUpdateHidden = updateProps?.operateIsHidden?.(nodeData);
  const isDeleteDisabled = deleteProps?.operateIsDisabled?.(nodeData);
  const isDeleteHidden = deleteProps?.operateIsHidden?.(nodeData);

  const menuItems = [
    actions?.includes('create') &&
      !isCreateHidden && {
        label: isCreateDisabled ? (
          <div className="cursor-not-allowed text-03">新建子目录</div>
        ) : (
          <Detail
            action="create"
            nodeData={{ key: nodeData.key }}
            requestCreateByValues={(values) => requestCreateByValues?.({ ...values })}
            trigger={<div>新建子目录</div>}
          />
        ),
        key: 'create',
      },
    actions?.includes('update') &&
      !isUpdateHidden && {
        label: isUpdateDisabled ? (
          <div className="cursor-not-allowed text-03">编辑</div>
        ) : (
          <Detail
            action="update"
            nodeData={nodeData}
            requestUpdateByValues={(values) => requestUpdateByValues?.({ ...values })}
            trigger={<div>编辑</div>}
          />
        ),
        key: 'update',
      },
    actions?.includes('delete') &&
      !isDeleteHidden && {
        label: isDeleteDisabled ? (
          <div className="cursor-not-allowed text-03">删除</div>
        ) : (
          <OperateDelete
            name={nodeData.title}
            operateText="删除"
            onDelete={() => requestDeleteByRecord?.({ key: nodeData.key })}
          />
        ),
        key: 'delete',
      },
  ].filter(Boolean);

  if (menuItems.length === 0) {
    return null;
  }

  return (
    <Dropdown
      placement="bottomRight"
      menu={{
        items: menuItems,
      }}
    >
      <div onClick={(e) => e.preventDefault()}>
        <MoreOutlined />
      </div>
    </Dropdown>
  );
}

function FileTree<D extends DataNode>(props: FileTreeProps<D>) {
  const {
    actions,
    requestCreateByValues,
    requestUpdateByValues,
    requestDeleteByRecord,
    createProps,
    updateProps,
    deleteProps,
    renderTitleRight,
    treeProps,
  } = props;

  const titleExtra = useMemo(() => {
    if (!actions?.includes('create')) {
      return null;
    }

    return (
      <Detail
        action="create"
        trigger={<PlusOutlined className="text-base" />}
        requestCreateByValues={requestCreateByValues}
      />
    );
  }, [actions, requestCreateByValues]);

  const titleRender = useCallback(
    (nodeData) => {
      const hasMore = actions?.includes('update') || actions?.includes('delete');
      return (
        <div className="group flex items-center gap-1">
          {nodeData.children ? (
            <FileCard.FileIcon isDirectory className="text-base" />
          ) : (
            <FileCard.FileIcon
              name={nodeData.originData?.title || nodeData.title}
              className="text-base"
            />
          )}
          <div className="flex-1 truncate">{nodeData.title}</div>
          <div className={classNames({ 'group-hover:hidden': hasMore })}>
            {renderTitleRight?.(nodeData)}
          </div>
          {hasMore && (
            <div className="hidden group-hover:block">
              <More
                actions={actions}
                nodeData={nodeData}
                requestCreateByValues={requestCreateByValues}
                requestUpdateByValues={requestUpdateByValues}
                requestDeleteByRecord={requestDeleteByRecord}
                createProps={createProps}
                updateProps={updateProps}
                deleteProps={deleteProps}
              />
            </div>
          )}
        </div>
      );
    },
    [
      actions,
      createProps,
      deleteProps,
      renderTitleRight,
      requestCreateByValues,
      requestDeleteByRecord,
      requestUpdateByValues,
      updateProps,
    ],
  );

  return (
    <Tree
      titleExtra={titleExtra}
      size="large"
      {...props}
      treeProps={{
        titleRender,
        ...treeProps,
        className: classNames('fec-file-tree', treeProps?.className),
      }}
    />
  );
}

export { FileTree };
export type { FileTreeProps };
