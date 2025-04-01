import type { ProDataListProps } from './pro_data_list';
import type { FloatLayoutClickRef } from '../float_layout';
import { FloatLayout } from '../float_layout';
import { List } from '../list';
import { ProDataList } from './pro_data_list';
import { Text } from '../text';
import { View } from '@tarojs/components';
import type { RefObject} from 'react';
import { useMemo, useRef, useState } from 'react';
import { Button } from '../button';
import { AtSearchBar } from 'taro-ui';
import type { AtSearchBarProps } from 'taro-ui/types/search-bar';

interface ProDataListWithFilterColumnOfSelect {
  type: 'select';
  title: string;
  name: string;
  initialValue?: any;
  renderLabel?: (value: string, params: any) => string;
  options: {
    label: string;
    value: string;
  }[];
}

interface ProDataListWithFilterColumnOfText {
  type: 'text';
  title: string;
  name: string;
  placeholder?: string;
  initialValue?: any;
}

interface ProDataListWithFilterColumnOfDate {
  type: 'date';
  title: string;
  name: string;
  initialValue?: any;
}

type ProDataListWithFilterColumn =
  | ProDataListWithFilterColumnOfSelect
  | ProDataListWithFilterColumnOfText
  | ProDataListWithFilterColumnOfDate;

interface ProDataListWithProps {
  request: ProDataListProps['request'];
  renderItem: ProDataListProps['renderItem'];
  columns?: ProDataListWithFilterColumn[];
  params?: ProDataListProps['params']
  showSearchBar?: boolean;
  searchBarProps?: Omit<AtSearchBarProps, 'onChange' | 'value' | 'onActionClick'>;
}

function FilterOfSelect({
  values,
  setValues,
  column,
}: {
  values: Record<string, any>;
  setValues: (values: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfSelect;
}) {
  const { title, name, options, renderLabel } = column;

  let extraText = '请选择';
  if (values[name]) {
    extraText = renderLabel ? renderLabel(values[name], {}) : values[name];
  }

  return (
    <List.SelectItem
      title={title}
      extraText={extraText}
      value={values[name]}
      onChange={(v) => setValues({ ...values, [name]: v })}
      options={options}
    />
  );
}

function FilterOfText({
  values,
  setValues,
  column,
}: {
  values: Record<string, any>;
  setValues: (values: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfText;
}) {
  const { title, name, placeholder } = column;

  return (
    <List.InputItem
      name={name}
      title={title}
      placeholder={placeholder || '请输入'}
      value={values[name]}
      onChange={(v) => setValues({ ...values, [name]: v as string })}
    />
  );
}

function FilterOfDate({
  values,
  setValues,
  column,
}: {
  values: Record<string, any>;
  setValues: (values: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfDate;
}) {
  const { title, name } = column;
  return (
    <List.DateItem
      title={title}
      extraText={values[name]}
      value={values[name] || ''}
      onChange={(v) => {
        setValues({ ...values, [name]: v });
      }}
    />
  );
}

const Filter = ({
  refLayout,
  filter,
  setFilter,
  columns,
}: {
  refLayout: RefObject<FloatLayoutClickRef>;
  filter: Record<string, any>;
  setFilter: (filter: Record<string, any>) => void;
  columns: ProDataListWithFilterColumn[];
}) => {
  const [values, setValues] = useState<Record<string, any>>(filter);

  const handleOK = () => {
    setFilter(values);
    refLayout.current?.close();
  }

  const handleReset = () => {
    setValues(filter);
  }

  return (
    <View className="flex flex-col h-full absolute w-full">
      <List className="flex-1">
        {columns.map((column, index) => {
          if (column.type === 'select') {
            return (
              <FilterOfSelect key={index} values={values} setValues={setValues} column={column} />
            );
          } else if (column.type === 'text') {
            return (
              <FilterOfText key={index} values={values} setValues={setValues} column={column} />
            );
          } else if (column.type === 'date') {
            return (
              <FilterOfDate key={index} values={values} setValues={setValues} column={column} />
            );
          }

          return null;
        })}
      </List>
      <View className="flex flex-row gap-2">
        <View className="flex-1">
          <Button onClick={handleReset}>重置</Button>
        </View>
        <View className="flex-1">
          <Button type="primary" onClick={handleOK}>确定</Button>
        </View>
      </View>
    </View>
  );
};

const ProDataListWithFilter = ({ request, renderItem, columns, params, 
  showSearchBar,
  searchBarProps, }: ProDataListWithProps) => {
  const refLayout = useRef<FloatLayoutClickRef>(null);

  const [searchText, setSearchText] = useState('');
  
  const defaultFilter = useMemo(() => {
    const result = {};

    columns?.forEach((filterColumn) => {
      result[filterColumn.name] = filterColumn.initialValue;
    });
    return result;
  }, [columns]);
  const [filter, setFilter] = useState<Record<string, any>>(defaultFilter);

  const layoutProps = useMemo(() => {
    if (!columns) {
      return null;
    }

    return {
      title: '筛选',
      children: <Filter refLayout={refLayout} filter={filter} setFilter={setFilter} columns={columns} />,
    };
  }, [filter, columns]);



  return (
    <View className="flex flex-col h-full">
      {(columns || showSearchBar) && (
        <View className="flex flex-row bg-white">
          <View className="flex-1">
            {showSearchBar && (
              <AtSearchBar
                className="w-full"
                placeholder="请输入"
                showActionButton
                {...searchBarProps}
                value={searchText}
                onChange={(v) => {
                  setSearchText(v);
                }}
                onActionClick={() => {
                  setFilter({ ...filter, keyword: searchText });
                }}
              />
            )}
          </View>
          {columns && (
            <FloatLayout.Click ref={refLayout} layoutProps={layoutProps!}>
              <View className="py-2 px-2 ">
                <Text className="text-primary">筛选</Text>
              </View>
            </FloatLayout.Click>
          )}
        </View>
      )}
      <View className="flex-1 overflow-y-auto">
        <ProDataList request={request} params={{
          ...params,
          ...filter
        }} renderItem={renderItem} />
      </View>
    </View>
  );
};

export { ProDataListWithFilter };
export type { ProDataListWithFilterColumn, ProDataListWithProps };
