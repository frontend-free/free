import React from 'react';
import { ProFormDateRangePicker } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import { isString } from 'lodash-es';

function getDayjs(text: string | number) {
  if (isString(text) && /^\d+$/.test(text as string)) {
    return dayjs(parseInt(text as string));
  }
  // 其他都可以 dayjs
  return dayjs(text);
}

const renderMap = {
  dateTime: (text) => {
    if (!text) return <div>-</div>;

    return <div>{getDayjs(text).format('YYYY-MM-DD HH:mm:ss')}</div>;
  },
  date: (text) => {
    if (!text) return <div>-</div>;

    return <div>{getDayjs(text).format('YYYY-MM-DD')}</div>;
  },
};

const renderFormItemMap = {
  dateRange: (_, props) => {
    return (
      <ProFormDateRangePicker
        {...props}
        fieldProps={{
          ...props.fieldProps,
          onChange: (value) => {
            const newValue = value
              ? [dayjs(value[0]).startOf('day'), dayjs(value[1]).endOf('day')]
              : value;

            props.fieldProps.onChange?.(newValue);
          },
        }}
      />
    );
  },
};

const dateRender = { renderMap, renderFormItemMap };

export { dateRender };
