import classNames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { CRUDProps } from '../crud';
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

function CRUDOfPure<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(props: CRUDOfPureProps<DataSource, Key>) {
  const { t } = useTranslation();
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
            column.valueType === 'select' || column.valueEnum
              ? t('core.crudOfPure.selectPlaceholder', '请选择{{title}}', { title: column.title })
              : t('core.crudOfPure.inputPlaceholder', '请输入{{title}}', { title: column.title }),
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

export { CRUDOfPure };
export type { CRUDOfPureProps };
