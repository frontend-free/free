import { NumberSlider } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof NumberSlider> = {
  title: '@fe-free/core/NumberSlider',
  component: NumberSlider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NumberSlider>;

function Render(args: Story['args']) {
  const [value, setValue] = useState(0);
  return <NumberSlider value={value} onChange={setValue} {...args} />;
}

export const Basic: Story = {
  args: {},
  render: Render,
};

export const One: Story = {
  args: {
    max: 1,
    step: 0.1,
    precision: 1,
  },
  render: Render,
};
