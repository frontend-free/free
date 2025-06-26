import type { Meta, StoryObj } from '@storybook/react-vite';
import { buildURL } from './index';

const meta: Meta = {
  title: '@fe-free/tool/URL',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// 基础 URL 构建
export const Basic: Story = {
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url);
    return (
      <div>
        <p>原始 URL: {url}</p>
        <p>构建后: {result}</p>
      </div>
    );
  },
};

// 添加查询参数
export const WithSearchParams: Story = {
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url, {
      searchParams: {
        name: 'test',
        age: 18,
      },
    });
    return (
      <div>
        <p>原始 URL: {url}</p>
        <p>添加查询参数后: {result}</p>
      </div>
    );
  },
};

// 合并查询参数
export const MergeSearchParams: Story = {
  render: () => {
    const url = 'https://example.com/path?existing=value';
    const result = buildURL(url, {
      searchParams: {
        newParam: 'newValue',
      },
    });
    return (
      <div>
        <p>原始 URL: {url}</p>
        <p>合并查询参数后: {result}</p>
      </div>
    );
  },
};

// 添加 hash 查询参数
export const WithHashSearchParams: Story = {
  render: () => {
    const url = 'https://example.com/path#section';
    const result = buildURL(url, {
      hashSearchParams: {
        tab: 'details',
        view: 'list',
      },
    });
    return (
      <div>
        <p>原始 URL: {url}</p>
        <p>添加 hash 查询参数后: {result}</p>
      </div>
    );
  },
};

// 复杂场景：同时处理查询参数和 hash 查询参数
export const Complex: Story = {
  render: () => {
    const url = 'https://example.com/path?page=1#section?tab=main';
    const result = buildURL(url, {
      searchParams: {
        sort: 'desc',
        filter: 'active',
      },
      hashSearchParams: {
        view: 'grid',
        theme: 'dark',
      },
    });
    return (
      <div>
        <p>原始 URL: {url}</p>
        <p>复杂处理后: {result}</p>
      </div>
    );
  },
};
