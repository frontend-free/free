import classNames from 'classnames';
import { forwardRef, useMemo } from 'react';
import type { CRUDMethods, CRUDProps } from '../crud';
import { CRUD } from '../crud';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CRUDOfPureProps<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
> extends CRUDProps<DataSource, Key> {
  /** 特殊位置的 toolbar，向上 margin，是的 search 和 toolbar 一起。仅适用于 search 很少的情况。 */
  specialToolbar?: boolean;
}

function CRUDOfPureComponent(props: CRUDOfPureProps, ref: React.ForwardedRef<CRUDMethods>) {
  const newColumns = props.tableProps.columns?.map((column) => {
    if (column.search) {
      return {
        ...column,
        // 隐藏 label
        formItemProps: {
          label: '',
          ...column.formItemProps,
        },
        // 设置 placeholder
        fieldProps: {
          placeholder:
            column.valueType === 'select' ? `请选择${column.title}` : `请输入${column.title}`,
          ...column.fieldProps,
        },
      };
    }
    return column;
  });

  const noSearch = useMemo(() => {
    return !props.tableProps.columns?.find((column) => column.search);
  }, [props.tableProps.columns]);

  return (
    <CRUD
      ref={ref}
      {...props}
      className={classNames(
        'fec-crud-of-pure',
        {
          'fec-crud-of-pure-no-search': noSearch,
          'fec-crud-of-pure-special-toolbar': props.specialToolbar,
        },
        props.className,
      )}
      tableProps={{
        cardBordered: false,
        ...props.tableProps,
        columns: newColumns,
        toolBarRender: (...args) => {
          let originRender: React.ReactNode[] = [];

          if (typeof props.tableProps.toolBarRender === 'function') {
            originRender = props.tableProps.toolBarRender(...args);
          }
          return [...originRender, <div key="fake" style={{ height: '32px' }} />];
        },
      }}
    />
  );
}

const CRUDOfPure = forwardRef(CRUDOfPureComponent) as <
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(
  props: CRUDOfPureProps<DataSource, Key> & { ref?: React.ForwardedRef<CRUDMethods> },
) => JSX.Element;

export { CRUDOfPure };
export type { CRUDOfPureProps };
