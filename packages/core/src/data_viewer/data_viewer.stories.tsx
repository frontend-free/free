import type { DataViewerProps } from '@fe-free/core';
import { DataViewer } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DataViewer> = {
  title: '@fe-free/core/DataViewer',
  component: DataViewer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataViewer>;

const BasicDemo = (props: DataViewerProps) => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <DataViewer {...props} />
    </div>
  );
};

// 基础用法
export const Basic: Story = {
  args: {
    data: 'hello world!',
    title: '输入',
    enableMaximize: true,
  },
  render: (props) => <BasicDemo {...props} />,
};

export const ForJSON: Story = {
  args: {
    data: JSON.stringify({ action: 'hello', data: 'world' }),
  },
  render: (props) => <BasicDemo {...props} />,
};

export const Markdown: Story = {
  args: {
    data: `# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`,
  },
  render: (props) => <BasicDemo {...props} />,
};
