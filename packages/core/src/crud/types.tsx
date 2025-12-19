import type { ActionType, ProFormInstance } from '@ant-design/pro-components';
import type { MouseEvent, ReactNode, Ref, RefObject } from 'react';
import type { TableProps } from './table';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 * batch_delete 批量删除
 */
type CRUDAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete' | 'batch_delete';

interface CRUDRef {
  getActionRef: () => RefObject<ActionType | undefined>;
}

interface CRUDProps<DataSource = any, Key = string> {
  ref?: Ref<CRUDRef>;

  /** 操作类型 */
  actions: CRUDAction[];

  // *** 表格相关 ***

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

  // *** 表单 ***

  /** 弹窗表单，action 为 read update 时需要传递 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CRUDAction }) => ReactNode;
  /** detailForm 的 formRef */
  detailFormInstance?: ProFormInstance;

  // *** Create 新建 ***

  /** 新增接口，false 则不关闭弹窗 */
  requestCreateByValues?: (values: Partial<DataSource>) => Promise<false | void>;
  /** 新建按钮，默认新建 */
  createButton?: ReactNode;
  /** create 更多设置 */
  createProps?: {
    /** 保存按钮文本 */
    submitText?: string;
    /** 重置按钮文本 */
    resetText?: string;
    /** 成功文案 */
    successText?: string | (() => string);
  };

  // *** Read 查看 ***

  /** 获取详情接口 */
  requestGetByRecord?: (record: DataSource) => Promise<DataSource>;
  /** 跳转到详情的索引 ，默认 id */
  detailIdIndex?: string;
  /** read 更多设置 */
  readProps?: {
    /** 文本 */
    operateText?: string;
    /** ”查看”是否禁用 */
    operateIsDisabled?: (record: DataSource) => boolean;
    /** ”查看”是否隐藏 */
    operateIsHidden?: (record: DataSource) => boolean;
    /** 打开方式, action 为 read_detail 有效 */
    target?: '_blank';
    /** 保存按钮文本 */
    submitText?: string;
    /** 重置按钮文本 */
    resetText?: string;
  };

  // *** Update 更新 ***

  /** 更新接口，返回 false 则不关闭弹窗 */
  requestUpdateByValues?: (values: Partial<DataSource>) => Promise<false | void>;
  updateProps?: {
    /** 文本“编辑” */
    operateText?: string;
    /** ”编辑”是否禁用 */
    operateIsDisabled?: (record: DataSource) => boolean;
    /** ”编辑”是否隐藏 */
    operateIsHidden?: (record: DataSource) => boolean;
    /** 保存按钮文本 */
    submitText?: string;
    /** 重置按钮文本 */
    resetText?: string;
    /** 成功文案 */
    successText?: string | (() => string);
  };

  // *** Delete 删除 ***

  /** 删除接口 */
  requestDeleteByRecord?: (record: DataSource) => Promise<void>;
  /** 删除相关 */
  deleteProps?: {
    /** 文本“删除” */
    operateText?: string;
    /** “删除”是否禁用 */
    operateIsDisabled?: (record: DataSource) => boolean;
    /** ”删除”是否隐藏 */
    operateIsHidden?: (record: DataSource) => boolean;
    /** 显示名称索引 */
    nameIndex: keyof DataSource;
    /** 删除确认描述 */
    desc?: string;

    /** 成功文案 */
    successText?: string | (() => string);
  };

  // *** batch_delete 批量删除 ***

  /** 批量删除接口 */
  requestDeleteByRecords?: (records: DataSource[]) => Promise<void>;

  // *** 批量操作 ***

  /** 批量操作 */
  batchActions?: {
    /** 按钮文本 */
    btnText: string;
    /** 红色，且有确认框 */
    danger?: boolean;
    /** 批量操作接口 */
    onClick: (
      event: MouseEvent<HTMLElement>,
      options: { selectedRowKeys: Key[]; selectedRows: DataSource[] },
    ) => Promise<void>;
  }[];

  fullPage?: boolean;
  className?: string;
}

export type { CRUDProps, CRUDRef };
