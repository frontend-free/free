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

const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

const KeyCommand = {
  COPY: isMac ? 'cmd+c' : 'ctrl+c',
  PASTER: isMac ? 'cmd+v' : 'ctrl+v',
  UNDO: isMac ? 'cmd+z' : 'ctrl+z',
  REDO: isMac ? 'cmd+shift+z' : 'ctrl+y',
};

export { KeyCommand, defaultNodeConfig, DefaultNode };
