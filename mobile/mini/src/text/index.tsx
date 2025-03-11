import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import classNames from 'classnames';

interface TextProps extends ViewProps {
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
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
          'text-4xl': size === '4xl',
          'text-5xl': size === '5xl',
          'text-6xl': size === '6xl',
          'text-7xl': size === '7xl',
          'text-8xl': size === '8xl',
          'text-9xl': size === '9xl',
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
