import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';

const emptyArr = [];

function Edit<T>(props: {
  children: JSX.Element;
  values?: T;
  onChange: (values: T) => void;
  detailForm: JSX.Element;
  editForm?: any;
  disabledAddFormSubmitter?: boolean;
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
      submitter={
        props.disabledAddFormSubmitter
          ? false
          : {
              render: (props, defaultDoms) => {
                return [
                  <div
                    key="cancel"
                    className="pr-[20px] w-[500px] pt-[12px]"
                    style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="custom-button-container">
                      {React.Children.map(defaultDoms, (dom) => {
                        return React.cloneElement(dom, {
                          className:
                            'w-[88px] h-[40px] text-base rounded-[0.5rem] ml-3' +
                            (dom.props?.className || ''),
                        });
                      })}
                    </div>
                  </div>,
                ];
              },
            }
      }
    >
      {props.detailForm}
    </ModalForm>
  );
}

interface ProFormListModalHelperProps<T> {
  value?: T[];
  onChange?: (value: T[]) => void;
  children: (props: { value?: T[]; item: T; index: number }) => React.ReactNode;
  readOnly?: boolean;
  detailForm: JSX.Element;
  // 如果 addForm 存在，则使用 addForm 作为添加按钮
  addForm?: JSX.Element;
  // 禁用添加的提交按钮
  disabledAddFormSubmitter?: boolean;

  disabledAdd?: boolean;
  // 触发添加
  addTrigger?: JSX.Element;

  editForm?: any;
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
            disabledAddFormSubmitter={props.disabledAddFormSubmitter}
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
