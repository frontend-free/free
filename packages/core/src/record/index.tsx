import { Button, Divider, Input } from 'antd';
import classNames from 'classnames';
import { Fragment, useCallback, useMemo, useState } from 'react';

function Item({
  value,
  label,
  onChange,
}: {
  value?: string;
  label: string;
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
  item: { key?: string; label?: string; placeholder?: string };
}

function RecordItem(props: RecordItem) {
  const { value, onChange, item } = props;

  // 如果提供了 key
  if (item.key) {
    return (
      <Item
        value={value?.value}
        label={item.label || item.key}
        onChange={(v) => {
          onChange({ key: item.key, value: v });
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
  defaultItems?: { key: string; label: string }[];
  className?: string;
}

function RecordArray(props: RecordArrayProps) {
  const { value, onChange, defaultItems, className } = props;
  const [items, setItems] = useState<{ name?: string; label?: string }[]>(defaultItems || [{}]);

  return (
    <div className={classNames('c-bg flex flex-col gap-2 rounded p-2', className)}>
      {(items || [{}])?.map((item, index) => {
        const v = value?.[index] || {};
        return (
          <Fragment key={index}>
            <RecordItem
              item={item}
              value={v}
              onChange={(v) => {
                const newValues = [...(value || [])];
                newValues[index] = v || {};
                onChange(newValues);
              }}
            />
            {!defaultItems && <Divider className="my-2" />}
          </Fragment>
        );
      })}
      {!defaultItems && (
        <div className="flex flex-col items-center">
          <Button
            onClick={() => {
              setItems((v) => [...v, {}]);
            }}
          >
            添加
          </Button>
        </div>
      )}
    </div>
  );
}

interface RecordProps extends Omit<RecordArrayProps, 'value' | 'onChange'> {
  value?: Record<string, any>;
  onChange: (value?: Record<string, any>) => void;
}

function Record(props: RecordProps) {
  const { value, onChange, defaultItems, className } = props;

  const newValue = useMemo(() => {
    return Object.keys(value || {}).map((key) => ({
      key,
      value: value?.[key],
    }));
  }, [value]);

  const newOnChange = useCallback(
    (newV: { key?: string; value?: string }[]) => {
      const newValues = {};
      newV.forEach((item) => {
        if (item.key) {
          newValues[item.key] = item.value;
        }
      });

      onChange(newValues);
    },
    [onChange],
  );

  return (
    <RecordArray
      value={newValue}
      onChange={newOnChange}
      defaultItems={defaultItems}
      className={className}
    />
  );
}

export { Record, RecordArray };
export type { RecordArrayProps, RecordProps };
