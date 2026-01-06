import { ProConfigProvider } from '@ant-design/pro-components';
import { useTitle } from 'ahooks';
import { App, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import classNames from 'classnames';
import { merge } from 'lodash-es';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { EnumLanguage, I18nProvider } from '../i18n';
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
  const { t } = useTranslation();

  useEffect(() => {
    const mainScript = document.querySelector('[data-name="mainScript"]');
    if (!mainScript) {
      console.log(
        t(
          '@fe-free/core.app.mainScriptNotFound',
          '没找到 [data-name="mainScript"]，不启用更新提醒',
        ),
      );
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
        title: t('@fe-free/core.app.newVersionFound', '发现新版本'),
        content: t('@fe-free/core.app.refreshPrompt', '请及时刷新页面更新，以避免影响使用'),
        okText: t('@fe-free/core.app.refresh', '刷新'),
        cancelText: t('@fe-free/core.app.updateLater', '稍后更新'),
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
  }, [t]);

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

interface CoreAppProps {
  basename: string;
  name?: string;
  enableCheckUpdate?: boolean;
  proConfigProviderProps?: Omit<React.ComponentProps<typeof ProConfigProvider>, 'children'>;
  configProviderProps?: Omit<React.ComponentProps<typeof ConfigProvider>, 'children'>;
  appProps?: Omit<React.ComponentProps<typeof App>, 'children'>;
  routerProps?: Omit<Partial<React.ComponentProps<typeof Router>>, 'children'>;
  children: React.ReactNode;
  customConfig?: {
    hiddenFormItemLabelColon?: boolean;
  };
}
/** 提供一些基础的组 APP 功能 */
function CoreAppBase(props: CoreAppProps) {
  const {
    basename,
    name,
    enableCheckUpdate,
    children,
    proConfigProviderProps,
    configProviderProps,
    appProps,
    routerProps,
    customConfig,
  } = props;

  const { i18n } = useTranslation();

  useTitle(name || '');

  useEffect(() => {
    // 首页，且 basename 不是 /，一定是要去到 basename 的
    if (window.location.pathname === '/' && basename !== '/' && basename !== '') {
      window.location.href = basename;
    }
  }, []);

  const theme = useMemo(() => {
    return merge(themeConfig, configProviderProps?.theme);
  }, [configProviderProps?.theme]);

  const locale = useMemo(() => {
    if (configProviderProps?.locale) {
      return configProviderProps.locale;
    }

    return i18n.language === EnumLanguage.EN_US ? enUS : zhCN;
  }, [configProviderProps?.locale, i18n.language]);

  return (
    <ConfigProvider {...configProviderProps} locale={locale} theme={theme}>
      <ProConfigProvider
        {...proConfigProviderProps}
        // 集成好 customValueTypeMap
        valueTypeMap={{ ...customValueTypeMap, ...proConfigProviderProps?.valueTypeMap }}
      >
        <App
          {...appProps}
          className={classNames('fec-app', appProps?.className, {
            'fec-app-hidden-form-item-label-colon': customConfig?.hiddenFormItemLabelColon,
          })}
        >
          <Router {...routerProps} basename={basename}>
            <SetRouteTool basename={basename} />
            {enableCheckUpdate && <CheckUpdate basename={basename} />}
            {children}
          </Router>
        </App>
      </ProConfigProvider>
    </ConfigProvider>
  );
}

function CoreApp(props: CoreAppProps) {
  return (
    <I18nProvider>
      <CoreAppBase {...props} />
    </I18nProvider>
  );
}

export { CoreApp };
