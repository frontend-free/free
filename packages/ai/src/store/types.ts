enum EnumChatMessageType {
  SYSTEM = 'system',
}

enum EnumChatMessageStatus {
  PENDING = 'pending',
  STREAMING = 'streaming',
  DONE = 'done',
  ERROR = 'error',
}

interface ChatMessageOfUser {
  text?: string;
  files?: string[];
}

interface ChatMessageOfAI<AIData> {
  data?: AIData;
}

interface ChatMessage<AIData> {
  uuid: string;
  updatedAt?: number;
  type?: EnumChatMessageType;
  status?: EnumChatMessageStatus;
  user?: ChatMessageOfUser;
  ai?: ChatMessageOfAI<AIData>;
}

export { EnumChatMessageStatus, EnumChatMessageType };

export type { ChatMessage, ChatMessageOfAI, ChatMessageOfUser };
