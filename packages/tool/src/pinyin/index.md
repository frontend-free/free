---
nav:
  title: '组件'
  order: 15
group: 'tool'
toc: content
---

# pinyin

将汉字转换为拼音

## 场景

输出拼音

```tsx
import { pinyin } from '@fe-free/tool';

export default () => {
  return <div>{pinyin('你好')}</div>;
};
```

输出首拼音

```tsx
import { pinyin } from '@fe-free/tool';

export default () => {
  return <div>{pinyin('你好', 'first_letter')} </div>;
};
```

匹配

```tsx
import { pinyinMatch } from '@fe-free/tool';

export default () => {
  return (
    <>
      <div>{pinyinMatch('你好', 'nh') + ''}</div>
      <div>{pinyinMatch('你好', 'wo') + ''} </div>
    </>
  );
};
```

过滤

```tsx
import { pinyinFilter } from '@fe-free/tool';

export default () => {
  return (
    <>
      <div>{pinyinFilter(['你好', ' 我们'], 'nh')} </div>
      <div>{pinyinFilter(['你好', ' 我们'], 'wo')} </div>
    </>
  );
};
```
