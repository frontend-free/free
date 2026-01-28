import{j as r}from"./iframe-CujZLiTR.js";import"./preload-helper-PPVm8Dsz.js";function x(e,s){const t=new URLSearchParams(e),c=new URLSearchParams(s);return new URLSearchParams(`${t.toString()}&${c.toString()}`)}function n(e,s){const{searchParams:t,hashSearchParams:c}=s||{},a=new URL(e);if(t){const o=x(a.searchParams,t);a.search=`?${o.toString()}`}if(c){const o=new URLSearchParams(c),i=a.hash,u=i.indexOf("?");if(u>-1){const S=x(i.slice(u+1),o);a.hash=`${i.slice(0,u)}?${S.toString()}`}else a.hash=`${i}?${o.toString()}`}return a.toString()}const L={title:"@fe-free/tool/URL",tags:["autodocs"],parameters:{docs:{description:{component:"URL 工具函数"}}}},p={render:()=>{const e="https://example.com/path",s=n(e);return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["构建后: ",s]})]})}},h={render:()=>{const e="https://example.com/path",s=n(e,{searchParams:{name:"test",age:18}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["添加查询参数后: ",s]})]})}},l={render:()=>{const e="https://example.com/path?existing=value",s=n(e,{searchParams:{newParam:"newValue"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["合并查询参数后: ",s]})]})}},m={render:()=>{const e="https://example.com/path#section",s=n(e,{hashSearchParams:{tab:"details",view:"list"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["添加 hash 查询参数后: ",s]})]})}},d={render:()=>{const e="https://example.com/path?page=1#section?tab=main",s=n(e,{searchParams:{sort:"desc",filter:"active"},hashSearchParams:{view:"grid",theme:"dark"}});return r.jsxs("div",{children:[r.jsxs("p",{children:["原始 URL: ",e]}),r.jsxs("p",{children:["复杂处理后: ",s]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url);
    return <div>
        <p>原始 URL: {url}</p>
        <p>构建后: {result}</p>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const U=["Basic","WithSearchParams","MergeSearchParams","WithHashSearchParams","Complex"];export{p as Basic,d as Complex,l as MergeSearchParams,m as WithHashSearchParams,h as WithSearchParams,U as __namedExportsOrder,L as default};
