import type { CSSProperties } from 'react';
import cn from 'classnames';
import type { Graph, Node } from '@antv/x6';

const defaultNodeConfig = {
  width: 160,
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
        'border border-gray-400 border-solid p-2 bg-white rounded-md flex items-center gap-2',
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

export { defaultNodeConfig, DefaultNode };
