import { useMemo } from 'react';
import Taro from '@tarojs/taro';

function usePageRoute() {
  const instance = useMemo(() => Taro.getCurrentInstance(), []);
  return instance.router;
}

function usePageRouteParams<T extends Record<string, string>>() {
  const instance = useMemo(() => Taro.getCurrentInstance(), []);
  return instance.router?.params as T;
}

const route = {
  usePageRoute,
  usePageRouteParams,
};

export { route };
