import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import { AtFloatLayout } from 'taro-ui';
import type { AtFloatLayoutProps } from 'taro-ui/types/float-layout';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { ComponentRoot } from '../component_root';

const FloatLayout = (props: AtFloatLayoutProps) => {
  return createPortal(
    <AtFloatLayout {...props}>{props.isOpened && props.children}</AtFloatLayout>,
    ComponentRoot.createPortalRoot as Element
  );
};

interface FloatLayoutClickProps extends ViewProps {
  children: React.ReactNode;
  layoutProps: Omit<AtFloatLayoutProps, 'isOpened'>;
}

type FloatLayoutClickRef = {
  open: () => void;
  close: () => void;
};

const FloatLayoutClick = forwardRef<FloatLayoutClickRef, FloatLayoutClickProps>(
  ({ layoutProps, children, ...rest }, ref) => {
    const [isOpened, setIsOpened] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpened(true);
      },
      close: () => {
        setIsOpened(false);
      },
    }));

    return (
      <>
        <View
          {...rest}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpened(true);
            rest.onClick?.(e);
          }}
        >
          {children}
        </View>
        <FloatLayout
          {...layoutProps}
          isOpened={isOpened}
          onClose={(e) => {
            setIsOpened(false);
            layoutProps.onClose?.(e);
          }}
        />
      </>
    );
  }
);

FloatLayout.Click = FloatLayoutClick;

export { FloatLayout };
