import { AtToast } from 'taro-ui';
import { ComponentRoot } from '../component_root';

interface ToastProps {
  text?: string;
  icon?: any;
  duration?: number;
  status?: 'error' | 'loading' | 'success';
  hasMask?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

const Toast = (props: ToastProps) => {
  return <AtToast isOpened {...props} duration={props.duration || 2000} />;
};

const key = 'Toast';
Toast.show = (props: ToastProps) => {
  const handleOnClose = () => {
    props.onClose?.();
    ComponentRoot.renderComponent(key, null);
  };

  ComponentRoot.renderComponent(key, <Toast {...props} onClose={handleOnClose} />);

  return {
    close: () => {
      ComponentRoot.renderComponent(key, null);
    },
  };
};

export { Toast };
