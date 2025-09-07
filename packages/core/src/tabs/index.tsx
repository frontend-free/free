import type { TabsProps as AntdTabsProps } from 'antd';
import { Tabs as AntdTabs } from 'antd';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface TabsProps extends AntdTabsProps {
  /** 自动时设置和同步 searchParams tab */
  withSearchParams?: boolean;
}

function Tabs(props: TabsProps) {
  const { withSearchParams, activeKey, onChange, ...rest } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || undefined;

  useEffect(() => {
    if (withSearchParams) {
      if (!tab && props.items?.[0]?.key) {
        setSearchParams({ tab: props.items?.[0]?.key });
      }
    }
    // tab 清空的时候要重新设置第一个
  }, [tab]);

  return (
    <AntdTabs
      {...rest}
      activeKey={withSearchParams ? tab : activeKey}
      onChange={(key) => {
        onChange?.(key);
        if (props.withSearchParams) {
          searchParams.set('tab', key);

          setSearchParams({ tab: key });
        }
      }}
    />
  );
}

export { Tabs };
export type { TabsProps };
