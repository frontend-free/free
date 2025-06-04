import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { EditorProps } from '../editor';
import { Editor } from '../editor';

function EditorItem(props: EditorProps) {
  return <Editor height="300px" {...props} />;
}

function ProFormEditor(props: ProFormItemProps<EditorProps>) {
  /* eslint-disable-next-line */
  const { fieldProps, readonly, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <EditorItem readOnly={readonly} {...(fieldProps as EditorProps)} />
    </ProForm.Item>
  );
}

export { ProFormEditor };
