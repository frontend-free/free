import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { CRUDProps } from './types';

function useTips<DataSource, Key>(props: CRUDProps<DataSource, Key>) {
  const { t } = useTranslation();
  useEffect(() => {
    if (props.actions.includes('create')) {
      if (!props.requestCreateByValues) {
        console.warn(
          t(
            'core.crud.warnCreateRequestCreateByValues',
            'actions 包含 create 时，需要传递 requestCreateByValues',
          ),
        );
      }
      if (!props.detailForm) {
        console.warn(
          t(
            '@fe-free/core.crud.warnCreateDetailForm',
            'actions 包含 create 时，需要传递 detailForm',
          ),
        );
      }
    }

    if (props.actions.includes('read')) {
      if (!props.requestGetByRecord) {
        console.warn(
          t(
            'core.crud.warnReadRequestGetByRecord',
            'actions 包含 read 时，需要传递 requestGetByRecord',
          ),
        );
      }
      if (!props.detailForm) {
        console.warn(
          t('@fe-free/core.crud.warnReadDetailForm', 'actions 包含 read 时，需要传递 detailForm'),
        );
      }
    }

    if (props.actions.includes('update')) {
      if (!props.requestGetByRecord || !props.requestUpdateByValues) {
        console.warn(
          t(
            'core.crud.warnUpdateRequest',
            'actions 包含 update 时，需要传递 requestGetByRecord 和 requestUpdateByValues',
          ),
        );
      }
      if (!props.detailForm) {
        console.warn(
          t(
            '@fe-free/core.crud.warnUpdateDetailForm',
            'actions 包含 update 时，需要传递 detailForm',
          ),
        );
      }
    }

    if (props.actions.includes('delete')) {
      if (!props.deleteProps?.nameIndex || !props.requestDeleteByRecord) {
        console.warn(
          t(
            'core.crud.warnDeleteProps',
            'actions 包含 delete 时，需要传递 deleteProps 和 requestDeleteByRecord',
          ),
        );
      }
    }

    if (props.actions.includes('batch_delete')) {
      if (!props.requestDeleteByRecords) {
        console.warn(
          t(
            'core.crud.warnBatchDeleteRequestDeleteByRecords',
            'actions 包含 batch_delete 时，需要传递 requestDeleteByRecords',
          ),
        );
      }
    }
  }, [props, t]);
}

export { useTips };
