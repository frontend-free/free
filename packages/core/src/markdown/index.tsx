import 'github-markdown-css/github-markdown-light.css';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code';
import { DeepSeekBlock, processWithDeepSeek } from './deep_seek';
import { KnowledgeRefBlock, processWithKnowledgeRef } from './knowledge_ref';
import './style.scss';

interface MarkdownProps {
  children: string;
  knowledgeRefs?: { id: string; title: string }[];
  onKnowledgeRef?: (id?: string) => void;
}
function Markdown(props: MarkdownProps) {
  const { children, knowledgeRefs, onKnowledgeRef } = props;

  const newChildren = useMemo(() => {
    let processed = processWithDeepSeek(children);
    processed = processWithKnowledgeRef(processed, knowledgeRefs);
    return processed;
  }, [children, knowledgeRefs]);

  const KnowledgeRefComponent = useMemo(
    () => (p: any) => {
      return (
        <KnowledgeRefBlock {...p} knowledgeRefs={knowledgeRefs} onKnowledgeRef={onKnowledgeRef} />
      );
    },
    [knowledgeRefs, onKnowledgeRef],
  );

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock,
          // @ts-ignore
          think: DeepSeekBlock,
          'knowledge-ref': KnowledgeRefComponent,
        }}
      >
        {newChildren}
      </ReactMarkdown>
    </div>
  );
}

export { Markdown };
