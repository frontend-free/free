export {
  ListBoolean,
  ListNumber,
  ListText,
  ProFormListBoolean,
  ProFormListNumber,
  ProFormListText,
} from './form_list/form_list';
export { ProFormListHelper } from './form_list/form_list_helper';
export { ProFormListModalHelper } from './form_list/form_list_modal_helper';
export { ProFormEditor } from './pro_form_editor';
export { ProFormJavascript } from './pro_form_javascript';
export { ProFormJSON } from './pro_form_json';
export { ProFormRecord, ProFormRecordArray } from './pro_form_record';
export {
  ProFormSwitchNumber,
  ProFormSwitchOptions,
  SwitchNumber,
  SwitchOptions,
  type SwitchNumberProps,
  type SwitchOptionsProps,
} from './pro_form_switch';
export {
  ProFormAvatarImageUpload,
  ProFormImageUpload,
  ProFormImageUploadDragger,
  ProFormUpload,
  ProFormUploadDragger,
} from './pro_form_upload';

import { pinyinMatch } from '@fe-free/tool';

/** ProFromSelect 搜索相关 props。 支持 1 搜索 2 拼音过滤 */
const proFormSelectSearchProps = {
  fieldProps: {
    showSearch: true,
    filterOption: (input, option) => pinyinMatch(option.label, input),
    // 本地过滤，关闭搜索 fetch data
    fetchDataOnSearch: false,
  },
};

export { proFormSelectSearchProps };
