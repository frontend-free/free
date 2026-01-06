import type { Preview } from '@storybook/react-vite';
import { App } from 'antd';
import { ConfigProvider } from 'antd';
import React from 'react';
import { ProConfigProvider } from '@ant-design/pro-components';
import { customValueTypeMap } from '@fe-free/core';
import { themeConfig } from '@fe-free/core/src/core_app/config';
import { EnumLanguage, I18nProvider, initI18n } from '@fe-free/core/src/i18n';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import i18n from 'i18next';
import coreEnTranslation from '@fe-free/core/src/locales/en-US/translation.json';
import aiEnTranslation from '@fe-free/ai/src/locales/en-US/translation.json';

// 初始化 i18n
initI18n({ enTranslation: {
  ...coreEnTranslation,
  ...aiEnTranslation
} });

console.log('i18n.language', i18n.language);

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
          <ConfigProvider theme={themeConfig} locale={i18n.language === EnumLanguage.EN_US ? enUS : zhCN}>
            <ProConfigProvider valueTypeMap={customValueTypeMap} >
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
