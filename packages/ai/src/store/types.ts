enum EnumChatMessageType {
  SYSTEM = 'system',
}

enum EnumChatMessageStatus {
  PENDING = 'pending',
  STREAMING = 'streaming',
  DONE = 'done',
  ERROR = 'error',
}

interface ChatMessageOfSystem {
  data?: any;
}

interface ChatMessageOfUser {
  text?: string;
  files?: string[];
}

interface ChatMessageOfAI<AIData> {
  data?: AIData;
  /** 按需存取 */
  session_id?: string;
}

interface ChatMessage<AIData> {
  uuid: string;

  status?: EnumChatMessageStatus;

  type?: EnumChatMessageType;
  system?: ChatMessageOfSystem;
  user?: ChatMessageOfUser;
  ai?: ChatMessageOfAI<AIData>;

  /** 自动生成 */
  createdAt?: number;
  /** 自动更新 */
  updatedAt?: number;
}

export { EnumChatMessageStatus, EnumChatMessageType };

export type { ChatMessage, ChatMessageOfAI, ChatMessageOfUser };
