import type { ComponentProps } from '@ant-design/x-markdown';
import { memo, useEffect, useState } from 'react';
import { MessageThinkOfDeepSeek } from '../messages';

const ThinkComponent = memo((props: ComponentProps) => {
  const [title, setTitle] = useState('思考中...');
  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    if (props.streamStatus === 'done') {
      setTitle('完成思考');
      setLoading(false);
      setExpand(false);
    }
  }, [props.streamStatus]);

  return (
    <MessageThinkOfDeepSeek
      title={title}
      loading={loading}
      expanded={expand}
      onClick={() => setExpand(!expand)}
    >
      {props.children}
    </MessageThinkOfDeepSeek>
  );
});

function compatibleWithDeepSeek(text: string) {
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

export { compatibleWithDeepSeek, ThinkComponent };
