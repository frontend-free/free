import { PageLayout, ScrollFixed } from '@fe-free/core';
import { ArrowDownOutlined } from '@fe-free/icons';
import { useMemoizedFn } from 'ahooks';
import { Button } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

import { EnumMessageType, type Message } from '../store/types';

interface MessagesProps<UserData, AIData, SystemData> {
  refList?: React.RefObject<HTMLDivElement | null>;
  messages?: Message<UserData, AIData, SystemData>[];
  /** 含所有 */
  renderMessage?: (props: { message: Message<UserData, AIData, SystemData> }) => React.ReactNode;
  /** 系统消息 */
  renderMessageOfSystem?: (props: {
    message: Message<UserData, AIData, SystemData>;
  }) => React.ReactNode;
  /** 用户消息 */
  renderMessageOfUser?: (props: {
    message: Message<UserData, AIData, SystemData>;
  }) => React.ReactNode;
  /** AI消息 */
  renderMessageOfAI?: (props: {
    message: Message<UserData, AIData, SystemData>;
  }) => React.ReactNode;
}

function useScrollToBottom({ ref }) {
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const handleScroll = () => {
      if (!el) {
        return;
      }

      const { scrollTop, clientHeight, scrollHeight } = ref.current;

      const isNearBottom =
        scrollHeight > clientHeight && scrollTop + clientHeight + 200 <= scrollHeight;
      setShowScrollBottom(isNearBottom);
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    // first
    handleScroll();

    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  return showScrollBottom;
}

function Messages<UserData, AIData, SystemData>(
  props: MessagesProps<UserData, AIData, SystemData>,
) {
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

  const showScrollBottom = useScrollToBottom({ ref });

  return (
    <PageLayout>
      <ScrollFixed
        refScroll={ref}
        className="fea-messages-scroll relative flex h-full flex-col overflow-x-hidden overflow-y-auto"
        style={{
          transform: `translateZ(0)`,
        }}
      >
        {messages?.map((message) => {
          return (
            <div key={message.uuid} data-uuid={message.uuid} className="flex flex-col">
              {renderMessage ? (
                renderMessage?.({ message })
              ) : (
                <>
                  {message.type === EnumMessageType.SYSTEM && message.system && (
                    <div className="flex justify-center">
                      {renderMessageOfSystem?.({ message })}
                    </div>
                  )}
                  {message.type !== EnumMessageType.SYSTEM && message.user && (
                    <div className="flex justify-end">{renderMessageOfUser?.({ message })}</div>
                  )}
                  {message.type !== EnumMessageType.SYSTEM && message.ai && (
                    <div className="flex justify-start">{renderMessageOfAI?.({ message })}</div>
                  )}
                </>
              )}
            </div>
          );
        })}
        <div className="pointer-events-none sticky bottom-2 mx-auto flex justify-center">
          <Button
            shape="circle"
            icon={<ArrowDownOutlined />}
            onClick={() => {
              scrollToBottom();
            }}
            className="pointer-events-auto! bg-white! text-2xl! shadow-[0px_1px_12px_0px_#2921391F]!"
            style={{
              transform: `translateY(${showScrollBottom ? 0 : 30}px) scale(${showScrollBottom ? 1 : 0})`,
              width: 44,
              height: 44,
            }}
          />
        </div>
      </ScrollFixed>
    </PageLayout>
  );
}

export { Messages };
export type { MessagesProps };
