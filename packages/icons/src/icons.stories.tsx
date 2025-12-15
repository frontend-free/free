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
      className="flex w-[150px] cursor-pointer flex-col items-center rounded border border-transparent p-2 hover:border-01"
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
    const [searchText, setSearchText] = useState('');

    // 自动获取所有导出的图标组件，并分成两组
    const { outlinedIcons, filledIcons } = useMemo(() => {
      const allIcons = Object.entries(Icons)
        .map(([name, icon]) => ({
          name,
          icon: icon as typeof Icons.DeleteOutlined,
        }))
        // .filter(({ name, icon }) => {
        //   // 过滤掉非图标组件（如 types）
        //   return name !== 'types' && typeof icon === 'function';
        // })
        .filter(({ name }) => {
          // 搜索过滤
          if (!searchText.trim()) return true;
          return name.toLowerCase().includes(searchText.toLowerCase());
        });

      // 分成两组
      const outlined = allIcons
        .filter(({ name }) => name.endsWith('Outlined'))
        .sort((a, b) => a.name.localeCompare(b.name));

      const filled = allIcons
        .filter(({ name }) => name.endsWith('Filled'))
        .sort((a, b) => a.name.localeCompare(b.name));

      return { outlinedIcons: outlined, filledIcons: filled };
    }, [searchText]);

    console.log({ outlinedIcons, filledIcons });

    return (
      <div className="space-y-4">
        {/* 搜索框 */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="搜索图标..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Outlined 图标组 */}
        {outlinedIcons.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Outlined</h3>
            <div className="flex flex-wrap gap-4">
              {outlinedIcons.map(({ name, icon }) => (
                <IconItem key={name} name={name} icon={icon} />
              ))}
            </div>
          </div>
        )}

        {/* Filled 图标组 */}
        {filledIcons.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Filled</h3>
            <div className="flex flex-wrap gap-4">
              {filledIcons.map(({ name, icon }) => (
                <IconItem key={name} name={name} icon={icon} />
              ))}
            </div>
          </div>
        )}

        {/* 无匹配结果 */}
        {outlinedIcons.length === 0 && filledIcons.length === 0 && (
          <div className="w-full text-center text-gray-500">未找到匹配的图标</div>
        )}
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
