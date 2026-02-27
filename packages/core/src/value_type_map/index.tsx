import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
import { dateRender } from './date';
import { jsonRender } from './json';
import { jsonModalRender } from './json_modal';
import { markdownModalRender } from './markdown_modal';
import { switchNumberRender, switchOptionsRender } from './switch';

enum CustomValueTypeEnum {
  /** 渲染时间 + 搜索日期范围 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** 渲染日期 + 搜索日期范围 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
  /** JSON Modal */
  CustomJSONModal = 'CustomJSONModal',
  /** Markdown Modal */
  CustomMarkdownModal = 'CustomMarkdownModal',
  /** 渲染开关 */
  CustomSwitchNumber = 'CustomSwitchNumber',
  CustomSwitchOptions = 'CustomSwitchOptions',
  /** CRUD 用，显示序号 */
  CustomSerialNumber = 'CustomSerialNumber',
}

const customValueTypeMap: Record<string, ProRenderFieldPropsType> = {
  [CustomValueTypeEnum.CustomDateTimeAndDateRange]: {
    render: dateRender.renderMap.dateTime,
    formItemRender: dateRender.renderFormItemMap.dateRange,
  },
  [CustomValueTypeEnum.CustomDateAndDateRange]: {
    render: dateRender.renderMap.date,
    formItemRender: dateRender.renderFormItemMap.dateRange,
  },
  [CustomValueTypeEnum.CustomJSON]: {
    render: jsonRender.render,
    formItemRender: jsonRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomJSONModal]: {
    render: jsonModalRender.render,
    formItemRender: jsonModalRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomMarkdownModal]: {
    render: markdownModalRender.render,
    formItemRender: markdownModalRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSwitchNumber]: {
    render: switchNumberRender.render,
    formItemRender: switchNumberRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSwitchOptions]: {
    render: switchOptionsRender.render,
    formItemRender: switchOptionsRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSerialNumber]: {
    render: () => <></>,
    formItemRender: () => <></>,
  },
};

export { CustomValueTypeEnum, customValueTypeMap };
