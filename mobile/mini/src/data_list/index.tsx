import { Text } from '../text';
import { View } from '@tarojs/components';

interface DataListProps<D> {
  data?: D[];
  renderItem?: (props: { item: D; index: number }) => React.ReactNode;
}

const defaultRenderItem = (item: any) => {
  return <Text>{item.name}</Text>;
};

function DataList<D extends object = any>({
  data,
  renderItem = defaultRenderItem,
}: DataListProps<D>) {
  return (
    <View className="flex flex-col gap-2 h-full w-full overflow-y-auto">
      {data?.map((item, index) => {
        return renderItem({ item, index });
      })}
    </View>
  );
}

export { DataList };
export type { DataListProps };
