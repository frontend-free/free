interface SenderRef {
  focus: () => void;
}

interface SenderValue {
  text?: string;
  files?: string[];
}

interface SenderProps {
  value?: SenderValue;
  onChange: (value?: SenderValue) => void;

  loading?: boolean;
  onSubmit: (value?: SenderValue) => void;

  placeholder?: string;

  allowUpload?: {
    /** 上传文件的接口地址，约定返回的 {data: {url: string}} */
    uploadAction?: string;
    /** files 最大数量 */
    filesMaxCount?: number;
  };

  /** 是否允许语音输入 */
  allowSpeech?: {
    /** 是否正在录音 */
    recording?: boolean;
    /** 录音状态变化时回调 */
    onRecordingChange?: (recording: boolean) => void;
  };
}

export type { SenderProps, SenderRef, SenderValue };
