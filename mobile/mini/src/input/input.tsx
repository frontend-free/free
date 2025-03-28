import { AtInput } from 'taro-ui';
import classNames from 'classnames';
import './index.scss';
import type { AtInputProps } from 'taro-ui/types/input';
import type { CSSProperties, ReactNode } from 'react';
import { memo } from 'react';

interface InputProps extends Omit<AtInputProps, 'title'> {
  title?: string | ReactNode;
  note?: string | ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Input = memo<InputProps>((props) => {
  const newTitle = (
    <div>
      <div>{props.title}</div>
      <div style={{ color: '#999', fontSize: '0.7rem' }}>{props.note}</div>
    </div>
  );
  return (
    <AtInput
      {...props}
      className={classNames('mini-input', props.className)}
      title={newTitle as any}
    />
  );
});

export { Input };
export type { InputProps };
