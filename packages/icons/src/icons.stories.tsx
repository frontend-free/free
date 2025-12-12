import * as Icons from '@fe-free/icons';
import { copyToClipboard } from '@fe-free/tool';
import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import './style.css';

const meta: Meta<typeof Icons.DeleteOutlined> = {
  title: '@fe-free/icons',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icons.DeleteOutlined>;

// 图标项组件
function IconItem({ name, icon: Icon }: { name: string; icon: typeof Icons.DeleteOutlined }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await copyToClipboard(name);
      setCopied(true);
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center rounded border border-transparent p-2 hover:border-01"
      onClick={handleClick}
    >
      <div className="relative">
        <Icon className="text-3xl" />
      </div>
      <span className="text-sm">{name}</span>
      <span
        className={classNames('text-xs text-03', {
          invisible: !copied,
          visible: copied,
        })}
      >
        {copied ? '已复制!' : '点击复制'}
      </span>
    </div>
  );
}

console.log(Icons);

// 所有图标列表
export const Basic: Story = {
  render: () => {
    // 自动获取所有导出的图标组件
    const icons = useMemo(() => {
      return Object.entries(Icons)
        .map(([name, icon]) => ({
          name,
          icon: icon as typeof Icons.DeleteOutlined,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); // 按名称排序
    }, []);

    console.log(icons);

    return (
      <div className="flex flex-wrap gap-4">
        {icons.map(({ name, icon }) => (
          <IconItem key={name} name={name} icon={icon} />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '所有可用的图标列表，点击图标卡片可复制组件名称',
      },
    },
  },
};

// 基本使用
export const Usages: Story = {
  render: () => (
    <div>
      <Icons.DeleteOutlined />
      <Icons.DeleteOutlined className="text-xl" />
      <Icons.DeleteOutlined className="text-primary" />
      <Icons.DeleteOutlined rotate={45} />
      <Icons.DeleteOutlined spin className="text-2xl" />
    </div>
  ),
};
