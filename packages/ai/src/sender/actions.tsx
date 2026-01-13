import Icons from '@fe-free/icons';
import type { UploadFile } from 'antd';
import { Button, Divider } from 'antd';
import { useCallback, type RefObject } from 'react';
import SendIcon from '../svgs/send.svg?react';
import { FileAction } from './files';
import { RecordAction } from './record';
import type { SenderProps } from './types';

function Actions(
  props: SenderProps & {
    refText: RefObject<HTMLTextAreaElement>;
    refUpload: RefObject<HTMLDivElement>;
    isUploading: boolean;
    fileList: UploadFile[];
    setFileList: (fileList: UploadFile[]) => void;
    fileUrls: string[];
    setFileUrls: (fileUrls: string[]) => void;
  },
) {
  const {
    refText,
    loading,
    onSubmit,
    value,
    onChange,
    refUpload,
    isUploading,
    setFileList,
    fileUrls,
    setFileUrls,
    allowUpload,
    allowSpeech,
  } = props;

  const isLoading = loading || isUploading;

  const handleSubmit = useCallback(async () => {
    if (isLoading || allowSpeech?.recording) {
      return;
    }

    const newValue = {
      ...value,
      text: value?.text?.trim(),
    };

    // 有内容才提交
    if (newValue.text || (newValue.files && newValue.files.length > 0)) {
      await Promise.resolve(onSubmit?.(newValue));

      // reset
      setFileList([]);
      setFileUrls([]);
      onChange?.({});

      // focus
      refText.current?.focus();
    }
  }, [
    isLoading,
    allowSpeech?.recording,
    value,
    onSubmit,
    setFileList,
    setFileUrls,
    onChange,
    refText,
  ]);

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
      <Divider type="vertical" />
      <div className="flex items-center gap-2">
        {allowSpeech && <RecordAction {...props} />}
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={SendIcon} className="!text-lg" />}
          loading={isLoading}
          // disabled={loading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export { Actions };
