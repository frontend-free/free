import type { ParamsType, ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useMemo } from 'react';

interface TableProps<DataSource = any, Params = any, ValueType = 'text'>
  extends ProTableProps<DataSource, Params, ValueType> {
  /** 区别 ProTable columns，默认 search: false */
  columns?: ProTableProps<DataSource, Params, ValueType>['columns'];
}

function Table<
  DataSource extends Record<string, any> = any,
  Params extends ParamsType = ParamsType,
>(props: TableProps<DataSource, Params>) {
  const { columns, rowKey = 'id', search, ...rest } = props;

  const newColumns = useMemo(() => {
    if (columns) {
      // 默认隐藏搜索，如果需要显示搜索，需要在 columns 中设置 search: true
      return columns.map((column) => {
        return {
          search: false,
          ...column,
        };
      });
    }
    return columns;
  }, [columns]);

  const newPagination = useMemo(() => {
    return {
      showSizeChanger: true,
      showQuickJumper: true,
      ...rest.pagination,
    };
  }, [rest.pagination]);

  const hasSearch = !!newColumns?.find((column) => column.search);

  let newSearch: any = undefined;
  if (hasSearch) {
    newSearch = {
      labelWidth: 'auto',
      defaultCollapsed: false,
      ...search,
    };
  } else if (search === false) {
    newSearch = false;
  } else {
    newSearch = {
      ...search,
    };
  }

  console.log('newSearch', newSearch);

  return (
    <ProTable<DataSource, Params>
      cardBordered
      rowKey={rowKey}
      pagination={newPagination}
      options={false}
      // @ts-ignore 不会处理这里的 ts，或者成本大
      columns={newColumns}
      scroll={getTableScroll(newColumns)}
      search={newSearch}
      {...rest}
    />
  );
}

function getTableScroll(columns: ProTableProps<any, any>['columns'], defaultWidth = 120) {
  const scroll = { x: 0, y: undefined };

  columns?.forEach((column) => {
    if (!column.hideInTable) {
      scroll.x += Number(column.width) || defaultWidth;
    }
  });

  return scroll;
}

export { Table };
export type { TableProps };
