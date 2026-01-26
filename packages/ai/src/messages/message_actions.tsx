import { Copy } from '@fe-free/core';
import {
  CopyFilled,
  CopyOutlined,
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@fe-free/icons';
import { App, Button, Tooltip } from 'antd';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

function MessageActionOfCopy({
  value,
  onCopied,
  className,
}: {
  value: string;
  onCopied?: () => void;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const { message } = App.useApp();

  const handleCopied = useCallback(async () => {
    setActive(true);
    onCopied?.();
    message.success('复制成功');
  }, [onCopied, message]);

  return (
    <Tooltip title="复制">
      <Copy
        value={value}
        className={classNames('cursor-pointer text-03', className)}
        onCopied={handleCopied}
      >
        <Button
          type="text"
          size="small"
          className="text-03"
          icon={active ? <CopyFilled /> : <CopyOutlined />}
        />
      </Copy>
    </Tooltip>
  );
}

function MessageActionOfLike({
  active: propsActive,
  onClick,
  className,
}: {
  active?: boolean;
  onClick?: (active: boolean) => Promise<void>;
  className?: string;
}) {
  const { message } = App.useApp();
  const [active, setActive] = useState(propsActive || false);

  useEffect(() => {
    setActive(!!propsActive);
  }, [propsActive]);

  const handleClick = useCallback(async () => {
    await Promise.resolve(onClick?.(!active));
    setActive(!active);
    message.success(!active ? '点赞成功' : '取消点赞成功');
  }, [onClick, active, message]);

  return (
    <Tooltip title={active ? '取消点赞' : '点赞'}>
      <Button
        type="text"
        onClick={handleClick}
        size="small"
        className={classNames('text-03', className)}
        icon={active ? <LikeFilled /> : <LikeOutlined />}
      />
    </Tooltip>
  );
}

function MessageActionOfDislike({
  active: propsActive,
  onClick,
  className,
}: {
  active?: boolean;
  onClick?: (active: boolean) => Promise<void>;
  className?: string;
}) {
  const [active, setActive] = useState(propsActive || false);
  const { message } = App.useApp();

  useEffect(() => {
    setActive(!!propsActive);
  }, [propsActive]);

  const handleClick = useCallback(async () => {
    await Promise.resolve(onClick?.(!active));
    setActive(!active);
    message.success(!active ? '点踩成功' : '取消点踩成功');
  }, [onClick, active, message]);

  return (
    <Tooltip title={active ? '取消点踩' : '点踩'}>
      <Button
        type="text"
        onClick={handleClick}
        size="small"
        className={classNames('text-03', className)}
        icon={active ? <DislikeFilled /> : <DislikeOutlined />}
      />
    </Tooltip>
  );
}

function MessageActionOfLikeAndDislike({
  value: propsValue,
  onChange,
  className,
}: {
  value?: -1 | 0 | 1;
  onChange?: (value: -1 | 0 | 1) => void;
  className?: string;
}) {
  const [value, setValue] = useState<(-1 | 0 | 1) | undefined>(propsValue);

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  return (
    <>
      <MessageActionOfLike
        active={value === 1}
        onClick={async () => {
          const newValue = value === 1 ? 0 : 1;
          await Promise.resolve(onChange?.(newValue));
          setValue(newValue);
        }}
        className={className}
      />
      <MessageActionOfDislike
        active={value === -1}
        onClick={async () => {
          const newValue = value === -1 ? 0 : -1;
          await Promise.resolve(onChange?.(newValue));
          setValue(newValue);
        }}
        className={className}
      />
    </>
  );
}

const MessageActions = {
  Copy: MessageActionOfCopy,
  Like: MessageActionOfLike,
  Dislike: MessageActionOfDislike,
  LikeAndDislike: MessageActionOfLikeAndDislike,
};

export { MessageActions };
