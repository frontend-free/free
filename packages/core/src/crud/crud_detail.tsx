import { DrawerForm, ProForm } from '@ant-design/pro-components';
import { message, Spin } from 'antd';
import classNames from 'classnames';
import { isString } from 'lodash-es';
import { useCallback, useMemo, useState } from 'react';
import type { CRUDProps } from './types';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type action = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

// 先不管类型
interface CRUDDetailProps
  extends Pick<
    CRUDProps,
    | 'requestGetByRecord'
    | 'createProps'
    | 'readProps'
    | 'requestCreateByValues'
    | 'updateProps'
    | 'requestUpdateById'
    | 'requestUpdateByValues'
    | 'detailForm'
    | 'detailFormInstance'
  > {
  action: action;
  id?: string;
  record?: any;
  trigger: any;
  /** 添加 or 修改 成功 */
  onSuccess?: () => void;
}

function CRUDDetail(props: CRUDDetailProps) {
  const {
    action,
    id,
    record,
    trigger,
    onSuccess,
    detailForm,
    requestGetByRecord,
    createProps,
    readProps,
    requestCreateByValues,
    updateProps,
    requestUpdateById,
    requestUpdateByValues,
    detailFormInstance,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(id ? true : false);
  const [form] = ProForm.useForm(detailFormInstance);

  const handleFinish = useCallback(
    async (values) => {
      try {
        let result;
        if (action === 'create' && requestCreateByValues) {
          result = await requestCreateByValues(values);

          let content = '新建成功';
          if (createProps?.successText) {
            content = isString(createProps.successText)
              ? createProps.successText
              : createProps.successText();
          }

          message.open({
            type: 'success',
            content,
          });
        }
        if (action === 'update' && (requestUpdateById || requestUpdateByValues)) {
          if (requestUpdateByValues) {
            result = await requestUpdateByValues(values);
          } else if (requestUpdateById) {
            result = await requestUpdateById({
              ...values,
              id,
            });
          }

          let content = '更新成功';
          if (updateProps?.successText) {
            content = isString(updateProps.successText)
              ? updateProps.successText
              : updateProps.successText();
          }

          message.open({
            type: 'success',
            content,
          });
        }

        // 刷新
        onSuccess?.();

        // false 则取消默认行为
        if (result !== false) {
          // 关闭弹窗
          return true;
        }
      } catch (e) {
        // 由于 onFinish 吃掉了 error，所以这里自行抛出到全局
        setTimeout(() => {
          throw e;
        }, 10);
      }
    },
    [
      action,
      requestCreateByValues,
      requestUpdateById,
      requestUpdateByValues,
      onSuccess,
      createProps,
      id,
      updateProps,
    ],
  );

  const handleOpenChange = useCallback(
    async (open) => {
      if (!open) {
        // 关闭重置
        form?.resetFields();
        setIsOpen(open);
        return;
      }

      setIsOpen(open);

      if (id) {
        setLoading(true);

        const d = await requestGetByRecord?.(record);

        form?.setFieldsValue(d);

        setLoading(false);
      }

      return;
    },
    [form, id, requestGetByRecord, record],
  );

  const children = useMemo(() => {
    if (!detailForm) {
      return null;
    }

    // 关闭的时候不需要 children
    if (!isOpen) {
      return null;
    }

    if (loading) {
      return (
        <div className="pt-[100px] flex justify-center">
          <Spin />
        </div>
      );
    }

    return (
      <div
        className={classNames('fec-crud-detail', `fec-crud-detail-action-${action}`, {
          'fec-crud-detail-hide-extra': action === 'read',
        })}
      >
        {detailForm({ readonly: action === 'read' && !!id }, { action })}
      </div>
    );
  }, [isOpen, loading, detailForm, action, id]);

  const drawerProps = useMemo(() => {
    return {
      destroyOnClose: true,
    };
  }, []);

  const title = useMemo(() => {
    if (action === 'create') {
      return '新建';
    }
    if (action === 'read') {
      return '查看';
    }
    if (action === 'update') {
      return '编辑';
    }

    return '';
  }, [action]);

  const submitter = useMemo(() => {
    const result = {
      searchConfig: {
        submitText: '确定',
        resetText: '取消',
      },
    };
    if (action === 'create') {
      if (createProps?.submitText) {
        result.searchConfig.submitText = createProps.submitText;
      }
      if (createProps?.resetText) {
        result.searchConfig.resetText = createProps.resetText;
      }
    } else if (action === 'read') {
      if (readProps?.submitText) {
        result.searchConfig.submitText = readProps.submitText;
      }
      if (readProps?.resetText) {
        result.searchConfig.resetText = readProps.resetText;
      }
    } else if (action === 'update') {
      if (updateProps?.submitText) {
        result.searchConfig.submitText = updateProps.submitText;
      }
      if (updateProps?.resetText) {
        result.searchConfig.resetText = updateProps.resetText;
      }
    }

    return result;
  }, [
    action,
    createProps?.resetText,
    createProps?.submitText,
    readProps?.resetText,
    readProps?.submitText,
    updateProps?.resetText,
    updateProps?.submitText,
  ]);

  return (
    <DrawerForm
      form={form}
      trigger={trigger}
      autoFocusFirstInput
      onFinish={handleFinish}
      onOpenChange={handleOpenChange}
      layout="vertical"
      readonly={action === 'read' && !!id}
      // 关闭销毁，否则会有很奇怪的 onFinish 闭包问题，怀疑 pro components bug
      drawerProps={drawerProps}
      title={title}
      submitter={submitter}
    >
      {children}
    </DrawerForm>
  );
}

export { CRUDDetail };
export type { CRUDDetailProps };
