import type { Graph, Node } from '@antv/x6';
import { commonRegister, DefaultNode } from './helper';
import { HomeOutlined } from '@ant-design/icons';
import { EnumOrganizerGraphNodeType } from '../types';

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