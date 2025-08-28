import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import { useCallback, useState } from 'react';

function LoadingButton(props: ButtonProps) {
  const { onClick, ...rest } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(
    (event) => {
      setLoading(true);

      Promise.resolve(onClick && onClick(event)).finally(() => {
        setLoading(false);
      });
    },
    [onClick],
  );

  return <Button loading={loading} {...rest} onClick={handleClick} />;
}

export { LoadingButton };
