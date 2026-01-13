import Icons from '@fe-free/icons';
import { Button } from 'antd';
import { RecordLoading } from '../helper';
import IconKeyboard from '../svgs/keyboard.svg?react';
import IconRecord from '../svgs/record.svg?react';
import type { MSenderProps } from './types';

function InputRecordSwitch(
  props: MSenderProps & { type: 'input' | 'record'; setType: (type: 'input' | 'record') => void },
) {
  const { allowSpeech, type, setType } = props;

  if (!allowSpeech) {
    return null;
  }

  if (type === 'record') {
    return (
      <Button
        type="text"
        shape="circle"
        size="small"
        icon={<Icons component={IconKeyboard} className="!text-lg" />}
        onClick={() => setType('input')}
      />
    );
  }

  return (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<Icons component={IconRecord} className="!text-lg" />}
      onClick={() => setType('record')}
    />
  );
}

function RecordAction(props: MSenderProps & { setType }) {
  const { allowSpeech, setType } = props;

  if (allowSpeech?.recording) {
    return (
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-primary">
        <RecordLoading count={30} gap={4} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white">
      <Button
        type="text"
        shape="circle"
        size="small"
        icon={<Icons component={IconKeyboard} className="!text-lg" />}
        onClick={() => setType('input')}
        className="absolute left-2"
      />
      <div>按住说话</div>
    </div>
  );
}

export { InputRecordSwitch, RecordAction };
