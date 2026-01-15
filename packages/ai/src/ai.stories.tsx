import type { ChatMessage, MSenderProps } from '@fe-free/ai';
import {
  Chat,
  createChatStore,
  EnumChatMessageStatus,
  EnumChatMessageType,
  generateUUID,
  MessageActions,
  Messages,
  MSender,
} from '@fe-free/ai';
import { sleep } from '@fe-free/tool';
import type { Meta } from '@storybook/react-vite';
import { Button, Divider } from 'antd';
import { set } from 'lodash-es';
import { useCallback, useEffect, useMemo } from 'react';

const meta: Meta = {
  title: '@fe-free/ai/Example',
  tags: ['autodocs'],
};

interface AIData {
  text?: string;
}

async function fakeFetchStream(v: MSenderProps['value'], { onUpdate }) {
  // 这里模拟 fetchStream
  await sleep(1000);

  let count = 0;
  const timer = setInterval(() => {
    if (count > 50) {
      clearInterval(timer);
      onUpdate({ event: 'done', data: '' });
    } else {
      onUpdate({ event: 'message', data: '回复' + count });
      count++;
    }
  }, 300);
}

function Component() {
  const { useChatStore, useChatStoreComputed } = useMemo(() => {
    return createChatStore<MSenderProps['value'], AIData>();
  }, []);

  const senderValue = useChatStore((state) => state.senderValue);
  const setSenderValue = useChatStore((state) => state.setSenderValue);
  const messages = useChatStore((state) => state.messages);
  const setMessages = useChatStore((state) => state.setMessages);
  const addMessage = useChatStore((state) => state.addMessage);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const { chatStatus } = useChatStoreComputed();

  // init from cache
  useEffect(() => {
    const cacheMessages = localStorage.getItem('chatMessages');
    if (cacheMessages) {
      setMessages(JSON.parse(cacheMessages));
    }
  }, []);

  const loading =
    chatStatus === EnumChatMessageStatus.PENDING || chatStatus === EnumChatMessageStatus.STREAMING;

  const handleSubmit = useCallback((v) => {
    console.log('onSubmit', v);

    const message: ChatMessage<AIData> = {
      uuid: generateUUID(),
      status: EnumChatMessageStatus.PENDING,
      user: {
        ...v,
      },
    };

    addMessage(message);

    // fake
    fakeFetchStream(v, {
      onUpdate: ({ event, data }) => {
        if (event === 'message') {
          message.status = EnumChatMessageStatus.STREAMING;

          const preText = message.ai?.data?.text || '';
          set(message, 'ai.data.text', preText + data);

          // 假设有 session_id
          set(message, 'ai.session_id', '123');

          updateMessage(message);
        }
        if (event === 'done') {
          message.status = EnumChatMessageStatus.DONE;
          updateMessage(message);
        }
      },
    });
  }, []);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            addMessage({
              uuid: generateUUID(),
              type: EnumChatMessageType.SYSTEM,
              system: {
                data: {
                  type: 'new_session',
                },
              },
            });
          }}
        >
          Add New Session
        </Button>
      </div>
      <div className="h-[800px] w-[500px] border border-red-500">
        <Chat
          end={
            <div
              className="p-2"
              onFocus={() => {
                console.log('onFocus');
              }}
              onBlur={() => {
                console.log('onBlur');
              }}
            >
              <MSender
                value={senderValue}
                onChange={(v) => setSenderValue(v)}
                loading={loading}
                onSubmit={handleSubmit}
              />
            </div>
          }
        >
          <Messages
            messages={messages}
            renderMessageOfSystem={({ message }) => {
              if (message.system?.data?.type === 'new_session') {
                return <Divider>让我们聊点新内容吧</Divider>;
              }

              return null;
            }}
            renderMessageOfUser={({ message }) => {
              return (
                <div className="p-2">
                  <div className="rounded-xl bg-primary p-2 text-white">{message.user?.text}</div>
                </div>
              );
            }}
            renderMessageOfAI={({ message }) => {
              return (
                <div className="p-2">
                  <div>
                    status: {message.status} session_id: {message.ai?.session_id}
                  </div>
                  <pre className="whitespace-pre-wrap">{message.ai?.data?.text}</pre>
                  <div className="flex gap-2">
                    <MessageActions.Copy value={message.ai?.data?.text || ''} />
                    <MessageActions.Like
                      onClick={async () => {
                        // some thing
                      }}
                    />
                    <MessageActions.Dislike
                      onClick={async () => {
                        // some thing
                      }}
                    />
                  </div>
                </div>
              );
            }}
          />
        </Chat>
      </div>
    </div>
  );
}

export const Default = {
  render: () => {
    return <Component />;
  },
};

export default meta;
