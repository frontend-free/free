import{j as r}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";function x(e,s){const t=new URLSearchParams(e),c=new URLSearchParams(s);return new URLSearchParams(`${t.toString()}&${c.toString()}`)}function n(e,s){const{searchParams:t,hashSearchParams:c}=s||{},a=new URL(e);if(t){const o=x(a.searchParams,t);a.search=`?${o.toString()}`}if(c){const o=new URLSearchParams(c),i=a.hash,d=i.indexOf("?");if(d>-1){const B=x(i.slice(d+1),o);a.hash=`${i.slice(0,d)}?${B.toString()}`}else a.hash=`${i}?${o.toString()}`}return a.toString()}const M={title:"@fe-free/tool/URL",tags:["autodocs"]},h={render:()=>{const e="https://example.com/path",s=n(e);return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["构建后: ",s]})]})}},p={render:()=>{const e="https://example.com/path",s=n(e,{searchParams:{name:"test",age:18}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["添加查询参数后: ",s]})]})}},l={render:()=>{const e="https://example.com/path?existing=value",s=n(e,{searchParams:{newParam:"newValue"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["合并查询参数后: ",s]})]})}},m={render:()=>{const e="https://example.com/path#section",s=n(e,{hashSearchParams:{tab:"details",view:"list"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["添加 hash 查询参数后: ",s]})]})}},u={render:()=>{const e="https://example.com/path?page=1#section?tab=main",s=n(e,{searchParams:{sort:"desc",filter:"active"},hashSearchParams:{view:"grid",theme:"dark"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["复杂处理后: ",s]})]})}};var S,P,R;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url);
    return <div>
        <p>原始 URL: {url}</p>
        <p>构建后: {result}</p>
      </div>;
  }
}`,...(R=(P=h.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var g,v,L;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url, {
      searchParams: {
        name: 'test',
        age: 18
      }
    });
    return <div>
        <p>原始 URL: {url}</p>
        <p>添加查询参数后: {result}</p>
      </div>;
  }
}`,...(L=(v=p.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var U,j,w;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path?existing=value';
    const result = buildURL(url, {
      searchParams: {
        newParam: 'newValue'
      }
    });
    return <div>
        <p>原始 URL: {url}</p>
        <p>合并查询参数后: {result}</p>
      </div>;
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var f,b,$;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path#section';
    const result = buildURL(url, {
      hashSearchParams: {
        tab: 'details',
        view: 'list'
      }
    });
    return <div>
        <p>原始 URL: {url}</p>
        <p>添加 hash 查询参数后: {result}</p>
      </div>;
  }
}`,...($=(b=m.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var W,H,k;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path?page=1#section?tab=main';
    const result = buildURL(url, {
      searchParams: {
        sort: 'desc',
        filter: 'active'
      },
      hashSearchParams: {
        view: 'grid',
        theme: 'dark'
      }
    });
    return <div>
        <p>原始 URL: {url}</p>
        <p>复杂处理后: {result}</p>
      </div>;
  }
}`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const O=["Basic","WithSearchParams","MergeSearchParams","WithHashSearchParams","Complex"];export{h as Basic,u as Complex,l as MergeSearchParams,m as WithHashSearchParams,p as WithSearchParams,O as __namedExportsOrder,M as default};
