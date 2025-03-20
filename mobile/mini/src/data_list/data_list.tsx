import { Text } from '../text';
import type { ScrollViewProps } from '@tarojs/components';
import { ScrollView, View } from '@tarojs/components';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { AtActivityIndicator } from 'taro-ui';

interface DataListProps<D> extends ScrollViewProps {
  loading?: boolean;
  data?: D[];
  renderItem: (props: { item: D; index: number }) => ReactNode;
  loadingMore?: boolean;
  noMore?: boolean;
  className?: string;
}

const DataList = ({
  loading,
  data,
  renderItem,
  loadingMore,
  noMore,
  className,
  ...scrollViewProps
}: DataListProps<any>) => {
  return (
    <ScrollView scrollY {...scrollViewProps} className={classNames('h-full w-full', className)}>
      {loading && (
        <View className="flex items-center justify-center pt-4">
          <AtActivityIndicator size={60} />
        </View>
      )}
      {(!data || data?.length === 0) && !loading && (
        <View className="flex flex-col gap-2 h-full w-full items-center justify-center">
          <Text>暂无数据</Text>
        </View>
      )}
      {!loading &&
        data?.map((item, index) => {
          return renderItem({ item, index });
        })}
      {loadingMore && (
        <View className="flex flex-row items-center justify-center py-2 gap-2">
          <AtActivityIndicator />
          <Text className="text-desc">加载更多...</Text>
        </View>
      )}
      {data && data?.length > 0 && !loading && !loadingMore && noMore && (
        <View className="flex items-center justify-center py-2">
          <Text className="text-desc">暂无更多数据</Text>
        </View>
      )}
    </ScrollView>
  );
};

export { DataList };
export type { DataListProps };
