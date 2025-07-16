import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import { memo } from 'react';
import { AtInput } from 'taro-ui';
import type { AtInputProps } from 'taro-ui/types/input';
import { Text } from '../text';
import './index.scss';

interface InputProps extends Omit<AtInputProps, 'title'> {
  title?: string | ReactNode;
  note?: string | ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Input = memo<InputProps>((props) => {
  const newTitle = (
    <>
      {props.title}
      <Text size="xs" className="text-desc">
        {props.note}
      </Text>
    </>
  );

  return (
    <AtInput
      {...props}
      className={classNames('mini-input', props.className)}
      title={(typeof props.title === 'string' && !props.note ? props.title : newTitle) as any}
      disabled={props.disabled}
    />
  );
});

export { Input };
export type { InputProps };
