import { Column, Line, Pie } from '@ant-design/plots';
import React, { useMemo } from 'react';

// 类型定义
interface ChartData {
  columns: string[];
  rows: (string | number)[][];
}

interface ChartConfig {
  chart_type: 'line' | 'bar' | 'pie' | 'table';
  x_field?: string;
  y_field?: string;
  angle_field?: string;
  color_field?: string;
  title: string;
}

// 错误处理组件
function ChatError(props: { children?: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="markdown-body-chat-block">
      <div style={{ textAlign: 'center', padding: '20px' }}>{children || '图表发生错误'}</div>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ChatError />;
    }
    return this.props.children;
  }
}

// 图表容器组件
function ChartContainer(props: { title: string; children: React.ReactNode }) {
  const { title, children } = props;
  return (
    <div className="markdown-body-chat-block">
      <div className="markdown-body-chat-block-title">{title}</div>
      {children}
    </div>
  );
}

// 饼图组件
function PieChart(props: { data: ChartData; chart: ChartConfig }) {
  const { data, chart } = props;
  const { columns, rows } = data;
  const { angle_field, color_field } = chart;

  if (!angle_field || !color_field) {
    return <ChatError />;
  }

  const angleIndex = columns.indexOf(angle_field);
  const colorIndex = columns.indexOf(color_field);

  if (angleIndex === -1 || colorIndex === -1) {
    return <ChatError />;
  }

  // 转换数据格式为 Ant Design Charts 需要的格式
  const chartData = rows.map((row) => ({
    [color_field]: row[colorIndex],
    [angle_field]: Number(row[angleIndex]),
  }));

  const config = {
    data: chartData,
    angleField: angle_field,
    colorField: color_field,
    label: {
      text: angle_field,
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  return <Pie {...config} />;
}

// 折线图组件
function LineChart(props: { data: ChartData; chart: ChartConfig }) {
  const { data, chart } = props;
  const { columns, rows } = data;
  const { x_field, y_field } = chart;

  if (!x_field || !y_field) {
    return <ChatError />;
  }

  const xIndex = columns.indexOf(x_field);
  const yIndex = columns.indexOf(y_field);

  if (xIndex === -1 || yIndex === -1) {
    return <ChatError />;
  }

  // 转换数据格式为 Ant Design Charts 需要的格式
  const chartData = rows.map((row) => ({
    [x_field]: row[xIndex],
    [y_field]: Number(row[yIndex]),
  }));

  const config = {
    data: chartData,
    xField: x_field,
    yField: y_field,
  };

  return <Line {...config} />;
}

// 柱状图组件
function BarChart(props: { data: ChartData; chart: ChartConfig }) {
  const { data, chart } = props;
  const { columns, rows } = data;
  const { x_field, y_field } = chart;

  if (!x_field || !y_field) {
    return <ChatError />;
  }

  const xIndex = columns.indexOf(x_field);
  const yIndex = columns.indexOf(y_field);

  if (xIndex === -1 || yIndex === -1) {
    return <ChatError />;
  }

  // 转换数据格式为 Ant Design Charts 需要的格式
  const chartData = rows.map((row) => ({
    [x_field]: row[xIndex],
    [y_field]: Number(row[yIndex]),
  }));

  const config = {
    data: chartData,
    xField: x_field,
    yField: y_field,
  };

  return <Column {...config} />;
}

// 主 ChatBlock 组件
function ChatBlockBase(props: any) {
  const { children } = props;

  const chatData = useMemo(() => {
    try {
      return JSON.parse(children);
    } catch (error) {
      console.error('Failed to parse chat data:', error);
      return null;
    }
  }, [children]);

  if (!chatData) {
    return <ChatError />;
  }

  const { data, chart } = chatData;
  const { chart_type, title } = chart;

  switch (chart_type) {
    case 'pie':
      return (
        <ChartContainer title={title}>
          <PieChart data={data} chart={chart} />
        </ChartContainer>
      );
    case 'line':
      return (
        <ChartContainer title={title}>
          <LineChart data={data} chart={chart} />
        </ChartContainer>
      );
    case 'bar':
      return (
        <ChartContainer title={title}>
          <BarChart data={data} chart={chart} />
        </ChartContainer>
      );
    case 'table':
      // 表格类型暂不处理
      return null;
    default:
      return <ChatError>不支持的图表类型：{chart_type}</ChatError>;
  }
}

function ChatBlock(props: any) {
  const { children } = props;

  return (
    <ErrorBoundary>
      <ChatBlockBase>{children}</ChatBlockBase>
    </ErrorBoundary>
  );
}

export { ChatBlock };
