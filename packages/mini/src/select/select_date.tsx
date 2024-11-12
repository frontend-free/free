import { Picker } from '@tarojs/components';
import { AtListItem } from 'taro-ui';

interface SelectDateProps {
  value?: string;
  onChange?: (v: string) => void;
  title?: string;
  placeholder?: string;
}

function SelectDate({ title, value, onChange, placeholder }: SelectDateProps) {
  return (
    <Picker mode="date" value={value || ''} onChange={(e) => onChange?.(e.detail.value)}>
      <AtListItem title={title} extraText={value || placeholder || '请选择'} />
    </Picker>
  );
}

export { SelectDate };
export type { SelectDateProps };
