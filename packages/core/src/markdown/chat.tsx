import { Column, Line } from '@ant-design/plots';

interface ChartData {
  columns: string[];
  rows: (string | number)[][];
}

interface ChartConfig {
  chart_type: 'line' | 'bar';
  x_field: string;
  y_field: string;
  title: string;
}

interface ChatData {
  data: ChartData;
  chart: ChartConfig;
}

function ChatError(props: { children?: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="markdown-body-chat-block">
      <div style={{ textAlign: 'center', padding: '20px' }}>{children || '图表发生错误'}</div>
    </div>
  );
}

function ChatBlock(props: any) {
  const { children } = props;

  try {
    const chatData: ChatData = JSON.parse(children);
    const { data, chart } = chatData;
    const { columns, rows } = data;
    const { chart_type, x_field, y_field, title } = chart;

    // 获取数据索引
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
      title: {
        text: title,
        style: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
    };

    return (
      <div className="markdown-body-chat-block">
        <div className="markdown-body-chat-block-title">{title}</div>
        {chart_type === 'line' ? (
          <Line {...config} />
        ) : chart_type === 'bar' ? (
          <Column {...config} />
        ) : (
          <ChatError>不支持的图表类型：{chart_type}</ChatError>
        )}
      </div>
    );
  } catch (error) {
    console.error('Failed to parse chat data:', error);
    return <ChatError />;
  }
}

export { ChatBlock };
