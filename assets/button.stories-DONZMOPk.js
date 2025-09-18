import{L as t}from"./localforage-BTF3Q14z.js";import"./jsx-runtime-DYO6iK1c.js";import"./environment-Bn1z5B45.js";import"./_commonjs-dynamic-modules-BzUgh-JK.js";import"./iframe-C5YgwIi3.js";import"./isNumber-Hrl3mtTe.js";import"./index-CIRwY3z5.js";import"./index-x4HnuTdD.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"@fe-free/core/LoadingButton",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"基于 antd Button 封装的 LoadingButton，自动根据 onClick 显示 loading"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,n)=>{setTimeout(n,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
