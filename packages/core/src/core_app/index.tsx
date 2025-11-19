import { ProConfigProvider } from '@ant-design/pro-components';
import { useTitle } from 'ahooks';
import { App, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { merge } from 'lodash-es';
import { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { routeTool } from '../route';
import { customValueTypeMap } from '../value_type_map';
import { themeConfig } from './config';

function getPathname(src?: string) {
  if (!src) {
    return null;
  }
  return src.startsWith('/') ? src : new URL(src).pathname;
}

function CheckUpdate({ basename }: { basename: string }) {
  const { modal } = App.useApp();

  useEffect(() => {
    const mainScript = document.querySelector('[data-name="mainScript"]');
    if (!mainScript) {
      console.log('没找到 [data-name="mainScript"]，不启用更新提醒');
      return;
    }

    async function getMainScriptPathname() {
      const res = await fetch(`${basename}?r=${Date.now()}`);
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const nextMainScript = doc.querySelector('[data-name="mainScript"]');
      const src = nextMainScript?.getAttribute('src');
      return getPathname(src || undefined);
    }

    let ing = false;
    function confirm() {
      // 避免重复弹窗
      if (ing) {
        return;
      }

      modal.confirm({
        title: '发现新版本',
        content: '请及时刷新页面更新，以避免影响使用',
        okText: '刷新',
        cancelText: '稍后更新',
        onOk: () => {
          window.location.reload();
        },
        onCancel: () => {
          ing = false;
        },
      });
      ing = true;
    }

    const src = mainScript.getAttribute('src');
    const pathname = getPathname(src || undefined);

    const checkUpdateInterval = parseInt(
      localStorage.getItem('__free-checkUpdateInterval') || '60000',
      10,
    );
    const timer = setInterval(async () => {
      const nextPathname = await getMainScriptPathname();
      if (nextPathname !== pathname) {
        confirm();
        return;
      }
    }, checkUpdateInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}

function SetRouteTool({ basename }: { basename: string }) {
  const navigate = useNavigate();

  // 立马设置
  useMemo(() => {
    routeTool.setNavigate(navigate);
    routeTool.setBaseName(basename);
  }, [navigate, basename]);

  return null;
}

/** 提供一些基础的组 APP 功能 */
function CoreApp(props: {
  basename: string;
  name?: string;
  enableCheckUpdate?: boolean;
  proConfigProviderProps?: Omit<React.ComponentProps<typeof ProConfigProvider>, 'children'>;
  configProviderProps?: Omit<React.ComponentProps<typeof ConfigProvider>, 'children'>;
  appProps?: Omit<React.ComponentProps<typeof App>, 'children'>;
  routerProps?: Omit<Partial<React.ComponentProps<typeof Router>>, 'children'>;
  children: React.ReactNode;
}) {
  const {
    basename,
    name,
    enableCheckUpdate,
    children,
    proConfigProviderProps,
    configProviderProps,
    appProps,
    routerProps,
  } = props;

  useTitle(name || '');

  useEffect(() => {
    // 首页，且 basename 不是 /，一定是要去到 basename 的
    if (window.location.pathname === '/' && basename !== '/') {
      window.location.href = basename;
    }
  }, []);

  const theme = useMemo(() => {
    return merge(themeConfig, configProviderProps?.theme);
  }, [configProviderProps?.theme]);

  return (
    <ProConfigProvider
      {...proConfigProviderProps}
      // 集成好 customValueTypeMap
      valueTypeMap={{ ...customValueTypeMap, ...proConfigProviderProps?.valueTypeMap }}
    >
      {/* 集成好 locale */}
      <ConfigProvider
        {...configProviderProps}
        locale={configProviderProps?.locale || zhCN}
        theme={theme}
      >
        <App {...appProps}>
          <Router {...routerProps} basename={basename}>
            <SetRouteTool basename={basename} />
            {enableCheckUpdate && <CheckUpdate basename={basename} />}
            {children}
          </Router>
        </App>
      </ConfigProvider>
    </ProConfigProvider>
  );
}

export { CoreApp };
