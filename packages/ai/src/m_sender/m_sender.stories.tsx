import { getRecordAudioOfBlob, getRecordAudioOfPCM, MSender } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { App } from 'antd';
import { useCallback, useMemo, useState } from 'react';
import type { MSenderProps, MSenderValue } from './types';

const meta: Meta<typeof MSender> = {
  title: '@fe-free/ai/MSender',
  component: MSender,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MSender>;

function Component(props: MSenderProps) {
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
    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };

    const handleRecordStart = useCallback(async () => {
      // fake
    }, []);

    const handleRecordEnd = useCallback(
      async (isSend) => {
        console.log('handleRecordEnd isSend', isSend);

        if (isSend) {
          handleSubmit({ ...(props.value || {}), text: '假设这是识别的文字' });
        }
      },
      [props.value],
    );

    return (
      <div className="flex flex-col gap-10">
        <Component
          {...props}
          allowSpeech={{
            onRecordStart: handleRecordStart,
            onRecordEnd: handleRecordEnd,
          }}
        />

        <Component
          value={{ text: 'test' } as MSenderValue}
          {...props}
          allowSpeech={{
            onRecordStart: handleRecordStart,
            onRecordEnd: handleRecordEnd,
          }}
        />

        <div />

        <Component
          {...props}
          defaultType="record"
          allowSpeech={{
            onRecordStart: handleRecordStart,
            onRecordEnd: handleRecordEnd,
          }}
        />
      </div>
    );
  },
};

export const AllowSpeechPCM: Story = {
  render: (props) => {
    const { message } = App.useApp();

    const { start: startRecord, stop: stopRecord } = useMemo(() => {
      return getRecordAudioOfPCM();
    }, []);

    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };

    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      try {
        await startRecord({
          onAudio: (data) => {
            console.log('onAudio', data);
          },
          onError: (err) => {
            message.error(err.message);
          },
        });
      } catch (err) {
        console.error(err);
      }

      return;
    }, []);

    const handleRecordEnd = useCallback(
      async (isSend) => {
        console.log('handleRecordEnd isSend', isSend);

        const voiceData = await stopRecord();
        console.log('voiceData', voiceData);

        if (isSend) {
          handleSubmit({ ...(props.value || {}), text: '假设这是识别的文字' });
        }
      },
      [props.value, stopRecord],
    );

    return (
      <Component
        {...props}
        defaultType="record"
        allowSpeech={{
          onRecordStart: handleRecordStart,
          onRecordEnd: handleRecordEnd,
        }}
      />
    );
  },
};

export const AllowSpeechBlob: Story = {
  render: (props) => {
    const { message } = App.useApp();

    const { start: startRecord, stop: stopRecord } = useMemo(() => {
      return getRecordAudioOfBlob();
    }, []);

    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };

    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      try {
        await startRecord({
          onAudio: (data) => {
            console.log('onAudio', data);
          },
          onError: (err) => {
            message.error(err.message);
          },
        });
      } catch (err) {
        console.error(err);
      }

      return;
    }, []);

    const handleRecordEnd = useCallback(
      async (isSend) => {
        console.log('handleRecordEnd isSend', isSend);

        const voiceData = await stopRecord();
        console.log('voiceData', voiceData);

        if (isSend) {
          handleSubmit({ ...(props.value || {}), text: '假设这是识别的文字' });
        }
      },
      [props.value, stopRecord],
    );

    return (
      <Component
        {...props}
        defaultType="record"
        allowSpeech={{
          onRecordStart: handleRecordStart,
          onRecordEnd: handleRecordEnd,
        }}
      />
    );
  },
};

export default meta;
