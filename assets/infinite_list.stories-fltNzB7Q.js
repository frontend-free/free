import{I as a,j as e}from"./iframe-B5-9woir.js";import{s as i}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"@fe-free/core/InfiniteList",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"无线滚动列表"}}}},r={render:()=>e.jsx("div",{className:"h-[500px]",children:e.jsx(a,{request:async({current:n,pageSize:s})=>(await i(500),{data:new Array(s).fill(0).map((d,t)=>t+(n-1)*s),total:100}),renderItem:({item:n})=>e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"h-[100px] bg-red-500",children:["item",n]})}),pageSize:20,gridClassName:"grid-cols-3"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const l=["Resolve"];export{r as Resolve,l as __namedExportsOrder,p as default};
