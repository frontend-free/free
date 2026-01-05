import type { Preview } from '@storybook/react-vite';
import { App } from 'antd';
import { ConfigProvider } from 'antd';
import React from 'react';
import { ProConfigProvider } from '@ant-design/pro-components';
import { customValueTypeMap } from '@fe-free/core';
import { themeConfig } from '@fe-free/core/src/core_app/config';
import { I18nProvider } from '@fe-free/core/src/i18n';

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
    (Story) => (
      <I18nProvider>
        <ProConfigProvider valueTypeMap={customValueTypeMap} >
          <ConfigProvider theme={themeConfig}>
            <App>
              <Story />
            </App>
          </ConfigProvider>
        </ProConfigProvider>
      </I18nProvider>
    ),
  ],
};

export default preview;
