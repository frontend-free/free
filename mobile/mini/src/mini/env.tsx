import Taro from '@tarojs/taro';

const env = {
  /** 网页 */
  isWeb: () => Taro.getEnv() === Taro.ENV_TYPE.WEB,
  /** pc */
  isPCWeb: () => {
    return !env.isMobileWeb();
  },
  /** 移动端 */
  isMobileWeb: () => {
    if (!env.isWeb()) return false;
    const ua = navigator.userAgent.toLowerCase();
    return /(iphone|ipod|ipad|android|mobile)/i.test(ua);
  },
  /** 微信小程序 */
  isWeApp: () => Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  /** 微信内网页 */
  isWeWeb: () => {
    if (!env.isWeb()) return false;
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('micromessenger');
  },
};

export { env };
