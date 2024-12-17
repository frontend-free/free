import type { Node } from '@antv/x6';
import type { Graph } from '@antv/x6';
import { defaultNodeConfig } from './helper';
import { EnumOrganizerGraphNodeType } from '../types';
import { register } from '@antv/x6-react-shape';
import { DefaultNode } from './helper';
import Icon, { HomeOutlined } from '@ant-design/icons';
import SvgHome from './svg/home.svg?react';

const Start = (props: { node: Node; graph: Graph }) => {
  const { node, graph } = props;

  return <DefaultNode node={node} graph={graph} />;
};

register({
  shape: EnumOrganizerGraphNodeType.START,
  width: defaultNodeConfig.width,
  height: defaultNodeConfig.height,
  effect: ['data'],
  component: Start,
  data: {
    title: '开始',
    icon: <HomeOutlined />,
    iconBg: '#296dff',
  },
});

register({
  shape: EnumOrganizerGraphNodeType.END,
  width: defaultNodeConfig.width,
  height: defaultNodeConfig.height,
  effect: ['data'],
  component: Start,
  data: {
    title: '结束',
    icon: <Icon component={SvgHome} />,
    iconBg: '#f79009',
  },
});
