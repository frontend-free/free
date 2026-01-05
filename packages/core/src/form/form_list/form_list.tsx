import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { Input, InputNumber, Switch } from 'antd';

import { uniq, uniqBy } from 'lodash-es';
import { useTranslation } from 'react-i18next';
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
    <ProFormListHelper
      value={props.value}
      onChange={props.onChange}
      getAdd={() => {
        if (isValueLabel) {
          return { value: '', label: '' };
        }
        return '';
      }}
    >
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
    <ProFormListHelper
      value={props.value}
      onChange={props.onChange}
      getAdd={() => {
        if (isValueLabel) {
          return { value: 0, label: '0' };
        }
        return 0;
      }}
    >
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

function ProFormListText(props: ProFormItemProps<ListTextProps>) {
  const { fieldProps, ...rest } = props;
  const { t } = useTranslation();

  return (
    <ProForm.Item
      {...rest}
      required={props.required ?? true}
      rules={[
        ...(props.rules || []),
        { required: props.required ?? true },
        {
          validator: async (_, value) => {
            if (value) {
              if (fieldProps?.isValueLabel) {
                if (value?.some((item) => item.value === undefined || item.value === '')) {
                  return Promise.reject(t('core.formList.emptyOption', '存在空选项'));
                }
                // 不能有重复的 value
                if (uniqBy(value, 'value').length !== value.length) {
                  return Promise.reject(t('core.formList.duplicateValue', '不能有重复'));
                }
              } else {
                if (value?.some((item) => item === undefined || item === '')) {
                  return Promise.reject(t('core.formList.emptyOption', '存在空选项'));
                }
                // 不能有重复的 value
                if (uniq(value).length !== value.length) {
                  return Promise.reject(t('core.formList.duplicateValue', '不能有重复'));
                }
              }
            }

            return Promise.resolve();
          },
        },
      ]}
    >
      <ListText {...fieldProps} />
    </ProForm.Item>
  );
}

function ProFormListNumber(props: ProFormItemProps<ListNumberProps>) {
  const { fieldProps, ...rest } = props;
  const { t } = useTranslation();

  return (
    <ProForm.Item
      {...rest}
      required={props.required ?? true}
      rules={[
        ...(props.rules || []),
        { required: props.required ?? true },
        {
          validator: async (_, value) => {
            if (value) {
              if (fieldProps?.isValueLabel) {
                if (value?.some((item) => item.value === undefined || item.value === null)) {
                  return Promise.reject(t('core.formList.emptyOption', '存在空选项'));
                }
                // 不能有重复的 value
                if (uniqBy(value, 'value').length !== value.length) {
                  return Promise.reject(t('core.formList.duplicateValue', '不能有重复'));
                }
              } else {
                if (value?.some((item) => item === undefined || item === null)) {
                  return Promise.reject(t('core.formList.emptyOption', '存在空选项'));
                }
                // 不能有重复的 value
                if (uniq(value).length !== value.length) {
                  return Promise.reject(t('core.formList.duplicateValue', '不能有重复'));
                }
              }
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <ListNumber {...fieldProps} />
    </ProForm.Item>
  );
}

function ProFormListBoolean(props: ProFormItemProps<ListBooleanProps>) {
  const { fieldProps, ...rest } = props;
  return (
    <ProForm.Item {...rest} required={props.required ?? true}>
      <ListBoolean {...fieldProps} />
    </ProForm.Item>
  );
}

export {
  ListBoolean,
  ListNumber,
  ListText,
  ProFormListBoolean,
  ProFormListNumber,
  ProFormListText,
};
