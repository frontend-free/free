import type { EditorProps } from '@fe-free/core';
import { Editor } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Editor> = {
  title: '@fe-free/core/Editor',
  component: Editor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Editor>;

const BasicDemo = (props: EditorProps) => {
  const [value, setValue] = useState(props.value || '');

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Editor {...props} value={value} onChange={setValue} />
    </div>
  );
};

// 基础用法
export const Basic: Story = {
  args: {
    value: 'hello world!',
  },
  render: (props) => <BasicDemo {...props} />,
};

// 只读模式
export const ReadOnly: Story = {
  args: {
    value: 'hello world!',
    readOnly: true,
  },
  render: (props) => <BasicDemo {...props} />,
};

export const Wrap: Story = {
  args: {
    value:
      'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
    lineWrapping: true,
  },
  render: (props) => <BasicDemo {...props} />,
};

// 不可编辑模式
export const Editable: Story = {
  args: {
    value: 'hello world!',
    editable: false,
  },
  render: (props) => <BasicDemo {...props} />,
};

// 自动聚焦
export const AutoFocus: Story = {
  args: {
    value: '',
    autoFocus: true,
  },
  render: (props) => <BasicDemo {...props} />,
};

export const Javascript: Story = {
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")',
  },
  render: (props) => <BasicDemo {...props} />,
};

export const Python: Story = {
  args: {
    language: 'python',
    value: `def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`,
  },
  render: (props) => <BasicDemo {...props} />,
};

export const ForJSON: Story = {
  args: {
    language: 'json',
    value: JSON.stringify({ action: 'hello', data: 'world' }, null, 2),
  },
  render: (props) => <BasicDemo {...props} />,
};

export const Markdown: Story = {
  args: {
    language: 'markdown',
    value: `# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`,
  },
  render: (props) => <BasicDemo {...props} />,
};
