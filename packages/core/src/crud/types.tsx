import type { ActionType, ProFormInstance } from '@ant-design/pro-components';
import type { ReactNode } from 'react';
import type { TableProps } from '../table';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type CrudAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CRUDProps<DataSource = any, Key = string> {
  actions: CrudAction[];

  // *** 表单 ***

  /** 弹窗表单 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CrudAction }) => ReactNode;
  /** detailForm 的 formRef */
  detailFormInstance?: ProFormInstance;

  // *** Create 新建 ***

  /** 新建按钮，默认新建 */
  createButton?: ReactNode;
  /** 新增接口 */
  requestCreateByValues?: (values: Partial<DataSource>) => Promise<any>;
  /** create 更多设置 */
  createProps?: {
    /** 成功文案 */
    successText?: string | (() => string);
  };

  // *** Read 表格 ***

  /** 表格相关 */
  tableProps: TableProps<DataSource>;
  /** 表格操作列相关 */
  operateColumnProps?: {
    width?: number;
    /** 扩展操作区域，再其他操作之前 */
    moreOperator?: (record: DataSource) => ReactNode;
    /** 扩展操作区域，在其他操作之后 */
    moreOperatorAfter?: (record: DataSource) => ReactNode;
  };

  // *** Read 详情 ***

  /** 获取详情接口 */
  requestGetByRecord?: (record: DataSource) => Promise<any>;
  /** 跳转到详情的索引 ，默认 id */
  detailIdIndex?: string;
  /** read 更多设置 */
  readProps?: {
    /** 文本 */
    operateText?: string;
    /** 打开方式, action 为 read_detail 有效 */
    target?: '_blank';
  };

  // *** Update 更新 ***

  /** 更新接口 */
  requestUpdateByValues?: (values: Partial<DataSource>) => Promise<any>;
  /** @deprecated 请使用 requestUpdateByValues 替代 */
  requestUpdateById?: (values: Partial<DataSource>) => Promise<any>;
  updateProps?: {
    /** 文本 */
    operateText?: string;
    /** 成功文案 */
    successText?: string | (() => string);
  };

  // *** Delete 删除 ***

  /** 删除接口 */
  requestDeleteByRecord?: (record: DataSource) => Promise<any>;
  /** 删除相关 */
  deleteProps?: {
    /** 显示名称索引 */
    nameIndex: keyof DataSource;
    /** 删除确认描述 */
    desc?: string;
    /** 文本 */
    operateText?: string;
  };

  // *** 批量操作 ***

  /** 批量操作 */
  batchActions?: {
    /** 按钮文本 */
    btnText: string;
    /** 红色，且有确认框 */
    danger?: boolean;
    /** 批量操作接口 */
    onClick: (
      event: React.MouseEvent<HTMLElement>,
      options: { selectedRowKeys: Key[]; selectedRows: DataSource[] },
    ) => Promise<any>;
  }[];
}

interface CRUDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}

export type { CRUDMethods, CRUDProps };
