import { PageLayout } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof PageLayout> = {
  title: '@fe-free/core/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    start: <div className="h-[100px] w-[100px] bg-red-500">start</div>,
    children: <div className="h-[100px] bg-blue-500">children</div>,
    end: <div className="h-[100px] w-[100px] bg-green-500">end</div>,
  },
};

export const DirectionVertical: Story = {
  args: {
    direction: 'vertical',
    start: <div className="h-[100px] bg-red-500">start</div>,
    children: <div className="h-[100px] bg-blue-500">children</div>,
    end: <div className="h-[100px] bg-green-500">end</div>,
  },
};

export const EqualParts: Story = {
  args: {
    className: '!w-[800px] !h-[200px] bg-gray-200',
    equalParts: true,
    // start: <div className="h-[100px] bg-red-500">start</div>,
    children: <div className="h-[100px] bg-blue-500">children</div>,
    end: <div className="h-[100px] w-[600px] bg-green-500">end</div>,
  },
};
export const ClassName: Story = {
  args: {
    className: '!w-[500px] !h-[500px]',
    startClassName: 'p-4 bg-red-200',
    childrenClassName: 'p-4 bg-blue-200',
    endClassName: 'p-4 bg-green-200',
    start: <div className="h-full w-[100px] bg-red-500">start</div>,
    children: <div className="h-full bg-blue-500">children</div>,
    end: <div className="h-full w-[100px] bg-green-500">end</div>,
  },
};
