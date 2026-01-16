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
import { useCallback, useEffect, useState } from 'react';

function MessageActionOfCopy({ value, onCopied }: { value: string; onCopied?: () => void }) {
  const [active, setActive] = useState(false);
  const { message } = App.useApp();

  const handleCopied = useCallback(async () => {
    setActive(true);
    onCopied?.();
    message.success('复制成功');
  }, [onCopied, message]);

  return (
    <Tooltip title="复制">
      <Copy value={value} className="cursor-pointer text-03" onCopied={handleCopied}>
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
}: {
  active?: boolean;
  onClick?: (active: boolean) => Promise<void>;
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
        className="text-03"
        icon={active ? <LikeFilled /> : <LikeOutlined />}
      />
    </Tooltip>
  );
}

function MessageActionOfDislike({
  active: propsActive,
  onClick,
}: {
  active?: boolean;
  onClick?: (active: boolean) => Promise<void>;
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
        className="text-03"
        icon={active ? <DislikeFilled /> : <DislikeOutlined />}
      />
    </Tooltip>
  );
}

function MessageActionOfLinkAndDislike({
  value: propsValue,
  onChange,
}: {
  value?: -1 | 0 | 1;
  onChange?: (value: -1 | 0 | 1) => void;
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
      />
      <MessageActionOfDislike
        active={value === -1}
        onClick={async () => {
          const newValue = value === -1 ? 0 : -1;
          await Promise.resolve(onChange?.(newValue));
          setValue(newValue);
        }}
      />
    </>
  );
}

const MessageActions = {
  Copy: MessageActionOfCopy,
  Like: MessageActionOfLike,
  Dislike: MessageActionOfDislike,
  LinkAndDislike: MessageActionOfLinkAndDislike,
};

export { MessageActions };
