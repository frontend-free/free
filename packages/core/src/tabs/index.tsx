import type { TabsProps as AntdTabsProps } from 'antd';
import { Tabs as AntdTabs } from 'antd';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { routeTool } from '../route';

import './style.scss';

interface TabsProps {
  /** 自动时设置和同步 searchParams tab */
  withSearchParams?: boolean;
  /** 设置 searchParams 的类型，默认 set */
  searchParamsType?: 'set' | 'change';
  /** 默认 tab */
  tabKey?: string;

  tabProps?: AntdTabsProps;
}

function Tabs(props: TabsProps) {
  const { withSearchParams, searchParamsType = 'set', tabKey = 'tab', tabProps } = props;
  const { className, activeKey, onChange, ...rest } = tabProps || {};

  const [searchParams] = useSearchParams();
  const tab = searchParams.get(tabKey) || undefined;

  return (
    <AntdTabs
      {...rest}
      className={classNames('fec-tabs', className)}
      activeKey={withSearchParams ? tab : activeKey}
      onChange={(key) => {
        onChange?.(key);

        if (props.withSearchParams) {
          if (searchParamsType === 'set') {
            routeTool.setSearchParams({ [tabKey]: key });
          } else {
            routeTool.changeSearchParams({ [tabKey]: key });
          }
        }
      }}
    />
  );
}

export { Tabs };
export type { TabsProps };
