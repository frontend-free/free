// 避免循环引用
import { InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps as AntdUploadProps, UploadFile } from 'antd';
import { Upload as AntdUpload, Button, message } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';

interface UploadBaseProps {
  value?: string[] | string;
  onChange?: (value?: string[] | string) => void;
  multiple?: boolean;
  maxCount?: number;
  action?: string;
  customRequest?: AntdUploadProps['customRequest'];
  listType?: AntdUploadProps['listType'];
  accept?: string;
}

interface UploadProps extends UploadBaseProps {
  showCount?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UploadDraggerProps extends UploadBaseProps {}

function useUpload(props: ImageUploadProps) {
  const { value, onChange, multiple, maxCount } = props;
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

  const handleChange = useCallback(
    (info) => {
      setFileList(info.fileList);

      // 找到真正上传成功的。
      const newValue = info.fileList
        .map((item) => item.url || item.response?.data.url)
        .filter(Boolean);

      onChange?.(multiple ? newValue : newValue[0]);
    },
    [multiple, onChange],
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
  };
}

function Upload(props: ImageUploadProps) {
  const { multiple, maxCount, showCount, action, customRequest, listType, accept } = props;
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

function UploadDragger(props: ImageUploadDraggerProps) {
  const { multiple, maxCount, action, customRequest, listType, accept } = props;
  const { onChange, beforeUpload, isDisabled, fileList } = useUpload(props);

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
      // 不可，否则会没法删除
      // disabled={isDisabled}
    >
      <div
        className={classNames({
          'cursor-not-allowed': isDisabled,
        })}
      >
        <p className={classNames('ant-upload-drag-icon')}>
          <InboxOutlined
            className={classNames({
              '!text-desc': isDisabled,
            })}
          />
        </p>
        <p
          className={classNames('ant-upload-text', {
            '!text-desc': isDisabled,
          })}
        >
          点击或拖拽到此区域进行上传
        </p>
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

export { ImageUpload, ImageUploadDragger, Upload, UploadDragger };
export type { ImageUploadDraggerProps, ImageUploadProps, UploadDraggerProps, UploadProps };
