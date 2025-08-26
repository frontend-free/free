import{L as t}from"./localforage-jNGLhox0.js";import"./jsx-runtime-VCcGjxbf.js";import"./date-CvgjZid_.js";import"./iframe-Dz6Nc1QS.js";import"./isNumber-DKtQc1Du.js";import"./index-BCE3KO5C.js";import"./index-Cc8IMFZa.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const u={title:"@fe-free/core/LoadingButton",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"LoadingButton 是一个带有加载状态的按钮组件，适用于异步操作场景。<br/>区别于 antd Button 需要手动传 loading props。"}}}},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,n)=>{setTimeout(n,1e3)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const g=["Resolve","Reject"];export{r as Reject,e as Resolve,g as __namedExportsOrder,u as default};
