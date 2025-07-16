import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { EditorProps } from '../editor';
import { Editor } from '../editor';

function JavascriptItem(props: EditorProps) {
  return (
    <div style={{ height: '300px' }}>
      <Editor {...props} language="javascript" />
    </div>
  );
}

function ProFormJavascript(props: ProFormItemProps<EditorProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <JavascriptItem {...(fieldProps as EditorProps)} />
    </ProForm.Item>
  );
}

export { ProFormJavascript };
