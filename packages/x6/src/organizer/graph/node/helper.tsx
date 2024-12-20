import { register } from '@antv/x6-react-shape';
import type { ReactShapeConfig } from '@antv/x6-react-shape';
import type { OrganizerGraphNodeData } from '../types';
import cn from 'classnames';
import type { CSSProperties } from 'react';
import type { Graph, Node } from '@antv/x6';

const defaultNodeConfig = {
  width: 200,
  height: 40,
};

interface DefaultNodeProps {
  node: Node;
  graph: Graph;
  className?: string;
  style?: CSSProperties;
}

function DefaultNode(props: DefaultNodeProps) {
  const { node, className, style } = props;
  const { data } = node;

  return (
    <div
      className={cn(
        'border border-slate-200 border-solid p-2 bg-white rounded-md flex items-center gap-2',
        className
      )}
      style={style}
    >
      {data?.icon && (
        <div
          className="w-[24px] h-[24px] rounded-md flex items-center justify-center"
          style={{ background: data.iconBg }}
        >
          <span className="text-white">{data.icon}</span>
        </div>
      )}
      <div className="flex-1 truncate">{data?.title}</div>
    </div>
  );
}

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

export { commonRegister, defaultNodeConfig, DefaultNode };
