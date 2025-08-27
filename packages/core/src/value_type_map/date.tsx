import { ProFormDateRangePicker } from '@ant-design/pro-components';
import { getDayjs } from '@fe-free/tool';
import dayjs from 'dayjs';

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
    // @ts-ignore onBlur 类型错误
    const { onBlur, fieldProps, ...rest } = props;

    return (
      <ProFormDateRangePicker
        {...rest}
        fieldProps={{
          ...fieldProps,
          onChange: (value, ...args) => {
            const newValue = value
              ? [dayjs(value[0]).startOf('day'), dayjs(value[1]).endOf('day')]
              : value;

            props.fieldProps.onChange?.(newValue, ...args);
          },
        }}
      />
    );
  },
};

const dateRender = { renderMap, renderFormItemMap };

export { dateRender };
