---
group: 'core'
toc: content
---

# Button

## LoadingButton

```tsx
import { LoadingButton } from '@fe-free/core';

export default () => {
  return (
    <div>
      <LoadingButton
        onClick={() => {
          return;
        }}
      >
        点击
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((resolve) => {
            setTimeout(resolve, 1000);
          })
        }
      >
        点击 1000ms resolve
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((_, reject) => {
            setTimeout(reject, 1000);
          })
        }
      >
        点击 1000ms reject
      </LoadingButton>
    </div>
  );
};
```
