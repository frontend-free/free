import { Picker } from '@tarojs/components';
import { useMemo } from 'react';
import { AtListItem } from 'taro-ui';

interface SelectItem {
  label: string;
  value: string | number;
}

interface SelectProps {
  options?: SelectItem[];
  value?: string | number;
  onChange?: (value?: string | number, item?: SelectItem) => void;
  title?: string;
  placeholder?: string;
}

function Select(props: SelectProps) {
  const { options, value, onChange, title, placeholder } = props;

  const { valueMap, range } = useMemo(() => {
    const valueMap = {};
    const range: string[] = [];

    options?.forEach((item) => {
      valueMap[item.value] = item;
      range.push(item.label);
    });

    return { valueMap, range };
  }, [options]);

  return (
    <Picker
      mode="selector"
      range={range}
      onChange={(v) => {
        const item = options![v.detail.value];
        onChange?.(item?.value, item);
      }}
    >
      <AtListItem
        title={title}
        extraText={(value ? valueMap[value]?.label : '') || placeholder || '请选择'}
      />
    </Picker>
  );
}

export { Select };
export type { SelectProps };
