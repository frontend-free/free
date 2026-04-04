import{n as e}from"./chunk-Bj-mKKzh.js";import{Gr as t,Hr as n,Ur as r,Yi as i,t as a}from"./iframe-CeTL_ZNt.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=i(),s={title:`@fe-free/core/ahooks`,tags:[`autodocs`],parameters:{docs:{description:{component:`基于 ahooks 封装
- useGlobalRequest。基于 useRequest 封装，会抛出全局错误。
- useGlobalInfiniteScroll。基于 useInfiniteScroll 封装，会抛出全局错误。
`}}}},c=e=>{console.log(`global error`,e)},window.addEventListener(`error`,c),window.addEventListener(`unhandledrejection`,c),l=()=>{let{data:e,loading:t,error:r,run:i}=n(async()=>new Promise((e,t)=>{setTimeout(()=>{t(`错误啦`)},1e3)}),{manual:!0});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{children:`useGlobalRequest 会抛出全局错误`}),(0,o.jsx)(`button`,{onClick:i,children:`run`}),(0,o.jsxs)(`div`,{children:[`data: `,e]}),(0,o.jsxs)(`div`,{children:[`loading: `,t?`true`:`false`]}),(0,o.jsxs)(`div`,{children:[`error: `,r]})]})},u=()=>{let{data:e,loading:n,error:r,run:i}=t(async()=>new Promise((e,t)=>{setTimeout(()=>{t(`错误啦`)},1e3)}),{manual:!0});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{children:`ahooks useRequest`}),(0,o.jsx)(`button`,{onClick:i,children:`run`}),(0,o.jsxs)(`div`,{children:[`data: `,e]}),(0,o.jsxs)(`div`,{children:[`loading: `,n?`true`:`false`]}),(0,o.jsxs)(`div`,{children:[`error: `,r]})]})},l.__docgenInfo={description:``,methods:[],displayName:`UseGlobalRequest`},u.__docgenInfo={description:``,methods:[],displayName:`UseRequest`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    data,
    loading,
    error,
    run
  } = useGlobalRequest(async () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject('错误啦');
      }, 1000);
    });
  }, {
    manual: true
  });
  return <div>
      <div>useGlobalRequest 会抛出全局错误</div>
      <button onClick={run}>run</button>

      <div>data: {data}</div>
      <div>loading: {loading ? 'true' : 'false'}</div>
      <div>error: {error}</div>
    </div>;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    data,
    loading,
    error,
    run
  } = useRequest(async () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject('错误啦');
      }, 1000);
    });
  }, {
    manual: true
  });
  return <div>
      <div>ahooks useRequest</div>
      <button onClick={run}>run</button>
      <div>data: {data}</div>
      <div>loading: {loading ? 'true' : 'false'}</div>
      <div>error: {error}</div>
    </div>;
}`,...u.parameters?.docs?.source}}},d=[`UseGlobalRequest`,`UseRequest`]}))();export{l as UseGlobalRequest,u as UseRequest,d as __namedExportsOrder,s as default};