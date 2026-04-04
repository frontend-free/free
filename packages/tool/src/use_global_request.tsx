import { useRequest } from 'ahooks';
import type { Options, Plugin, Service } from 'ahooks/es/useRequest/src/types';

type GlobalRequestOptions<TData, TParams extends any[]> = Options<TData, TParams> & {
  __ignore?: boolean;
};

function useGlobalRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[]
) {
  const requestOptions: GlobalRequestOptions<TData, TParams> = {
    onError: (error) => {
      // 全局抛出错误
      setTimeout(() => {
        throw error;
      }, 0);
    },
    ...options,
    __ignore: true,
  };

  return useRequest(
    service,
    requestOptions,
    plugins
  );
}

export { useGlobalRequest };
