import { ProConfigProvider } from '@ant-design/pro-components';
import { customValueTypeMap } from '@fe-free/core';
import { themeConfig } from '@fe-free/core/src/core_app/config';
import { EnumLanguage, I18nProvider, initI18n } from '@fe-free/core/src/i18n';

// @ts-ignore
import '@fe-free/core/src/tailwind.css';
import type { Preview } from '@storybook/react-vite';
import { App, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import i18n from 'i18next';
import React from 'react';

console.log('i18n.language', i18n.language);

initI18n({});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <I18nProvider>
          <ConfigProvider
            theme={themeConfig as any}
            locale={i18n.language === EnumLanguage.EN_US ? enUS : zhCN}
          >
            <ProConfigProvider valueTypeMap={customValueTypeMap}>
              <App>
                <Story />
              </App>
            </ProConfigProvider>
          </ConfigProvider>
        </I18nProvider>
      );
    },
  ],
};

export default preview;
