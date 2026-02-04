import { Modal } from 'antd';
import { useState } from 'react';
import { Markdown } from '../markdown';

function Render(text) {
  const [show, setShow] = useState(false);

  if (!text) {
    return <div>-</div>;
  }

  return (
    <>
      <div onClick={() => setShow(true)} className="flex cursor-pointer items-center">
        <div className="truncate">{text}</div>
        <span className="text-primary">查看</span>
      </div>
      {show && (
        <Modal
          title="Markdown"
          open
          onCancel={() => setShow(false)}
          onOk={() => setShow(false)}
          cancelButtonProps={{
            style: {
              display: 'none',
            },
          }}
        >
          <div className="h-[500px]">
            <Markdown content={text} />
          </div>
        </Modal>
      )}
    </>
  );
}

const markdownModalRender = {
  render: Render,
  renderFormItem: () => <></>,
};

export { markdownModalRender };
