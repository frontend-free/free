import type { ReactNode } from 'react';

enum EnumOrganizerGraphNodeType {
  START = 'start',
  END = 'end',
}

enum EnumOrganizerGraphEdgeType {
  CUSTOM = 'custom',
}

interface OrganizerGraphNodeData {
  title: string;
  icon?: ReactNode;
  iconBg?: string;
}

export { EnumOrganizerGraphEdgeType, EnumOrganizerGraphNodeType };
export type { OrganizerGraphNodeData };
