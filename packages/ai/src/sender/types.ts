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

  uploadAction?: string;
  onUpload: (file: File) => Promise<string[]>;
}

export type { SenderProps, SenderRef, SenderValue };
