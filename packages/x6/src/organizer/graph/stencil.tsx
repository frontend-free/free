import type { Graph } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';
import { EnumOrganizerGraphNodeType } from './node';

function initStencil({ graph, container }: { graph: Graph; container: HTMLElement }) {
  const stencil = new Stencil({
    target: graph,
    title: '组件',
    search(cell, keyword) {
      return cell.shape.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    },
    placeholder: '搜索组件',
    notFoundText: '未找到',
    collapsable: true,
    stencilGraphHeight: 0,
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

  stencil.load(
    [
      graph.createNode({
        shape: EnumOrganizerGraphNodeType.START,
        label: '开始',
      }),
    ],
    'common'
  );

  stencil.load(
    [
      graph.createNode({
        shape: 'ellipse',
        x: 280,
        y: 40,
        width: 80,
        height: 40,
        label: 'ellipse',
      }),
    ],
    'largeModel'
  );

  return stencil;
}

export { initStencil };
