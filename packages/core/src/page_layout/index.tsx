import cn from 'classnames';
import { Fragment, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { TabsProps } from '../tabs';
import { Tabs } from '../tabs';

interface PageLayoutProps {
  direction?: 'horizontal' | 'vertical';
  start?: React.ReactNode;
  children?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
  startClassName?: string;
  childrenClassName?: string;
  endClassName?: string;
}

function PageLayout({
  direction = 'horizontal',
  start,
  children,
  end,
  className,
  startClassName,
  childrenClassName,
  endClassName,
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full',
        {
          'flex-row': direction === 'horizontal',
          'flex-col': direction === 'vertical',
        },
        className,
      )}
    >
      <div className={cn('flex-none', startClassName)}>{start}</div>
      <div className={cn('flex-1 overflow-auto', childrenClassName)}>{children}</div>
      <div className={cn('flex-none', endClassName)}>{end}</div>
    </div>
  );
}

interface PageLayoutTabsProps extends PageLayoutProps {
  tabsProps: Omit<TabsProps, 'items' | 'withSearchParams'> & {
    items: {
      key: string;
      label: React.ReactNode;
      children: React.ReactNode;
    }[];
  };
}

function PageLayoutTabs(props: PageLayoutTabsProps) {
  const { tabsProps, ...rest } = props;

  const [searchParams] = useSearchParams();
  const tab = searchParams.get(tabsProps.tabKey || 'tab') || undefined;

  const { children, newItems } = useMemo(() => {
    const items = props.tabsProps.items;

    const item = items.find((item) => item.key === tab);
    const children = item?.children || items[0]?.children;

    const newItems = items.map((item) => ({
      ...item,
      children: undefined,
    }));

    return { children, newItems };
  }, [props.tabsProps.items, tab]);

  return (
    <PageLayout
      direction="vertical"
      start={
        <Tabs
          tabBarExtraContent={{
            left: <div className="w-4" />,
            right: <div className="w-4" />,
          }}
          {...tabsProps}
          items={newItems}
          withSearchParams
        />
      }
      {...rest}
    >
      <Fragment key={tab}>{children}</Fragment>
    </PageLayout>
  );
}

export { PageLayout, PageLayoutTabs };
export type { PageLayoutProps, PageLayoutTabsProps };
