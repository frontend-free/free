import { useDebounce } from 'ahooks';
import { Input } from 'antd';
import classNames from 'classnames';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import type { CRUDMethods, CRUDProps } from '../crud';
import { CRUD } from '../crud';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CRUDOfListProps<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
> extends CRUDProps<DataSource, Key> {
  // nothing
}

function useTips(props) {
  useEffect(() => {
    const count = props.tableProps.columns?.filter((column) => column.search).length;
    if (!count) {
      console.warn('CRUDOfList 的 columns 中至少有一个 search 为 true 的列');
    }
    if (count > 1) {
      console.warn('CRUDOfList 的 columns 中只能有一个 search 为 true 的列');
    }
  }, []);
}

function SearchRender(props: {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <Input
      placeholder={props.placeholder ?? '输入搜索'}
      allowClear
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="w-full"
    />
  );
}

function CRUDOfListComponent(props: CRUDOfListProps, ref: React.ForwardedRef<CRUDMethods>) {
  useTips(props);

  const { tableProps, ...rest } = props;

  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, { wait: 300 });

  const searchDataIndex = useMemo(() => {
    return tableProps.columns?.find((column) => column.search)?.dataIndex;
  }, [tableProps.columns]);

  const newColumns = useMemo(() => {
    return (tableProps.columns || []).map((column) => ({
      ...column,
      search: false,
    }));
  }, [tableProps.columns]);

  const toolBarRender = useCallback(
    (...args) => {
      return [
        <div key="search-input-container" className="w-full">
          {searchDataIndex && (
            <SearchRender value={searchValue} onChange={(value) => setSearchValue(value)} />
          )}
        </div>,
        // @ts-ignore
        ...(tableProps.toolBarRender ? tableProps.toolBarRender(...args) : []),
      ];
    },
    [searchValue, searchDataIndex, tableProps],
  );

  const newParams = useMemo(() => {
    return {
      ...(tableProps.params || {}),
      [searchDataIndex]: debouncedSearchValue,
    };
  }, [debouncedSearchValue, searchDataIndex, tableProps.params]);

  return (
    <div
      className={classNames('fec-crud-of-list', {
        // 先这样实现
        'fec-crud-of-list-no-toolbar': !searchDataIndex && !props.actions.includes('create'),
      })}
    >
      <CRUD
        ref={ref}
        {...rest}
        tableProps={{
          cardBordered: false,
          showHeader: false,
          ghost: true,
          // 简单的隐藏搜索栏
          search: false,
          pagination: false,
          ...tableProps,
          params: newParams,
          columns: newColumns,
          toolBarRender,
        }}
        operateColumnProps={{
          width: 1,
          ...props.operateColumnProps,
        }}
      />
    </div>
  );
}

const CRUDOfList = forwardRef(CRUDOfListComponent) as <
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(
  props: CRUDOfListProps<DataSource, Key> & { ref?: React.ForwardedRef<CRUDMethods> },
) => JSX.Element;

export { CRUDOfList };
export type { CRUDOfListProps };
