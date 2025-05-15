import { pinyin, pinyinFilter, pinyinMatch } from '@fe-free/tool';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: '@fe-free/tool/Pinyin',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// 基础拼音转换
export const Basic: Story = {
  render: () => <div>{pinyin('你好')}</div>,
};

// 首字母拼音
export const FirstLetter: Story = {
  render: () => <div>{pinyin('你好', 'first_letter')}</div>,
};

// 拼音匹配
export const PinyinMatch: Story = {
  render: () => (
    <>
      <div>匹配结果: {pinyinMatch('你好', 'nh') + ''}</div>
      <div>不匹配结果: {pinyinMatch('你好', 'wo') + ''}</div>
    </>
  ),
};

// 拼音过滤
export const PinyinFilter: Story = {
  render: () => (
    <>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'nh')}</div>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'wo')}</div>
    </>
  ),
};
