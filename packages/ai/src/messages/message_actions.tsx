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
import { useCallback, useState } from 'react';

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

function MessageActionOfLike({ onClick }: { onClick?: (active: boolean) => Promise<void> }) {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(async () => {
    await Promise.resolve(onClick?.(!active));
    setActive(!active);
  }, [onClick, active]);

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

function MessageActionOfDislike({ onClick }: { onClick?: (active: boolean) => Promise<void> }) {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(async () => {
    await Promise.resolve(onClick?.(!active));
    setActive(!active);
  }, [onClick, active]);

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

const MessageActions = {
  Copy: MessageActionOfCopy,
  Like: MessageActionOfLike,
  Dislike: MessageActionOfDislike,
};

export { MessageActions };
