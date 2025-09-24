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
  // nothing
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
    <div
      className={classNames('fec-crud-of-pure', {
        'fec-crud-of-pure-no-search': noSearch,
        // 先这样实现
        'fec-crud-of-pure-no-toolbar': !props.actions.includes('create'),
      })}
    >
      <CRUD
        ref={ref}
        {...props}
        tableProps={{
          cardBordered: false,
          ...props.tableProps,
          columns: newColumns,
        }}
      />
    </div>
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
