import { useCallback } from 'react';
import { FlowGraphApp } from '@fe-free/x6';

const Demo = () => {
  const handleReady = useCallback((flowGraph) => {
    const node1 = flowGraph.addNode({
      shape: 'flow-node',
      x: 40,
      y: 40,
      label: 'hello',
      data: {
        name: 'This is data of name',
      },
    });

    const node2 = flowGraph.addNode({
      shape: 'flow-node',
      x: 160,
      y: 180,
      label: 'world',
    });

    flowGraph.addEdge({
      shape: 'flow-edge',
      source: node1.id,
      target: node2.id,
      label: 'x6',
    });
  }, []);

  return (
    <div className="h-screen w-screen">
      <FlowGraphApp onReady={handleReady} />
    </div>
  );
};

export { Demo };
