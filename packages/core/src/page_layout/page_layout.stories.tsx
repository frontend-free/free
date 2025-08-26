import { PageLayout } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof PageLayout> = {
  title: '@fe-free/core/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    start: <div className="bg-red-500 w-[100px] h-[100px]">start</div>,
    children: <div className="bg-blue-500 h-[100px]">children</div>,
    end: <div className="bg-green-500 w-[100px] h-[100px]">end</div>,
  },
};

export const DirectionVertical: Story = {
  args: {
    direction: 'vertical',
    start: <div className="bg-red-500 h-[100px]">start</div>,
    children: <div className="bg-blue-500 h-[100px]">children</div>,
    end: <div className="bg-green-500 h-[100px]">end</div>,
  },
};

export const ClassName: Story = {
  args: {
    className: '!w-[500px] !h-[500px]',
    startClassName: 'p-4 bg-red-200',
    childrenClassName: 'p-4 bg-blue-200',
    endClassName: 'p-4 bg-green-200',
    start: <div className="bg-red-500 w-[100px] h-full">start</div>,
    children: <div className="bg-blue-500 h-full">children</div>,
    end: <div className="bg-green-500 w-[100px] h-full">end</div>,
  },
};
