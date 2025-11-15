import { Divider, Input } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { ProFormListHelper } from '../form';

function Item({
  value,
  label,
  onChange,
}: {
  value?: string;
  label?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <span className="text-red-500">*</span>
        {label}
      </div>
      <Input
        value={value}
        placeholder={'请输入'}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

interface RecordItem {
  value?: { key?: string; value?: string };
  onChange: (value: { key?: string; value?: string }) => void;
  label?: string;
}

function RecordItem(props: RecordItem) {
  const { value, onChange, label } = props;

  // 如果提供了 label
  if (label) {
    return (
      <Item
        value={value?.value}
        label={label || value?.key}
        onChange={(v) => {
          onChange({ key: value?.key, value: v });
        }}
      />
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <Item
        value={value?.key}
        onChange={(v) => {
          onChange({ key: v, value: value?.value });
        }}
        label="Key"
      />
      <Item
        value={value?.value}
        onChange={(v) => {
          onChange({ key: value?.key, value: v });
        }}
        label="Value"
      />
    </div>
  );
}

interface RecordArrayProps {
  value?: { key?: string; value?: string }[];
  onChange: (value: { key?: string; value?: string }[]) => void;
  labels?: { key?: string; label?: string }[];
  className?: string;
}

function RecordArray(props: RecordArrayProps) {
  const { value, onChange, labels, className } = props;

  const isFixed = !!labels?.length;

  return (
    <ProFormListHelper
      className={classNames('rounded bg-005 p-2', className)}
      value={value}
      onChange={onChange}
      getAdd={() => ({
        key: undefined,
        value: undefined,
      })}
      disabledDelete={isFixed}
      disabledAdd={isFixed}
    >
      {({ item, index, onItemChange }) => {
        return (
          <>
            <RecordItem
              value={item}
              label={labels?.[index]?.label}
              onChange={(v) => {
                onItemChange(v);
              }}
            />
            {!isFixed && <Divider className="mb-2" />}
          </>
        );
      }}
    </ProFormListHelper>
  );
}

interface RecordProps extends Omit<RecordArrayProps, 'value' | 'onChange'> {
  value?: Record<string, any>;
  onChange: (value?: Record<string, any>) => void;
}

function Record(props: RecordProps) {
  const { value, onChange, ...rest } = props;

  // obj 和 arr 的转换
  const newValue = useMemo(() => {
    return Object.keys(value || {}).map((key) => ({
      key,
      value: value?.[key],
    }));
  }, [value]);

  // obj 和 arr 的转换
  const newOnChange = useCallback(
    (newV: { key?: string; value?: string }[]) => {
      const newValues = {};
      newV.forEach((item, index) => {
        // 确保有值
        newValues[item.key || index] = item.value;
      });

      onChange(newValues);
    },
    [onChange],
  );

  return <RecordArray value={newValue} onChange={newOnChange} {...rest} />;
}

export { Record, RecordArray };
export type { RecordArrayProps, RecordProps };
