import { PercentageSlider } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof PercentageSlider> = {
  title: '@fe-free/core/PercentageSlider',
  component: PercentageSlider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PercentageSlider>;

function Render(args: Story['args']) {
  const [value, setValue] = useState([10, 30, 60]);
  return <PercentageSlider value={value} onChange={setValue} {...args} />;
}

export const Basic: Story = {
  args: {},
  render: Render,
};
