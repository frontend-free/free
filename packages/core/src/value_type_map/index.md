---
group: 'core'
toc: content
---

# valueTypeMap

自定义 valueType

## customValueTypeMap

配置 customValueTypeMap

```tsx | pure
import { customValueTypeMap } from '@fe-free/core';
import { ProConfigProvider } from '@ant-design/pro-components';

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <div>some</div>
  </ProConfigProvider>
);

export default Demo;
```

## CustomValueTypeEnum

使用

```tsx | pure
enum CustomValueTypeEnum {
  /** 渲染时间 + 搜索日期范围 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** 渲染日期 + 搜索日期范围 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
}
```

```tsx
import { CRUD, customValueTypeMap, CustomValueTypeEnum } from '@fe-free/core';
import { ProConfigProvider } from '@ant-design/pro-components';
import { range } from 'lodash-es';
import dayjs from 'dayjs';

async function fakeRequest() {
  const data = range(5).map((item) => ({
    id: `${item}`,
    timeStr: `2024-10-01 10:00:00`,
    timeNumber: +dayjs('2024-10-01 10:00:00'),
    dateStr: `2024-10-01`,
    dateNumber: +dayjs('2024-10-01'),
    seconds: Math.abs(+dayjs('2024-10-01') / 1000),
    jsonText: JSON.stringify({ name: 'hello world hello world hello world' }),
  }));

  return Promise.resolve({
    data,
    success: true,
    total: 100,
  }) as Promise<any>;
}

const Table = () => {
  const columns: any[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '时间 str',
      dataIndex: 'timeStr',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '时间 number',
      dataIndex: 'timeNumber',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '日期 str',
      dataIndex: 'dateStr',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '日期 number',
      dataIndex: 'dateNumber',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '秒数',
      dataIndex: 'seconds',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: 'json',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSON,
    },
  ];

  return (
    <CRUD
      actions={[]}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
};

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <Table />
  </ProConfigProvider>
);

export default Demo;
```
