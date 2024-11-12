import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { AtCheckbox } from 'taro-ui';
import type { AtCheckboxProps } from 'taro-ui/types/checkbox';
import './index.scss';

interface CheckboxProps<V>
  extends Omit<AtCheckboxProps<V>, 'selectedList' | 'onChange' | 'options'> {
  options: {
    value: V;
    label: ReactNode | string;
    desc?: string;
    disabled?: boolean;
  }[];
  value?: V[];
  onChange?: (value?: V[]) => void;
  /** 新增 */
  size?: 'small';
  /** 新增 */
  noBorder?: boolean;
}

const Checkbox = <V extends string | number>(props: CheckboxProps<V>) => {
  const { onChange, ...rest } = props;
  const handleChange = useCallback((value) => onChange?.(value), [onChange]);

  return (
    <AtCheckbox
      {...rest}
      options={props.options as any}
      selectedList={props.value || []}
      onChange={handleChange}
      className={classNames('mini-checkbox', {
        'mini-checkbox-size-small': props.size === 'small',
        'mini-checkbox-no-border': props.noBorder,
      })}
    />
  );
};

export { Checkbox };
export type { CheckboxProps };
