import { EditorLogs } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof EditorLogs> = {
  title: '@fe-free/core/EditorLogs',
  component: EditorLogs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '一个用于显示日志内容的 React 组件。它使用 CodeMirror 编辑器来呈现日志，提供了语法高亮和主题支持。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditorLogs>;

export const Basic: Story = {
  args: {
    logs: [
      {
        timestamp: '2023-01-01 12:00:00',
        level: 'info',
        message: 'This is an info log message.',
      },
      {
        timestamp: '2023-01-01 12:00:00',
        level: 'warn',
        message: 'This is a warning log message.',
      },
      {
        timestamp: '2023-01-01 12:00:00',
        level: 'error',
        message: 'This is an error log message.',
      },
      {
        timestamp: '2023-01-01 12:00:00',
        level: 'system',
        message:
          'This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message',
      },
      {
        timestamp: '2023-01-01 12:00:00',
        message: 'This is an log message.',
      },
      {
        level: 'info',
        message: 'This is an log message.',
      },
      {
        message: 'This is an log message.',
      },
    ],
  },
  render: (props) => (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorLogs {...props} />
    </div>
  ),
};

export const Pure: Story = {
  args: {
    logs: [
      {
        message: 'This is an info log message.',
      },
      {
        message: 'This is a warning log message.',
      },
      {
        message: 'This is an error log message.',
      },
    ],
  },
  render: (props) => (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorLogs {...props} />
    </div>
  ),
};
