import { Picker as TaroPicker } from '@tarojs/components';
import { useMemo } from 'react';

interface PickerItem {
  label: string;
  value: string | number;
}

interface PickerProps {
  options?: PickerItem[];
  value?: string | number;
  onChange?: (value?: string | number, item?: PickerItem) => void;
  children?: React.ReactNode;
}

function Picker(props: PickerProps) {
  const { options, value, onChange, children } = props;

  const tPickerProps = useMemo(() => {
    const valueMap = {};
    const range: string[] = [];

    options?.forEach((item) => {
      valueMap[item.value] = item;
      range.push(item.label);
    });

    return { range, value: options?.findIndex((item) => item.value === value) };
  }, [options]);

  return (
    <TaroPicker
      mode="selector"
      value={tPickerProps.value}
      range={tPickerProps.range}
      onChange={(v) => {
        const item = options![v.detail.value];
        onChange?.(item?.value, item);
      }}
    >
      {children}
    </TaroPicker>
  );
}

export { Picker };
export type { PickerProps };
