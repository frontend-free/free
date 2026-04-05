import{n as e}from"./chunk-Bj-mKKzh.js";import{Yi as t,gr as n,o as r,t as i,yr as a}from"./iframe-CnGw9fmU.js";var o,s,c,l;e((()=>{i(),n(),o=t(),s={title:`@fe-free/core/InfiniteList`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`无线滚动列表`}}}},c={render:()=>(0,o.jsx)(`div`,{className:`h-[500px]`,children:(0,o.jsx)(r,{request:async({current:e,pageSize:t})=>(await a(500),{data:Array(t).fill(0).map((n,r)=>r+(e-1)*t),total:100}),renderItem:({item:e})=>(0,o.jsx)(`div`,{className:`p-2`,children:(0,o.jsxs)(`div`,{className:`h-[100px] bg-red-500`,children:[`item`,e]})}),pageSize:20,gridClassName:`grid-cols-3`})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Resolve`]}))();export{c as Resolve,l as __namedExportsOrder,s as default};