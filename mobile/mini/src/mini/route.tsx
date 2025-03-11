import { useMemo } from 'react';
import Taro from '@tarojs/taro';

function usePageRoute() {
  const instance = useMemo(() => Taro.getCurrentInstance(), []);
  return instance.router;
}

function usePageRouteParams<T extends Record<string, string>>() {
  const instance = useMemo(() => Taro.getCurrentInstance(), []);
  const params = instance.router?.params as T;

  const result: Record<string, string> = {};

  for (const p in params) {
    result[p] = decodeURIComponent(params[p]);
  }

  return result;
}

const route = {
  usePageRoute,
  usePageRouteParams,
};

export { route };
