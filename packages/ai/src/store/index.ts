import { useMemo } from 'react';
import { create } from 'zustand';
import type { ChatMessage } from './types';

interface BaseSenderValue {
  text?: string;
  files?: string[];
}
interface ChatStore<Value extends BaseSenderValue | undefined, AIData> {
  senderValue?: Value;
  setSenderValue: (senderValue?: Value) => void;

  messages: ChatMessage<AIData>[];
  setMessages: (messages: ChatMessage<AIData>[]) => void;
  addMessage: (message: ChatMessage<AIData>) => void;
  updateMessage: (message: ChatMessage<AIData>) => void;

  reset: () => void;
}

function createChatStore<Value extends BaseSenderValue | undefined, AIData>() {
  const useChatStore = create<ChatStore<Value, AIData>>((set, get, store) => ({
    senderValue: undefined,
    setSenderValue: (senderValue) => {
      set(() => ({ senderValue }));
    },
    messages: [],
    setMessages: (messages) => {
      set(() => ({
        messages: messages.map((message) => ({
          // 如果没有，则用当前的时间
          createdAt: Date.now(),
          updatedAt: Date.now(),
          ...message,
        })),
      }));
    },
    addMessage: (message) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            ...message,
            // 覆盖
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
        ],
      }));
    },
    updateMessage: (message) => {
      set((state) => ({
        messages: state.messages.map((m) => {
          if (m.uuid === message.uuid) {
            return {
              ...message,
              // 覆盖
              updatedAt: Date.now(),
            };
          }
          return m;
        }),
      }));
    },
    reset: () => {
      set(store.getInitialState());
    },
  }));

  const useChatStoreComputed = () => {
    const messages = useChatStore((state) => state.messages);

    const chatStatus = useMemo(() => {
      return messages[messages.length - 1]?.status;
    }, [messages]);

    return {
      chatStatus,
    };
  };

  return {
    useChatStore,
    useChatStoreComputed,
  };
}

export { createChatStore };
