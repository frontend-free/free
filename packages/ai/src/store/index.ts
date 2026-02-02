import { useMemo } from 'react';
import { create } from 'zustand';
import type { ChatMessage } from './types';

interface BaseSenderValue {
  text?: string;
  files?: string[];
}
interface ChatStore<
  UserData extends BaseSenderValue,
  AIData,
  ContextData extends Record<string, any>,
> {
  /** 存放Chat的上下文数据 */
  contextData?: ContextData;
  setContextData: (contextData?: ContextData) => void;
  setContextDataWithField: (
    field: keyof ContextData,
    contextDataValue: ContextData[keyof ContextData],
  ) => void;

  senderValue?: UserData;
  setSenderValue: (senderValue?: UserData) => void;

  messages: ChatMessage<UserData, AIData>[];
  setMessages: (messages: ChatMessage<UserData, AIData>[]) => void;
  addMessage: (message: ChatMessage<UserData, AIData>) => void;
  updateMessage: (message: ChatMessage<UserData, AIData>) => void;
  setMessagesBefore: (messages: ChatMessage<UserData, AIData>[]) => void;

  reset: () => void;
}

function createChatStore<
  UserData extends BaseSenderValue,
  AIData,
  ContextData extends Record<string, any>,
>() {
  const useChatStore = create<ChatStore<UserData, AIData, ContextData>>((set, get, store) => ({
    contextData: undefined,
    setContextData: (contextData) => {
      set({ contextData });
    },
    setContextDataWithField: (field, contextDataValue) => {
      const preContextData = get().contextData;
      set({
        contextData: {
          ...preContextData,
          [field]: contextDataValue,
        } as ContextData,
      });
    },
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
    setMessagesBefore: (messagesBefore) => {
      const messages = get().messages;

      const lastMessageBefore = messagesBefore[messagesBefore.length - 1];
      const index = messages.findIndex((message) => message.uuid === lastMessageBefore.uuid);

      // 如果 index 非 -1，则合并
      // 如果 index -1，-1 + 1 为 0，即全取 message，也适用
      const newMessages = [...messagesBefore, ...messages.slice(index + 1)];

      set({
        messages: newMessages,
      });
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
