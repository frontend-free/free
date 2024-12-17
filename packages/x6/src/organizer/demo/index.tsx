import { useCallback, useRef } from 'react';
import { Organizer, EnumOrganizerGraphNodeType, EnumOrganizerGraphEdgeType } from '@fe-free/x6';
import { Button } from 'antd';

const Demo = () => {
  const refOrganizer = useRef<any>(null);

  const handleReady = useCallback((organizerGraph) => {
    const node1 = organizerGraph.addNode({
      shape: EnumOrganizerGraphNodeType.START,
      x: 10,
      y: 40,
      label: '开始',
      data: {
        name: 'This is data of name',
      },
    });

    // const node2 = organizerGraph.addNode({
    //   shape: EnumOrganizerGraphNodeType.START,
    //   x: 160,
    //   y: 180,
    // });

    // organizerGraph.addEdge({
    //   shape: EnumOrganizerGraphEdgeType.CUSTOM,
    //   source: node1.id,
    //   target: node2.id,
    //   label: 'x6',
    // });
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-2 flex gap-2">
        <Button
          onClick={() => {
            const json = refOrganizer.current?.toJSON();
            console.log(json);
          }}
        >
          toJSON()
        </Button>
      </div>
      <div className="h-full w-full">
        <Organizer ref={refOrganizer} onReady={handleReady} />
      </div>
    </div>
  );
};

export { Demo };
