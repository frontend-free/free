import { Input } from 'antd';
import classNames from 'classnames';
import { useMemo, useRef, useState, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { Actions } from './actions';
import { RecordAction } from './record';
import type { MSenderProps, MSenderRef } from './types';

function Text(props: MSenderProps & { refText: RefObject<HTMLTextAreaElement> }) {
  const { value, onChange, placeholder, refText, autoFocus } = props;

  return (
    <Input.TextArea
      ref={refText}
      value={value?.text}
      autoFocus={autoFocus}
      onChange={(e) => {
        onChange?.({ ...value, text: e.target.value });
      }}
      placeholder={placeholder}
      autoSize={{ minRows: 1, maxRows: 3 }}
      className="px-1 text-[15px]"
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
      defaultType: originProps.defaultType ?? 'input',
    };
  }, [originProps, t]);
}

function MSender(originProps: MSenderProps) {
  const refText = useRef<HTMLTextAreaElement>(null);

  const props = useProps(originProps);
  const { statement, defaultType } = props;

  const [type, setType] = useState<'input' | 'record'>(defaultType);

  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="fea-m-sender-wrap">
      <div
        ref={refContainer}
        className={classNames(
          'fea-m-sender relative flex items-end rounded-xl border border-01 bg-white p-2.5',
        )}
        style={{
          boxShadow: '0px 2px 12px 0px #00000014',
        }}
      >
        <div className="flex flex-1">
          <Text {...props} refText={refText} />
        </div>
        <Actions {...props} refText={refText} type={type} setType={setType} />
        {type === 'record' && <RecordAction {...props} setType={setType} />}
      </div>
      {statement && <div className="mt-1 text-center text-xs text-04">*{statement}</div>}
    </div>
  );
}

export { MSender };
export type { MSenderProps, MSenderRef };
