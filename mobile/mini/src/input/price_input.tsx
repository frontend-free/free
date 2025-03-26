import { Input } from './input';
import Big from 'big.js';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

type PriceInputProps = {
  value?: number;
  onChange?: (v: number) => void;
  name: string;
  title: string;
  placeholder?: string;
  children?: ReactNode;
};

function PriceInput(props: PriceInputProps) {
  const onChange = props.onChange;
  const value = props.value || 0;
  const [text, setText] = useState<string>(Big(value).div(100).toString());

  // 以便 effect 使用
  const refText = useRef<string>(text);
  useEffect(() => {
    const inputValue = refText.current ? Big(refText.current).times(100).toNumber() : 0;

    // 如果输入框的值与 props.value 不一致，则更新输入框的值
    if (value !== inputValue) {
      const newText = Big(value).div(100).toString();
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

      onChange?.(newV ? Big(newV).times(100).toNumber() : 0);
    },
    [onChange]
  );

  return <Input {...props} type="digit" value={text} onChange={handleChange} />;
}

export { PriceInput };
export type { PriceInputProps };
