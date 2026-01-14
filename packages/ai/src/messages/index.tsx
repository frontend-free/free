import { PageLayout } from '@fe-free/core';
import { useEffect, useMemo, useRef } from 'react';
import type { ChatMessage } from '../store/types';

interface MessagesProps<AIData> {
  messages?: ChatMessage<AIData>[];
  renderMessageOfUser?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
  renderMessageOfAI?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
}

function Messages<AIData>(props: MessagesProps<AIData>) {
  const { messages, renderMessageOfUser, renderMessageOfAI } = props;

  const ref = useRef<HTMLDivElement>(null);

  const lastMessage = useMemo(() => {
    return messages?.[messages.length - 1];
  }, [messages]);

  // 首次和更新时滚动到最新消息
  useEffect(() => {
    if (!lastMessage) {
      return;
    }

    const element = document.querySelector(`[data-uuid="${lastMessage.uuid}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lastMessage?.uuid]);

  // 数据更新是，如果 dom 处于可视区域，则滚动
  useEffect(() => {
    if (!lastMessage || !ref.current) {
      return;
    }

    const element = document.querySelector(`[data-uuid="${lastMessage.uuid}"]`);
    if (!element) {
      return;
    }

    const { top: listTop, bottom: listBottom } = ref.current!.getBoundingClientRect();
    const { top, bottom } = element.getBoundingClientRect();

    // 如果最后一个元素可见，则滚动到底部
    const isVisible = top < listBottom && bottom > listTop;
    if (isVisible) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lastMessage?.updatedAt]);

  return (
    <PageLayout>
      <div ref={ref} className="flex h-full flex-col overflow-y-auto">
        {messages?.map((message) => (
          <div key={message.uuid} data-uuid={message.uuid} className="flex flex-col">
            <div className="flex justify-end">{renderMessageOfUser?.({ message })}</div>
            <div className="flex justify-start">{renderMessageOfAI?.({ message })}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export { Messages };
export type { MessagesProps };
