import{L as t}from"./localforage-OviMTT0A.js";import"./jsx-runtime-C_dzdOzI.js";import"./date-DwpxwKTw.js";import"./_commonjs-dynamic-modules-Bhyh6_UQ.js";import"./iframe-BnwM4uAj.js";import"./isNumber-2NGMk2GK.js";import"./index-aWJbKh8f.js";import"./index-B6UH0wWN.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"@fe-free/core/LoadingButton",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"基于 antd Button 封装的 LoadingButton，自动根据 onClick 显示 loading"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,n)=>{setTimeout(n,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["Resolve","Reject"];export{r as Reject,e as Resolve,k as __namedExportsOrder,g as default};
