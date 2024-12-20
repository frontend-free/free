import { Graph } from '@antv/x6';
import { Snapline } from '@antv/x6-plugin-snapline';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { Selection } from '@antv/x6-plugin-selection';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { History } from '@antv/x6-plugin-history';
import { KeyCommand, defaultNodeConfig } from './helper';

import { EnumOrganizerGraphNodeType } from './types';
import { EnumOrganizerGraphEdgeType } from './types';
import { GraphContext } from '../organizer/context';

import './node';
import './edge';

import { useContext, useEffect, useRef } from 'react';

function commonOption(): Graph.Options {
  return {
    // 自适应
    autoResize: true,
    // 移动
    panning: true,
    // 缩放
    mousewheel: true,
    // 背景
    background: {
      color: '#F2F7FA',
    },
    // 网格
    grid: {
      visible: true,
      type: 'doubleMesh',
      args: [
        {
          color: '#eee', // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: '#ddd', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  };
}

function initGraph(options: Graph.Options) {
  const graph = new Graph({
    ...commonOption(),
    ...options,
  });

  // 对齐线
  graph.use(
    new Snapline({
      enabled: true,
    })
  );

  // 选中
  graph.use(
    new Selection({
      enabled: true,
      showNodeSelectionBox: true,
    })
  );

  // 复制
  graph.use(
    new Clipboard({
      enabled: true,
    })
  );

  // 快捷键
  graph.use(
    new Keyboard({
      enabled: true,
    })
  );

  // 历史记录
  graph.use(new History({ enabled: true }));

  graph.bindKey(KeyCommand.COPY, () => {
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.copy(cells);
    }
    return false;
  });

  graph.bindKey(KeyCommand.PASTER, () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 });
      graph.cleanSelection();
      graph.select(cells);
    }
    return false;
  });

  graph.bindKey(KeyCommand.UNDO, () => {
    if (graph.canUndo()) {
      graph.undo();
    }
  });

  graph.bindKey(KeyCommand.REDO, () => {
    if (graph.canRedo()) {
      graph.redo();
    }
  });

  // 画布容纳所有元素
  graph.zoomToFit({ maxScale: 1 });
  // 居中
  graph.centerContent();

  return graph;
}

function OrganizerGraphComponent({ onReady }: { onReady?: (graph: Graph) => void }) {
  const refDom = useRef<HTMLDivElement | null>(null);

  const { setGraph } = useContext(GraphContext);

  // 规避 onReady 闭包问题
  const refReady = useRef(onReady);
  useEffect(() => {
    refReady.current = onReady;
  }, [onReady]);

  useEffect(() => {
    const organizerGraph = initGraph({
      container: refDom.current!,
    });

    setGraph(organizerGraph);

    setTimeout(() => {
      refReady.current?.(organizerGraph);
    }, 10);

    // @ts-ignore
    window.__x6_instances__ = organizerGraph;
  }, []);

  return <div ref={refDom} />;
}

export { OrganizerGraphComponent, defaultNodeConfig };
export { EnumOrganizerGraphNodeType, EnumOrganizerGraphEdgeType };
