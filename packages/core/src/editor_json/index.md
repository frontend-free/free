---
group: 'core'
toc: content
---

# EditorJSON

## 代码演示

### 常规

```tsx
import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;
```

### 只读

```tsx
import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;
```

### mode

```tsx
import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} mode="tree" readonly />
    </div>
  );
}

export default Demo;
```

### readonly mainMenuBar mode

```tsx
import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly mode="tree" mainMenuBar={false} />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
import type { JSONEditor } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
  mode?: JSONEditor['mode'];
}
```
