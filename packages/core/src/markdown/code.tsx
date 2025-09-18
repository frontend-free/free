import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChartBlock } from './chart';
import { HMChartBlock } from './hm_chart';

function CodeBlock(props: any) {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(props.className || '');

  // 如果是 chart 类型的代码块，使用 ChartBlock 组件
  if (match && match[1] === 'chart') {
    return <ChartBlock>{children}</ChartBlock>;
  }

  // 如果是 hmchart 类型的代码块，使用 HMChartBlock 组件
  if (match && match[1] === 'hmchart') {
    return <HMChartBlock>{children}</HMChartBlock>;
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
