import type { ProFormColumnsType } from '@ant-design/pro-components';
import type { ReactNode } from 'react';

enum EnumOrganizerGraphNodeType {
  START = 'start',
  END = 'end',
}

enum EnumOrganizerGraphEdgeType {
  CUSTOM = 'custom',
}

interface OrganizerGraphNodeData {
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: ReactNode;
  /** 图标背景色 */
  iconBg?: string;
  /** 描述 */
  description?: string;

  // ***** https://pro-components.antdigital.dev/components/schema-form *****
  /** @ant-design/pro-components columns 表单配置 */
  columns?: ProFormColumnsType[];
  /** @ant-design/pro-components values 表单值 */
  values?: Record<string, any>;
}

export { EnumOrganizerGraphEdgeType, EnumOrganizerGraphNodeType };
export type { OrganizerGraphNodeData };
