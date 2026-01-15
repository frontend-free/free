import type { ChatMessage, MSenderProps } from '@fe-free/ai';
import {
  Chat,
  createChatStore,
  EnumChatMessageStatus,
  generateUUID,
  MessageActions,
  Messages,
  MSender,
} from '@fe-free/ai';
import { sleep } from '@fe-free/tool';
import type { Meta } from '@storybook/react-vite';
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
  const addMessage = useChatStore((state) => state.addMessage);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const { chatStatus } = useChatStoreComputed();

  const loading =
    chatStatus === EnumChatMessageStatus.PENDING || chatStatus === EnumChatMessageStatus.STREAMING;

  useEffect(() => {
    addMessage({
      uuid: generateUUID(),
      user: {
        text: 'hello',
      },
      ai: {
        data: {
          text: '你好，\n我是AI，很高兴认识你',
        },
      },
    });
    addMessage({
      uuid: generateUUID(),
      user: {
        text: 'hello',
      },
      ai: {
        data: {
          text: '你\n好，\n我\n是\nAI，\n很\n高\n兴\n认\n识\n你\n你\n好，\n我\n是\nAI，\n很\n高\n兴\n认\n识\n你\n很\n高\n兴\n认\n识\n你\n',
        },
      },
    });
  }, []);

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

          updateMessage({
            ...message,
          });
        }
        if (event === 'done') {
          message.status = EnumChatMessageStatus.DONE;
          updateMessage({
            ...message,
          });
        }
      },
    });
  }, []);

  return (
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
          renderMessageOfUser={({ message }) => (
            <div className="p-2">
              <div className="rounded-xl bg-primary p-2 text-white">{message.user?.text}</div>
            </div>
          )}
          renderMessageOfAI={({ message }) => (
            <div className="p-2">
              <div>{message.status}</div>
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
          )}
        />
      </Chat>
    </div>
  );
}

export const Default = {
  render: () => {
    return <Component />;
  },
};

export default meta;
