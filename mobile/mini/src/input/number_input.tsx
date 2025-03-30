import { Input } from './input';
import Big from 'big.js';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Text } from '../text';

type DigitInputProps = {
  value?: number;
  onChange?: (v: number) => void;
  name: string;
  title: string | ReactNode;
  note?: string | ReactNode;
  placeholder?: string;
  children?: ReactNode;
  disabled?: boolean;
  unit?: 1 | 100;
};

function DigitInput(props: DigitInputProps) {
  const onChange = props.onChange;
  const value = props.value || 0;
  const unit = props.unit || 1;

  const [text, setText] = useState<string>(Big(value).div(unit).toString());

  // 以便 effect 使用
  const refText = useRef<string>(text);
  useEffect(() => {
    const inputValue = refText.current ? Big(refText.current).times(unit).toNumber() : 0;

    // 如果输入框的值与 props.value 不一致，则更新输入框的值
    if (value !== inputValue) {
      const newText = Big(value).div(unit).toString();
      setText(newText);
      refText.current = newText;
    }
  }, [value]);

  const handleChange = useCallback(
    (v) => {
      let newV = v;

      // 控制最小两位小数
      if (v.includes('.')) {
        newV = v.slice(0, v.indexOf('.') + 3);
      }

      setText(newV);
      refText.current = newV;

      onChange?.(newV ? Big(newV).times(unit).toNumber() : 0);
    },
    [onChange]
  );

  return (
    <Input {...props} type="digit" value={text} onChange={handleChange} disabled={props.disabled} />
  );
}

type PriceInputProps = DigitInputProps;

function PriceInput(props: PriceInputProps) {
  return (
    <DigitInput unit={100} {...props}>
      {props.children || <Text>元</Text>}
    </DigitInput>
  );
}

export { DigitInput, PriceInput };
export type { DigitInputProps, PriceInputProps };
