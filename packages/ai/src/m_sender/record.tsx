import Icons from '@fe-free/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
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
        icon={<Icons component={IconKeyboard} className="!text-[24px]" />}
        onClick={() => setType('input')}
      />
    );
  }

  return (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<Icons component={IconRecord} className="!text-[24px]" />}
      onClick={() => setType('record')}
    />
  );
}

function RecordAction(props: MSenderProps & { setType }) {
  const { allowSpeech, setType } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef<number>(0);

  const [isRecording, setIsRecording] = useState(false);

  const isCancelledRef = useRef(false);
  const [isCancel, setIsCancel] = useState(false);

  const handleTouchStart = useCallback(
    async (e: TouchEvent) => {
      // 阻止默认行为，避免触发文本选择、上下文菜单等
      e.preventDefault();

      await allowSpeech?.onRecordStart?.();

      const touch = e.touches[0];
      touchStartYRef.current = touch.clientY;

      isCancelledRef.current = false;
      setIsCancel(false);

      setIsRecording(true);
    },
    [allowSpeech],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      // 阻止默认行为，避免页面滚动
      e.preventDefault();

      // 没有录音，不继续
      if (!isRecording) {
        return;
      }

      const touch = e.touches[0];
      const deltaY = touchStartYRef.current - touch.clientY; // 向上移动为正

      // 如果上移超过 50px，则判定为取消
      if (deltaY > 50) {
        if (!isCancelledRef.current) {
          isCancelledRef.current = true;
          setIsCancel(true);
        }
      } else {
        if (isCancelledRef.current) {
          isCancelledRef.current = false;
          setIsCancel(false);
        }
      }
    },
    [isRecording],
  );

  const handleTouchEnd = useCallback(
    async (e: TouchEvent) => {
      e.preventDefault();

      // 没有考试，不继续
      if (!isRecording) {
        return;
      }

      try {
        await allowSpeech?.onRecordEnd?.(!isCancelledRef.current);
      } catch (err) {
        // nothing
        console.error(err);
      }

      // 重置状态
      setIsRecording(false);
      setIsCancel(false);
      isCancelledRef.current = false;
      touchStartYRef.current = 0;
    },
    [allowSpeech, isRecording],
  );

  const handleTouchCancel = useCallback(
    async (e: TouchEvent) => {
      // touchcancel 在触摸被中断时触发（如系统手势、来电等）
      e.preventDefault();

      await allowSpeech?.onRecordEnd?.(false);

      // 重置状态
      setIsRecording(false);
      setIsCancel(false);
      isCancelledRef.current = false;
      touchStartYRef.current = 0;
    },
    [allowSpeech],
  );

  // 使用原生事件监听器，设置 passive: false 以支持 preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 使用 { passive: false } 选项，允许 preventDefault
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    container.addEventListener('touchcancel', handleTouchCancel, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel]);

  return (
    <div
      className={classNames('absolute inset-0 flex items-center justify-center rounded-full', {
        'bg-white': !isRecording,
        'bg-red-500': isRecording && isCancel,
        'bg-primary': isRecording && !isCancel,
      })}
    >
      {isRecording ? (
        <>
          <RecordLoading count={30} gap={4} />
          {isCancel && <div className="absolute top-0 -mt-[2em] text-red08">松手取消</div>}
          {!isCancel && (
            <div className="absolute top-0 -mt-[2em] text-primary">松开发送，上移取消</div>
          )}
        </>
      ) : (
        <div>按住说话</div>
      )}
      <div className="absolute inset-0" ref={containerRef} />
      {!isRecording && (
        <Button
          type="text"
          shape="circle"
          size="small"
          icon={<Icons component={IconKeyboard} className="!text-[24px]" />}
          onClick={() => {
            setType('input');
          }}
          className="absolute left-2"
        />
      )}
    </div>
  );
}

export { InputRecordSwitch, RecordAction };
