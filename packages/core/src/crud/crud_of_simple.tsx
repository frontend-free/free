import { useDebounce } from 'ahooks';
import { Input } from 'antd';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { CRUD } from './crud';
import type { CRUDMethods, CRUDProps } from './types';

interface CRUDOfSimpleProps<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
> extends CRUDProps<DataSource, Key> {
  // 传才开启搜索
  simpleSearchProps?: {
    /** 搜索项的名称，默认 keywords */
    name: string;
    /** 搜索项的 placeholder，默认 请输入 */
    placeholder?: string;
  };
}

function useTips(props) {
  const { columns } = props;

  useEffect(() => {
    const hasSearchColumn = columns?.find((column) => column.search);
    if (hasSearchColumn) {
      console.warn('CRUDOfSimple 的 columns 中不能有 search 为 true 的列');
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
    />
  );
}

function CRUDOfSimpleComponent(props: CRUDOfSimpleProps, ref: React.ForwardedRef<CRUDMethods>) {
  const { simpleSearchProps, tableProps, ...rest } = props;

  useTips(props);
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedSearchValue = useDebounce(searchValue, { wait: 300 });

  const newColumns = useMemo(() => {
    return (tableProps.columns || []).map((column) => ({
      ...column,
      search: false,
    }));
  }, [tableProps.columns]);

  const toolBarRender = useCallback(
    (...args) => {
      return [
        <div key="search">
          {simpleSearchProps && (
            <SearchRender
              placeholder={simpleSearchProps.placeholder}
              value={searchValue}
              onChange={(value) => setSearchValue(value)}
            />
          )}
        </div>,
        // @ts-ignore
        ...(tableProps.toolBarRender ? tableProps.toolBarRender(...args) : []),
      ];
    },
    [searchValue, simpleSearchProps, tableProps],
  );

  const newParams = useMemo(() => {
    if (!simpleSearchProps) {
      return tableProps.params;
    }

    return {
      ...tableProps.params,
      [simpleSearchProps.name]: debouncedSearchValue,
    };
  }, [debouncedSearchValue, simpleSearchProps, tableProps.params]);

  return (
    <div className="crud-of-simple">
      <CRUD
        ref={ref}
        {...rest}
        tableProps={{
          ...tableProps,
          params: newParams,
          cardBordered: false,
          showHeader: false,
          ghost: true,
          columns: newColumns,
          toolBarRender,
        }}
      />
    </div>
  );
}

const CRUDOfSimple = forwardRef(CRUDOfSimpleComponent) as <
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(
  props: CRUDOfSimpleProps<DataSource, Key> & { ref?: React.ForwardedRef<CRUDMethods> },
) => JSX.Element;

export { CRUDOfSimple };
export type { CRUDOfSimpleProps };
