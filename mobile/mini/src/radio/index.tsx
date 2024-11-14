import type { ReactNode } from 'react';
import { AtRadio } from 'taro-ui';
import type { AtRadioProps } from 'taro-ui/types/radio';

interface RadioProps<T> extends Omit<AtRadioProps<T>, 'value' | 'onClick' | 'options'> {
  options?: {
    label: string | ReactNode;
    value: T;
    desc?: string;
    disabled?: boolean;
  }[];
  value?: T;
  onChange?: (value?: T) => void;
}

const Radio = <T extends string | number>(props: RadioProps<T>) => {
  return (
    <AtRadio
      {...props}
      options={props?.options as any}
      value={props.value}
      onClick={(value) => props.onChange?.(value)}
    />
  );
};

export { Radio };
export type { RadioProps };
