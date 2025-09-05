const ua = window.navigator.userAgent.toLowerCase();

const Environment = {
  isWxWork: () => {
    return ua.includes('wxwork');
  },
  isWx: () => {
    return ua.includes('micromessenger');
  },
};

export { Environment };
