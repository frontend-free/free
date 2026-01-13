import { Input } from 'antd';
import classNames from 'classnames';
import { useMemo, useRef, useState, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { Actions } from './actions';
import { InputRecordSwitch, RecordAction } from './record';
import type { MSenderProps, MSenderRef } from './types';

function Text(props: MSenderProps & { refText: RefObject<HTMLTextAreaElement> }) {
  const { value, onChange, placeholder, refText } = props;

  return (
    <Input.TextArea
      ref={refText}
      value={value?.text}
      onChange={(e) => {
        onChange?.({ ...value, text: e.target.value });
      }}
      placeholder={placeholder}
      autoSize={{ minRows: 1, maxRows: 3 }}
      className="mb-[1px] px-1 py-0"
      variant="borderless"
    />
  );
}

function useProps(originProps: MSenderProps) {
  const { t } = useTranslation();

  return useMemo(() => {
    return {
      ...originProps,
      placeholder:
        originProps.placeholder ?? t('@fe-free/ai.sender.describeYourQuestion', '描述你的问题'),
      statement:
        originProps.statement ??
        t(
          '@fe-free/ai.sender.aiGeneratedDisclaimer',
          '内容由 AI 生成，无法确保信息的真实准确，仅供参考',
        ),
      defaultType: originProps.defaultType ?? 'input',
    };
  }, [originProps, t]);
}

function MSender(originProps: MSenderProps) {
  const refText = useRef<HTMLTextAreaElement>(null);

  const props = useProps(originProps);
  const { value, statement, allowSpeech, defaultType } = props;

  const [type, setType] = useState<'input' | 'record'>(defaultType);

  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="fea-m-sender-wrap">
      <div
        ref={refContainer}
        className={classNames(
          'fea-m-sender relative flex items-end rounded-full border border-01 bg-white p-2',
        )}
      >
        {allowSpeech && !value?.text && (
          <InputRecordSwitch {...props} type={type} setType={setType} />
        )}
        <div className="flex flex-1">
          <Text {...props} refText={refText} />
        </div>
        <Actions {...props} refText={refText} />
        {type === 'record' && <RecordAction {...props} setType={setType} />}
      </div>
      {statement && <div className="mt-1 text-center text-xs text-04">*{statement}</div>}
    </div>
  );
}

export { MSender };
export type { MSenderProps, MSenderRef };
