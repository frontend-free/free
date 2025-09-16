import { ProConfigProvider } from '@ant-design/pro-components';
import { App, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { routeTool } from '../route';
import { customValueTypeMap } from '../value_type_map';

function SetRouteTool({ basename }: { basename: string }) {
  const navigate = useNavigate();

  // 立马设置
  useMemo(() => {
    routeTool.setNavigate(navigate);
    routeTool.setBaseName(basename);
  }, [navigate, basename]);

  useEffect(() => {
    // 首页，且 basename 不是 /，一定是要去到 basename 的
    if (location.pathname === '/' && basename !== '/') {
      location.href = basename;
    }
  }, []);

  return null;
}

/** 提供一些基础的组 APP 功能 */
function CoreApp(props: {
  basename: string;
  proConfigProviderProps?: React.ComponentProps<typeof ProConfigProvider>;
  configProviderProps?: React.ComponentProps<typeof ConfigProvider>;
  appProps?: React.ComponentProps<typeof App>;
  routerProps?: Partial<React.ComponentProps<typeof Router>>;
  children: React.ReactNode;
}) {
  const { basename, children, proConfigProviderProps, configProviderProps, appProps, routerProps } =
    props;

  return (
    <ProConfigProvider
      {...proConfigProviderProps}
      // 集成好 customValueTypeMap
      valueTypeMap={{ ...customValueTypeMap, ...proConfigProviderProps?.valueTypeMap }}
    >
      {/* 集成好 locale */}
      <ConfigProvider {...configProviderProps} locale={configProviderProps?.locale || zhCN}>
        <App {...appProps}>
          <Router {...routerProps} basename={basename}>
            <SetRouteTool basename={basename} />
            {children}
          </Router>
        </App>
      </ConfigProvider>
    </ProConfigProvider>
  );
}

export { CoreApp };
