import type { NavigateFunction } from 'react-router-dom';
import { generatePath } from 'react-router-dom';

type RouteToolWindow = Window & {
  __routeTool_navigate?: NavigateFunction | null;
  __routeTool_baseName?: string;
};

function getBrowserWindow() {
  return typeof window === 'undefined' ? null : (window as RouteToolWindow);
}

function getGlobalNavigate() {
  return getBrowserWindow()?.__routeTool_navigate || null;
}

function getGlobalBaseName() {
  return getBrowserWindow()?.__routeTool_baseName || '';
}

const routeTool = {
  _baseName: '' as string,
  _navigate: null as NavigateFunction | null,
  setNavigate: (navigate: NavigateFunction) => {
    routeTool._navigate = navigate;
    const currentWindow = getBrowserWindow();
    if (currentWindow) {
      currentWindow.__routeTool_navigate = navigate;
    }
  },
  setBaseName: (baseName: string) => {
    routeTool._baseName = baseName;
    const currentWindow = getBrowserWindow();
    if (currentWindow) {
      currentWindow.__routeTool_baseName = baseName;
    }
  },
  getNavigate: () => {
    const navigate = routeTool._navigate || getGlobalNavigate();
    if (!navigate) {
      throw new Error('routeTool need set navigate first');
    }
    return navigate;
  },
  getBaseName: () => {
    return routeTool._baseName || getGlobalBaseName();
  },
  generateUrl: ({
    path,
    params,
    searchParams,
  }: {
    path: string;
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
  }) => {
    const sp = new URLSearchParams(searchParams);
    return `${routeTool.getBaseName()}${generatePath(path, params)}${searchParams ? `?${sp.toString()}` : ''}`;
  },
  setSearchParams: (sp: Record<string, any>) => {
    const currentWindow = getBrowserWindow();
    if (!currentWindow) {
      return;
    }

    const url = new URL(currentWindow.location.href);

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
      `${url.pathname.replace(routeTool.getBaseName(), '')}${url.search}${url.hash}`,
    );
  },
  changeSearchParams: (sp: Record<string, any>) => {
    const currentWindow = getBrowserWindow();
    if (!currentWindow) {
      return;
    }

    const url = new URL(currentWindow.location.href);

    Object.keys(sp).forEach((key) => {
      const value = sp[key];
      if (value !== undefined) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });

    routeTool.getNavigate()(
      `${url.pathname.replace(routeTool.getBaseName(), '')}${url.search}${url.hash}`,
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

    try {
      routeTool.getNavigate()(
        `${generatePath(path, params)}${searchParams ? `?${sp.toString()}` : ''}`,
      );
    } catch (e) {
      console.log('routeTool.navigateTo generatePath error', path, params);
      console.log(e);
    }
  },
};

export { routeTool };
