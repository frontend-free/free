import { Attachments } from '@ant-design/x';
import { xlsxToJSON } from '@fe-free/file';
import { DeleteOutlined, InboxOutlined } from '@fe-free/icons';
import type { UploadFile } from 'antd';
import { App, Button, Radio, Upload } from 'antd';
import classNames from 'classnames';
import './style.scss';
import type { ImportXlsxProps, XlsxDataItem } from './types';
import { EnumImportType } from './types';

function ItemRender({ file, right }: { file: UploadFile; right?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-01">
      <div className="flex-1">
        <Attachments.FileCard key={file.name} item={file} />
      </div>
      {right}
    </div>
  );
}

function StepImport({
  fileList,
  setFileList,
  setXlsxData,
  onTemplateDownload,
  onImportType,
  size,
}: {
  fileList: UploadFile[];
  setFileList: (fileList: UploadFile[]) => void;
  setXlsxData?: (xlsxData: XlsxDataItem[]) => void;
  onTemplateDownload?: ImportXlsxProps['onTemplateDownload'];
  onImportType?: (importType: EnumImportType) => void;
  size: ImportXlsxProps['size'];
}) {
  const { message } = App.useApp();
  const mbSize = size && (size / 1024 / 1024).toFixed(1);

  const handleBeforeUpload = async (file: File) => {
    if (size) {
      if (file.size > size) {
        message.error(`文件大小不能超过${mbSize}MB`);
      }
    }

    if (setXlsxData) {
      const xlsxData = await xlsxToJSON(file);
      setXlsxData(xlsxData);
    }

    return false;
  };

  return (
    <div
      className={classNames('flex flex-col gap-2', 'fec-import-xlsx', {
        'fec-import-xlsx-has-file': fileList.length > 0,
      })}
    >
      {onImportType && (
        <div className="py-4">
          <Radio.Group
            defaultValue={EnumImportType.FULL}
            onChange={(event) => onImportType(event.target.value)}
          >
            <Radio value={EnumImportType.FULL}>全量覆盖</Radio>
            <Radio value={EnumImportType.APPEND}>追加数据</Radio>
          </Radio.Group>
        </div>
      )}
      <Upload.Dragger
        accept=".xlsx,.xls,.csv"
        multiple={false}
        pastable
        fileList={fileList}
        itemRender={(_, file) => (
          <ItemRender
            file={file}
            right={
              <Button
                icon={<DeleteOutlined />}
                type="text"
                onClick={() => {
                  setFileList([]);
                }}
              />
            }
          />
        )}
        onChange={(info) => {
          setFileList(info.fileList);
        }}
        beforeUpload={handleBeforeUpload}
      >
        <>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击上传或拖拽文档到这里</p>
          <p className="ant-upload-hint">
            上传一份 Excel 格式或者 CSV 格式的文档{mbSize && `，文件大小限制 ${mbSize}MB 以内`}
          </p>
        </>
      </Upload.Dragger>

      {onTemplateDownload && (
        <div className="flex items-center gap-1">
          <span>可下载模板，根据指引在模板中编辑</span>
          <Button type="link" className="px-0" onClick={onTemplateDownload}>
            下载模板
          </Button>
          <span>。</span>
        </div>
      )}
    </div>
  );
}

export { ItemRender, StepImport };
