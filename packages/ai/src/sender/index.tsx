import { useDrop } from 'ahooks';
import { Input } from 'antd';
import type { UploadFile } from 'antd/lib';
import classNames from 'classnames';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Actions } from './actions';
import { FileUpload, Files } from './files';
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

  const { value, onChange, filesMaxCount } = props;

  const refContainer = useRef<HTMLDivElement>(null);
  const refUpload = useRef<HTMLDivElement>(null);
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

  // 手动输入的 url file
  const [fileUrls, originSetFileUrls] = useState<string[]>([]);
  // 上传的 upload file
  const [fileList, originSetFileList] = useState<UploadFile[]>([]);

  const handleFilesChange = useCallback(
    ({ fileUrls, fileList }) => {
      onChange?.({
        ...value,
        files: [...(fileList.map((file) => file.response?.data?.url) || []), ...fileUrls],
      });
    },
    [value, onChange],
  );

  const setFileUrls = useCallback(
    (fileUrls: string[]) => {
      originSetFileUrls(fileUrls);
      handleFilesChange({ fileUrls, fileList });
    },
    [fileList],
  );

  const setFileList = useCallback(
    (fileList: UploadFile[]) => {
      originSetFileList(fileList);
      handleFilesChange({ fileUrls, fileList });
    },
    [fileUrls],
  );

  const isUploading = useMemo(() => {
    // 存在没有 url 的
    return fileList.some((file) => !file.response?.data?.url);
  }, [fileList]);

  return (
    <div className="fea-sender-wrap">
      <div
        ref={refContainer}
        className={classNames('fea-sender relative flex flex-col rounded-lg border border-01 p-2', {
          'fea-sender-drag-hover': dragHover,
        })}
      >
        <Files
          {...props}
          fileList={fileList}
          setFileList={setFileList}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
        />
        <div className="flex">
          <Text {...props} />
        </div>
        <Actions
          {...props}
          refUpload={refUpload}
          isUploading={isUploading}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
        />
        <FileUpload
          {...props}
          refUpload={refUpload}
          fileList={fileList}
          setFileList={setFileList}
          uploadMaxCount={filesMaxCount ? filesMaxCount - fileUrls.length : undefined}
        />
      </div>
      <div className="mt-1 text-center text-xs text-03">
        内容由 AI 生成，无法确保信息的真实准确，仅供参考
      </div>
    </div>
  );
}

export { Sender };
export type { SenderProps, SenderRef };
