import { MessageThink } from '@fe-free/ai';
import { CheckCircleOutlined } from '@fe-free/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof MessageThink> = {
  title: '@fe-free/ai/MessageThink',
  component: MessageThink,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MessageThink>;

export const Default: Story = {
  args: {
    title: '思考',
    children: '这是 Think 的内容',
  },
};

export const Loading: Story = {
  args: {
    title: '思考中...',
    loading: true,
    children: '这是 Think 的内容',
  },
};

export const Icon: Story = {
  args: {
    title: '思考',
    children: '这是 Think 的内容',
    icon: <CheckCircleOutlined className="text-green08" />,
  },
};

export const DeepSeek: Story = {
  args: {
    title: '思考中...',
    loading: true,
    children: '这是 Think 的内容',
  },
};

export default meta;
