import { EditorJSON } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof EditorJSON> = {
  title: '@fe-free/core/EditorJSON',
  component: EditorJSON,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorJSON>;

// 基础示例
const BasicDemo = () => {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2,
    ),
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} />
    </div>
  );
};

export const Basic: Story = {
  render: () => <BasicDemo />,
};

// 只读模式
const ReadonlyDemo = () => {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2,
    ),
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly />
    </div>
  );
};

export const Readonly: Story = {
  render: () => <ReadonlyDemo />,
};

// 树形模式
const TreeModeDemo = () => {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2,
    ),
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} mode="tree" readonly />
    </div>
  );
};

export const TreeMode: Story = {
  render: () => <TreeModeDemo />,
};

// 无菜单栏的只读树形模式
const NoMenuBarDemo = () => {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2,
    ),
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly mode="tree" mainMenuBar={false} />
    </div>
  );
};

export const NoMenuBar: Story = {
  render: () => <NoMenuBarDemo />,
};
