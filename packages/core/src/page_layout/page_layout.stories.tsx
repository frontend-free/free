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
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="h-[200px] w-[500px]">
          <PageLayout
            start={<div className="h-full w-[100px] bg-red-500">start</div>}
            end={<div className="h-full w-[100px] bg-green-500">end</div>}
          >
            <div className="h-full bg-blue-500">children</div>
          </PageLayout>
        </div>

        <div className="h-[200px] w-[500px]">
          <PageLayout
            start={<div className="h-full w-[100px] bg-red-500">start</div>}
            end={<div className="h-full w-[100px] bg-green-500">end</div>}
          >
            <div className="h-full w-[2000px] bg-blue-500">children</div>
          </PageLayout>
        </div>
      </div>
    );
  },
};

export const DirectionVertical: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <div className="h-[500px] w-[200px]">
          <PageLayout
            direction="vertical"
            start={<div className="h-[100px] w-full bg-red-500">start</div>}
            end={<div className="h-[100px] w-full bg-green-500">end</div>}
          >
            <div className="h-full bg-blue-500">children</div>
          </PageLayout>
        </div>

        <div className="h-[500px] w-[200px]">
          <PageLayout
            direction="vertical"
            start={<div className="h-[100px] w-full bg-red-500">start</div>}
            end={<div className="h-[100px] w-full bg-green-500">end</div>}
          >
            <div className="h-[2000px] w-full bg-blue-500">children</div>
          </PageLayout>
        </div>
      </div>
    );
  },
};

export const EqualParts: Story = {
  render: () => {
    return (
      <div className="h-[200px] w-[500px]">
        <PageLayout equalParts={true} className="bg-gray-200">
          <div className="h-full bg-blue-500">children</div>
          <div className="h-full w-[600px] bg-green-500">end</div>
        </PageLayout>
      </div>
    );
  },
};

export const ClassNamePadding: Story = {
  render: () => {
    return (
      <div className="h-[200px] w-[500px]">
        <PageLayout
          startClassName="p-4 bg-red-200"
          childrenClassName="p-4 bg-blue-200"
          endClassName="p-4 bg-green-200"
          start={<div className="h-full w-[100px] bg-red-500">start</div>}
          end={<div className="h-full w-[100px] bg-green-500">end</div>}
        >
          <div className="h-full bg-blue-500">children</div>
        </PageLayout>
      </div>
    );
  },
};
