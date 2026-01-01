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

  /** 上传文件的接口地址，约定返回的 {data: {url: string}} */
  uploadAction?: string;
}

export type { SenderProps, SenderRef, SenderValue };
