import { CopyOutlined } from '@ant-design/icons';
import { copyToClipboard } from '@fe-free/tool';
import classNames from 'classnames';
import React, { useCallback } from 'react';

interface CopyProps {
  /** 复制的内容 */
  value: string;
  /** 是否显示复制 icon */
  showIcon?: boolean;
  /** 是否在 hover 时显示复制 icon */
  hoverIcon?: boolean;
  children?: React.ReactNode;
  /** 复制成功后的回调 */
  onCopied?: () => void;
}

function Copy(props: CopyProps) {
  const { value, showIcon, hoverIcon, children, onCopied } = props;

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
}

export { Copy };
export type { CopyProps };
