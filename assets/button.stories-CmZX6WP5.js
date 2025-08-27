import{L as n}from"./localforage-CGNHCfsK.js";import"./jsx-runtime-DOBW4sqk.js";import"./date-3qZGDeQI.js";import"./iframe-Cb2OhvU9.js";import"./isNumber-5w1y0RhS.js";import"./index-BfZmmIMU.js";import"./index-BzdjFUDU.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const g={title:"@fe-free/core/LoadingButton",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"LoadingButton 是一个带有加载状态的按钮组件，适用于异步操作场景。<br/>区别于 antd Button 需要手动传 loading props。"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,t)=>{setTimeout(t,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
