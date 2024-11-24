import { List } from '../list';
import { Picker } from '../picker';
import type { PickerProps } from '../picker';

interface SelectProps extends Omit<PickerProps, 'children'> {
  title?: string;
  placeholder?: string;
  required?: boolean;
}

function Select(props: SelectProps) {
  const { options, value, onChange, title, placeholder, required } = props;

  const label = options?.find((item) => item.value === value)?.label;

  return (
    <Picker options={options} value={value} onChange={onChange}>
      <List.Item required={required} title={title} extraText={label || placeholder || '请选择'} />
    </Picker>
  );
}

export { Select };
export type { SelectProps };
