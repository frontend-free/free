import type { Edge } from '@antv/x6';
import { Graph } from '@antv/x6';
import { EnumOrganizerGraphEdgeType } from '../types';

const customEdge: Edge.Metadata = {
  inherit: 'edge',
  attrs: {
    line: {
      stroke: '#8f8f8f',
      strokeWidth: 1,
    },
  },
};

Graph.registerEdge(EnumOrganizerGraphEdgeType.CUSTOM, customEdge, true);
