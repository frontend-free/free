import type { Node } from '@antv/x6';
import type { Graph } from '@antv/x6';
import { defaultNodeConfig } from './helper';
import { EnumOrganizerGraphNodeType } from '../types';
import { register } from '@antv/x6-react-shape';
import { DefaultNode } from './helper';
import Icon, { HomeOutlined } from '@ant-design/icons';
import SvgHome from './svg/home.svg?react';
import type { ReactShapeConfig } from '@antv/x6-react-shape';
import type { OrganizerGraphNodeData } from '../types';

interface CommonRegisterProps extends ReactShapeConfig {
  data: OrganizerGraphNodeData;
}
function commonRegister(config: CommonRegisterProps) {
  register({
    width: defaultNodeConfig.width,
    height: defaultNodeConfig.height,
    effect: ['data'],
    ...config,
    data: {
      ...config.data,
    },
  });
}

const Start = (props: { node: Node; graph: Graph }) => {
  const { node, graph } = props;

  return <DefaultNode node={node} graph={graph} />;
};

commonRegister({
  shape: EnumOrganizerGraphNodeType.START,
  component: Start,
  data: {
    title: '开始',
    icon: <HomeOutlined />,
    iconBg: '#296dff',
    columns: [
      {
        title: '测试字段',
        dataIndex: 'testField',
      },
    ],
    values: {
      testField: '这是值，这是值',
    },
  },
});

commonRegister({
  shape: EnumOrganizerGraphNodeType.END,
  component: Start,
  data: {
    title: '结束',
    icon: <Icon component={SvgHome} />,
    iconBg: '#f79009',
  },
});
