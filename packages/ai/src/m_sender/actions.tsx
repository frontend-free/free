import Icons from '@fe-free/icons';
import { Button } from 'antd';
import { useCallback, type RefObject } from 'react';
import SendIcon from '../svgs/send.svg?react';
import type { MSenderProps } from './types';

function Actions(
  props: MSenderProps & {
    refText: RefObject<HTMLTextAreaElement>;
  },
) {
  const { refText, loading, onSubmit, value, onChange } = props;

  const isLoading = loading;

  const handleSubmit = useCallback(async () => {
    if (isLoading) {
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

      // focus
      refText.current?.focus();
    }
  }, [isLoading, value, onSubmit, onChange, refText]);

  return (
    <div className="flex items-center gap-2">
      <Button
        shape="circle"
        size="small"
        type="primary"
        icon={<Icons component={SendIcon} />}
        loading={isLoading}
        disabled={!value?.text}
        onClick={handleSubmit}
      />
    </div>
  );
}

export { Actions };
