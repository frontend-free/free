import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';

interface ProFormListHelperProps<T> {
  value?: T[];
  onChange?: (value: T[]) => void;
  children: (props: {
    value?: T[];
    item: T;
    index: number;
    onItemChange: (newItem: T) => void;
  }) => React.ReactNode;
  addText?: string;
  getAdd: () => T;
  disabledAdd?: boolean;
  disabledDelete?: boolean;
  readOnly?: boolean;
  className?: string;
}

const emptyArr = [];
function ProFormListHelper<T = any>(props: ProFormListHelperProps<T>) {
  const options = props.value || emptyArr;

  return (
    <div className={classNames('flex flex-col gap-2', props.className)}>
      <div className="flex flex-col gap-2">
        {options.map((item, index) => {
          return (
            <div key={index} className="flex">
              <div className="flex-1 overflow-hidden">
                {props.children({
                  value: props.value,
                  item,
                  index,
                  onItemChange: (newItem) => {
                    const newOptions = [...options];
                    newOptions[index] = newItem;
                    props.onChange?.(newOptions);
                  },
                })}
              </div>
              {!props.readOnly && !props.disabledDelete && (
                <Button
                  icon={<DeleteOutlined />}
                  type="text"
                  onClick={() => {
                    const newOptions = [...options];
                    newOptions.splice(index, 1);
                    props.onChange?.(newOptions);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {!props.readOnly && !props.disabledAdd && (
        <div className="flex justify-center">
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => {
              const newOptions = [...options];
              newOptions.push(props.getAdd());
              props.onChange?.(newOptions);
            }}
          >
            {props.addText || '添加'}
          </Button>
        </div>
      )}
    </div>
  );
}

export { ProFormListHelper };
