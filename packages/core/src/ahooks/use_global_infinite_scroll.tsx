import { useInfiniteScroll } from 'ahooks';
import type { Data, InfiniteScrollOptions, Service } from 'ahooks/lib/useInfiniteScroll/types';

function useGlobalInfiniteScroll<TData extends Data>(
  service: Service<TData>,
  options?: InfiniteScrollOptions<TData>,
) {
  return useInfiniteScroll(service, {
    onError: (error) => {
      // 全局抛出错误
      setTimeout(() => {
        throw error;
      }, 0);
    },
    ...options,
    // @ts-ignore
    __ignore: true,
  });
}

export { useGlobalInfiniteScroll };
