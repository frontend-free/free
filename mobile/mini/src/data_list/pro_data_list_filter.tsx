import type { ProDataListProps } from './pro_data_list';
import { FloatLayout } from '../float_layout';
import { Input } from '../input';
import { List } from '../list';
import { Picker } from '../picker';
import { ProDataList } from './pro_data_list';
import { Text } from '../text';
import { View } from '@tarojs/components';
import { Picker as TaroPicker } from '@tarojs/components';
import { useMemo, useState } from 'react';

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
}

function FilterOfSelect({
  filter,
  setFilter,
  column,
}: {
  filter: Record<string, any>;
  setFilter: (filter: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfSelect;
}) {
  const { title, name, options, renderLabel } = column;

  let extraText = '请选择';
  if (filter[name]) {
    extraText = renderLabel ? renderLabel(filter[name], {}) : filter[name];
  }

  return (
    <Picker
      value={filter[name]}
      onChange={(v) => setFilter({ ...filter, [name]: v })}
      options={options}
    >
      <List.Item title={title} extraText={extraText} />
    </Picker>
  );
}

function FilterOfText({
  filter,
  setFilter,
  column,
}: {
  filter: Record<string, any>;
  setFilter: (filter: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfText;
}) {
  const { title, name } = column;

  return (
    <Input
      name={name}
      title={title}
      placeholder="请输入"
      value={filter[name]}
      onChange={(v) => setFilter({ ...filter, [name]: v as string })}
    />
  );
}

function FilterOfDate({
  filter,
  setFilter,
  column,
}: {
  filter: Record<string, any>;
  setFilter: (filter: Record<string, any>) => void;
  column: ProDataListWithFilterColumnOfDate;
}) {
  const { title, name } = column;
  return (
    <TaroPicker
      mode="date"
      value={filter[name] || ''}
      onChange={(e) => {
        setFilter({ ...filter, [name]: e.detail.value });
      }}
    >
      <List.Item title={title} extraText={filter[name] || '请选择'} />
    </TaroPicker>
  );
}

const Filter = ({
  filter,
  setFilter,
  columns,
}: {
  filter: Record<string, any>;
  setFilter: (filter: Record<string, any>) => void;
  columns: ProDataListWithFilterColumn[];
}) => {
  return (
    <View className="">
      <List>
        {columns.map((column, index) => {
          if (column.type === 'select') {
            return (
              <FilterOfSelect key={index} filter={filter} setFilter={setFilter} column={column} />
            );
          } else if (column.type === 'text') {
            return (
              <FilterOfText key={index} filter={filter} setFilter={setFilter} column={column} />
            );
          } else if (column.type === 'date') {
            return (
              <FilterOfDate key={index} filter={filter} setFilter={setFilter} column={column} />
            );
          }

          return null;
        })}
      </List>
    </View>
  );
};

const ProDataListWithFilter = ({ request, renderItem, columns }: ProDataListWithProps) => {
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
      children: <Filter filter={filter} setFilter={setFilter} columns={columns} />,
    };
  }, [filter, columns]);

  return (
    <View className="flex flex-col h-full">
      {columns && (
        <FloatLayout.Click layoutProps={layoutProps!}>
          <View className="flex flex-row justify-end py-2 px-3 bg-white">
            <Text className="text-primary">筛选</Text>
          </View>
        </FloatLayout.Click>
      )}
      <View className="flex-1 overflow-y-auto">
        <ProDataList request={request} params={filter} renderItem={renderItem} />
      </View>
    </View>
  );
};

export { ProDataListWithFilter };
export type { ProDataListWithFilterColumn, ProDataListWithProps };
