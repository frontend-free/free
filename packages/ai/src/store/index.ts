import { useMemo } from 'react';
import { create } from 'zustand';
import type { ChatMessage } from './types';

interface ChatStore<Value, AIData> {
  senderValue?: Value;
  setSenderValue: (senderValue?: Value) => void;

  messages: ChatMessage<AIData>[];
  addMessage: (message: ChatMessage<AIData>) => void;
  updateMessage: (message: ChatMessage<AIData>) => void;

  reset: () => void;
}

function createChatStore<Value, AIData>() {
  const useChatStore = create<ChatStore<Value, AIData>>((set, get, store) => ({
    senderValue: undefined,
    setSenderValue: (senderValue) => {
      set(() => ({ senderValue }));
    },
    messages: [],
    addMessage: (message) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            ...message,
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
