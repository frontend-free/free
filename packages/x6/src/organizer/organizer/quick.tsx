import { MiniMap } from '@antv/x6-plugin-minimap';
import { useContext, useEffect, useRef, useState } from 'react';
import { GraphContext } from './context';
import { Radio } from 'antd';

function Control() {
  const { graph } = useContext(GraphContext);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (graph) {
      setZoom(graph.zoom());

      graph?.on('scale', ({ sx }) => {
        setZoom(sx);
      });
    }
  }, [graph]);

  return (
    <Radio.Group
      value={null}
      onChange={(e) => {
        console.log('zoom', zoom);

        if (e.target.value === 'zoomIn') {
          if (zoom < 1.5) {
            graph?.zoom(0.25);
          }
        } else if (e.target.value === 'zoomOut') {
          if (zoom > 0.5) {
            graph?.zoom(-0.25);
          }
        } else if (e.target.value === 'zoom') {
          graph?.zoomTo(1);
        } else if (e.target.value === 'zoomToFit') {
          graph?.zoomToFit({ maxScale: 1 });
        }
      }}
    >
      <Radio.Button value="zoomIn">+</Radio.Button>
      <Radio.Button value="zoom">{`${Math.floor(zoom * 100)}%`}</Radio.Button>
      <Radio.Button value="zoomOut">-</Radio.Button>
      <Radio.Button value="zoomToFit">自适应</Radio.Button>
    </Radio.Group>
  );
}

function QuickComponent() {
  const refMinimap = useRef<HTMLDivElement | null>(null);
  const { graph } = useContext(GraphContext);

  useEffect(() => {
    if (graph) {
      graph.use(
        new MiniMap({
          container: refMinimap.current!,
          width: 200,
          height: 150,
        })
      );
    }
  }, [graph]);

  return (
    <div className="flex flex-col  gap-2">
      <div>
        <div ref={refMinimap} />
      </div>
      <div className="flex  gap-2">
        <Control />
        <Radio.Group
          value={null}
          onChange={(e) => {
            if (e.target.value === 'undo') {
              graph?.undo();
            } else {
              graph?.redo();
            }
          }}
        >
          <Radio.Button value="undo">撤销</Radio.Button>
          <Radio.Button value="redo">重做</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
}

export { QuickComponent };
