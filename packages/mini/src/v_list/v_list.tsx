import type { ReactNode } from 'react';
import { useRef, useMemo, useCallback, memo } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { FixedSizeList } from 'react-window';
import { useSize } from 'ahooks';
import { Text } from '../text';
import { AtIcon } from 'taro-ui';

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

const RowItem = memo(({ item, renderLabel }: any) => {
  return renderLabel({ item });
});

const Row = memo(({ index, style, data }: any) => {
  const { renderLabel, onClick } = data;
  const item = data.data[index];

  const handleClick = useCallback(() => {
    onClick?.(item.value, item);

    item.onClick?.(item.value, item);
  }, [onClick, item]);

  return (
    <View
      key={item.value}
      style={style}
      className={classNames('flex flex-col justify-center overflow-hidden')}
      onClick={handleClick}
    >
      <RowItem item={item} renderLabel={renderLabel} />
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

const VList = memo(<D extends VListDataItem<D> = any>(props: VListProps<D>) => {
  const ref = useRef<FixedSizeList>(null);

  const size = useSize(ref);

  const itemData = useMemo(() => {
    return {
      data: props.data,
      renderLabel: props.renderLabel || defaultRenderLabel,
      onClick: props.onClick,
    };
  }, [props.data, props.renderLabel, props.onClick]);

  const hasDesc = props.data.find((item) => !!item.description);
  const defaultItemSize = hasDesc ? 57 : 40;

  return (
    <View ref={ref} className="z-10 h-full max-h-full">
      {size && (
        <FixedSizeList
          height={size.height}
          itemCount={props.data.length}
          itemSize={props.itemSize || defaultItemSize}
          itemData={itemData}
          overscanCount={3}
        >
          {Row}
        </FixedSizeList>
      )}
    </View>
  );
});

export { VList };
export type { VListProps, VListDataItem };
