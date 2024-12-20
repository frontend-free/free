import { useCallback, useRef } from 'react';
import { Organizer, EnumOrganizerGraphNodeType } from '@fe-free/x6';
import { Button } from 'antd';

const Demo = () => {
  const refOrganizer = useRef<any>(null);

  const handleReady = useCallback((organizerGraph) => {
    const node1 = organizerGraph.addNode({
      shape: EnumOrganizerGraphNodeType.START,
      x: -400,
      y: 40,
      data: {
        values: {
          testField: '这是值，这是值',
        },
      },
    });

    organizerGraph.addNode({
      shape: EnumOrganizerGraphNodeType.END,
      x: 0,
      y: 100,
    });

    organizerGraph.select(node1.id);
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-2 flex gap-2">
        <Button
          onClick={() => {
            const json = refOrganizer.current?.toJSON();
            console.log(json);
            console.log(JSON.stringify(json, null, 2));
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
