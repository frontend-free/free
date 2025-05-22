import { useEffect } from 'react';
import type { CRUDProps } from './types';

function useTips<DataSource, Key>(props: CRUDProps<DataSource, Key>) {
  useEffect(() => {
    if (props.actions.includes('create')) {
      if (!props.requestCreateByValues) {
        console.warn('actions 包含 create 时，需要传递 requestCreateByValues');
      }
      if (!props.detailForm) {
        console.warn('actions 包含 create 时，需要传递 detailForm');
      }
    }

    if (props.actions.includes('read')) {
      if (!props.requestGetByRecord) {
        console.warn('actions 包含 read 时，需要传递 requestGetByRecord');
      }
      if (!props.detailForm) {
        console.warn('actions 包含 read 时，需要传递 detailForm');
      }
    }

    if (props.actions.includes('update')) {
      if (!props.requestGetByRecord || !props.requestUpdateByValues) {
        console.warn(
          'actions 包含 update 时，需要传递 requestGetByRecord 和 requestUpdateByValues',
        );
      }
      if (!props.detailForm) {
        console.warn('actions 包含 update 时，需要传递 detailForm');
      }
    }

    if (props.actions.includes('delete')) {
      if (!props.deleteProps?.nameIndex || !props.requestDeleteByRecord) {
        console.warn('actions 包含 delete 时，需要传递 deleteProps 和 requestDeleteByRecord');
      }
    }
  }, []);
}

export { useTips };
