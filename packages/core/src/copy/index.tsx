import { CopyOutlined } from '@ant-design/icons';
import { copyToClipboard } from '@fe-free/tool';
import classNames from 'classnames';
import React, { useCallback } from 'react';

interface CopyProps {
  value: string;
  showIcon?: boolean;
  hoverIcon?: boolean;
  children?: React.ReactNode;
  onCopied?: () => void;
}

const Copy: React.FC<CopyProps> = ({ value, showIcon, hoverIcon, children, onCopied }) => {
  const handleCopy = useCallback(async () => {
    await copyToClipboard(value);
    onCopied?.();
  }, [value, onCopied]);

  if (showIcon || hoverIcon) {
    return (
      <div
        className={classNames('flex gap-1', {
          group: hoverIcon,
        })}
      >
        {children}
        <div
          className={classNames('cursor-pointer text-primary', {
            hidden: hoverIcon,
            'group-hover:block': hoverIcon,
          })}
          onClick={handleCopy}
        >
          <CopyOutlined />
        </div>
      </div>
    );
  }

  return <div onClick={handleCopy}>{children}</div>;
};

export { Copy };
export type { CopyProps };
