---
group: 'core'
toc: content
---

# Table

对 ProTable 做扩展以满足实际使用情况

- 默认搜索关闭，需要再打开 `search: true`
- 有搜索的时候才显示搜索区域

## 场景

### 常规

```tsx
import { Table } from '@fe-free/core';
import { fakeData } from '../crud/demo/data';

function fakeRequest() {
  return Promise.resolve({
    data: fakeData,
    success: true,
    total: fakeData.length,
  });
}

const Demo = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return <Table rowKey="id" columns={columns} request={fakeRequest} />;
};

export default Demo;
```

### 没有搜索

```tsx
import { Table } from '@fe-free/core';

const Demo = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '名字(省略)',
      dataIndex: 'name',

      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return <Table columns={columns} rowKey="id" />;
};

export default Demo;
```
