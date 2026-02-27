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
        <div className="flex-1 truncate">{text}</div>
        <span className="text-primary min-w-0">查看</span>
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
          width={900}
        >
          <div>
            <Markdown content={text} />
          </div>
        </Modal>
      )}
    </>
  );
}

const markdownModalRender = {
  render: Render,
  formItemRender: () => <></>,
};

export { markdownModalRender };
