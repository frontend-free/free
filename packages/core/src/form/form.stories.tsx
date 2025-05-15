import { ProForm } from '@ant-design/pro-components';
import { ProFormJSON, ProFormJavascript } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: '@fe-free/core/Form',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ProFormJSON 基础示例
export const ProFormJSONBasic: Story = {
  render: () => (
    <ProForm>
      <ProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  ),
};

// ProFormJSON 只读示例
export const ProFormJSONReadonly: Story = {
  render: () => (
    <ProForm>
      <ProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
        }}
      />
    </ProForm>
  ),
};

// ProFormJavascript 基础示例
export const ProFormJavascriptBasic: Story = {
  render: () => (
    <ProForm>
      <ProFormJavascript
        name="javascript"
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  ),
};

// ProFormJavascript 只读示例
export const ProFormJavascriptReadonly: Story = {
  render: () => (
    <ProForm>
      <ProFormJavascript
        name="javascript"
        readonly
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  ),
};
