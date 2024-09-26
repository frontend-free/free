---
group: 'core'
toc: content
---

# EditorJavascript

## 代码演示

### 常规

```tsx
import { useState } from 'react';
import { EditorJavascript } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    `const name = 'world';
console.log('hello', name);
`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;
```

### readonly

```tsx
import { useState } from 'react';
import { EditorJavascript } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    `const name = 'world';
console.log('hello', name);
`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
interface EditorJavascriptProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
```
