import { sleep } from '@fe-free/tool';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: '@fe-free/tool/sleep',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '顾名思义',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// 基础拼音转换
export const Basic: Story = {
  render: () => (
    <div
      onClick={async () => {
        await sleep(1000);
        alert('after sleep');
      }}
    >
      click me sleep 1000
    </div>
  ),
};
