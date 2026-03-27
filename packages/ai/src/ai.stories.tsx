import type { Message, MSenderProps } from '@fe-free/ai';
import {
  Chat,
  createChatStore,
  EnumMessageStatus,
  EnumMessageType,
  generateUUID,
  getRecordAudioOfPCM,
  Markdown,
  MessageActions,
  Messages,
  MSender,
} from '@fe-free/ai';
import { sleep } from '@fe-free/tool';
import type { Meta } from '@storybook/react-vite';
import { App, Button, Divider } from 'antd';
import { set } from 'lodash-es';
import { useCallback, useEffect, useEffectEvent, useMemo } from 'react';

const meta: Meta = {
  title: '@fe-free/ai/Example',
  tags: ['autodocs'],
};

async function fakeFetchStream(value: UserData, { onUpdate }) {
  console.log('fakeFetchStream', value);

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

/**

如何接入(具体见下面的代码)
- store.ts
  - types.ts 定义类型
  - 使用 createChatStore 创建 store
- chat.ts
  - 接入 Chat 组件
  - 接入 Messages 组件，实现 renderMessageOfXXX
  - 接入 Sender or MSender 组件
  - 数据相关从 useChatStore 中获取
 */

type UserData = NonNullable<MSenderProps['value']>;
interface AIData {
  text?: string;
}
interface SystemData {
  type?: string;
}

const { useChatStore, useChatStoreComputed } = createChatStore<UserData, AIData, SystemData>();

function Component() {
  const senderValue = useChatStore((state) => state.senderValue);
  const setSenderValue = useChatStore((state) => state.setSenderValue);
  const messages = useChatStore((state) => state.messages);
  const setMessages = useChatStore((state) => state.setMessages);
  const addMessage = useChatStore((state) => state.addMessage);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const { chatStatus } = useChatStoreComputed();
  const loading =
    chatStatus === EnumMessageStatus.PENDING || chatStatus === EnumMessageStatus.STREAMING;

  const { message: appMessage } = App.useApp();

  const handleLoaded = useEffectEvent(() => {
    const cacheMessages = localStorage.getItem('chatMessages');
    if (cacheMessages) {
      setMessages(JSON.parse(cacheMessages));
    }
  });

  // init from cache
  useEffect(() => {
    handleLoaded();
  }, []);

  const handleSubmit = useCallback(
    (v) => {
      console.log('onSubmit', v);

      const chatMessage: Message<UserData, AIData, SystemData> = {
        uuid: generateUUID(),
        status: EnumMessageStatus.PENDING,
        user: {
          ...v,
        },
      };

      addMessage(chatMessage);

      // fake
      void fakeFetchStream(v, {
        onUpdate: ({ event, data }) => {
          if (event === 'message') {
            chatMessage.status = EnumMessageStatus.STREAMING;

            const preText = chatMessage.ai?.data?.text || '';
            set(chatMessage, 'ai.data.text', preText + data);

            // 假设有 session_id
            set(chatMessage, 'ai.session_id', '123');

            updateMessage(chatMessage);
          }
          if (event === 'done') {
            chatMessage.status = EnumMessageStatus.DONE;
            updateMessage(chatMessage);
          }
        },
      });
    },
    [addMessage, updateMessage],
  );

  const { start: startRecord, stop: stopRecord } = useMemo(() => {
    return getRecordAudioOfPCM();
  }, []);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            addMessage({
              uuid: generateUUID(),
              type: EnumMessageType.SYSTEM,
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
      <div className="h-[500px] w-[500px] max-w-full border border-red-500">
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
              <div>这里是 suggestion 区域这里是 suggestion 区域</div>
              <MSender
                value={senderValue}
                onChange={(v) => setSenderValue(v)}
                loading={loading}
                onSubmit={handleSubmit}
                allowSpeech={{
                  onRecordStart: async () => {
                    console.log('onRecordStart');
                    try {
                      await startRecord({
                        onAudio: (data) => {
                          console.log('onAudio', data);
                        },
                        onError: (err) => {
                          appMessage.error(err.message);
                        },
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  },
                  onRecordEnd: async (isSend) => {
                    console.log('onRecordEnd', isSend);
                    const voiceData = await stopRecord();
                    console.log('voiceData', voiceData);
                  },
                }}
              />
            </div>
          }
        >
          <Messages
            messages={messages}
            renderMessageOfSystem={({ message: msg }) => {
              if (msg.system?.data?.type === 'new_session') {
                return <Divider>让我们聊点新内容吧</Divider>;
              }

              return null;
            }}
            renderMessageOfUser={({ message: msg }) => {
              return (
                <div className="p-2">
                  <div className="bg-primary rounded-xl p-2 text-white">{msg.user?.text}</div>
                </div>
              );
            }}
            renderMessageOfAI={({ message: msg }) => {
              return (
                <div className="max-w-full p-2">
                  <div>
                    status: {msg.status} session_id: {msg.ai?.session_id}
                  </div>
                  <Markdown content={msg.ai?.data?.text || ''} />
                  <div className="flex gap-2">
                    <MessageActions.Copy value={msg.ai?.data?.text || ''} />
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
