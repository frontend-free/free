import { getSystemInfoSync } from '@tarojs/taro';

let cacheInfo;
function transformToPx(px: number) {
  if (!cacheInfo) {
    cacheInfo = getSystemInfoSync();
  }
  const { windowWidth } = cacheInfo;

  const width = Math.min(Math.max(375, windowWidth), 750);

  return (px * width) / 750;
}

export { transformToPx };
