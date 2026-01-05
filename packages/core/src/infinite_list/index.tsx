import { Spin } from 'antd';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useImperativeHandle, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import stringify from 'safe-stable-stringify';
import { useGlobalInfiniteScroll } from '../ahooks/use_global_infinite_scroll';

interface ActionType {
  reload: () => void;
}
interface InfiniteListProps<D, P> {
  request: (params: { current: number; pageSize: number } & P) => Promise<{
    data: D[];
    total: number;
  }>;
  renderItem: ({ item, index }: { item: D; index: number }) => ReactNode;
  params?: P;
  /** 每页数量 */
  pageSize: number;
  /** 定义网格布局 */
  gridClassName: string;
  className?: string;
  actionRef?: React.Ref<ActionType | undefined>;
}

const emptyParams = {};

const InfiniteListBase = <D, P>({
  request,
  renderItem,
  params = emptyParams as P,
  actionRef,
  pageSize,
  gridClassName,
  className,
}: InfiniteListProps<D, P>) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { data, loading, loadingMore, noMore, mutate, reload } = useGlobalInfiniteScroll(
    async (p) => {
      // 获得当前页面
      const current = p?.nextId || 1;

      const res = await request({
        current,
        pageSize,
        ...params,
      });

      let hasMore = true;
      // 总数少于当前页数 * 每页数量，则没有更多
      if (res.total <= current * pageSize) {
        hasMore = false;
      }

      return {
        list: res.data,
        nextId: hasMore ? current + 1 : undefined,
      };
    },
    {
      target: ref,
      isNoMore: (d) => d?.nextId === undefined,
      reloadDeps: [stringify(params || {})],
    },
  );

  useImperativeHandle(actionRef, () => ({
    reload: async () => {
      // 没有数据，相当于重新获取
      if (!data) {
        return reload();
      }

      // 获取全部数据。因为不清楚哪个要更新。
      const res = await request({
        ...params,
        current: 1,
        pageSize,
      });

      // 只更新数据
      data.list = res.data;

      mutate({
        ...data,
      });
    },
  }));

  return (
    <div ref={ref} className={classNames('h-full overflow-y-auto', className)}>
      {loading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spin />
        </div>
      )}
      {!loading && (
        <div className={classNames('grid', gridClassName)}>
          {data?.list?.map((item, index) => {
            return <div key={index}>{renderItem({ item, index })}</div>;
          })}
        </div>
      )}
      <div className="flex w-full items-center justify-center">
        {noMore && (
          <div className="my-5 text-center text-03">
            {t('core.infiniteList.noMoreData', '没有更多数据')}
          </div>
        )}
        {loadingMore && (
          <div className="my-5 text-center text-03">
            {t('core.infiniteList.loadingMore', '加载更多数据中...')}
          </div>
        )}
      </div>
    </div>
  );
};

function InfiniteList<D, P>(props: InfiniteListProps<D, P>) {
  const [reloadCount, setReloadCount] = useState(0);

  useImperativeHandle(props.actionRef, () => ({
    reload: () => {
      setReloadCount((prev) => prev + 1);
    },
  }));

  return <InfiniteListBase key={reloadCount} {...props} />;
}

export { InfiniteList };
export type { InfiniteListProps };
