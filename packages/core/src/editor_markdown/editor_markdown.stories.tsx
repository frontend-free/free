import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EditorMarkdown } from './index';

const meta: Meta<typeof EditorMarkdown> = {
  title: '@fe-free/core/EditorMarkdown',
  component: EditorMarkdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorMarkdown>;

// 常规示例
const BasicDemo = () => {
  const [value] = useState(
    `# hello

world
`,
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorMarkdown value={value} />
    </div>
  );
};

export const Basic: Story = {
  render: () => <BasicDemo />,
};
