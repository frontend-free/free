import { useCallback } from 'react';

function KnowledgeRefBlock(props: any) {
  const { knowledgeRefs, onKnowledgeRef } = props;
  const id = props['data-id'];

  console.log('KnowledgeRefBlock', props);

  const handleClick = useCallback(() => {
    onKnowledgeRef?.(id);
  }, [id, onKnowledgeRef]);

  if (id) {
    const index = knowledgeRefs?.findIndex((ref: { id: string }) => ref.id === id);

    // 没有数据的时候显示 id
    if (index === -1 || index === undefined) {
      return <span>[^knowledge:{id}]</span>;
    }

    return (
      <span
        data-id={id}
        onClick={handleClick}
        className="markdown-body-block-knowledge-ref mx-1 h-[16px] min-w-[16px] cursor-pointer rounded-full border border-blue-500 text-center text-[12px] text-blue-600"
      >
        {index + 1}
      </span>
    );
  }

  return (
    <span className="markdown-body-block-knowledge-ref-source" onClick={handleClick}>
      来源&gt;&gt;
    </span>
  );
}

function processWithKnowledgeRef(text: string, knowledgeRefs?: { id: string; title: string }[]) {
  // 匹配 [^knowledge:X-Y] 格式
  const knowledgeRefRegex = /\[\^knowledge:(\d+-\d+)\]/g;

  let count = 0;
  let newText = text.replace(knowledgeRefRegex, (_match, id) => {
    count++;
    return `<knowledge-ref data-id="${id}">${id}</knowledge-ref>`;
  });

  if (count > 0 && knowledgeRefs && knowledgeRefs.length > 0) {
    newText = `${newText}\n<knowledge-ref>来源&gt;&gt;</knowledge>`;
  }

  return newText;
}

export { KnowledgeRefBlock, processWithKnowledgeRef };
