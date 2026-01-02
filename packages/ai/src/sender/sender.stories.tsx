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

function Component(props: Omit<SenderProps, 'value' | 'onChange'>) {
  const [v, setV] = useState<SenderValue | undefined>(undefined);

  return (
    <Sender
      value={v}
      onChange={(v) => {
        console.log('newValue', v);
        setV(v);
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

export default meta;
