import dayjs from 'dayjs';
import { isNumber, isString } from 'lodash-es';

const maxDateSeconds = Math.abs(+dayjs().add(100, 'year') / 1000);

function getDayjs(text: string | number) {
  // 字符串时间戳
  if (isString(text) && /^\d+$/.test(text as string)) {
    const timestamp = parseInt(text as string);

    // 自动判断 s ms
    if (timestamp > maxDateSeconds) {
      return dayjs(timestamp);
    }

    return dayjs(timestamp * 1000);
  }

  if (isNumber(text)) {
    if (text > maxDateSeconds) {
      return dayjs(text);
    }

    return dayjs(text * 1000);
  }

  // 其他都可以 dayjs
  return dayjs(text);
}

export { getDayjs };
