import { Input } from './input';
import type { InputProps } from './input';
import { Text } from '../text';
import { useState, useCallback, useRef, useEffect, memo } from 'react';
import classNames from 'classnames';

interface InputCaptchaProps extends InputProps {
  countdown: number;
  onCaptcha: () => Promise<void>;
}

const InputCaptcha = memo<InputCaptchaProps>((props) => {
  const { onCaptcha, countdown, ...rest } = props;

  const [count, setCount] = useState(0);
  const refTimer = useRef<any>(null);

  const handleCountDown = useCallback(() => {
    setCount(countdown);

    refTimer.current = setInterval(() => {
      setCount((count) => {
        if (count <= 1) {
          clearInterval(refTimer.current);
        }

        return count - 1;
      });
    }, 1000);
  }, [countdown]);

  useEffect(() => {
    return () => {
      clearInterval(refTimer.current);
    };
  }, []);

  return (
    <Input {...rest}>
      <Text
        className={classNames({
          'opacity-50': count,
        })}
        onClick={async (event) => {
          event.stopPropagation();

          if (count) {
            return;
          }

          await onCaptcha();

          handleCountDown();
        }}
      >
        获取验证码{count ? `(${count})` : ''}
      </Text>
    </Input>
  );
});

export { InputCaptcha };
export type { InputCaptchaProps };
