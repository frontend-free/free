enum EnumMessageType {
  SYSTEM = 'system',
}

enum EnumMessageStatus {
  PENDING = 'pending',
  STREAMING = 'streaming',
  DONE = 'done',
  ERROR = 'error',
}

interface MessageOfSystem<SystemData> {
  data?: SystemData;
}

interface MessageOfAI<AIData> {
  data?: AIData;
  error?: any;
  // 其他字段，根据业务需要使用
  session_id?: string;
}

interface Message<UserData, AIData, SystemData> {
  uuid: string;

  status?: EnumMessageStatus;

  type?: EnumMessageType;
  system?: MessageOfSystem<SystemData>;
  user?: UserData;
  ai?: MessageOfAI<AIData>;

  /** 自动生成 */
  createdAt?: number;
  /** 自动更新 */
  updatedAt?: number;
}

export { EnumMessageStatus, EnumMessageType };

export type { Message, MessageOfAI, MessageOfSystem };
