import { DownOutlined, UpOutlined } from '@fe-free/icons';
import { useState } from 'react';

function DeepSeekBlock(props: { children: string }) {
  const [show, setShow] = useState(true);

  return (
    <div className="markdown-body-deep-seek-block mb-3 flex flex-col gap-2 text-[14px] text-[#00000099]">
      <div
        className="cursor-pointer"
        onClick={() => {
          setShow((v) => !v);
        }}
      >
        深度思考 {show ? <UpOutlined /> : <DownOutlined />}
      </div>
      {show && (
        <div className="relative pl-[15px]">
          <div className="top=0 absolute left-0 h-full w-[2px] bg-[#00000014]" />
          {props.children === '<br/>' ? undefined : props.children}
        </div>
      )}
    </div>
  );
}

function processWithDeepSeek(text: string) {
  // 开始 <think> 才算开始
  if (!text.startsWith('<think>')) {
    return text;
  }

  const [left, right] = text.split('</think>');

  let newText = text;

  // 如果 think 部分是 <think>\n\n</think>，相当于没有，则直接返回 right
  if (text.startsWith('<think>\n\n</think>')) {
    newText = right;
  }
  // 否则做一些处理
  else {
    newText =
      left
        .replace('<think>\n', '<think>')
        .replace('\n</think>', '</think>')
        .replace(/\n/g, '<br/>') + (right || '');
  }

  return newText;
}

export { DeepSeekBlock, processWithDeepSeek };
