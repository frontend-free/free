import{L as n}from"./localforage-DEl_bOPg.js";import"./jsx-runtime-CpLcpz6c.js";import"./environment-Dg1fHeet.js";import"./_commonjs-dynamic-modules-CAqPLdXW.js";import"./iframe-Dm0EwHPi.js";import"./isNumber-Dvm6HnZu.js";import"./index-CKoiFgN2.js";import"./index-C0SADF-Z.js";import"./preload-helper-D9Z9MdNV.js";import"./map-BK-2rBYI.js";import"./_nodeUtil-CtEiRNde.js";const j={title:"@fe-free/core/LoadingButton",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"基于 antd Button 封装的 LoadingButton，自动根据 onClick 显示 loading"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,t)=>{setTimeout(t,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'click and resolve',
    onClick: () => {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'click and reject',
    onClick: () => {
      return new Promise((_, reject) => {
        setTimeout(reject, 1000);
      });
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Resolve","Reject"];export{r as Reject,e as Resolve,v as __namedExportsOrder,j as default};
