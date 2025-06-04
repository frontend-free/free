export { ProFormEditor } from './pro_form_editor';
export { ProFormJavascript } from './pro_form_javascript';
export { ProFormJSON } from './pro_form_json';
export {
  ProFormSwitchNumber,
  SwitchNumber,
  type SwitchNumberProps,
} from './pro_form_switch_number';

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
