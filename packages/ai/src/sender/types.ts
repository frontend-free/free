import type { ReactNode } from 'react';
import { RefObject } from 'react';

interface SenderRef {
  focus: () => void;
}

interface SenderValue {
  text?: string;
  files?: string[];
}

interface SenderProps {
  value?: SenderValue;
  onChange?: (value?: SenderValue) => void;

  loading?: boolean;
  onSubmit?: (value?: SenderValue) => void | Promise<void>;

  placeholder?: string;

  allowUpload?: {
    /** 上传文件的接口地址，约定返回的 {data: {url: string}} */
    uploadAction?: string;
    /** 限制可上传文件类型，语法同 input.accept，如 image/*,.pdf */
    accept?: string;
    /** files 最大数量 */
    filesMaxCount?: number;
    /** 自定义上传按钮 */
    renderUpload?: (props: {
      value?: SenderValue;
      /** refUpload.current?.click() 触发上传 */
      refUpload: RefObject<HTMLDivElement | null>;
    }) => ReactNode;
  };

  /** 是否允许语音输入 */
  allowSpeech?: {
    /** 是否正在录音 */
    recording?: boolean;
    /** 录音状态变化时回调 */
    onRecordingChange?: (recording: boolean) => void;
  };

  statement?: string;
}

export type { SenderProps, SenderRef, SenderValue };
