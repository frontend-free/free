import { FileCard } from '@fe-free/core';
import Icons, { CloseOutlined, LinkOutlined, PlusOutlined } from '@fe-free/icons';
import type { UploadFile } from 'antd';
import { App, Button, Dropdown, Input, Modal, Upload } from 'antd';
import type { RefObject } from 'react';
import { useState } from 'react';
import FilesIcon from '../svgs/files.svg?react';
import type { SenderProps } from './types';

function FileAction(
  props: SenderProps & {
    refUpload: RefObject<HTMLDivElement>;
    fileUrls: string[];
    setFileUrls: (fileUrls: string[]) => void;
  },
) {
  const { value, refUpload, fileUrls, setFileUrls, filesMaxCount } = props;
  const { message } = App.useApp();

  const [url, setUrl] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Dropdown
        trigger={['click']}
        placement="topLeft"
        menu={{
          items: [
            {
              key: 'add-file',
              label: '添加图片或文件',
              icon: <Icons component={FilesIcon} />,
              onClick: () => {
                refUpload.current?.click();
              },
            },
            {
              key: 'add-file-url',
              label: '添加文件URL',
              icon: <Icons component={LinkOutlined} />,
              onClick: () => {
                setUrl('');

                setOpen(true);
              },
            },
          ],
        }}
      >
        <Button type="text" icon={<Icons component={PlusOutlined} />} className="text-lg" />
      </Dropdown>
      {open && (
        <Modal
          title="添加文件URL"
          open
          onCancel={() => setOpen(false)}
          onOk={() => {
            if (filesMaxCount && value?.files && value.files.length >= filesMaxCount) {
              message.warning(`超过最大上传数量${filesMaxCount}`);
              return;
            }

            if (url.trim()) {
              setFileUrls([...fileUrls, url]);
            }
            setOpen(false);
          }}
        >
          <Input.TextArea
            placeholder="请输入文件URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Modal>
      )}
    </>
  );
}

function FileUpload(
  props: SenderProps & {
    refUpload: RefObject<HTMLDivElement>;
    fileList: UploadFile[];
    setFileList: (fileList: UploadFile[]) => void;
    uploadMaxCount?: number;
  },
) {
  const { uploadAction, refUpload, fileList, setFileList, uploadMaxCount, filesMaxCount } = props;
  const { message } = App.useApp();

  return (
    <Upload.Dragger
      action={uploadAction}
      fileList={fileList}
      multiple
      pastable
      maxCount={uploadMaxCount ? uploadMaxCount + 1 : undefined}
      onChange={(info) => {
        if (uploadMaxCount && info.fileList.length > uploadMaxCount) {
          message.warning(`超过最大上传数量${filesMaxCount}`);

          setFileList(info.fileList.slice(-uploadMaxCount));
          return;
        }

        setFileList(info.fileList);
      }}
    >
      <div ref={refUpload}>在此处拖放文件</div>
    </Upload.Dragger>
  );
}

function UploadFileItem({ file, onDelete }: { file: UploadFile; onDelete: () => void }) {
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
        <div className="flex h-[53px] w-[200px] items-center rounded bg-01 px-1">
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

function UrlFileItem({ url, onDelete }: { url: string; onDelete: () => void }) {
  return (
    <div className="group relative">
      <div className="flex h-[53px] w-[200px] items-center rounded bg-01 px-2">
        <div className="line-clamp-2">{url}</div>
      </div>
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
    fileUrls: string[];
    setFileUrls: (fileUrls: string[]) => void;
  },
) {
  const { fileList, setFileList, fileUrls, setFileUrls } = props;

  return (
    <>
      {fileList && fileList.length > 0 && (
        <div className="scrollbar-hide mb-2 flex gap-2 overflow-x-auto">
          {fileList.map((file) => (
            <UploadFileItem
              key={file.uid}
              file={file}
              onDelete={() => {
                setFileList(fileList.filter((f) => f.uid !== file.uid));
              }}
            />
          ))}
          {fileUrls.map((url) => (
            <UrlFileItem
              key={url}
              url={url}
              onDelete={() => {
                setFileUrls(fileUrls.filter((u) => u !== url));
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export { FileAction, Files, FileUpload };
