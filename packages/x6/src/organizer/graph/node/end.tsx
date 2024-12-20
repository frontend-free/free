import { commonRegister } from './helper';
import { EnumOrganizerGraphNodeType } from '../types';
import Icon from '@ant-design/icons';
import SvgEnd from './svg/end.svg?react';
import { DefaultNode } from './helper';
import type { Graph, Node } from '@antv/x6';

const End = (props: { node: Node; graph: Graph }) => {
  const { node, graph } = props;

  return <DefaultNode node={node} graph={graph} />;
};

commonRegister({
  shape: EnumOrganizerGraphNodeType.END,
  component: End,
  data: {
    title: '结束',
    icon: <Icon component={SvgEnd} />,
    iconBg: '#f79009',
  },
});
