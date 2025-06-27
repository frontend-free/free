import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { EditorJSONProps } from '../editor_json';
import { EditorJSON } from '../editor_json';

function JSONItem(props: EditorJSONProps) {
  return (
    <div style={{ height: '300px' }}>
      <EditorJSON {...props} />
    </div>
  );
}

function ProFormJSON(props: ProFormItemProps<EditorJSONProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <JSONItem {...(fieldProps as EditorJSONProps)} />
    </ProForm.Item>
  );
}

export { ProFormJSON };
