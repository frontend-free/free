import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
import { dateRender } from './date';
import { jsonRender } from './json';

enum CustomValueTypeEnum {
  /** 渲染时间 + 搜索日期范围 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** 渲染日期 + 搜索日期范围 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
}

const customValueTypeMap: Record<string, ProRenderFieldPropsType> = {
  [CustomValueTypeEnum.CustomDateTimeAndDateRange]: {
    render: dateRender.renderMap.dateTime,
    renderFormItem: dateRender.renderFormItemMap.dateRange,
  },
  [CustomValueTypeEnum.CustomDateAndDateRange]: {
    render: dateRender.renderMap.date,
    renderFormItem: dateRender.renderFormItemMap.dateRange,
  },
  [CustomValueTypeEnum.CustomJSON]: {
    render: jsonRender.render,
    renderFormItem: jsonRender.renderFormItem,
  },
};

export { customValueTypeMap, CustomValueTypeEnum };
