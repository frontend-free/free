import classNames from 'classnames';
import { useEffect, useId, useMemo } from 'react';
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

function useSpecialToolbar({ specialToolbar, id }: { specialToolbar?: boolean; id: string }) {
  useEffect(() => {
    if (!specialToolbar) return;

    const container = document.querySelector(
      `.fec-crud-of-pure-${id}.fec-crud-of-pure-special-toolbar`,
    );
    if (!container) return;

    const connect = () => {
      const toolbarRightDiv = container.querySelector('.ant-pro-table-list-toolbar-right > div');
      const queryFilter = container.querySelector('.ant-pro-query-filter') as HTMLElement | null;
      if (!toolbarRightDiv || !queryFilter) return null;

      const applyPadding = (width: number) => {
        // 16 是原本的 padding-right。 20 是预留间隔
        queryFilter.style.paddingRight = `${width + 16 + 20}px`;
      };

      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          applyPadding(entry.contentRect.width);
        }
      });
      ro.observe(toolbarRightDiv);

      applyPadding((toolbarRightDiv as HTMLElement).getBoundingClientRect().width);
      return () => ro.disconnect();
    };

    let disconnect: (() => void) | null = connect();
    if (!disconnect) {
      const mo = new MutationObserver(() => {
        disconnect = connect();
        if (disconnect) mo.disconnect();
      });
      mo.observe(container, { childList: true, subtree: true });
      return () => {
        mo.disconnect();
        disconnect?.();
      };
    }
    return disconnect;
  }, [id, specialToolbar]);
}

function CRUDOfPure<
  DataSource extends Record<string, any> = any,
  Key extends string | number = string,
>(props: CRUDOfPureProps<DataSource, Key>) {
  const id = useId();

  const { t } = useTranslation();
  useSpecialToolbar({ specialToolbar: props.specialToolbar, id });
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
              ? t('@fe-free/core.crudOfPure.selectPlaceholder', '请选择{title}', {
                  title: column.title,
                })
              : t('@fe-free/core.crudOfPure.inputPlaceholder', '请输入{title}', {
                  title: column.title,
                }),
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
        `fec-crud-of-pure-${id}`,
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
          return [...originRender];
        },
      }}
    />
  );
}

export { CRUDOfPure };
export type { CRUDOfPureProps };
