import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { RecordArrayProps, RecordProps } from '../record';
import { Record, RecordArray } from '../record';

function ProFormRecord(props: ProFormItemProps<RecordProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item
      {...rest}
      rules={[
        ...(props.rules || []),
        {
          validator: async (_, value) => {
            const values = Object.values(value || {});
            if (values.length && values.filter(Boolean).length !== values.length) {
              return Promise.reject('选项不能为空');
            }

            return Promise.resolve();
          },
        },
      ]}
    >
      <Record {...(fieldProps as RecordProps)} />
    </ProForm.Item>
  );
}

function ProFormRecordArray(props: ProFormItemProps<RecordArrayProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item
      {...rest}
      rules={[
        ...(props.rules || []),
        {
          validator: async (_, value) => {
            console.log('value', value);
            if (value?.some((item) => item.value === undefined || item.key === undefined)) {
              return Promise.reject('选项不能为空');
            }

            return Promise.resolve();
          },
        },
      ]}
    >
      <RecordArray {...(fieldProps as RecordArrayProps)} />
    </ProForm.Item>
  );
}

export { ProFormRecord, ProFormRecordArray };
