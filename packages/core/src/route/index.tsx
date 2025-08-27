import type { NavigateFunction } from 'react-router-dom';
import { generatePath } from 'react-router-dom';

const routeTool = {
  _baseName: '' as string,
  _navigate: null as NavigateFunction | null,
  setNavigate: (navigate: NavigateFunction) => {
    routeTool._navigate = navigate;
  },
  setBaseName: (baseName: string) => {
    routeTool._baseName = baseName;
  },
  getNavigate: () => {
    if (!routeTool._navigate) {
      throw new Error('routeTool need set navigate first');
    }
    return routeTool._navigate;
  },
  setSearchParams: (sp: Record<string, any>) => {
    const url = new URL(window.location.href);

    const p = new URLSearchParams();
    Object.keys(sp).forEach((key) => {
      const value = sp[key];
      // undefined 不能 set，否则 会出现 ?x=undefined 的情况
      if (value !== undefined) {
        p.set(key, value);
      }
    });
    url.search = p.toString();

    routeTool.getNavigate()(
      `${url.pathname.replace(routeTool._baseName, '')}${url.search}${url.hash}`,
    );
  },
  changeSearchParams: (sp: Record<string, any>) => {
    const url = new URL(window.location.href);

    Object.keys(sp).forEach((key) => {
      const value = sp[key];
      if (value !== undefined) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });

    routeTool.getNavigate()(
      `${url.pathname.replace(routeTool._baseName, '')}${url.search}${url.hash}`,
    );
  },
  navigateTo: ({
    path,
    params,
    searchParams,
  }: {
    path: string;
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
  }) => {
    const sp = new URLSearchParams(searchParams);

    routeTool.getNavigate()(
      `${generatePath(path, params)}${searchParams ? `?${sp.toString()}` : ''}`,
    );
  },
};

export { routeTool };
