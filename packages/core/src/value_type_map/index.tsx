import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
import { dateRender } from './date';
import { jsonRender } from './json';
import { jsonModalRender } from './json_modal';
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
  /** 渲染开关 */
  CustomSwitchNumber = 'CustomSwitchNumber',
  CustomSwitchOptions = 'CustomSwitchOptions',
  /** CRUD 用，显示序号 */
  CustomSerialNumber = 'CustomSerialNumber',
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
  [CustomValueTypeEnum.CustomJSONModal]: {
    render: jsonModalRender.render,
    renderFormItem: jsonModalRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSwitchNumber]: {
    render: switchNumberRender.render,
    renderFormItem: switchNumberRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSwitchOptions]: {
    render: switchOptionsRender.render,
    renderFormItem: switchOptionsRender.renderFormItem,
  },
  [CustomValueTypeEnum.CustomSerialNumber]: {
    render: () => <></>,
    renderFormItem: () => <></>,
  },
};

export { CustomValueTypeEnum, customValueTypeMap };
