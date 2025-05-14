import { useState } from 'react';
import { EditorMarkdown } from './index';

export default {
  title: '@fe-free/core/EditorMarkdown',
  component: EditorMarkdown,
  tags: ['autodocs'],
};

// type Story = StoryObj<typeof EditorMarkdown>;

// 常规示例
const StoryOfDefault = () => {
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

export const Default = {
  render: () => <StoryOfDefault />,
};
