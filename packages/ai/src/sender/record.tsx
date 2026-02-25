import { AudioOutlined } from '@fe-free/icons';
import { Button } from 'antd';
import { RecordLoading } from '../helper';
import type { SenderProps } from './types';

function RecordAction(props: SenderProps) {
  const { allowSpeech } = props;
  const { recording, onRecordingChange } = allowSpeech || {};

  if (recording) {
    return (
      <Button type="text" shape="circle" onClick={() => onRecordingChange?.(false)}>
        <RecordLoading count={4} color="primary" />
      </Button>
    );
  }

  return (
    <Button
      type="text"
      shape="circle"
      icon={<AudioOutlined className="text-lg!" />}
      onClick={() => onRecordingChange?.(true)}
    />
  );
}

export { RecordAction };
