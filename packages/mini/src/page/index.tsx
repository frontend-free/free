import { View } from '@tarojs/components';
import { AtNavBar } from 'taro-ui';
import Taro from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';
import { Text } from '..';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { isString } from 'lodash-es';

interface PageProps {
  title?: string;
  hideBack?: boolean;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode | ReactNode[];
  loading?: boolean;
  error?: boolean | string;
  empty?: boolean | string;
  className?: string;
}
const Page = (props: PageProps) => {
  let content;

  if (props.loading) {
    content = (
      <View className="flex h-full items-center justify-center">
        <AtActivityIndicator mode="center" size={100} />
      </View>
    );
  } else if (props.error) {
    content = (
      <View className="flex h-full items-center justify-center">
        <Text className="text-desc">
          {isString(props.error) && props.error ? props.error : '加载失败'}
        </Text>
      </View>
    );
  } else if (props.empty) {
    content = (
      <View className="flex h-full items-center justify-center">
        <Text className="text-desc">{props.empty || '暂无数据'}</Text>
      </View>
    );
  } else {
    content = props.children;
  }

  const handleBack = useCallback(() => {
    const pages = Taro.getCurrentPages();
    if (pages.length > 1) {
      Taro.navigateBack();
    } else {
      Taro.switchTab({ url: '/pages/index/index' });
    }
  }, []);

  return (
    <View className={classNames('flex h-full flex-col', props.className)}>
      <AtNavBar
        title={props.title}
        leftIconType={props.hideBack ? '' : 'chevron-left'}
        onClickLeftIcon={handleBack}
      />
      {props.top && <View>{props.top}</View>}
      <View className="flex-1 overflow-y-auto">{content}</View>
      {props.bottom && <View>{props.bottom}</View>}
    </View>
  );
};

export { Page };
