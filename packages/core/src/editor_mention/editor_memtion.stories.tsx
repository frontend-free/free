import { EditorMention } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof EditorMention> = {
  title: '@fe-free/core/EditorMention',
  component: EditorMention,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EditorMention>;

export const Default: Story = {
  args: {
    value: `
  adfa
  asf <a>asdf</a>
  asfa
`,
    items: [
      {
        label: '用户',
        options: [
          { value: '1', label: '张三' },
          { value: '2', label: '李四' },
        ],
      },
    ],
  },
};
