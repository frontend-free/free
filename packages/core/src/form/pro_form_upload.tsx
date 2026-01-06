// 避免循环引用
import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
import { App } from 'antd';
import { useState } from 'react';
import type {
  AvatarImageUploadProps,
  ImageUploadDraggerProps,
  ImageUploadProps,
  UploadDraggerProps,
  UploadProps,
} from '../upload';
import {
  AvatarImageUpload,
  ImageUpload,
  ImageUploadDragger,
  Upload,
  UploadDragger,
} from '../upload';

function ProFormUpload(props: ProFormItemProps<UploadProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <Upload {...fieldProps} />
    </ProForm.Item>
  );
}

function ProFormUploadDragger(props: ProFormItemProps<UploadDraggerProps>) {
  const { fieldProps, ...rest } = props;
  const { message } = App.useApp();

  const [info, setInfo] = useState<any>(undefined);

  const successList = info?.fileList
    ?.map((item) => item.url || item.response?.data.url)
    .filter(Boolean);

  return (
    <ProForm.Item
      {...rest}
      validateTrigger={['onSubmit']}
      rules={[
        ...(props.rules || []),
        {
          validator: () => {
            if (successList?.length !== info?.fileList?.length) {
              message.error('存在未成功的文件，请处理！');
              return Promise.reject('');
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <UploadDragger
        {...fieldProps}
        onChangeOriginal={(info) => {
          setInfo(info);
          fieldProps?.onChangeOriginal?.(info);
        }}
      />
    </ProForm.Item>
  );
}

function ProFormImageUpload(props: ProFormItemProps<ImageUploadProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <ImageUpload {...fieldProps} />
    </ProForm.Item>
  );
}

function ProFormAvatarImageUpload(props: ProFormItemProps<AvatarImageUploadProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <AvatarImageUpload {...fieldProps} />
    </ProForm.Item>
  );
}

function ProFormImageUploadDragger(props: ProFormItemProps<ImageUploadDraggerProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <ImageUploadDragger {...fieldProps} />
    </ProForm.Item>
  );
}

export {
  ProFormAvatarImageUpload,
  ProFormImageUpload,
  ProFormImageUploadDragger,
  ProFormUpload,
  ProFormUploadDragger,
};
