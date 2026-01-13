import { FileViewList } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FileViewList> = {
  title: '@fe-free/ai/FileViewList',
  component: FileViewList,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FileViewList>;

export const Default: Story = {
  args: {
    urls: [
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      'https://minio-api-dev.pre-ai.pivotecho.cn/ai-agent/YWIW_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260108121456_230_1.png',
      'https://minio-api-dev.pre-ai.pivotecho.cn/ai-agent/3Uck_%E5%8D%8E%E4%BD%8FAI%E9%A2%84%E8%AE%A2%E7%AC%AC%E4%BA%8C%E8%BD%AEPOC%E8%A6%81%E6%B1%82%282%29.pdf',
    ],
  },
};

export default meta;
