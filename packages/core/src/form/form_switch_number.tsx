import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import type { SwitchProps } from 'antd';
import { Switch } from 'antd';
import React from 'react';

interface SwitchNumberProps extends Omit<SwitchProps, 'value' | 'onChange'> {
  value: number;
  onChange: (
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
        return props.onChange(checked ? 1 : 0, event);
      }}
    />
  );
}

function ProFormSwitchNumber(props: ProFormItemProps<SwitchNumberProps>) {
  // 没搞明白 cacheFormSwr, proFieldKey, onBlur，先这样处理
  /* eslint-disable-next-line */
  const { fieldProps, readonly, ...rest } = props;

  return (
    <ProForm.Item {...rest}>
      <SwitchNumber {...(fieldProps as SwitchNumberProps)} />
    </ProForm.Item>
  );
}

export { ProFormSwitchNumber, SwitchNumber };
export type { SwitchNumberProps };
