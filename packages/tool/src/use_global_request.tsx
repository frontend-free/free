import { useRequest } from 'ahooks';
import type { Options, Plugin, Service } from 'ahooks/es/useRequest/src/types';

function useGlobalRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[]
) {
  return useRequest(
    service,
    {
      onError: (error) => {
        // 全局抛出错误
        setTimeout(() => {
          throw error;
        }, 0);
      },
      ...options,
      // @ts-ignore
      __ignore: true,
    },
    plugins
  );
}

export { useGlobalRequest };
