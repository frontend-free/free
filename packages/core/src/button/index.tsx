import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import { useCallback, useState } from 'react';

function LoadingButton(props: ButtonProps) {
  const { onClick, ...rest } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(
    (event) => {
      const result = onClick && onClick(event);

      if (result && typeof (result as Promise<void>).then === 'function') {
        setLoading(true);

        Promise.resolve(result).finally(() => {
          setLoading(false);
        });
      }
    },
    [onClick],
  );

  return <Button loading={loading} {...rest} onClick={handleClick} />;
}

export { LoadingButton };
