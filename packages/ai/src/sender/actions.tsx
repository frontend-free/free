import Icons from '@fe-free/icons';
import type { UploadFile } from 'antd';
import { Button } from 'antd';
import type { RefObject } from 'react';
import SendIcon from '../svgs/send.svg?react';
import { FileAction } from './files';
import { RecordAction } from './record';
import type { SenderProps } from './types';

function Actions(
  props: SenderProps & {
    refText: RefObject<HTMLTextAreaElement | null>;
    refUpload: RefObject<HTMLDivElement | null>;
    isUploading: boolean;
    fileList: UploadFile[];
    setFileList: (fileList: UploadFile[]) => void;
    fileUrls: string[];
    setFileUrls: (fileUrls: string[]) => void;
    onSubmit: () => Promise<void>;
  },
) {
  const {
    refUpload,
    isUploading,
    fileUrls,
    setFileUrls,
    allowUpload,
    allowSpeech,
    loading,
    onSubmit,
  } = props;

  const isLoading = loading || isUploading;

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {allowUpload && (
          <FileAction
            {...props}
            refUpload={refUpload}
            fileUrls={fileUrls}
            setFileUrls={setFileUrls}
          />
        )}
      </div>
      {/* <Divider type="vertical" /> */}
      <div className="flex items-center gap-2">
        {allowSpeech && <RecordAction {...props} />}
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={SendIcon} className="!text-lg" />}
          loading={isLoading}
          // disabled={loading}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}

export { Actions };
