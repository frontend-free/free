import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock(props: any) {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(props.className || '');

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
