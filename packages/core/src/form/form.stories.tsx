import { ProForm } from '@ant-design/pro-components';
import {
  ProFormEditor,
  ProFormImageUpload,
  ProFormImageUploadDragger,
  ProFormJSON,
  ProFormJavascript,
  ProFormListNumber,
  ProFormListText,
  ProFormRecord,
  ProFormRecordArray,
  ProFormSwitchNumber,
  ProFormUpload,
  ProFormUploadDragger,
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

function customRequest(option: any) {
  const { file, onProgress, onSuccess } = option;

  // 模拟上传进度
  let percent = 0;
  const interval = setInterval(() => {
    percent += 10;
    onProgress({ percent });

    if (percent >= 100) {
      clearInterval(interval);
      // 模拟上传成功
      onSuccess({
        data: {
          url: `https://picsum.photos/200/300?random=${Date.now()}`,
          name: file.name,
          uid: file.uid,
        },
      });
    }
  }, 100);

  // 返回 abort 方法，用于取消上传
  return {
    abort: () => {
      clearInterval(interval);
      console.log('上传已取消');
    },
  };
}

export const ProFormUploadComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormUpload label="file" name="file" fieldProps={{ customRequest }} />
      <ProFormUploadDragger
        label="file_dragger"
        name="file_dragger"
        fieldProps={{ customRequest }}
      />
      <ProFormUploadDragger
        label="files_dragger"
        name="files_dragger"
        fieldProps={{ multiple: true, maxCount: 2, customRequest }}
      />
      <ProFormUpload
        label="files"
        name="files"
        fieldProps={{ multiple: true, maxCount: 2, showCount: true, customRequest }}
      />
      <ProFormUpload
        label="files_picture"
        name="files_picture"
        fieldProps={{ multiple: true, maxCount: 2, listType: 'picture', customRequest }}
      />
      <ProFormUpload
        label="files_picture_card"
        name="files_picture_card"
        fieldProps={{ multiple: true, maxCount: 2, listType: 'picture-card', customRequest }}
      />
    </ProFormBase>
  ),
};

export const ProFormImageUploadComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormImageUpload
        label="image"
        name="image"
        fieldProps={{
          customRequest,
        }}
      />
      <ProFormImageUploadDragger
        label="image_dragger"
        name="image_dragger"
        fieldProps={{
          customRequest,
        }}
      />
      <ProFormImageUploadDragger
        label="images_dragger"
        name="images_dragger"
        fieldProps={{
          multiple: true,
          maxCount: 2,
          customRequest,
        }}
      />
    </ProFormBase>
  ),
};

export const ProFormRecordComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormRecord
        name="record1"
        label="record1"
        fieldProps={{
          defaultItems: [
            { key: 'username', label: '用户名' },
            { key: 'password', label: '密码' },
          ],
        }}
      />
      <ProFormRecord name="record2" label="record2" />
    </ProFormBase>
  ),
};

export const ProFormRecordArrayComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormRecordArray
        name="recordArray1"
        label="recordArray1"
        fieldProps={{
          defaultItems: [
            { key: 'username', label: '用户名' },
            { key: 'password', label: '密码' },
          ],
        }}
      />
      <ProFormRecordArray name="recordArray2" label="recordArray2" />
    </ProFormBase>
  ),
};
