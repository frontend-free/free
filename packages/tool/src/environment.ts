function getUserAgent(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.navigator.userAgent.toLowerCase();
}

const Environment = {
  isWxWork: (): boolean => {
    return getUserAgent().includes('wxwork');
  },
  isWx: (): boolean => {
    return getUserAgent().includes('micromessenger');
  },
  isH5: (): boolean => {
    return getUserAgent().includes('mobile');
  },
  isDingTalk: (): boolean => {
    return getUserAgent().includes('dingtalk');
  },
  isAndroid: (): boolean => {
    return getUserAgent().includes('android');
  },
  isIOS: (): boolean => {
    return getUserAgent().includes('iphone') || getUserAgent().includes('ipad');
  },
};

export { Environment };
