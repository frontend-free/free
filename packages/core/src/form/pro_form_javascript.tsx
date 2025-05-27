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
  // 没搞明白 cacheFormSwr, proFieldKey, onBlur，先这样处理
  /* eslint-disable-next-line */
  const { fieldProps, readonly, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <JavascriptItem readonly={readonly} {...(fieldProps as EditorJavascriptProps)} />
    </ProForm.Item>
  );
}

export { ProFormJavascript };
