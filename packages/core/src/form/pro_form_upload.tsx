// 避免循环引用
import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
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
  return (
    <ProForm.Item {...rest}>
      <UploadDragger {...fieldProps} />
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
