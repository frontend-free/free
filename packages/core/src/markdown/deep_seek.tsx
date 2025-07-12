function DeepSeekBlock(props: { children: string }) {
  return (
    <div className="markdown-body-deep-seek-block relative mb-3 pl-[14px] text-[#00000099] text-[14px]">
      <div className="top=0 absolute left-0 h-full w-[2px] bg-[#00000014]" />
      {props.children === '<br/>' ? undefined : props.children}
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
