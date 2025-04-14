import { Picker as TaroPicker } from '@tarojs/components';
import { useEffect, useMemo, useState } from 'react';

interface PickerItem<T> {
  label: string;
  value: T | undefined;
  children?: PickerItem<T>[];
}

interface BaseMultiPickerProps<T> {
  options: PickerItem<T>[];
  value: (T | undefined)[];
  onChange?: (value: (T | undefined)[], items?: (PickerItem<T> | undefined)[]) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

function BaseMultiPicker<T = string>(props: BaseMultiPickerProps<T>) {
  const { options, onChange, children, disabled } = props;

  const [value, setValue] = useState<(T | undefined)[]>(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const { map, maxLevel } = useMemo(() => {
    const map = new Map<T, { item: PickerItem<T>; level: number; index: number }>();

    let maxLevel = 0;

    function deep(arr: PickerItem<T>[], level: number) {
      maxLevel = level;

      arr.forEach((item, index) => {
        if (item.value !== undefined) {
          map.set(item.value, {
            level,
            index,
            item,
          });
        }

        if (item.children && item.children.length > 0) {
          deep(item.children, level + 1);
        }
      });
    }

    deep(options, 0);

    return {
      map,
      maxLevel,
    };
  }, [options]);

  const tPickerProps = useMemo(() => {
    const range: string[][] = [];
    const tValue: number[] = [];

    for (let i = 0; i <= maxLevel; i++) {
      range[i] = [];
      tValue[i] = 0;
    }

    function deep(arr: PickerItem<T>[], level: number) {
      if (arr.length === 0) {
        return;
      }

      let itemIndex;

      arr.forEach((item, index) => {
        range[level].push(item.label);
        if (value[level] === item.value) {
          itemIndex = index;
        }
      });

      // 如果当前层级没有找到对应的值，则默认选中第一个
      if (itemIndex === undefined) {
        itemIndex = 0;
      }

      tValue[level] = itemIndex;

      if (arr[itemIndex].children) {
        deep(arr[itemIndex].children!, level + 1);
      }
    }

    deep(options, 0);

    return { range, value: tValue };
  }, [maxLevel, options, value]);

  const handleColumnChange = (event) => {
    const { column, value } = event.detail;

    const newTaroValue = [...tPickerProps.value];

    newTaroValue[column] = value;
    // 后续的默认选中第一个
    for (let i = column + 1; i <= maxLevel; i++) {
      newTaroValue[i] = 0;
    }

    const newValue: (T | undefined)[] = [];

    let arr = options;
    for (let i = 0; i <= maxLevel; i++) {
      newValue[i] = arr[newTaroValue[i]].value;
      arr = arr[newTaroValue[i]].children || [];
    }

    setValue(newValue);
  };

  const handleChange = () => {
    const items = value.map((v) => {
      return v !== undefined ? map.get(v)?.item : undefined;
    }) as (PickerItem<T> | undefined)[];

    onChange?.(
      items.map((item) => item?.value),
      items,
    );
  };

  return (
    <TaroPicker
      mode="multiSelector"
      value={tPickerProps.value}
      range={tPickerProps.range}
      disabled={disabled}
      onColumnChange={handleColumnChange}
      onChange={handleChange}
    >
      {children}
    </TaroPicker>
  );
}

interface MultiPickerProps<T> extends Omit<BaseMultiPickerProps<T>, 'value' | 'onChange'> {
  value: (T | undefined)[];
  onChange?: (value: (T | undefined)[], items?: (PickerItem<T> | undefined)[]) => void;
}
/** 先处理两列 */
function MultiPicker<T = string>(props: MultiPickerProps<T>) {
  const { value, onChange, options, ...rest } = props;

  const newOptions = useMemo(() => {
    return [
      { label: '请选择', value: undefined, children: [{ label: '请选择', value: undefined }] },
      ...options,
    ];
  }, [options]);

  return <BaseMultiPicker {...rest} value={value} onChange={onChange} options={newOptions} />;
}

export { MultiPicker };
export type { MultiPickerProps };
