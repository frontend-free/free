import { PageLayout } from '@fe-free/core';
import { AngleLeftOutlined } from '@fe-free/icons';
import { useMemoizedFn } from 'ahooks';
import { Button } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getScrollbarWidth } from '../helper';
import { EnumChatMessageType, type ChatMessage } from '../store/types';

interface MessagesProps<AIData> {
  refList?: React.RefObject<HTMLDivElement | null>;
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

function useScrollWidth() {
  const width = useMemo(() => {
    return getScrollbarWidth();
  }, []);

  return width;
}

function useScrollToBottom({ ref }) {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        ref.current?.scrollTop + ref.current?.clientHeight >= ref.current?.scrollHeight - 200;
      setIsNearBottom(isNearBottom);
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      ref.current?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isNearBottom;
}

function Messages<AIData>(props: MessagesProps<AIData>) {
  const {
    refList,
    messages,
    renderMessage,
    renderMessageOfSystem,
    renderMessageOfUser,
    renderMessageOfAI,
  } = props;

  const innerRef = useRef<HTMLDivElement>(null);
  const ref = refList || innerRef;

  const lastMessage = useMemo(() => {
    return messages?.[messages.length - 1];
  }, [messages]);

  const scrollToBottom = useMemoizedFn(() => {
    if (!lastMessage?.uuid) {
      return;
    }

    // 延迟下，因为 markdown 可能没渲染出来
    setTimeout(() => {
      const element = document.querySelector(`[data-uuid="${lastMessage.uuid}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 100);
  });

  // 首次和更新时滚动到最新消息
  useEffect(() => {
    if (lastMessage?.uuid) {
      scrollToBottom();
    }
  }, [scrollToBottom, lastMessage?.uuid]);

  // 数据更新是，如果 dom 处于可视区域，则滚动
  useEffect(() => {
    if (!lastMessage?.updatedAt || !lastMessage?.uuid || !ref.current) {
      return;
    }

    // 延迟下，因为 markdown 可能没渲染出来
    setTimeout(() => {
      const element = document.querySelector(`[data-uuid="${lastMessage.uuid}"]`);
      if (!element) {
        return;
      }

      const { top: listTop, bottom: listBottom } = ref.current!.getBoundingClientRect();
      const { top, bottom } = element.getBoundingClientRect();

      // 如果最后一个元素可见，则滚动到底部
      const isVisible = top < listBottom && bottom > listTop;
      if (isVisible) {
        scrollToBottom();
      }
    }, 100);
  }, [lastMessage?.updatedAt, lastMessage?.uuid, ref, scrollToBottom]);

  const scrollWidth = useScrollWidth();

  const isNearBottom = useScrollToBottom({ ref });

  return (
    <PageLayout>
      <div
        ref={ref}
        className="fea-messages-scroll relative flex h-full flex-col overflow-y-auto overflow-x-hidden"
        style={{
          transform: `translateZ(0)`,
        }}
      >
        {messages?.map((message) => {
          return (
            <div
              key={message.uuid}
              data-uuid={message.uuid}
              className="flex flex-col"
              style={{
                marginRight: `-${scrollWidth}px`,
              }}
            >
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
        <div className="sticky bottom-2 mx-auto flex justify-center">
          <Button
            shape="circle"
            icon={<AngleLeftOutlined rotate={-90} />}
            onClick={() => {
              scrollToBottom();
            }}
            className="bg-white shadow-lg"
            style={{
              transform: `translateY(${isNearBottom ? 30 : 0}px) scale(${isNearBottom ? 0.1 : 1})`,
            }}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export { Messages };
export type { MessagesProps };
