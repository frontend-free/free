import { Sender } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { SenderProps, SenderValue } from './types';

const meta: Meta<typeof Sender> = {
  title: '@fe-free/ai/Sender',
  component: Sender,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Sender>;

function Component(props: Omit<SenderProps, 'value' | 'onChange' | 'onSubmit'>) {
  const [v, setV] = useState<SenderValue | undefined>(undefined);

  return (
    <Sender
      value={v}
      onChange={(v) => {
        console.log('newValue', v);
        setV(v);
      }}
      onSubmit={(value) => {
        console.log('onSubmit', value);
      }}
      {...props}
    />
  );
}

export const Default: Story = {
  render: (props) => <Component {...props} />,
  args: {
    onSubmit: (value) => {
      console.log(value);
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: (value) => {
      console.log(value);
    },
  },
  render: (props) => <Component {...props} />,
};

export const AllowUpload: Story = {
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3,
    },
  },
  render: (props) => <Component {...props} />,
};

export const AllowSpeech: Story = {
  render: (props) => {
    const [recording, setRecording] = useState(true);

    return <Component {...props} allowSpeech={{ recording, onRecordingChange: setRecording }} />;
  },
};

export const Statement: Story = {
  args: {
    statement: '内容由 AI 生成，无法确保信息的真实准确，仅供参考',
  },
  render: (props) => <Component {...props} />,
};

export default meta;
