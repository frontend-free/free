import { AtInput } from 'taro-ui';
import classNames from 'classnames';
import './index.css';
import type { AtInputProps } from 'taro-ui/types/input';
import type { CSSProperties } from 'react';
import { memo } from 'react';

interface InputProps extends AtInputProps {
  className?: string;
  style?: CSSProperties;
}

const Input = memo<InputProps>((props) => {
  return <AtInput {...props} className={classNames('mini-input', props.className)} />;
});

export { Input };
export type { InputProps };
