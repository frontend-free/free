import { EditorJSON } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof EditorJSON> = {
  title: '@fe-free/core/EditorJSON',
  component: EditorJSON,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorJSON>;

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState(
      JSON.stringify({
        name: 'world',
      }),
    );

    return (
      <div style={{ width: '500px', height: '500px' }}>
        <EditorJSON {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Readonly: Story = {
  render: () => {
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
  },
};

export const TreeMode: Story = {
  render: () => {
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
  },
};

export const NoMenuBar: Story = {
  render: () => {
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
  },
};
