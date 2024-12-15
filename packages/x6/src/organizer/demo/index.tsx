import { useCallback } from 'react';
import { Organizer, EnumOrganizerGraphNodeType, EnumOrganizerGraphEdgeType } from '@fe-free/x6';

const Demo = () => {
  const handleReady = useCallback((organizerGraph) => {
    const node1 = organizerGraph.addNode({
      shape: EnumOrganizerGraphNodeType.START,
      x: 40,
      y: 40,
      label: 'hello',
      data: {
        name: 'This is data of name',
      },
    });

    const node2 = organizerGraph.addNode({
      shape: EnumOrganizerGraphNodeType.START,
      x: 160,
      y: 180,
      label: 'world',
    });

    organizerGraph.addEdge({
      shape: EnumOrganizerGraphEdgeType.CUSTOM,
      source: node1.id,
      target: node2.id,
      label: 'x6',
    });
  }, []);

  return (
    <div className="h-screen w-screen">
      <Organizer onReady={handleReady} />
    </div>
  );
};

export { Demo };
