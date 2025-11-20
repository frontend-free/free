import { FileCard } from '@fe-free/core';
import type { StoryObj } from '@storybook/react-vite';
import { PRESET_FILE_ICONS } from './helper';

const meta = {
  title: '@fe-free/core/FileCard',
  component: FileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileCard>;

export const Default: Story = {
  render: () => {
    let size = 0;
    return (
      <div>
        <div className="flex w-[200px] flex-col gap-2 border border-01">
          {PRESET_FILE_ICONS.map((item) => (
            <FileCard
              key={item.key}
              name={`这是文件名.${item.ext.join('.') || ''}`}
              size={(size += 1000000)}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const Direction: Story = {
  render: () => (
    <div>
      <FileCard name="这是文件名.pdf" size={10000} direction="vertical" />
    </div>
  ),
};

export const FileIcon: Story = {
  render: () => (
    <div>
      <FileCard.FileIcon name="这是文件名.pdf" className="text-3xl" />
    </div>
  ),
};

export const FileIconExt: Story = {
  render: () => (
    <div>
      <FileCard.FileIcon name="这是文件名.xlsx" showExt className="text-5xl" />
    </div>
  ),
};
