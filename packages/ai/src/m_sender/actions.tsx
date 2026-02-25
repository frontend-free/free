import Icons from '@fe-free/icons';
import { Button } from 'antd';
import { useCallback, type RefObject } from 'react';
import IconRecord from '../svgs/record.svg?react';
import SendIcon from '../svgs/send.svg?react';
import type { MSenderProps } from './types';

function Actions(
  props: MSenderProps & {
    refText: RefObject<HTMLTextAreaElement | null>;
    type: 'input' | 'record';
    setType: (type: 'input' | 'record') => void;
  },
) {
  const { loading, onSubmit, value, onChange, setType, allowSpeech } = props;

  const isLoading = loading;

  const handleSubmit = useCallback(async () => {
    if (isLoading || value?.text?.trim() === '') {
      return;
    }

    const newValue = {
      ...value,
      text: value?.text?.trim(),
    };

    // 有内容才提交
    if (newValue.text || (newValue.files && newValue.files.length > 0)) {
      await Promise.resolve(onSubmit?.(newValue));

      // reset
      onChange?.({});

      // 移动端 不 focus
      // refText.current?.focus();
    }
  }, [isLoading, value, onSubmit, onChange]);

  return (
    <div className="mr-1 flex items-center gap-2">
      {allowSpeech && !value?.text ? (
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={IconRecord} className="h-[28px]! text-lg!" />}
          onClick={() => {
            setType('record');
          }}
        />
      ) : (
        <Button
          type="primary"
          shape="circle"
          icon={<Icons component={SendIcon} className="h-[28px]! text-lg!" />}
          loading={isLoading}
          onClick={handleSubmit}
        />
      )}
    </div>
  );
}

export { Actions };
