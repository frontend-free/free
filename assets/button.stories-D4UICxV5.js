import{L as n}from"./localforage-BhlN-Xla.js";import"./jsx-runtime-BcpG4FIS.js";import"./environment-CkU2kBK-.js";import"./_commonjs-dynamic-modules-BTlTUtk5.js";import"./iframe-CK3MLkW7.js";import"./isNumber-CTNJfj3i.js";import"./index-CUzEMD6o.js";import"./index-uc8ny8wp.js";import"./preload-helper-D9Z9MdNV.js";import"./map-DqGPwCiM.js";import"./_nodeUtil-Bx6ljfTx.js";const j={title:"@fe-free/core/LoadingButton",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"基于 antd Button 封装的 LoadingButton，自动根据 onClick 显示 loading"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,t)=>{setTimeout(t,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
