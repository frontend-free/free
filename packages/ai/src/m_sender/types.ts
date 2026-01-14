interface MSenderRef {
  focus: () => void;
}

interface MSenderValue {
  text?: string;
  files?: string[];
}

interface MSenderProps {
  value?: MSenderValue;
  onChange?: (value?: MSenderValue) => void;

  loading?: boolean;
  onSubmit?: (value?: MSenderValue) => void | Promise<void>;

  placeholder?: string;

  /** 是否允许语音输入 */
  allowSpeech?: {
    /** 录音开始时回调，如果没权限，则 reject */
    onRecordStart?: () => Promise<void>;
    /** 录音结束时回调, isSend 为 true 则发送，否则取消 */
    onRecordEnd?: (isSend: boolean) => Promise<void>;
  };

  defaultType?: 'input' | 'record';
  statement?: string | false;
}

export type { MSenderProps, MSenderRef, MSenderValue };
