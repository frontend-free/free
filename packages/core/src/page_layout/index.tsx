import classNames from 'classnames';
import { Fragment, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { TabsProps } from '../tabs';
import { Tabs } from '../tabs';

interface PageLayoutProps {
  direction?: 'horizontal' | 'vertical';
  start?: React.ReactNode;
  children?: React.ReactNode;
  end?: React.ReactNode;
  /** beta equalParts */
  equalParts?: boolean;
  className?: string;
  style?: React.CSSProperties;
  startClassName?: string;
  startStyle?: React.CSSProperties;
  childrenClassName?: string;
  childrenStyle?: React.CSSProperties;
  endClassName?: string;
  endStyle?: React.CSSProperties;
}

function PageLayout({
  direction = 'horizontal',
  start,
  children,
  end,
  equalParts,
  className,
  style,
  startClassName,
  startStyle,
  childrenClassName,
  childrenStyle,
  endClassName,
  endStyle,
}: PageLayoutProps) {
  return (
    <div
      className={classNames(
        'flex h-full w-full',
        {
          'flex-row': direction === 'horizontal',
          'flex-col': direction === 'vertical',
        },
        className,
      )}
      style={style}
    >
      {start && (
        <div
          className={classNames(
            {
              'flex-none': !equalParts,
              'min-w-0 flex-1 flex-shrink-0 overflow-auto': equalParts,
            },
            startClassName,
          )}
          style={startStyle}
        >
          {start}
        </div>
      )}
      <div
        className={classNames(
          'flex-1 overflow-auto',
          {
            'min-w-0 flex-shrink-0': equalParts,
          },
          childrenClassName,
        )}
        style={childrenStyle}
      >
        {children}
      </div>
      {end && (
        <div
          className={classNames(
            {
              'flex-none': !equalParts,
              'min-w-0 flex-1 flex-shrink-0 overflow-auto': equalParts,
            },
            endClassName,
          )}
          style={endStyle}
        >
          {end}
        </div>
      )}
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
