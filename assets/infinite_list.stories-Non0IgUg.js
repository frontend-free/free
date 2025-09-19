import{j as e}from"./jsx-runtime-CpLcpz6c.js";import{I as s}from"./localforage-DEl_bOPg.js";import"./environment-Dg1fHeet.js";import{s as a}from"./index-mAKpSMLY.js";import"./_commonjs-dynamic-modules-CAqPLdXW.js";import"./iframe-Dm0EwHPi.js";import"./isNumber-Dvm6HnZu.js";import"./index-CKoiFgN2.js";import"./index-C0SADF-Z.js";import"./preload-helper-D9Z9MdNV.js";import"./map-BK-2rBYI.js";import"./_nodeUtil-CtEiRNde.js";const j={title:"@fe-free/core/InfiniteList",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"无线滚动列表"}}}},r={render:()=>e.jsx("div",{className:"h-[500px]",children:e.jsx(s,{request:async({current:t,pageSize:n})=>(await a(500),{data:new Array(n).fill(0).map((o,i)=>i+(t-1)*n),total:100}),renderItem:({item:t})=>e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"h-[100px] bg-red-500",children:["item",t]})}),pageSize:20,gridClassName:"grid-cols-3"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="h-[500px]">
        <InfiniteList request={async ({
        current,
        pageSize
      }) => {
        await sleep(500);
        return {
          data: new Array(pageSize).fill(0).map((_, index) => index + (current - 1) * pageSize),
          total: 100
        };
      }} renderItem={({
        item
      }) => {
        return <div className="p-2">
                <div className="h-[100px] bg-red-500">item{item}</div>
              </div>;
      }} pageSize={20} gridClassName="grid-cols-3" />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const I=["Resolve"];export{r as Resolve,I as __namedExportsOrder,j as default};
