import { AtSegmentedControl } from 'taro-ui';

interface SegmentedControlProps {
  value: string | number;
  onChange: (value: string | number) => void;
  items: {
    label: string;
    value: string | number;
  }[];
}
function SegmentedControl({ value, onChange, items }: SegmentedControlProps) {
  const current = items.findIndex((item) => item.value === value);

  const handleChange = (current: number) => {
    onChange(items[current].value);
  };

  return (
    <AtSegmentedControl
      values={items.map((item) => item.label)}
      onClick={handleChange}
      current={current}
      fontSize={40}
    />
  );
}

export { SegmentedControl };
export type { SegmentedControlProps };
