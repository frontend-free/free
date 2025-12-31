import { FileCard } from '@fe-free/core';
import Icons, { CloseOutlined } from '@fe-free/icons';
import { Button, Divider, Input, Upload } from 'antd';
import type { UploadFile } from 'antd/lib';
import type { RefObject } from 'react';
import { useMemo, useRef, useState } from 'react';
import FilesIcon from '../svgs/files.svg?react';
import SendIcon from '../svgs/send.svg?react';
import './style.scss';
import type { SenderProps, SenderRef } from './types';

function Text(props: SenderProps) {
  const { value, onChange, placeholder } = props;

  return (
    <Input.TextArea
      value={value?.text}
      onChange={(e) => {
        onChange?.({ ...value, text: e.target.value });
      }}
      placeholder={placeholder}
      autoSize={{ minRows: 2, maxRows: 8 }}
      className="mb-1 px-1 py-0"
      variant="borderless"
    />
  );
}

function Actions(props: SenderProps & { refUpload: RefObject<HTMLDivElement> }) {
  const { loading, onSubmit, value, refUpload, uploadAction } = props;

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {uploadAction && (
          <Button
            type="text"
            icon={<Icons component={FilesIcon} />}
            className="text-lg"
            onClick={() => {
              refUpload.current?.click();
            }}
          />
        )}
      </div>
      <Divider type="vertical" />
      <div className="flex items-center">
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={SendIcon} />}
          className="text-lg"
          disabled={loading}
          onClick={() => {
            onSubmit?.(value);
          }}
        />
      </div>
    </div>
  );
}

function FileItem({ file, onDelete }: { file: UploadFile; onDelete: () => void }) {
  const isImage = FileCard.isImage(file.name);

  // 先写死这样
  const isDone = file.response?.data?.url;

  return (
    <div className="group relative">
      {isImage ? (
        <img
          src={file.originFileObj && URL.createObjectURL(file.originFileObj)}
          className="h-[53px] w-[53px] rounded-lg border border-01 bg-01 object-cover"
        />
      ) : (
        <div className="flex h-[53px] w-[200px] items-center rounded bg-01 pl-1">
          <FileCard name={file.name} size={file.size} />
        </div>
      )}
      {!isDone && (
        <div className="absolute inset-0 flex items-center justify-center bg-01/50 text-xs">
          {file.percent?.toFixed(0)}%
        </div>
      )}
      <CloseOutlined
        className="absolute right-1 top-1 hidden cursor-pointer rounded-full bg-04 text-white group-hover:block"
        onClick={onDelete}
      />
    </div>
  );
}

function Files(props: SenderProps & { refUpload: RefObject<HTMLDivElement> }) {
  const { value, onChange, uploadAction, refUpload } = props;

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <>
      {fileList && fileList.length > 0 && (
        <div className="scrollbar-hide mb-2 flex gap-2 overflow-x-auto">
          {fileList.map((file) => (
            <FileItem
              key={file.uid}
              file={file}
              onDelete={() => {
                setFileList(fileList.filter((f) => f.uid !== file.uid));
              }}
            />
          ))}
        </div>
      )}
      <Upload
        action={uploadAction}
        fileList={fileList}
        multiple
        pastable
        onChange={(info) => {
          setFileList(info.fileList);

          const urls = info.fileList.map((file) => file.response?.data?.url).filter(Boolean);
          onChange?.({ ...value, files: urls });
        }}
      >
        <div ref={refUpload} />
      </Upload>
    </>
  );
}

const defaultProps = {
  placeholder: '描述你的问题',
};

function Sender(originProps: SenderProps) {
  const refUpload = useRef<HTMLDivElement>(null);

  const props = useMemo(() => {
    return {
      ...defaultProps,
      ...originProps,
    };
  }, [originProps]);

  return (
    <div className="fea-sender flex flex-col rounded-lg border border-01 p-2">
      <Files {...props} refUpload={refUpload} />
      <div className="flex">
        <Text {...props} />
      </div>
      <Actions {...props} refUpload={refUpload} />
    </div>
  );
}

export { Sender };
export type { SenderProps, SenderRef };
