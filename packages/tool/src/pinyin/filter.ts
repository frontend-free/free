import { filter, isString, map } from 'lodash-es';
import { pinyin } from './pinyin';

function defaultWhat(value: string): string {
  return value;
}
/**  字符串匹配，中文首字母拼音匹配，字母小写匹配 */
function pinyinFilter(list: string[], filterText: string): string[];
function pinyinFilter<T>(list: T[], filterText: string, what: (v: T) => string): T[];
function pinyinFilter<T>(
  list: T[] | string[],
  filterText: string,
  what?: ((v: T) => string) | ((v: string) => string)
): T[] | string[] {
  if (!filterText) {
    return list || [];
  }

  const loweredFilterText = filterText.toLowerCase();
  const getValue = (what ?? defaultWhat) as (value: T | string) => string;

  return filter(list, (v) => {
    return pinyinMatch(getValue(v), loweredFilterText);
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

function pinyinMatchWithoutFirstLetter(value: string, filterText: string) {
  let w = value;
  // 兼容
  if (!isString(w)) {
    w = '';
  }
  w = w.toLowerCase();
  // 全拼集合
  const normal = map(pinyin(w), (value) => value[0]).join('');

  return w.indexOf(filterText) > -1 || normal.indexOf(filterText) > -1;
}

function pinyinMatchWithoutFullLetter(value: string, filterText: string) {
  let w = value;
  // 兼容
  if (!isString(w)) {
    w = '';
  }
  w = w.toLowerCase();
  // 全拼集合
  const firstLetter = map(pinyin(w, 'first_letter'), (value) => value[0]).join('');

  return w.indexOf(filterText) > -1 || firstLetter.indexOf(filterText) > -1;
}

export { pinyinFilter, pinyinMatch, pinyinMatchWithoutFirstLetter, pinyinMatchWithoutFullLetter };
