import type { ProFormItemProps } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useState } from 'react';
import type { EditorJSONProps } from '../editor_json';
import { EditorJSON } from '../editor_json';

interface JSONModalProps extends EditorJSONProps {
  /** 默认 查看 */
  title?: string;
}

function Render(text, props: ProFormItemProps<JSONModalProps>) {
  const { title = '查看' } = props.fieldProps || {};

  const [show, setShow] = useState(false);

  let jsonText = text;

  if (!text) {
    return <div>-</div>;
  }

  try {
    jsonText = JSON.stringify(JSON.parse(text), null, 2);
  } catch (e) {
    console.error(e, text);
  }

  return (
    <>
      <a onClick={() => setShow(true)}>{title}</a>
      <Modal
        title={title}
        open={show}
        onCancel={() => setShow(false)}
        onOk={() => setShow(false)}
        cancelButtonProps={{
          style: {
            display: 'none',
          },
        }}
      >
        <div className="h-[500px]">
          <EditorJSON value={jsonText} readonly />
        </div>
      </Modal>
    </>
  );
}

const jsonModalRender = {
  render: Render,
  renderFormItem: () => <></>,
};

export { jsonModalRender };
