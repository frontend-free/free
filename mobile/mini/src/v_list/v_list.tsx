import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useRef, useMemo, useCallback, memo } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { useSize } from 'ahooks';
import { Text } from '../text';
import { AtIcon } from 'taro-ui';
import VirtualList from '@tarojs/components-advanced/dist/components/virtual-list/react';
import { Mini } from '../mini';

type Value = string | number;

interface VListDataItem<D> {
  value: Value;
  label: ReactNode;
  description?: ReactNode;
  /** 带右箭头 */
  access?: boolean;
  /** item 点击事件 */
  onClick?: (value: Value, item: VListDataItem<D>) => void;
  originData?: any;
}

interface VListProps<D extends VListDataItem<D>> {
  data: D[];
  renderLabel?: ({ item }: { item: D }) => ReactNode;
  onClick?: (value: Value, item: D) => void;

  /** 行高。默认 40 */
  itemSize?: number;
}

const ItemDataContext = createContext<any>({});

const Row = memo(({ id, index }: any) => {
  const itemData = useContext(ItemDataContext);

  const { renderLabel, onClick, data } = itemData;
  const item = data[index];

  const handleClick = useCallback(() => {
    onClick?.(item.value, item);

    item.onClick?.(item.value, item);
  }, [onClick, item]);

  return (
    <View
      id={id}
      className={classNames('flex h-full flex-col justify-center overflow-hidden')}
      onClick={handleClick}
    >
      {renderLabel({ item })}
    </View>
  );
});

function defaultRenderLabel<D extends VListDataItem<D>>({ item }: { item: D }) {
  return (
    <View className="c-border-top flex h-full items-center justify-between bg-white p-2">
      <View>
        <Text>{item.label}</Text>
        {item.description && (
          <Text size="xs" className="text-desc">
            {item.description}
          </Text>
        )}
      </View>
      {item.access && <AtIcon value="chevron-right" size={16} className="text-desc" />}
    </View>
  );
}

const InnerElementTypeElementType = (props: any) => {
  return (
    <View
      {...props}
      style={{
        ...props.style,
        pointerEvents: 'auto',
      }}
    />
  );
};

const VList = memo(<D extends VListDataItem<D> = any>(props: VListProps<D>) => {
  const ref = useRef<HTMLDivElement>(null);

  const size = useSize(ref);

  const itemData = useMemo(() => {
    return {
      data: props.data,
      renderLabel: props.renderLabel || defaultRenderLabel,
      onClick: props.onClick,
    };
  }, [props.data, props.renderLabel, props.onClick]);

  const hasDesc = props.data.find((item) => !!item.description);

  const defaultItemSize = props.data.length
    ? hasDesc
      ? Mini.transformToPx(114)
      : Mini.transformToPx(80)
    : 0;

  return (
    <View ref={ref} className="z-10 h-full max-h-full">
      <ItemDataContext.Provider value={itemData}>
        {/* defaultItemSize 有值才渲染，否则 变动导致渲染错位 */}
        {!!size && !!defaultItemSize && (
          <VirtualList
            height={size.height}
            width="100%"
            itemCount={props.data.length}
            itemSize={props.itemSize || defaultItemSize}
            itemData={props.data}
            item={Row}
            innerElementType={InnerElementTypeElementType}
          />
        )}
      </ItemDataContext.Provider>
    </View>
  );
});

export { VList };
export type { VListProps, VListDataItem };
