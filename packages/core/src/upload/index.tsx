import { DeleteOutlined, InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps as AntdUploadProps, UploadFile } from 'antd';
import { Upload as AntdUpload, Avatar, Button, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';
import './style.scss';

interface UploadBaseProps {
  value?: string[] | string;
  onChange?: (value?: string[] | string) => void;
  multiple?: boolean;
  maxCount?: number;
  action?: string;
  customRequest?: AntdUploadProps['customRequest'];
  listType?: AntdUploadProps['listType'];
  accept?: string;
  directory?: AntdUploadProps['directory'];
}

interface UploadProps extends UploadBaseProps {
  showCount?: boolean;
}

function useUpload(
  props: ImageUploadProps & { onChangeOriginal?: (info: UploadChangeParam<UploadFile>) => void },
) {
  const { value, onChange, multiple, maxCount, onChangeOriginal } = props;
  // 转换成 Upload 格式。
  const defaultFileList = useMemo(() => {
    if (!value) {
      return [];
    }

    const arr = (multiple ? value : [value]) as string[];
    return arr.map((url) => ({ uid: url, url, name: url?.split('/').pop() || '' })) as UploadFile[];
  }, [multiple, value]);

  // 存起来，已选的文件。以便做一些判断。
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList);

  // 找到真正上传成功的。
  const successList = fileList.map((item) => item.url || item.response?.data?.url).filter(Boolean);

  const handleChange = useCallback(
    (info) => {
      setFileList(info.fileList);

      // 找到真正上传成功的。
      const newValue = info.fileList
        .map((item) => item.url || item.response?.data?.url)
        .filter(Boolean);

      onChange?.(multiple ? newValue : newValue[0]);

      onChangeOriginal?.(info);
    },
    [multiple, onChange, onChangeOriginal],
  );

  // 选文件还是可能多选，如果多选，则提示。
  const handleBeforeUpload = useCallback(
    (f, fl) => {
      // 多选 >1 情况下，超出的则提示。
      if (multiple && maxCount && maxCount > 1) {
        const index = fl.findIndex((item) => item.uid === f.uid);
        if (index >= maxCount - fileList.length) {
          message.warning(`最多只能上传 ${maxCount} 个文件，超出部分会忽略。`);
        }
      }

      return true;
    },
    [fileList, multiple, maxCount],
  );

  // 多选情况下，超出则上传按钮 disabled
  const isDisabled = useMemo(() => {
    if (multiple && maxCount && maxCount > 1) {
      return fileList.length >= maxCount;
    }
    return false;
  }, [fileList.length, maxCount, multiple]);

  return {
    onChange: handleChange,
    beforeUpload: handleBeforeUpload,
    isDisabled,
    fileList,
    successList,
  };
}

function Upload(props: ImageUploadProps) {
  const { multiple, maxCount, showCount, action, customRequest, listType, accept, directory } =
    props;
  const { onChange, beforeUpload, isDisabled, fileList } = useUpload(props);

  return (
    <AntdUpload
      action={action}
      customRequest={customRequest}
      onChange={onChange}
      accept={accept}
      listType={listType}
      defaultFileList={fileList}
      maxCount={multiple ? maxCount : 1}
      multiple={multiple}
      beforeUpload={beforeUpload}
      directory={directory}
      // 不可，否则会没法删除
      // disabled={isDisabled}
    >
      {listType === 'picture-card' ? (
        <button style={{ border: 0, background: 'none' }} type="button" disabled={isDisabled}>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>本地上传</div>
        </button>
      ) : (
        <Button icon={<UploadOutlined />} disabled={isDisabled}>
          本地上传{showCount && multiple ? `（${fileList.length}/${maxCount}）` : ''}
        </Button>
      )}
    </AntdUpload>
  );
}

interface UploadDraggerProps extends UploadBaseProps {
  title?: string;
  description?: string | ReactNode;
  onChangeOriginal?: (info: UploadChangeParam<UploadFile>) => void;
  showStatus?: boolean;
}
function UploadDragger(props: UploadDraggerProps) {
  const {
    multiple,
    maxCount,
    action,
    customRequest,
    listType,
    accept,
    title,
    description,
    showStatus,
    directory,
  } = props;
  const { onChange, beforeUpload, isDisabled, fileList, successList } = useUpload(props);

  const itemRender = useCallback(
    (originNode, file, fileList) => {
      const isFirst = fileList.findIndex((item) => item.uid === file.uid) === 0;

      if (maxCount && maxCount > 1 && showStatus && isFirst) {
        return (
          <div>
            <div className="py-1">
              文件数量 ({successList.length}/{fileList.length})
            </div>
            {originNode}
          </div>
        );
      }

      return originNode;
    },
    [maxCount, showStatus, successList.length],
  );

  return (
    <AntdUpload.Dragger
      action={action}
      customRequest={customRequest}
      onChange={onChange}
      accept={accept}
      listType={listType}
      defaultFileList={fileList}
      maxCount={multiple ? maxCount : 1}
      multiple={multiple}
      beforeUpload={beforeUpload}
      directory={directory}
      // 不可，否则会没法删除
      // disabled={isDisabled}
      className={classNames('fec-upload-dragger', {
        'fec-upload-dragger-count-ten': fileList.length >= 10,
      })}
      itemRender={itemRender}
    >
      <div
        className={classNames({
          'cursor-not-allowed': isDisabled,
        })}
      >
        <p className={classNames('ant-upload-drag-icon')}>
          <InboxOutlined
            className={classNames({
              '!text-03': isDisabled,
            })}
          />
        </p>
        <p
          className={classNames('ant-upload-text', {
            '!text-03': isDisabled,
          })}
        >
          {title || '点击或拖拽到此区域进行上传'}
        </p>
        {description && <p className={classNames('ant-upload-hint')}>{description}</p>}
      </div>
    </AntdUpload.Dragger>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageUploadProps extends UploadProps {}
function ImageUpload(props: ImageUploadProps) {
  return <Upload {...props} accept="image/*" listType="picture" />;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageUploadDraggerProps extends UploadProps {}
function ImageUploadDragger(props: ImageUploadDraggerProps) {
  return <UploadDragger {...props} accept="image/*" listType="picture" />;
}

interface AvatarImageUploadProps {
  value?: string;
  onChange?: (value?: string) => void;
  action?: string;
  customRequest?: AntdUploadProps['customRequest'];
  accept?: string;
  headers?: AntdUploadProps['headers'];
}
function AvatarImageUpload(props: AvatarImageUploadProps) {
  const { value, onChange, action, customRequest, accept = 'image/*', headers } = props;

  return (
    <div className="flex gap-2">
      <Avatar size={80} src={value} shape="square" className="bg-01 shadow" />

      <div className="flex flex-1 flex-col justify-between">
        <div className="text-03">请选择</div>
        <div className="flex gap-2">
          <AntdUpload
            action={action}
            customRequest={customRequest}
            onChange={(info) => {
              const url = info.file.response?.data?.url;
              if (url) {
                onChange?.(url);
              }
            }}
            itemRender={() => null}
            accept={accept}
            headers={headers}
          >
            <Button icon={<UploadOutlined />}>本地上传</Button>
          </AntdUpload>
          <Button icon={<DeleteOutlined />} danger onClick={() => onChange?.()}>
            删除
          </Button>
        </div>
      </div>
    </div>
  );
}

export { AvatarImageUpload, ImageUpload, ImageUploadDragger, Upload, UploadDragger };
export type {
  AvatarImageUploadProps,
  ImageUploadDraggerProps,
  ImageUploadProps,
  UploadDraggerProps,
  UploadProps,
};
