import { CodeHighlighter, Mermaid } from '@ant-design/x';
import type { ComponentProps } from '@ant-design/x-markdown';
import classNames from 'classnames';
import { memo } from 'react';
import { ChartBlock } from './chart';
import { HMChartBlock } from './hm_chart';
import { PartialHtml } from './partial_html';

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

  if (lang === 'pptpartialhtml') {
    return (
      <PartialHtml srcDoc={children} className={classNames('aspect-[16/9] w-full', className)} />
    );
  }

  return <CodeHighlighter lang={lang}>{children}</CodeHighlighter>;
});

export { CodeComponent };
