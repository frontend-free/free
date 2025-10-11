import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { Input, InputNumber, Switch } from 'antd';

import { ProFormListHelper } from './form_list_helper';

interface ListTextProps {
  value?: (string | { value: string; label: string })[];
  onChange?: (value: (string | { value: string; label: string })[]) => void;
  isValueLabel?: boolean;
  placeholder?: string;
}

function ListText(props: ListTextProps) {
  const { isValueLabel, placeholder } = props;
  return (
    <ProFormListHelper value={props.value} onChange={props.onChange} getAdd={() => ''}>
      {({ item, onItemChange }) => {
        // @ts-ignore
        const value = isValueLabel ? item.value : item;
        return (
          <Input
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              if (isValueLabel) {
                onItemChange({ value: e.target.value, label: e.target.value });
              } else {
                onItemChange(e.target.value);
              }
            }}
          />
        );
      }}
    </ProFormListHelper>
  );
}

interface ListNumberProps {
  value?: (number | { value: number; label: string })[];
  onChange?: (value: (number | { value: number; label: string })[]) => void;
  isValueLabel?: boolean;
  placeholder?: string;
  precision?: number;
}

function ListNumber(props: ListNumberProps) {
  const { isValueLabel, placeholder, precision } = props;
  return (
    <ProFormListHelper value={props.value} onChange={props.onChange} getAdd={() => 0}>
      {({ item, onItemChange }) => {
        // @ts-ignore
        const value = isValueLabel ? item.value : item;
        return (
          <InputNumber
            value={value}
            onChange={(nv) => {
              if (isValueLabel) {
                onItemChange({ value: nv, label: nv.toString() });
              } else {
                onItemChange(nv);
              }
            }}
            precision={precision}
            style={{ width: '100%' }}
            placeholder={placeholder}
          />
        );
      }}
    </ProFormListHelper>
  );
}

interface ListBooleanProps {
  value?: boolean[];
  onChange?: (value: boolean[]) => void;
}

function ListBoolean(props: ListBooleanProps) {
  return (
    <ProFormListHelper value={props.value} onChange={props.onChange} getAdd={() => false}>
      {({ item, onItemChange }) => {
        return <Switch {...props} value={item} onChange={(checked) => onItemChange(checked)} />;
      }}
    </ProFormListHelper>
  );
}

function ProFormListBase(props) {
  const { fieldProps, ...rest } = props;

  const isValueLabel = fieldProps?.isValueLabel;

  return (
    <ProForm.Item
      {...rest}
      required={props.required ?? true}
      rules={[
        ...(props.rules || []),
        // { required: true },
        {
          validator: async (_, value) => {
            if (isValueLabel) {
              if (value?.some((item) => item.value === undefined)) {
                return Promise.reject('每个选项都不能为空');
              }
            } else {
              if (value?.some((item) => item === undefined)) {
                return Promise.reject('每个选项都不能为空');
              }
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      {props.children}
    </ProForm.Item>
  );
}

function ProFormListText(props: ProFormItemProps<ListTextProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProFormListBase {...rest}>
      <ListText {...fieldProps} />
    </ProFormListBase>
  );
}

function ProFormListNumber(props: ProFormItemProps<ListNumberProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProFormListBase {...rest}>
      <ListNumber {...fieldProps} />
    </ProFormListBase>
  );
}

function ProFormListBoolean(props: ProFormItemProps<ListBooleanProps>) {
  const { fieldProps, ...rest } = props;
  return (
    <ProFormListBase {...rest}>
      <ListBoolean {...fieldProps} />
    </ProFormListBase>
  );
}

export { ProFormListBoolean, ProFormListNumber, ProFormListText };
