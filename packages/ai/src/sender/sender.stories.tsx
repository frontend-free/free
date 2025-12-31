import { Sender } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Sender> = {
  title: '@fe-free/ai/Sender',
  component: Sender,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Sender>;

export const Default: Story = {
  args: {},
};

export const Files: Story = {
  args: {
    value: {},
    uploadAction: '/api/ai-service/v1/file_upload/upload',
  },
};

export default meta;
