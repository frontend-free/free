---
group: 'core'
toc: content
---

# Form

## ProFormJSON

JSON

```tsx
import { ProForm } from '@ant-design/pro-components';
import { ProFormJSON } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  );
}

export default Demo;
```

readonly

```tsx
import { ProForm } from '@ant-design/pro-components';
import { ProFormJSON } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
        }}
      />
    </ProForm>
  );
}

export default Demo;
```

## ProFormJavascript

JSON

```tsx
import { ProForm } from '@ant-design/pro-components';
import { ProFormJavascript } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJavascript
        name="json"
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  );
}

export default Demo;
```

readonly

```tsx
import { ProForm } from '@ant-design/pro-components';
import { ProFormJavascript } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJavascript
        name="json"
        readonly
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  );
}

export default Demo;
```
