import { useCallback } from 'react';

function KnowledgeRefBlock(props: any) {
  const { knowledgeRefs, onKnowledgeRef } = props;
  const id = props['data-id'];

  const handleClick = useCallback(() => {
    onKnowledgeRef?.(id);
  }, [id, onKnowledgeRef]);

  if (id) {
    const index = knowledgeRefs?.findIndex((ref: { id: string }) => ref.id === id);

    // 没有数据的时候显示 id
    if (index === -1 || index === undefined) {
      return <span data-knowledge-ref-id={id} />;
    }

    return (
      <span
        data-knowledge-ref-id={id}
        onClick={handleClick}
        className="mx-1 inline-flex h-[15px] min-w-[15px] cursor-pointer items-center justify-center rounded-full border border-primary text-center text-[10px] text-primary"
      >
        {index + 1}
      </span>
    );
  }

  return (
    <span className="cursor-pointer text-primary" onClick={handleClick}>
      来源&gt;&gt;
    </span>
  );
}

function processWithKnowledgeRef(text: string, knowledgeRefs?: { id: string }[]) {
  // 匹配 [^knowledge:X-Y] 格式
  const knowledgeRefRegex = /\[\^knowledge:(\d+-\d+)\]/g;

  let count = 0;
  let newText = text.replace(knowledgeRefRegex, (_match, id) => {
    count++;
    return `<knowledge-ref data-id="${id}">${id}</knowledge-ref>`;
  });

  if (count > 0 && knowledgeRefs && knowledgeRefs.length > 0) {
    newText = `${newText}\n\n<knowledge-ref>来源&gt;&gt;</knowledge-ref>`;
  }

  return newText;
}

export { KnowledgeRefBlock, processWithKnowledgeRef };
