interface MSenderRef {
  focus: () => void;
}

interface MSenderValue {
  text?: string;
  files?: string[];
}

interface MSenderProps {
  value?: MSenderValue;
  onChange: (value?: MSenderValue) => void;

  loading?: boolean;
  onSubmit: (value?: MSenderValue) => void | Promise<void>;

  placeholder?: string;

  /** 是否允许语音输入 */
  allowSpeech?: {
    /** 是否正在录音 */
    recording?: boolean;
    /** 录音状态变化时回调 */
    onRecordingChange?: (recording: boolean) => void;
  };

  statement?: string | false;
}

export type { MSenderProps, MSenderRef, MSenderValue };
