import type { UploadFile } from 'antd';

export enum EnumImportType {
  FULL = 'Full',
  APPEND = 'Append',
}

interface XlsxDataItem {
  name: string;
  data: any[][];
}

interface ImportXlsxProps {
  /** 点击 下载模板 */
  onTemplateDownload?: () => void;
  /** 文件大小限制 */
  size?: number;
  /** 导入数据 API */
  onImport: (data: Record<string, any>[]) => Promise<void>;
  /** 最后的确认 */
  onOk: () => void;
}

interface ImportXlsxFileProps {
  /** 点击 下载模板 */
  onTemplateDownload?: () => void;
  /** 文件大小限制 */
  size?: number;
  /** 导入文件 */
  onOk: (data: { uploadFile: UploadFile; importType?: EnumImportType }) => Promise<void>;
  /** 取消 */
  onCancel?: () => void;
  /** 是否显示导入类型 */
  enableImportType?: boolean;
}

export type { ImportXlsxFileProps, ImportXlsxProps, XlsxDataItem };
