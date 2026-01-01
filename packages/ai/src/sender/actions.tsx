import Icons from '@fe-free/icons';
import { Button, Divider } from 'antd';
import type { RefObject } from 'react';
import SendIcon from '../svgs/send.svg?react';
import { FileAction } from './files';
import './style.scss';
import type { SenderProps } from './types';

function Actions(
  props: SenderProps & {
    refUpload: RefObject<HTMLDivElement>;
    isUploading: boolean;
    fileUrls: string[];
    setFileUrls: (fileUrls: string[]) => void;
  },
) {
  const { loading, onSubmit, value, refUpload, isUploading, fileUrls, setFileUrls } = props;

  const isLoading = loading || isUploading;

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        <FileAction
          {...props}
          refUpload={refUpload}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
        />
      </div>
      <Divider type="vertical" />
      <div className="flex items-center">
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={SendIcon} className="!text-lg" />}
          loading={isLoading}
          // disabled={loading}
          onClick={() => {
            if (isLoading) {
              return;
            }

            const newValue = {
              ...value,
              text: value?.text?.trim(),
            };

            // 有内容才提交
            if (newValue.text || (newValue.files && newValue.files.length > 0)) {
              onSubmit?.(newValue);
            }
          }}
        />
      </div>
    </div>
  );
}

export { Actions };
