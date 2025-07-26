import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChatBlock } from './chat';

function CodeBlock(props: any) {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(props.className || '');

  // 如果是 chat 类型的代码块，使用 ChatBlock 组件
  if (match && match[1] === 'chat') {
    return <ChatBlock>{children}</ChatBlock>;
  }

  return (
    <div className="markdown-body-code-block">
      {match ? (
        <SyntaxHighlighter
          {...rest}
          style={vscDarkPlus}
          language={match?.[1]}
          showLineNumbers
          PreTag="div"
          wrapLongLines
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      )}
    </div>
  );
}

export { CodeBlock };
