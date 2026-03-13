import { PageLayoutTabs } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof PageLayoutTabs> = {
  title: '@fe-free/core/PageLayoutTabs',
  component: PageLayoutTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLayoutTabs>;

export const Default: Story = {
  render: () => {
    return <div>依赖 react-router-dom 的 Route 组件，暂不提供 demo</div>;
  },
};
