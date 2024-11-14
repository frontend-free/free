import { AtTabs, AtTabsPane } from 'taro-ui';
import { useState, useRef, useEffect } from 'react';
import { View } from '@tarojs/components';
import { useSize } from 'ahooks';

interface TabsProps {
  direction?: 'vertical' | 'horizontal';
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  height?: string;
}

const Tabs = (props: TabsProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <AtTabs
      scroll
      height={props.height}
      tabList={props.items.map((item) => ({ title: item.title }))}
      tabDirection={props.direction}
      current={current}
      onClick={(v) => setCurrent(v)}
    >
      {props.items.map((item, index) => (
        <AtTabsPane key={index} tabDirection={props.direction} current={current} index={index}>
          {current === index && item.content}
        </AtTabsPane>
      ))}
    </AtTabs>
  );
};

/** 只适配横向 */
const TabsFull = (props: TabsProps) => {
  const { height: originalHeight, items, ...rest } = props;

  const ref = useRef<any>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const size = useSize(ref);

  const height = originalHeight || (size?.height && `${size?.height}px`);

  useEffect(() => {
    if (height) {
      const domHeader = ref.current.querySelector('.at-tabs__header');
      setHeaderHeight(domHeader.clientHeight);
    }
  }, [height]);

  const newItems = items.map((item) => ({
    title: item.title,
    content:
      size && headerHeight ? (
        <View className="overflow-y-auto" style={{ height: `calc(${height} - ${headerHeight}px)` }}>
          {item.content}
        </View>
      ) : (
        <View />
      ),
  }));

  return (
    <View ref={ref} style={{ height: '100%' }}>
      {height && <Tabs {...rest} height={'auto'} items={newItems} />}
    </View>
  );
};

export { Tabs, TabsFull };
