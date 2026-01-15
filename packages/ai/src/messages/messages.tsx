import { PageLayout } from '@fe-free/core';
import { useEffect, useMemo, useRef } from 'react';
import { EnumChatMessageType, type ChatMessage } from '../store/types';

interface MessagesProps<AIData> {
  messages?: ChatMessage<AIData>[];
  /** 含所有 */
  renderMessage?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
  /** 系统消息 */
  renderMessageOfSystem?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
  /** 用户消息 */
  renderMessageOfUser?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
  /** AI消息 */
  renderMessageOfAI?: (props: { message: ChatMessage<AIData> }) => React.ReactNode;
}

function Messages<AIData>(props: MessagesProps<AIData>) {
  const { messages, renderMessage, renderMessageOfSystem, renderMessageOfUser, renderMessageOfAI } =
    props;

  const ref = useRef<HTMLDivElement>(null);

  const lastMessage = useMemo(() => {
    return messages?.[messages.length - 1];
  }, [messages]);

  // 首次和更新时滚动到最新消息
  useEffect(() => {
    if (!lastMessage?.uuid) {
      return;
    }

    const element = document.querySelector(`[data-uuid="${lastMessage.uuid}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lastMessage?.uuid]);

  // 数据更新是，如果 dom 处于可视区域，则滚动
  useEffect(() => {
    if (!lastMessage?.updatedAt || !lastMessage?.uuid || !ref.current) {
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
  }, [lastMessage?.updatedAt, lastMessage?.uuid]);

  return (
    <PageLayout>
      <div ref={ref} className="flex h-full flex-col overflow-y-auto">
        {messages?.map((message) => {
          return (
            <div key={message.uuid} data-uuid={message.uuid} className="flex flex-col">
              {renderMessage ? (
                renderMessage?.({ message })
              ) : (
                <>
                  {message.type === EnumChatMessageType.SYSTEM && message.system && (
                    <div className="flex justify-center">
                      {renderMessageOfSystem?.({ message })}
                    </div>
                  )}
                  {message.type !== EnumChatMessageType.SYSTEM && message.user && (
                    <div className="flex justify-end">{renderMessageOfUser?.({ message })}</div>
                  )}
                  {message.type !== EnumChatMessageType.SYSTEM && message.ai && (
                    <div className="flex justify-start">{renderMessageOfAI?.({ message })}</div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

export { Messages };
export type { MessagesProps };
