import { ProForm } from '@ant-design/pro-components';
import {
  ProFormAvatarImageUpload,
  ProFormEditor,
  ProFormImageUpload,
  ProFormImageUploadDragger,
  ProFormJSON,
  ProFormJavascript,
  ProFormListBoolean,
  ProFormListNumber,
  ProFormListText,
  ProFormRecord,
  ProFormRecordArray,
  ProFormSwitchNumber,
  ProFormSwitchOptions,
  ProFormUpload,
  ProFormUploadDragger,
} from '@fe-free/core';
import { sleep } from '@fe-free/tool';
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
        setValues(newValues);
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

export const ProFormSwitchOptionsComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormSwitchOptions
        name="switchOptions"
        fieldProps={{
          options: [
            { value: 'NO', label: '否' },
            { value: 'YES', label: '是' },
          ],
        }}
      />
      <ProFormSwitchOptions
        name="switchOptionsLabel"
        fieldProps={{
          enableLabel: true,
          options: [
            { value: 'NO', label: '否' },
            { value: 'YES', label: '是' },
          ],
        }}
      />
      <ProFormSwitchOptions
        name="switchOptions2"
        fieldProps={{
          options: ['OFF', 'ON'],
        }}
      />
      <ProFormSwitchOptions
        name="switchOptions2Label"
        fieldProps={{
          enableLabel: true,
          options: ['OFF', 'ON'],
        }}
      />
    </ProFormBase>
  ),
};

export const ProFormListTextComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormListText name="listText" label="listText" required={false} />
      <ProFormListText
        name="listText_isValueLabel"
        label="listText_isValueLabel"
        fieldProps={{ isValueLabel: true }}
      />
    </ProFormBase>
  ),
};

export const ProFormListNumberComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listNumber_isValueLabel" fieldProps={{ isValueLabel: true }} />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{ precision: 0 }} />
      <ProFormListNumber
        name="listInteger_isValueLabel"
        fieldProps={{ isValueLabel: true, precision: 0 }}
      />
    </ProFormBase>
  ),
};

export const ProFormListBooleanComponent: Story = {
  render: () => (
    <ProFormBase>
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
  ),
};

function customRequest(option: any) {
  const { onSuccess } = option;
  // fake request
  sleep(1000).then(() => {
    onSuccess({
      data: {
        url: `https://picsum.photos/200/300?random=${Date.now()}`,
      },
    });
  });

  // 返回 abort 方法，用于取消上传
  return {
    abort: () => {
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
        fieldProps={{
          title: '这是标题',
          description: '这是描述',
          customRequest,
        }}
      />
      <ProFormUploadDragger
        label="files_dragger"
        name="files_dragger"
        fieldProps={{ multiple: true, maxCount: 2, customRequest }}
      />
      <ProFormUploadDragger
        label="knowledge_files_dragger"
        name="knowledge_files_dragger"
        fieldProps={{
          directory: true,
          accept: '.doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel',
          multiple: true,
          maxCount: 100,
          customRequest,
          showStatus: true,
          description: (
            <div>
              <div className="text-01">
                支持doc、docx、pdf、ppt、jpg、png、mp3、mp4、txt、markdown、excel格式文件
              </div>
              <div className="text-03">
                pdf
                文件不超过100MiB、图片文件不超过10MiB、音频文件不超过300MiB、视频文件不超过400MiB
                其他单文件不超过50MiB 单次最多上传 100 个文件
              </div>
            </div>
          ),
        }}
      />
      <ProFormUpload
        label="files"
        name="files"
        fieldProps={{ multiple: true, maxCount: 2, showCount: true, customRequest }}
      />
      <ProFormUpload
        label="files_custom"
        name="files"
        fieldProps={{
          multiple: true,
          maxCount: 2,
          showCount: true,
          customRequest,
          children: <div>click me</div>,
        }}
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
      <ProFormAvatarImageUpload
        label="avatar_image"
        name="avatar_image"
        fieldProps={{
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
          labels: [
            { key: 'username', label: '用户名' },
            { key: 'password', label: '密码' },
          ],
        }}
        initialValue={{
          username: '',
          password: '',
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
          labels: [
            { key: 'username', label: '用户名' },
            { key: 'password', label: '密码' },
          ],
        }}
        initialValue={[
          { key: 'username', value: undefined },
          { key: 'password', value: undefined },
        ]}
      />
      <ProFormRecordArray name="recordArray2" label="recordArray2" />
    </ProFormBase>
  ),
};
