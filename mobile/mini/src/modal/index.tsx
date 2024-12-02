import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from 'taro-ui';
import type { AtModalProps } from 'taro-ui/types/modal';
import { ComponentRoot } from '../component_root';
import type { ReactNode } from 'react';
import { Button } from '@tarojs/components';
import { View } from '@tarojs/components';

interface ModalProps extends Omit<AtModalProps, 'isOpened' | 'content'> {
  content?: string | ReactNode;
}

const Modal = (props: ModalProps) => {
  return (
    <AtModal isOpened closeOnClickOverlay={false} {...props} title={undefined} content={undefined}>
      {props.title && <AtModalHeader>{props.title}</AtModalHeader>}
      <AtModalContent>{props.content || props.children}</AtModalContent>
      <AtModalAction>
        {props.cancelText && <Button onClick={props.onCancel}>{props.cancelText}</Button>}
        {props.confirmText && <Button onClick={props.onConfirm}>{props.confirmText}</Button>}
      </AtModalAction>
    </AtModal>
  );
};

const key = 'Modal';
Modal.show = (props: ModalProps) => {
  const handleOnClose = (e) => {
    props.onCancel?.(e);
    props.onClose?.(e);
    ComponentRoot.renderComponent(key, null);
  };

  const handleOnConfirm = (e) => {
    props.onConfirm?.(e);
    ComponentRoot.renderComponent(key, null);
  };

  const handleOnCancel = (e) => {
    props.onCancel?.(e);
    ComponentRoot.renderComponent(key, null);
  };

  ComponentRoot.renderComponent(
    key,
    <Modal
      {...props}
      onClose={handleOnClose}
      onConfirm={handleOnConfirm}
      onCancel={handleOnCancel}
    />
  );

  return {
    destroy: () => {
      ComponentRoot.renderComponent(key, null);
    },
  };
};

Modal.alert = (props: ModalProps) => {
  return Modal.show({
    confirmText: '确定',
    ...props,
    content: <View className="text-center">{props.content}</View>,
  });
};

Modal.confirm = (props: ModalProps) => {
  return Modal.show({
    confirmText: '确定',
    cancelText: '取消',
    ...props,
    content: <View className="text-center">{props.content}</View>,
  });
};

export { Modal };
