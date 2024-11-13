import { View } from '@tarojs/components';
import { VList } from './v_list';
import type { VListProps } from './v_list';
import type { VListDataItem } from './v_list';
import { Input } from '../input';
import { useState, useMemo, useCallback } from 'react';
import { useDebounce } from 'ahooks';
import { Text } from '../text';
import { AtButton, AtIcon } from 'taro-ui';
import { xor } from 'lodash-es';

interface VListSelectProps<V extends string | number, D extends VListDataItem<D>>
  extends VListProps<D> {
  multiple?: boolean;
  value?: V | V[];
  onChange?: (value?: V | V[], item?: D) => void;
  search?: boolean;
  filter?: (search: string, item: D) => boolean;
  onOK?: () => void;
}

const VListSelect = <V extends string | number, D extends VListDataItem<D> = any>(
  props: VListSelectProps<V, D>
) => {
  const { multiple, value, onChange, search, filter, onOK, data, onClick, renderLabel, ...rest } =
    props;
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, { wait: 500 });

  const filteredData = useMemo(() => {
    return data.filter((item) => (filter ? filter(debouncedSearchText, item) : true));
  }, [data, filter, debouncedSearchText]);

  const handleClick = (clickValue: string | number, item: D) => {
    onClick?.(clickValue, item);

    if (multiple) {
      const newValue = xor(value as V[], [clickValue]) as V[];
      onChange?.(newValue, item);
    } else {
      onChange?.(clickValue as V, item);
    }
  };

  const handleRenderLabel = useCallback(
    ({ item }) => {
      if (renderLabel) {
        return renderLabel({ item });
      }

      const isSelected = multiple ? (value as any).includes(item.value) : item.value === value;
      return (
        <View className="c-border-top flex h-full justify-between bg-white p-2">
          <View>
            <Text>{item.label}</Text>
            {item.description && (
              <Text size="xs" className="text-desc">
                {item.description}
              </Text>
            )}
          </View>
          {isSelected && <AtIcon value="check" size={16} className="text-primary" />}
        </View>
      );
    },
    [value, multiple, renderLabel]
  );

  return (
    <View className="flex h-full flex-col">
      {search && (
        <View className="c-bg bg-gray-100 p-2">
          <Input
            name="search"
            className="!ml-0 rounded-md !px-2"
            placeholder="搜索"
            onChange={(value) => setSearchText(value as string)}
            value={searchText}
            autoFocus
            clear
            border={false}
          />
        </View>
      )}
      <View className="flex-1">
        <VList
          {...rest}
          data={filteredData}
          onClick={handleClick as any}
          renderLabel={handleRenderLabel}
        />
      </View>
      {multiple && onOK && (
        <View className="p-2">
          <AtButton
            type="primary"
            onClick={() => {
              onOK?.();
            }}
          >
            确定(已选{(value as any)?.length || 0})
          </AtButton>
        </View>
      )}
    </View>
  );
};

export { VListSelect };
