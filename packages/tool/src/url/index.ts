type SearchParamsLike = Record<string, any> | URLSearchParams | string;

function mergeSearchParams(l, r) {
  const lsp = new URLSearchParams(l);
  const rsp = new URLSearchParams(r);

  return new URLSearchParams(`${lsp.toString()}&${rsp.toString()}`);
}

interface BuildUrlOptions {
  searchParams?: SearchParamsLike;
  hashSearchParams?: SearchParamsLike;
}
// http://xxxx/a/b/c?d=1&e=2?#f/g/h?i=3&j=4
//            path   searchParams  hash
function buildURL(url: string, options?: BuildUrlOptions) {
  const { searchParams, hashSearchParams } = options || {};

  const newURL = new URL(url);

  // 如果提供则合并
  if (searchParams) {
    const newSP = mergeSearchParams(newURL.searchParams, searchParams);
    newURL.search = `?${newSP.toString()}`;
  }

  if (hashSearchParams) {
    // 转换成 URLSearchParams
    const hashSP = new URLSearchParams(hashSearchParams);
    const hash = newURL.hash;
    const index = hash.indexOf('?');

    // 存在问号
    if (index > -1) {
      // merge
      const newHashSP = mergeSearchParams(hash.slice(index + 1), hashSP);
      newURL.hash = `${hash.slice(0, index)}?${newHashSP.toString()}`;
    }
    // 没有问号
    else {
      newURL.hash = `${hash}?${hashSP.toString()}`;
    }
  }

  return newURL.toString();
}

export { buildURL };
