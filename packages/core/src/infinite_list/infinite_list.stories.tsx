import { InfiniteList } from '@fe-free/core';
import { sleep } from '@fe-free/tool';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof InfiniteList> = {
  title: '@fe-free/core/InfiniteList',
  component: InfiniteList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '无线滚动列表',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfiniteList>;

export const Resolve: Story = {
  render: () => {
    return (
      <div className="h-[500px]">
        <InfiniteList
          request={async ({ current, pageSize }) => {
            await sleep(500);
            return {
              data: new Array(pageSize).fill(0).map((_, index) => index + (current - 1) * pageSize),
              total: 100,
            };
          }}
          renderItem={({ item }) => {
            return (
              <div className="p-2">
                <div className="h-[100px] bg-red-500">item{item}</div>
              </div>
            );
          }}
          pageSize={20}
          gridClassName="grid-cols-3"
        />
      </div>
    );
  },
};
