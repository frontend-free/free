import { Think } from '@ant-design/x';
import Icons from '@fe-free/icons';
import classNames from 'classnames';
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
  expanded,
  onClick,
  className,
}: MessageThinkProps) {
  return (
    <Think
      title={title}
      icon={icon || <Icons component={ThinkIcon} className="!text-sm" />}
      loading={loading}
      blink={loading}
      expanded={expanded}
      onClick={onClick}
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
