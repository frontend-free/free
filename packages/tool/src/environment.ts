const ua = window.navigator.userAgent.toLowerCase();

const Environment = {
  isWxWork: () => {
    return ua.includes('wxwork');
  },
  isWx: () => {
    return ua.includes('micromessenger');
  },
  isH5: () => {
    return ua.includes('mobile');
  },
  isDingTalk: () => {
    return ua.includes('dingtalk');
  },
  isAndroid: () => {
    return ua.includes('android');
  },
  isIOS: () => {
    return ua.includes('iphone') || ua.includes('ipad');
  },
};

export { Environment };
