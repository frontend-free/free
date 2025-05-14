import type { StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EditorJavascript } from './index';

export default {
  title: '@fe-free/core/EditorJavascript',
  component: EditorJavascript,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof EditorJavascript>;

// 常规示例
const StoryOfDefault = () => {
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

export const Default: Story = {
  render: () => <StoryOfDefault />,
};

// readonly 示例
const StoryOfReadonly = () => {
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
  render: () => <StoryOfReadonly />,
};
