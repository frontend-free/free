import { ProConfigProvider } from '@ant-design/pro-components';
import { CRUD, CustomValueTypeEnum } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { range } from 'lodash-es';

const meta: Meta = {
  title: '@fe-free/core/ValueTypeMap',
  component: ProConfigProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

async function fakeRequest() {
  const data = range(5).map((item) => ({
    id: `${item}`,
    timeStr: `2024-10-01 10:00:00`,
    timeNumber: +dayjs('2024-10-01 10:00:00'),
    dateStr: `2024-10-01`,
    dateNumber: +dayjs('2024-10-01'),
    seconds: Math.abs(+dayjs('2024-10-01') / 1000),
    jsonText: JSON.stringify({ name: 'hello world hello world hello world' }),
    markdownText: `# Hello World\n\nThis is a markdown text.`,
    switchNumber: Math.random() > 0.5 ? 1 : 0,
    switchOptions: Math.random() > 0.5 ? 'ON' : 'OFF',
  }));

  return Promise.resolve({
    data,
    success: true,
    total: 100,
  }) as Promise<any>;
}

const Table = () => {
  const columns: any[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '时间 str',
      dataIndex: 'timeStr',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '时间 number',
      dataIndex: 'timeNumber',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '日期 str',
      dataIndex: 'dateStr',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '日期 number',
      dataIndex: 'dateNumber',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '日期 number 秒',
      dataIndex: 'seconds',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: 'json',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSON,
    },
    {
      title: 'jsonModal',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSONModal,
    },
    {
      title: 'markdownModal',
      dataIndex: 'markdownText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomMarkdownModal,
    },
    {
      title: '开关 number',
      dataIndex: 'switchNumber',
      valueType: CustomValueTypeEnum.CustomSwitchNumber,
    },
    {
      title: '开关 options',
      dataIndex: 'switchOptions',
      valueType: CustomValueTypeEnum.CustomSwitchOptions,
      fieldProps: {
        enableLabel: true,
        options: ['OFF', 'ON'],
      },
    },
  ];

  return (
    <CRUD
      actions={[]}
      tableProps={{
        rowKey: 'id',
        columns,
        request: fakeRequest,
      }}
    />
  );
};

export const Default: Story = {
  render: () => <Table />,
};
