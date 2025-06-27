import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { EditorJavascriptProps } from '../editor_javascript';
import { EditorJavascript } from '../editor_javascript';

function JavascriptItem(props: EditorJavascriptProps) {
  return (
    <div style={{ height: '300px' }}>
      <EditorJavascript {...props} />
    </div>
  );
}

function ProFormJavascript(props: ProFormItemProps<EditorJavascriptProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <JavascriptItem {...(fieldProps as EditorJavascriptProps)} />
    </ProForm.Item>
  );
}

export { ProFormJavascript };
