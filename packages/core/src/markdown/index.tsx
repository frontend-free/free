import 'github-markdown-css/github-markdown.css';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code';
import { DeepSeekBlock, processWithDeepSeek } from './deep_seek';
import './style.scss';

function Markdown(props: { children: string }) {
  const newChildren = useMemo(() => {
    return processWithDeepSeek(props.children);
  }, [props.children]);

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock,
          // @ts-ignore
          think: DeepSeekBlock,
        }}
      >
        {newChildren}
      </ReactMarkdown>
    </div>
  );
}

export { Markdown };
