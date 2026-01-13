import { MSender } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { MSenderProps, MSenderValue } from './types';

const meta: Meta<typeof MSender> = {
  title: '@fe-free/ai/MSender',
  component: MSender,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MSender>;

function Component(props: Omit<MSenderProps, 'value' | 'onChange' | 'onSubmit'>) {
  const [v, setV] = useState<MSenderValue | undefined>(undefined);

  return (
    <MSender
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

export const AllowSpeech: Story = {
  render: (props) => {
    const [recording, setRecording] = useState(false);

    return (
      <div>
        <Component {...props} allowSpeech={{ recording, onRecordingChange: setRecording }} />

        <Component
          {...props}
          defaultType="record"
          allowSpeech={{ recording, onRecordingChange: setRecording }}
        />

        <Component
          {...props}
          defaultType="record"
          allowSpeech={{ recording: true, onRecordingChange: setRecording }}
        />
      </div>
    );
  },
};

export default meta;
