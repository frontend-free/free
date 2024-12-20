import { forwardRef, useImperativeHandle, useState, useContext, useEffect } from 'react';
import type { OrganizerGraph } from '../graph';
import { OrganizerGraphComponent } from '../graph';
import type { CSSProperties } from 'react';
import cn from 'classnames';
import type { Node } from '@antv/x6';
import { Setting } from './setting';
import { Operate } from './operate';
import { GraphContext, GraphProvider } from './context';
import { StencilComponent } from './stencil';

interface OrganizerProps {
  className?: string;
  style?: CSSProperties;
  onReady?: (organizerGraph: OrganizerGraph) => void;
}

const useFunction = ({ ref }) => {
  const { graph } = useContext(GraphContext);

  useImperativeHandle(ref, () => ({
    toJSON: () => {
      if (!graph) {
        throw new Error('OrganizerGraph is not initialized');
      }
      return graph.toJSON();
    },
  }));
};

const BaseOrganizer = forwardRef((props: OrganizerProps, ref) => {
  const { onReady } = props;

  const { graph } = useContext(GraphContext);

  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    if (graph) {
      graph.on('node:selected', (event) => {
        setSelectedNode(event.node);
      });
      graph.on('node:unselected', () => {
        setSelectedNode(null);
      });
    }
  }, [graph]);

  useFunction({ ref });

  return (
    <div className={cn('flex h-full w-full', props.className)} style={props.style}>
      <StencilComponent />
      <div className="h-full flex-1 relative">
        <OrganizerGraphComponent onReady={onReady} />
        <div className="absolute top-2 right-2 height-[32px]">
          <Operate />
        </div>
        <div className="absolute top-[50px] right-2 bottom-2">
          {selectedNode && <Setting node={selectedNode} onClose={() => setSelectedNode(null)} />}
        </div>
      </div>
    </div>
  );
});

const Organizer = forwardRef((props: OrganizerProps, ref) => {
  return (
    <GraphProvider>
      <BaseOrganizer {...props} ref={ref} />
    </GraphProvider>
  );
});

export { Organizer };
export type { OrganizerProps };
