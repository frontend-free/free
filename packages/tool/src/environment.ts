function getUserAgent() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.navigator.userAgent.toLowerCase();
}

const Environment = {
  isWxWork: () => {
    return getUserAgent().includes('wxwork');
  },
  isWx: () => {
    return getUserAgent().includes('micromessenger');
  },
  isH5: () => {
    return getUserAgent().includes('mobile');
  },
  isDingTalk: () => {
    return getUserAgent().includes('dingtalk');
  },
  isAndroid: () => {
    return getUserAgent().includes('android');
  },
  isIOS: () => {
    return getUserAgent().includes('iphone') || getUserAgent().includes('ipad');
  },
};

export { Environment };
