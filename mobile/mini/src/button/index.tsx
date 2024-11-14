import { memo, useCallback, useState } from 'react';
import { AtButton } from 'taro-ui';

import type { AtButtonProps } from 'taro-ui/types/button';

interface ButtonProps extends Omit<AtButtonProps, 'onClick'> {
  /** 增强。返回 promise，则显示 loading */
  onClick?: (e) => void | Promise<void>;
}

/** 按钮。增加 loading 状态 */
const Button = memo((props: ButtonProps) => {
  const { onClick, loading: propsLoading, ...rest } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(
    async (e) => {
      if (propsLoading || loading) {
        return;
      }

      setLoading(true);

      try {
        await onClick?.(e);
      } finally {
        setLoading(false);
      }
    },
    [loading, onClick, propsLoading]
  );

  return <AtButton {...rest} loading={propsLoading || loading} onClick={handleClick} />;
});

export { Button };
export type { ButtonProps };
