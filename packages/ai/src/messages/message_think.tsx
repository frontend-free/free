import { Think } from '@ant-design/x';
import Icons from '@fe-free/icons';
import classNames from 'classnames';
import ThinkIcon from '../svgs/think.svg?react';

interface MessageThinkProps {
  title: string;
  icon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  type?: 'deepSeek';
}

function MessageThink({ title, icon, loading, children, type }: MessageThinkProps) {
  return (
    <Think
      title={title}
      icon={icon || <Icons component={ThinkIcon} className="!text-sm" />}
      loading={loading}
      blink={loading}
      className={classNames('fea-message-think', {
        'fea-message-think-deep-seek': type === 'deepSeek',
      })}
    >
      {children}
    </Think>
  );
}

export { MessageThink };
export type { MessageThinkProps };
