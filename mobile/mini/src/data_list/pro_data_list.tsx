import { useInfiniteScroll } from 'ahooks';
import { useCallback } from 'react';
import type { DataListProps } from './data_list';
import { DataList } from './data_list';

interface ProDataListProps<D extends object = any>
  extends Omit<DataListProps<D>, 'data' | 'loading'> {
  request: (params: {
    offset: number;
    pageSize: number;
    [key: string]: any;
  }) => Promise<D[] | undefined>;
  params?: Record<string, any>;
  pageSize?: number;
}

const emptyArr = [];
function ProDataList<D extends object = any>({
  request,
  params,
  pageSize = 20,
  ...rest
}: ProDataListProps<D>) {
  const service = useCallback(
    async (d) => {
      const offset = d ? d.nextId : 0;
      const resData = await request({
        ...params,
        // 转 offset
        offset,
        pageSize,
      });

      return {
        list: resData,
        // 判断是否还有数据
        nextId: resData?.length === pageSize ? offset + pageSize : undefined,
      };
    },
    [request, params, pageSize],
  );

  const {
    data: resData,
    loading,
    loadMore,
    loadingMore,
    noMore,
  } = useInfiniteScroll(service, {
    reloadDeps: [JSON.stringify(params || {})],
    isNoMore: (d) => d?.nextId === undefined,
  });

  const handleScrollToLower = useCallback(() => {
    if (!loadingMore) {
      loadMore();
    }
  }, [loadMore, loadingMore]);

  const data = resData?.list || emptyArr;

  return (
    <DataList
      data={data}
      loading={loading}
      loadingMore={loadingMore}
      noMore={noMore}
      {...rest}
      onScrollToLower={handleScrollToLower}
    />
  );
}

export { ProDataList };
export type { ProDataListProps };
