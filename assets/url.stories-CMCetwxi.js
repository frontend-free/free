import{n as e}from"./chunk-Bj-mKKzh.js";import{Yi as t,_r as n,vr as r}from"./iframe-CeTL_ZNt.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`@fe-free/tool/URL`,tags:[`autodocs`],parameters:{docs:{description:{component:`URL 工具函数`}}}},o={render:()=>{let e=`https://example.com/path`,t=n(e);return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`p`,{children:[`原始 URL: `,e]}),(0,i.jsxs)(`p`,{children:[`构建后: `,t]})]})}},s={render:()=>{let e=`https://example.com/path`,t=n(e,{searchParams:{name:`test`,age:18}});return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`p`,{children:[`原始 URL: `,e]}),(0,i.jsxs)(`p`,{children:[`添加查询参数后: `,t]})]})}},c={render:()=>{let e=`https://example.com/path?existing=value`,t=n(e,{searchParams:{newParam:`newValue`}});return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`p`,{children:[`原始 URL: `,e]}),(0,i.jsxs)(`p`,{children:[`合并查询参数后: `,t]})]})}},l={render:()=>{let e=`https://example.com/path#section`,t=n(e,{hashSearchParams:{tab:`details`,view:`list`}});return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`p`,{children:[`原始 URL: `,e]}),(0,i.jsxs)(`p`,{children:[`添加 hash 查询参数后: `,t]})]})}},u={render:()=>{let e=`https://example.com/path?page=1#section?tab=main`,t=n(e,{searchParams:{sort:`desc`,filter:`active`},hashSearchParams:{view:`grid`,theme:`dark`}});return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`p`,{children:[`原始 URL: `,e]}),(0,i.jsxs)(`p`,{children:[`复杂处理后: `,t]})]})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const url = 'https://example.com/path';
    const result = buildURL(url);
    return <div>
        <p>原始 URL: {url}</p>
        <p>构建后: {result}</p>
      </div>;
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`WithSearchParams`,`MergeSearchParams`,`WithHashSearchParams`,`Complex`]}))();export{o as Basic,u as Complex,c as MergeSearchParams,l as WithHashSearchParams,s as WithSearchParams,d as __namedExportsOrder,a as default};