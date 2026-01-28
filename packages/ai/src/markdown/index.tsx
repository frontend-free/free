import { XMarkdown } from '@ant-design/x-markdown';
import type { XMarkdownProps } from '@ant-design/x-markdown/es/XMarkdown/interface';
import Latex from '@ant-design/x-markdown/plugins/Latex';
import '@ant-design/x-markdown/themes/light.css';
import { theme } from 'antd';
import classNames from 'classnames';
import { useMemo } from 'react';
import { CodeComponent } from './code';
import { KnowledgeRefBlock, processWithKnowledgeRef } from './knowledge_ref';
import { ThinkComponent, compatibleWithDeepSeek } from './think';

interface MarkdownProps {
  content?: string;
  isStreaming?: boolean;
  components?: XMarkdownProps['components'];
  getComponents?: (components: XMarkdownProps['components']) => XMarkdownProps['components'];
}

function useMarkdownTheme() {
  const token = theme.useToken();

  // 使用 Ant Design 的主题系统判断亮色还是暗色
  const isLightMode = useMemo(() => {
    return token?.theme?.id === 0;
  }, [token]);

  const className = useMemo(() => {
    return isLightMode ? 'x-markdown-light' : 'x-markdown-dark';
  }, [isLightMode]);

  return [className];
}

function defaultGetComponents(components: XMarkdownProps['components']) {
  return {
    ...components,
  };
}

function Markdown({
  content,
  isStreaming,
  components: propsComponents,
  getComponents = defaultGetComponents,
}: MarkdownProps) {
  const [className] = useMarkdownTheme();

  const config = useMemo(() => {
    return {
      extensions: Latex(),
    };
  }, []);
  const streaming = useMemo(() => {
    return {
      enableAnimation: true,
      hasNextChunk: isStreaming,
    };
  }, [isStreaming]);

  const components = useMemo(() => {
    return getComponents({
      code: CodeComponent,
      think: ThinkComponent,
      ...propsComponents,
    });
  }, [getComponents, propsComponents]);

  return (
    <XMarkdown
      className={classNames('fea-markdown', className)}
      content={content}
      paragraphTag="div"
      openLinksInNewTab
      config={config}
      streaming={streaming}
      components={components}
    />
  );
}

interface CustomMarkdownProps extends MarkdownProps {
  knowledgeRefs?: { id: string; [key: string]: any }[];
  onKnowledgeRef?: (id?: string) => void;
}
function CustomMarkdown(props: CustomMarkdownProps) {
  const { content: propsContent = '', knowledgeRefs, onKnowledgeRef } = props;

  const content = useMemo(() => {
    return processWithKnowledgeRef(compatibleWithDeepSeek(propsContent));
  }, [propsContent]);

  const KnowledgeRefComponent = useMemo(
    () => (p: any) => {
      return (
        <KnowledgeRefBlock {...p} knowledgeRefs={knowledgeRefs} onKnowledgeRef={onKnowledgeRef} />
      );
    },
    [knowledgeRefs, onKnowledgeRef],
  );

  const components = useMemo(() => {
    return {
      'knowledge-ref': KnowledgeRefComponent,
    };
  }, [KnowledgeRefComponent]);

  return <Markdown {...props} content={content} components={components} />;
}

export { CustomMarkdown, Markdown };
export type { CustomMarkdownProps, MarkdownProps };
