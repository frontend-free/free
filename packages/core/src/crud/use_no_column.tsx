import { useCallback, useRef } from 'react';
import { CustomValueTypeEnum } from '../value_type_map';

function useNoColumn({ request, columns }) {
  const refCurrent = useRef<number>(1);
  const refPageSize = useRef<number>(20);

  const newRequest = useCallback(
    async (params) => {
      const { current, pageSize } = params;

      const res = await request(params);

      // after request, 才更新，数据才准确
      refCurrent.current = current;
      refPageSize.current = pageSize;

      return res;
    },
    [request],
  );

  const newColumns = useCallback(() => {
    return columns?.map((column) => {
      if (column.valueType === CustomValueTypeEnum.CustomSerialNumber) {
        return {
          render: (_, __, index) => {
            return (refCurrent.current - 1) * refPageSize.current + index + 1;
          },
          ...column,
        };
      }
      return column;
    });
  }, [columns]);

  return {
    columns: newColumns(),
    request: newRequest,
  };
}

export { useNoColumn };
