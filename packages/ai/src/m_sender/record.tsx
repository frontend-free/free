import { AudioOutlined } from '@fe-free/icons';
import { Button } from 'antd';
import type { MSenderProps } from './types';

function RecordAction(props: MSenderProps) {
  const { allowSpeech } = props;
  const { onRecordingChange } = allowSpeech || {};

  if (!allowSpeech) {
    return null;
  }

  return (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<AudioOutlined className="!text-lg" />}
      onClick={() => onRecordingChange?.(true)}
    />
  );
}

export { RecordAction };
