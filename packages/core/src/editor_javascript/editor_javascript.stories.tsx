import { EditorJavascript } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof EditorJavascript> = {
  title: '@fe-free/core/EditorJavascript',
  component: EditorJavascript,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorJavascript>;

// 常规示例
const BasicDemo = () => {
  const [value, setValue] = useState(
    `const name = 'world';
console.log('hello', name);
`,
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} />
    </div>
  );
};

export const Basic: Story = {
  render: () => <BasicDemo />,
};

// readonly 示例
const ReadonlyDemo = () => {
  const [value, setValue] = useState(
    `const name = 'world';
console.log('hello', name);
`,
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} readonly />
    </div>
  );
};

export const Readonly: Story = {
  render: () => <ReadonlyDemo />,
};
