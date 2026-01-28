import { CodeHighlighter, Mermaid } from '@ant-design/x';
import type { ComponentProps } from '@ant-design/x-markdown';
import { memo } from 'react';
import { ChartBlock } from './chart';
import { HMChartBlock } from './hm_chart';

const CodeComponent = memo((props: ComponentProps) => {
  const { className, children } = props;

  const lang = className?.match(/language-(\w+)/)?.[1] || '';

  if (typeof children !== 'string') return null;

  if (lang === 'mermaid') {
    return <Mermaid>{children}</Mermaid>;
  }

  if (lang === 'chart') {
    return <ChartBlock>{children}</ChartBlock>;
  }

  if (lang === 'hmchart') {
    return <HMChartBlock>{children}</HMChartBlock>;
  }

  return <CodeHighlighter lang={lang}>{children}</CodeHighlighter>;
});

export { CodeComponent };
