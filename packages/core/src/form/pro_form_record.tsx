import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { RecordArrayProps, RecordProps } from '../record';
import { Record, RecordArray } from '../record';

function ProFormRecord(props: ProFormItemProps<RecordProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <Record {...(fieldProps as RecordProps)} />
    </ProForm.Item>
  );
}

function ProFormRecordArray(props: ProFormItemProps<RecordArrayProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <RecordArray {...(fieldProps as RecordArrayProps)} />
    </ProForm.Item>
  );
}

export { ProFormRecord, ProFormRecordArray };
