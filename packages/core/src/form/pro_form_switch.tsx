import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { SwitchProps } from 'antd';
import { Switch } from 'antd';
import React, { useCallback, useEffect, useMemo } from 'react';

interface SwitchNumberProps extends Omit<SwitchProps, 'value' | 'onChange'> {
  value: number;
  onChange?: (
    value: number,
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
}

function SwitchNumber(props: SwitchNumberProps) {
  return (
    <Switch
      {...props}
      value={props.value ? true : false}
      onChange={(checked, event) => {
        return props.onChange?.(checked ? 1 : 0, event);
      }}
    />
  );
}

function ProFormSwitchNumber(props: ProFormItemProps<SwitchNumberProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <SwitchNumber {...(fieldProps as SwitchNumberProps)} />
    </ProForm.Item>
  );
}

interface SwitchOptionsProps extends Omit<SwitchProps, 'value' | 'onChange'> {
  value: string;
  onChange?: (
    value: string,
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  options?:
    | string[]
    | {
        value: string;
        label: string;
      }[];
  enableLabel?: boolean;
}
const emptyArray = [];
function SwitchOptions({
  value,
  onChange,
  options = emptyArray,
  enableLabel,
  ...rest
}: SwitchOptionsProps) {
  useEffect(() => {
    if (options.length !== 2) {
      console.error('SwitchOptions 必须有 2 个选项');
    }
  }, [options]);

  const newOptions = useMemo(() => {
    return options.map((item) => {
      if (typeof item === 'string') {
        return {
          value: item,
          label: item,
        };
      }
      return {
        value: item.value,
        label: item.label,
      };
    });
  }, [options]);

  const newValue = useMemo(() => {
    // 1 true 其他 false
    return newOptions.findIndex((item) => item.value === value) === 1 ? true : false;
  }, [newOptions, value]);

  const handleChange = useCallback(
    (
      checked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      onChange?.(checked ? newOptions[1].value : newOptions[0].value, event);
    },
    [newOptions, onChange],
  );

  return (
    <Switch
      checkedChildren={enableLabel ? newOptions[1].label : undefined}
      unCheckedChildren={enableLabel ? newOptions[0].label : undefined}
      {...rest}
      value={newValue}
      onChange={handleChange}
    />
  );
}

function ProFormSwitchOptions(props: ProFormItemProps<SwitchOptionsProps>) {
  const { fieldProps, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <SwitchOptions {...(fieldProps as SwitchOptionsProps)} />
    </ProForm.Item>
  );
}

export { ProFormSwitchNumber, ProFormSwitchOptions, SwitchNumber, SwitchOptions };
export type { SwitchNumberProps, SwitchOptionsProps };
