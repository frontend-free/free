---
group: 'core'
toc: content
---

# EditorMarkdown

## 代码演示

### 常规

```tsx
import { useState } from 'react';
import { EditorMarkdown } from '@fe-free/core';

function Demo() {
  const [value] = useState(
    `# hello

world
`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorMarkdown value={value} />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
interface EditorMarkdownProps {
  value: string;
}
```
