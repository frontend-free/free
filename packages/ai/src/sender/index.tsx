import { useDrop } from 'ahooks';
import { Input } from 'antd';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import type { UploadFile } from 'antd/lib';
import classNames from 'classnames';
import type { RefObject } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Actions } from './actions';
import { FileUpload, Files } from './files';
import type { SenderProps, SenderRef } from './types';

function Text(
  props: SenderProps & {
    refText: RefObject<TextAreaRef | null>;
    onSubmit?: () => void;
  },
) {
  const { value, onChange, placeholder, refText, onSubmit } = props;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Shift + Enter: 换行（默认行为）
      if (e.key === 'Enter' && e.shiftKey) {
        return;
      }

      // Enter: 提交
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSubmit?.();
      }
    },
    [onSubmit],
  );

  return (
    <Input.TextArea
      ref={refText}
      value={value?.text}
      onChange={(e) => {
        onChange?.({ ...value, text: e.target.value });
      }}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      autoSize={{ minRows: 2, maxRows: 8 }}
      className="mb-1 px-1 py-0"
      variant="borderless"
    />
  );
}

function Sender(originProps: SenderProps) {
  const { t } = useTranslation();
  const props = useMemo(() => {
    return {
      placeholder:
        originProps.placeholder ??
        t('@fe-free/ai.sender.describeYourQuestion', '描述你的问题， shift + enter 换行'),
      ...originProps,
    };
  }, [originProps, t]);

  const refText = useRef<TextAreaRef | null>(null);

  const { value, onChange, allowUpload, onSubmit, loading, allowSpeech } = props;
  const { filesMaxCount } = allowUpload || {};

  const refContainer = useRef<HTMLDivElement>(null);
  const refUpload = useRef<HTMLDivElement>(null);
  const [dragHover, setDragHover] = useState(false);

  useDrop(allowUpload ? refContainer : null, {
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
    [fileList, handleFilesChange],
  );

  const setFileList = useCallback(
    (fileList: UploadFile[]) => {
      originSetFileList(fileList);
      handleFilesChange({ fileUrls, fileList });
    },
    [fileUrls, handleFilesChange],
  );

  const isUploading = useMemo(() => {
    // 存在没有 url 的
    return fileList.some((file) => !file.response?.data?.url);
  }, [fileList]);

  const handleSubmit = useCallback(async () => {
    const isLoading = loading || isUploading;

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
    loading,
    isUploading,
    allowSpeech?.recording,
    value,
    onSubmit,
    setFileList,
    setFileUrls,
    onChange,
  ]);

  return (
    <div className="fea-sender-wrap">
      <div
        ref={refContainer}
        className={classNames(
          'fea-sender border-01 relative flex flex-col rounded-xl border bg-white p-2',
          {
            'fea-sender-drag-hover': dragHover,
          },
        )}
        style={{
          boxShadow: '0px 2px 12px 0px #00000014',
        }}
      >
        <Files
          {...props}
          fileList={fileList}
          setFileList={setFileList}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
        />
        <div className="flex">
          <Text {...props} refText={refText} onSubmit={handleSubmit} />
        </div>
        <Actions
          {...props}
          refText={refText}
          refUpload={refUpload}
          isUploading={isUploading}
          fileList={fileList}
          setFileList={setFileList}
          fileUrls={fileUrls}
          setFileUrls={setFileUrls}
          onSubmit={handleSubmit}
        />
        {allowUpload && (
          <FileUpload
            {...props}
            refUpload={refUpload}
            fileList={fileList}
            setFileList={setFileList}
            uploadMaxCount={filesMaxCount ? filesMaxCount - fileUrls.length : undefined}
          />
        )}
      </div>
      {props.statement && <div className="text-03 mt-1 text-center text-xs">{props.statement}</div>}
    </div>
  );
}

export { Sender };
export type { SenderProps, SenderRef };
