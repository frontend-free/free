import { ModalForm } from '@ant-design/pro-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@fe-free/icons';
import { Button } from 'antd';
import React from 'react';

const emptyArr = [];

interface ProFormListModalHelperProps<T> {
  value?: T[];
  onChange?: (value: T[]) => void;
  children: (props: { value?: T[]; item: T; index: number }) => React.ReactNode;
  readOnly?: boolean;
  detailForm: JSX.Element;
  // 如果 addForm 存在，则使用 addForm 作为添加按钮
  addForm?: JSX.Element;
  // 禁用添加的提交按钮
  disabledSubmitter?: boolean;
  // 禁用添加
  disabledAdd?: boolean;
  // 禁用编辑
  disabledEdit?: boolean;
  // 禁用删除
  disabledDelete?: boolean;
  // 触发添加
  addTrigger?: JSX.Element;
  editForm?: any;
}

function Edit<T>(props: {
  children: JSX.Element;
  values?: T;
  onChange: (values: T) => void;
  detailForm: JSX.Element;
  editForm?: any;
  disabledSubmitter?: boolean;
}) {
  const handleFinish = async (newValues) => {
    props.onChange(newValues as T);

    return true;
  };

  return (
    <ModalForm
      title={props.values ? '编辑' : '添加'}
      trigger={props.children}
      onFinish={handleFinish}
      formRef={props?.editForm}
      initialValues={props.values || undefined}
      submitter={props.disabledSubmitter ? false : undefined}
      modalProps={{
        destroyOnHidden: true,
      }}
    >
      {props.detailForm}
    </ModalForm>
  );
}

function ProFormListModalHelper<T = any>(props: ProFormListModalHelperProps<T>) {
  const options = props.value || emptyArr;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {options.map((item, index) => {
          return (
            <div key={index} className="group relative">
              <div className="flex-1">
                {props.children({
                  value: props.value,
                  item,
                  index,
                })}
              </div>
              {!props.readOnly && (
                <div className="absolute right-1 top-1 hidden items-center bg-white group-hover:flex">
                  {!props.disabledEdit && (
                    <Edit<T>
                      values={item}
                      onChange={(newValues) => {
                        const newOptions = [...options];
                        newOptions[index] = newValues;
                        props.onChange?.(newOptions);
                      }}
                      detailForm={props.detailForm}
                      editForm={props?.editForm}
                    >
                      <Button icon={<EditOutlined />} type="text" size="small" />
                    </Edit>
                  )}
                  {!props.disabledDelete && (
                    <Button
                      icon={<DeleteOutlined />}
                      type="text"
                      size="small"
                      onClick={() => {
                        const newOptions = [...options];
                        newOptions.splice(index, 1);
                        props.onChange?.(newOptions);
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!props.readOnly && !props.disabledAdd && (
        <div className="flex justify-center">
          <Edit<T>
            onChange={(newValues) => {
              props.onChange?.([...options, newValues]);
            }}
            detailForm={props.addForm || props.detailForm}
            editForm={props?.editForm}
            disabledSubmitter={props.disabledSubmitter}
          >
            {props.addTrigger || (
              <Button size="small" icon={<PlusOutlined />}>
                添加
              </Button>
            )}
          </Edit>
        </div>
      )}
    </div>
  );
}

export { ProFormListModalHelper };
export type { ProFormListModalHelperProps };
