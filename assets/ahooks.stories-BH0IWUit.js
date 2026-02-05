import{bg as d,j as e}from"./iframe-Z2sAivXX.js";import"./preload-helper-PPVm8Dsz.js";function c(n,r,a){return d(n,{onError:s=>{setTimeout(()=>{throw s},0)},...r,__ignore:!0})}const h={title:"@fe-free/core/ahooks",tags:["autodocs"],parameters:{docs:{description:{component:`基于 ahooks 封装
- useGlobalRequest。基于 useRequest 封装，会抛出全局错误。
- useGlobalInfiniteScroll。基于 useInfiniteScroll 封装，会抛出全局错误。
`}}}},u=n=>{console.log("global error",n)};window.addEventListener("error",u);window.addEventListener("unhandledrejection",u);const o=()=>{const{data:n,loading:r,error:a,run:s}=c(async()=>new Promise((l,i)=>{setTimeout(()=>{i("错误啦")},1e3)}),{manual:!0});return e.jsxs("div",{children:[e.jsx("div",{children:"useGlobalRequest 会抛出全局错误"}),e.jsx("button",{onClick:s,children:"run"}),e.jsxs("div",{children:["data: ",n]}),e.jsxs("div",{children:["loading: ",r?"true":"false"]}),e.jsxs("div",{children:["error: ",a]})]})},t=()=>{const{data:n,loading:r,error:a,run:s}=d(async()=>new Promise((l,i)=>{setTimeout(()=>{i("错误啦")},1e3)}),{manual:!0});return e.jsxs("div",{children:[e.jsx("div",{children:"ahooks useRequest"}),e.jsx("button",{onClick:s,children:"run"}),e.jsxs("div",{children:["data: ",n]}),e.jsxs("div",{children:["loading: ",r?"true":"false"]}),e.jsxs("div",{children:["error: ",a]})]})};o.__docgenInfo={description:"",methods:[],displayName:"UseGlobalRequest"};t.__docgenInfo={description:"",methods:[],displayName:"UseRequest"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const p=["UseGlobalRequest","UseRequest"];export{o as UseGlobalRequest,t as UseRequest,p as __namedExportsOrder,h as default};
