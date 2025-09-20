import { FileCard } from '@fe-free/file';
import type { StoryObj } from '@storybook/react-vite';
import { PRESET_FILE_ICONS } from './helper';

const meta = {
  title: '@fe-free/file/FileCard',
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
        <div className="flex flex-col gap-2">
          {PRESET_FILE_ICONS.map((item) => (
            <div key={item.key} className="flex gap-2">
              <FileCard name={`这是文件名.${item.ext.join('.') || ''}`} size={(size += 1000000)} />
            </div>
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
