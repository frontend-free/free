import { pinyin } from './pinyin';
import { filter, isString, map } from 'lodash-es';

const defaultWhat = (v) => v;
/**  字符串匹配，中文首字母拼音匹配，字母小写匹配 */
function pinyinFilter<T>(list: T[], filterText: string, what: (v: T) => string = defaultWhat) {
  if (!filterText) {
    return list || [];
  }

  filterText = filterText.toLowerCase();

  return filter(list, (v) => {
    return pinyinMatch(what(v), filterText);
  });
}

function pinyinMatch(value: string, filterText: string) {
  let w = value;
  // 兼容
  if (!isString(w)) {
    w = '';
  }
  w = w.toLowerCase();
  // 全拼集合
  const normal = map(pinyin(w), (value) => value[0]).join('');
  // 首字母集合
  const firstLetter = map(pinyin(w, 'first_letter'), (value) => value[0]).join('');

  return (
    w.indexOf(filterText) > -1 ||
    normal.indexOf(filterText) > -1 ||
    firstLetter.indexOf(filterText) > -1
  );
}

export { pinyinFilter, pinyinMatch };
