import type { Graph } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';
import { defaultNodeConfig } from '../graph';
import { EnumOrganizerGraphNodeType } from '../graph/types';
import { GraphContext } from './context';
import { useContext, useEffect, useRef } from 'react';

const stencilGraphWidth = 300;

function initStencil({ graph, container }: { graph: Graph; container: HTMLElement }) {
  const stencil = new Stencil({
    target: graph,
    title: '组件',
    search(cell, keyword) {
      const shape = cell.shape.toLowerCase();
      const title = cell.data?.title?.toLowerCase();
      const word = keyword.toLowerCase();

      return shape.includes(word) || (title && title?.includes(word));
    },
    placeholder: '搜索组件',
    notFoundText: '未找到',
    collapsable: true,
    stencilGraphHeight: 0,
    stencilGraphWidth: stencilGraphWidth,
    layout: () => {
      return {
        columns: 1,
      };
    },
    groups: [
      {
        name: 'common',
        title: '通用组件',
      },
      {
        name: 'largeModel',
        title: '大模型组件',
      },
    ],
  });

  container.appendChild(stencil.container);

  function loadNodes(nodes: any[], groupName: string) {
    let height = 10;
    const newNodes = nodes.map((node) => {
      const y = height;
      height += defaultNodeConfig.height + 10;
      return graph.createNode({
        ...node,
        x: 10,
        y: y,
        width: stencilGraphWidth - 20,
        height: defaultNodeConfig.height,
      });
    });
    stencil.load(newNodes, groupName);
  }

  loadNodes(
    [
      {
        shape: EnumOrganizerGraphNodeType.START,
      },
      {
        shape: EnumOrganizerGraphNodeType.END,
      },
    ],
    'common'
  );

  return stencil;
}

function StencilComponent() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { graph } = useContext(GraphContext);

  useEffect(() => {
    if (graph && ref.current) {
      initStencil({ graph, container: ref.current });
    }
  }, [graph]);

  return <div ref={ref} className="relative h-full w-[300px]" />;
}

export { StencilComponent };
