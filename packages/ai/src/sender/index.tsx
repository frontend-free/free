import { FileCard } from '@fe-free/core';
import Icons, { CloseOutlined } from '@fe-free/icons';
import { useDrop } from 'ahooks';
import { Button, Divider, Input, Upload } from 'antd';
import type { UploadFile } from 'antd/lib';
import classNames from 'classnames';
import type { RefObject } from 'react';
import { useMemo, useRef, useState } from 'react';
import FilesIcon from '../svgs/files.svg?react';
import SendIcon from '../svgs/send.svg?react';
import StopIcon from '../svgs/stop.svg?react';
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

function Actions(
  props: SenderProps & { refUpload: RefObject<HTMLDivElement>; isUploading: boolean },
) {
  const { loading, onSubmit, value, refUpload, uploadAction, isUploading } = props;

  const isLoading = loading || isUploading;

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
          icon={
            isLoading ? (
              <Icons component={StopIcon} />
            ) : (
              <Icons component={SendIcon} className="!text-lg" />
            )
          }
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
        <div className="absolute inset-0 flex items-center justify-center bg-01/80">
          {(file.percent ?? 0).toFixed(0)}%
        </div>
      )}
      <CloseOutlined
        className="absolute right-1 top-1 hidden cursor-pointer rounded-full bg-04 text-white group-hover:block"
        onClick={onDelete}
      />
    </div>
  );
}

function Files(
  props: SenderProps & {
    fileList: UploadFile[];
    setFileList: (fileList: UploadFile[]) => void;
  },
) {
  const { fileList, setFileList } = props;

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
    </>
  );
}

function FileUpload(
  props: SenderProps & {
    refUpload: RefObject<HTMLDivElement>;
    fileList: UploadFile[];
    setFileList: (fileList: UploadFile[]) => void;
  },
) {
  const { value, onChange, uploadAction, refUpload, fileList, setFileList } = props;
  return (
    <Upload.Dragger
      action={uploadAction}
      fileList={fileList}
      multiple
      pastable
      onChange={(info) => {
        setFileList(info.fileList);

        const urls = info.fileList.map((file) => file.response?.data?.url).filter(Boolean);
        onChange?.({ ...value, files: urls });
      }}
      className={'fea-sender-upload'}
    >
      <div ref={refUpload}>在此处拖放文件</div>
    </Upload.Dragger>
  );
}

const defaultProps = {
  placeholder: '描述你的问题',
};

function Sender(originProps: SenderProps) {
  const props = useMemo(() => {
    return {
      ...defaultProps,
      ...originProps,
    };
  }, [originProps]);

  const refContainer = useRef<HTMLDivElement>(null);
  const refUpload = useRef<HTMLDivElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [dragHover, setDragHover] = useState(false);

  useDrop(refContainer, {
    onDragEnter: () => {
      setDragHover(true);
    },
    onDragLeave: () => {
      setDragHover(false);
    },
    onDrop: () => {
      setDragHover(false);
    },
  });

  const isUploading = useMemo(() => {
    // 存在没有 url 的
    return fileList.some((file) => !file.response?.data?.url);
  }, [fileList]);

  return (
    <div
      ref={refContainer}
      className={classNames('fea-sender relative flex flex-col rounded-lg border border-01 p-2', {
        'fea-sender-drag-hover': dragHover,
      })}
    >
      <Files {...props} fileList={fileList} setFileList={setFileList} />
      <div className="flex">
        <Text {...props} />
      </div>
      <Actions {...props} refUpload={refUpload} isUploading={isUploading} />
      <FileUpload {...props} refUpload={refUpload} fileList={fileList} setFileList={setFileList} />
    </div>
  );
}

export { Sender };
export type { SenderProps, SenderRef };
