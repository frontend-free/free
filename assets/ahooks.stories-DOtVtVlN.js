import{j as e}from"./jsx-runtime-CpLcpz6c.js";import{G as d}from"./localforage-DEl_bOPg.js";import"./environment-Dg1fHeet.js";import"./_commonjs-dynamic-modules-CAqPLdXW.js";import"./iframe-Dm0EwHPi.js";import"./isNumber-Dvm6HnZu.js";import"./index-CKoiFgN2.js";import"./index-C0SADF-Z.js";import"./preload-helper-D9Z9MdNV.js";import"./map-BK-2rBYI.js";import"./_nodeUtil-CtEiRNde.js";function c(r,n,i){return d(r,{onError:o=>{setTimeout(()=>{throw o},0)},...n,__ignore:!0})}const _={title:"@fe-free/core/ahooks",tags:["autodocs"],parameters:{docs:{description:{component:`基于 ahooks 封装
- useGlobalRequest。基于 useRequest 封装，会抛出全局错误。
- useGlobalInfiniteScroll。基于 useInfiniteScroll 封装，会抛出全局错误。
`}}}},u=r=>{console.log("global error",r),alert("global error")};window.addEventListener("error",u);window.addEventListener("unhandledrejection",u);const t=()=>{const{data:r,loading:n,error:i,run:o}=c(async()=>new Promise((l,a)=>{setTimeout(()=>{a("错误啦")},1e3)}),{manual:!0});return e.jsxs("div",{children:[e.jsx("div",{children:"useGlobalRequest 会抛出全局错误"}),e.jsx("button",{onClick:o,children:"run"}),e.jsxs("div",{children:["data: ",r]}),e.jsxs("div",{children:["loading: ",n?"true":"false"]}),e.jsxs("div",{children:["error: ",i]})]})},s=()=>{const{data:r,loading:n,error:i,run:o}=d(async()=>new Promise((l,a)=>{setTimeout(()=>{a("错误啦")},1e3)}),{manual:!0});return e.jsxs("div",{children:[e.jsx("div",{children:"ahooks useRequest"}),e.jsx("button",{onClick:o,children:"run"}),e.jsxs("div",{children:["data: ",r]}),e.jsxs("div",{children:["loading: ",n?"true":"false"]}),e.jsxs("div",{children:["error: ",i]})]})};t.__docgenInfo={description:"",methods:[],displayName:"UseGlobalRequest"};s.__docgenInfo={description:"",methods:[],displayName:"UseRequest"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const G=["UseGlobalRequest","UseRequest"];export{t as UseGlobalRequest,s as UseRequest,G as __namedExportsOrder,_ as default};
