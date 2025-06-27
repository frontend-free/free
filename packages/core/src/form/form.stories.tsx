import { ProForm } from '@ant-design/pro-components';
import {
  ProFormEditor,
  ProFormJSON,
  ProFormJavascript,
  ProFormListNumber,
  ProFormListText,
  ProFormSwitchNumber,
} from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof ProForm> = {
  title: '@fe-free/core/Form',
  component: ProForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProForm>;

function ProFormBase({
  children,
  initialValues,
}: {
  children: React.ReactNode;
  initialValues?: any;
}) {
  const [values, setValues] = useState<any>(undefined);

  return (
    <ProForm
      initialValues={initialValues}
      onValuesChange={(newValues) => {
        setValues({
          ...values,
          ...newValues,
        });
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <pre>values: {JSON.stringify(values, null, 2)}</pre>
      {children}
    </ProForm>
  );
}

export const ProFormEditorComponent: Story = {
  render: () => (
    <ProFormBase
      initialValues={{
        code: `const name = 'world';
console.log('hello', name);
`,
      }}
    >
      <ProFormEditor name="code" fieldProps={{ language: 'javascript', height: '400px' }} />
    </ProFormBase>
  ),
};

// ProFormJSON 基础示例
export const ProFormJSONComponent: Story = {
  render: () => (
    <ProFormBase initialValues={{ json: JSON.stringify({ name: 'world' }, null, 2) }}>
      <ProFormJSON name="json" />
      <div>readonly</div>
      <ProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
          readonly: true,
        }}
      />
    </ProFormBase>
  ),
};

// ProFormJavascript 基础示例
export const ProFormJavascriptComponent: Story = {
  render: () => (
    <ProFormBase
      initialValues={{
        javascript: `const name = 'world';
console.log('hello', name);
`,
      }}
    >
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
  ),
};

export const ProFormSwitchNumberComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber
        name="switchNumber"
        fieldProps={{
          checkedChildren: '开启',
          unCheckedChildren: '关闭',
        }}
      />
    </ProFormBase>
  ),
};

export const ProFormListTextComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormListText name="listText" />
    </ProFormBase>
  ),
};

export const ProFormListNumberComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{ precision: 0 }} />
    </ProFormBase>
  ),
};
