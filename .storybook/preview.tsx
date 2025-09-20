import type { Preview } from '@storybook/react-vite';
import { App } from 'antd';
import { ConfigProvider } from 'antd';
import React from 'react';
import { ProConfigProvider } from '@ant-design/pro-components';
import { customValueTypeMap } from '@fe-free/core';

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
      <ProConfigProvider valueTypeMap={customValueTypeMap}>
        <ConfigProvider>
          <App>
            <Story />
          </App>
        </ConfigProvider>
      </ProConfigProvider>
    ),
  ],
};

export default preview;
