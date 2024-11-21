import { Picker } from '@tarojs/components';
import { List } from '../list';

interface SelectDateProps {
  value?: string;
  onChange?: (v: string) => void;
  title?: string;
  placeholder?: string;
  required?: boolean;
}

function SelectDate({ title, value, onChange, placeholder, required }: SelectDateProps) {
  return (
    <Picker mode="date" value={value || ''} onChange={(e) => onChange?.(e.detail.value)}>
      <List.Item required={required} title={title} extraText={value || placeholder || '请选择'} />
    </Picker>
  );
}

export { SelectDate };
export type { SelectDateProps };
