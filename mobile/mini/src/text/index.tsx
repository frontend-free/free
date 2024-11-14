import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import classNames from 'classnames';

interface TextProps extends ViewProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
}

function Text(props: TextProps) {
  const { size = 'sm', ...rest } = props;
  return (
    <View
      {...rest}
      className={classNames(
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'base',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
        },
        rest.className
      )}
    >
      {props.children}
    </View>
  );
}

export { Text };
export type { TextProps };
