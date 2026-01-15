import { MSender } from '@fe-free/ai';
import { sleep } from '@fe-free/tool';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
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

export const AutoFocus: Story = {
  render: (props) => <Component {...props} />,
  args: {
    autoFocus: true,
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
    // 假设是字符串，实则是 buffer
    const [recordVoice, setRecordVoice] = useState<string | undefined>(undefined);

    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };

    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      setRecordVoice('这是录音的文本');

      return;
    }, []);

    const handleRecordEnd = useCallback(
      async (isSend: boolean) => {
        console.log('handleRecordEnd isSend', isSend);
        if (isSend) {
          await sleep(1000);
          const recordResult = recordVoice;

          handleSubmit({ ...(props.value || {}), text: recordResult });
          alert('submit');
        }
      },
      [props.value, recordVoice],
    );

    return (
      <div>
        <Component
          {...props}
          allowSpeech={{
            onRecordStart: handleRecordStart,
            onRecordEnd: handleRecordEnd,
          }}
        />

        <Component
          {...props}
          defaultType="record"
          allowSpeech={{
            onRecordStart: handleRecordStart,
            onRecordEnd: handleRecordEnd,
          }}
        />

        <Component
          {...props}
          defaultType="record"
          allowSpeech={{
            onRecordStart: () => Promise.reject(new Error('no permission')),
            onRecordEnd: handleRecordEnd,
          }}
        />
      </div>
    );
  },
};

export default meta;
