---
nav:
  title: '组件'
  order: 10
group: 'core'
toc: content
---

# CRUD

> 需要了解 ant pro-components ProForm ProTable

基于 ant pro-components 通用的 CRUD 组件，同时保留扩展性。

## 代码演示

### 常规

```tsx
import { Normal } from './demo';

export default Normal;
```

### 详情页查看

调整 actions 为 `['read_detail']`，点击<查看>跳转到 `xxx/detail/[id]`，

```tsx
import { ReadDetail } from './demo';

export default ReadDetail;
```

### 数据 本地&远程&依赖

```tsx
import { RemoteData } from './demo';

export default RemoteData;
```

### 表格表单和详情表单 ref

获取 ProTable 的 actionRef

```tsx
import { Ref } from './demo';

export default Ref;
```

### ref.current.getActionRef

通过 ref 你可以做更多操作

```tsx
import { ActionRef } from './demo';

export default ActionRef;
```

### 没有搜索

```tsx
import { NoSearch } from './demo';

export default NoSearch;
```

### 自定义文案

```tsx
import { CustomText } from './demo';

export default CustomText;
```

## API

```tsx | pure
import type { ReactNode } from 'react';
import type { TableProps } from '../table';
import type { ProFormInstance, ActionType } from '@ant-design/pro-components';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type CrudAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CRUDProps {
  actions: CrudAction[];

  /** 表格相关 */
  tableProps: TableProps;

  /** 新建按钮，默认新建 */
  createButton?: ReactNode;

  operateColumnProps?: {
    width?: number;
    /** 扩展操作区域 */
    moreOperator?: (record) => ReactNode;
  };

  readProps?: {
    /** 文本 */
    operateText?: string;
  };

  /** 删除接口 */
  deleteById?: ({ id, ids }) => Promise<any>;
  deleteByRecord?: (record) => Promise<any>;
  /** 删除相关 */
  deleteProps?: {
    /** 显示名称索引 */
    nameIndex: string;
    /** 删除确认描述 */
    desc?: string;
    /** 文本 */
    operateText?: string;
  };

  /** 弹窗表单 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CrudAction }) => ReactNode;
  /** detailForm 的 formRef */
  detailFormInstance?: ProFormInstance;

  /** 新增接口 */
  requestAdd?: (values) => Promise<any>;

  addProps?: {
    /** 成功文案 */
    successText?: string | (() => string);
  };

  /** 更新接口 */
  requestUpdateById?: (values) => Promise<any>;
  updateProps?: {
    /** 文本 */
    operateText?: string;
    /** 成功文案 */
    successText?: string | (() => string);
  };

  /** 获取详情接口 */
  requestGetById?: ({ id }) => Promise<any>;

  /** 获取详情接口，非 id 的时候 */
  requestGetByRecord?: (record) => Promise<any>;

  /** 跳转到详情的 id 所以，默认 id */
  detailIdIndex?: string;
}

interface CRUDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}
```
