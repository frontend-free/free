import { View } from '@tarojs/components';
import React, { useEffect, useState, useRef } from 'react';
import type { ReactNode, ReactElement, FC } from 'react';

function defaultRenderComponent(): void {
  console.warn('SCComponent needs to initialize SCComponentRoot before use。');
}

interface ComponentRootType {
  renderComponent: (key: string, Component: ReactNode | null) => void;
  createPortalRoot?: Element | null;
}

const ComponentRoot: FC & ComponentRootType = () => {
  const refPortal = useRef(null);
  const refUnMount = useRef(false);
  const [components, setComponents] = useState<{
    [key: string]: ReactNode | null;
  }>({});

  useEffect(() => {
    // StrictMode run effect twice
    refUnMount.current = false;

    function renderComponent(key: string, Component: ReactNode | null) {
      // No need to run if unmounted.
      if (refUnMount.current) {
        return;
      }

      // 避免 render 里面 setState，setTimeout 断开
      setTimeout(() => {
        setComponents((prev) => {
          const newComponents = { ...prev };
          if (Component === null) {
            delete newComponents[key];
          } else {
            newComponents[key] = Component;
          }

          return newComponents;
        });
      }, 0);
    }

    // Register
    ComponentRoot.renderComponent = renderComponent;
    ComponentRoot.createPortalRoot = refPortal.current;

    return () => {
      refUnMount.current = true;
      // Restore
      ComponentRoot.renderComponent = defaultRenderComponent;
      ComponentRoot.createPortalRoot = undefined;
    };
  }, []);

  return (
    <View className="mini-component-root-container">
      {Object.keys(components).map((key) => {
        return React.cloneElement(components[key] as ReactElement, {
          key,
        });
      })}
      <div ref={refPortal} />
    </View>
  );
};

ComponentRoot.renderComponent = defaultRenderComponent;
ComponentRoot.createPortalRoot = undefined;

export { ComponentRoot };
