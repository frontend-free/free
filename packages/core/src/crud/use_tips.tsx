import { useEffect } from 'react';
import type { CRUDProps } from './types';

function useTips<DataSource, Key>(props: CRUDProps<DataSource, Key>) {
  useEffect(() => {
    if (props.actions.includes('delete')) {
      if (!props.deleteProps || !props.requestDeleteByRecord) {
        console.warn('actions 包含 delete 时，需要传递 deleteProps 和 requestDeleteByRecord');
      }
    }
  }, []);
}

export { useTips };
