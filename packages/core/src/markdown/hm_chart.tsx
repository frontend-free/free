import { Column, Line, Pie, Scatter } from '@ant-design/plots';
import React, { useMemo } from 'react';

enum EnumType {
  /** 折线图 */
  LINE = 'line',
  /** 柱状图 */
  BAR = 'bar',
  /** 饼图 */
  PIE = 'pie',
  /** 散点图 */
  SCATTER = 'scatter',
}

interface HMChartConfigLine<D> {
  /** 折线图 */
  type: EnumType.LINE;
  /** 标题 */
  title?: string;
  /** 就是纯粹的数据 */
  data: D[];
  /** 横坐标字段 */
  xField: keyof D;
  /** 纵坐标字段 */
  yField: keyof D;
  /** 系列字段，多折线图用 */
  seriesField?: keyof D;
}

interface HMChartConfigBar<D> {
  /** 柱状图 */
  type: EnumType.BAR;
  /** 标题 */
  title?: string;
  /** 就是纯粹的数据 */
  data: D[];
  /** 横坐标字段 */
  xField: keyof D;
  /** 纵坐标字段 */
  yField: keyof D;
  /** 系列字段，多折线图用 */
  seriesField?: keyof D;
}

interface HMChartConfigPie<D> {
  /** 饼图 */
  type: EnumType.PIE;
  /** 标题 */
  title?: string;
  /** 就是纯粹的数据 */
  data: D[];
  /** 角度字段 */
  angleField: keyof D;
  /** 颜色字段 */
  colorField: keyof D;
}

interface HMChartConfigScatter<D> {
  /** 散点图 */
  type: EnumType.SCATTER;
  /** 标题 */
  title?: string;
  /** 就是纯粹的数据 */
  data: D[];
  /** 横坐标字段 */
  xField: keyof D;
  /** 纵坐标字段 */
  yField: keyof D;
  /** 颜色字段 */
  colorField?: keyof D;
}

type HMChartConfig<D> =
  | HMChartConfigLine<D>
  | HMChartConfigBar<D>
  | HMChartConfigPie<D>
  | HMChartConfigScatter<D>;

// 错误处理组件
function ChartError(props: { children?: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="fea-markdown-body-block-hmchart">
      <div style={{ textAlign: 'center', padding: '20px' }}>{children || '图表发生错误'}</div>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary:', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ChartError />;
    }
    return this.props.children;
  }
}

function ChartOfLine(props: { config: HMChartConfigLine<any> }) {
  return <Line colorField={props.config.seriesField} {...props.config} />;
}

function ChartOfBar(props: { config: HMChartConfigBar<any> }) {
  return <Column colorField={props.config.seriesField} {...props.config} />;
}

function ChartOfPie(props: { config: HMChartConfigPie<any> }) {
  return <Pie {...props.config} />;
}

function ChartOfScatter(props: { config: HMChartConfigScatter<any> }) {
  return <Scatter {...props.config} />;
}

// 主 ChartBlock 组件
function HMChartBlockBase(props: any) {
  const { children } = props;

  const chartConfig = useMemo(() => {
    try {
      return JSON.parse(children);
    } catch (error) {
      console.error('Failed to parse chart data:', error);
      return null;
    }
  }, [children]);

  if (!chartConfig) {
    return <ChartError />;
  }

  const { type, ...config } = chartConfig;

  switch (type) {
    case EnumType.LINE:
      return <ChartOfLine config={config} />;

    case EnumType.BAR:
      return <ChartOfBar config={config} />;

    case EnumType.PIE:
      return <ChartOfPie config={config} />;

    case EnumType.SCATTER:
      return <ChartOfScatter config={config} />;

    default:
      return <ChartError>不支持的图表类型：{type}</ChartError>;
  }
}

function HMChartBlock(props: any) {
  const { children } = props;

  // eslint-disable-next-line no-irregular-whitespace
  const content = children?.replace(/ /g, '');

  return (
    <ErrorBoundary>
      <HMChartBlockBase>{content}</HMChartBlockBase>
    </ErrorBoundary>
  );
}

export { HMChartBlock };
export type { HMChartConfig };
