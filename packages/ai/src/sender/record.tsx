import { AudioOutlined } from '@fe-free/icons';
import { Button } from 'antd';
import type { SenderProps } from './types';

function RecordAction(props: SenderProps) {
  const { allowSpeech } = props;
  const { recording, onRecordingChange } = allowSpeech || {};

  if (recording) {
    return (
      <Button type="text" shape="circle" onClick={() => onRecordingChange?.(false)}>
        <div className="fea-sender-spinner">
          <div className="fea-sender-spinner-line fea-sender-spinner-line1" />
          <div className="fea-sender-spinner-line fea-sender-spinner-line2" />
          <div className="fea-sender-spinner-line fea-sender-spinner-line3" />
          <div className="fea-sender-spinner-line fea-sender-spinner-line4" />
        </div>
      </Button>
    );
  }

  return (
    <Button
      type="text"
      shape="circle"
      icon={<AudioOutlined className="!text-lg" />}
      onClick={() => onRecordingChange?.(true)}
    />
  );
}

export { RecordAction };
