import { Think } from '@ant-design/x';
import Icons from '@fe-free/icons';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import ThinkIcon from '../svgs/think.svg?react';

interface MessageThinkProps {
  title: string;
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  className?: string;
}

function MessageThink({
  title,
  icon,
  loading,
  children,
  expanded: propsExpanded,
  onClick,
  className,
}: MessageThinkProps) {
  const [expanded, setExpanded] = useState(propsExpanded || false);

  useEffect(() => {
    setExpanded(propsExpanded || false);
  }, [propsExpanded]);

  useEffect(() => {
    // 如果 propsExpanded 未定义，则根据 loading 状态设置 expanded
    if (propsExpanded === undefined && loading !== undefined) {
      setExpanded(loading ? true : false);
    }
  }, [propsExpanded, loading]);

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
    onClick?.();
  }, [expanded, onClick]);

  return (
    <Think
      title={title}
      icon={icon || <Icons component={ThinkIcon} className="!text-sm" />}
      loading={loading}
      blink={loading}
      expanded={expanded}
      onClick={handleClick}
      className={classNames('fea-message-think', className)}
    >
      {children}
    </Think>
  );
}

function MessageThinkOfDeepSeek(props: MessageThinkProps) {
  return <MessageThink {...props} className="fea-message-think-deep-seek" />;
}

export { MessageThink, MessageThinkOfDeepSeek };
export type { MessageThinkProps };
