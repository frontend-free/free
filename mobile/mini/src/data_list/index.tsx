import { Text } from '../text';
import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import classNames from 'classnames';

interface DataListProps<D> {
  loading?: boolean;
  data?: D[];
  renderItem?: (props: { item: D; index: number }) => React.ReactNode;
  className?: string;
}

const defaultRenderItem = (item: any) => {
  return <Text>{item.name}</Text>;
};

function DataList<D extends object = any>({
  loading,
  data,
  renderItem = defaultRenderItem,
  className,
}: DataListProps<D>) {
  return (
    <View className={classNames('flex flex-col gap-2 h-full w-full overflow-y-auto', className)}>
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
    </View>
  );
}

export { DataList };
export type { DataListProps };
