import{L as l}from"./index-CBEdsBxb.js";import"./jsx-runtime-BjgbQsUx.js";import"./date-CuSWkN_9.js";import"./index-BTkrZ5ys.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D2MAbzvX.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-CZGNs16i.js";import"../sb-preview/runtime.js";const C={title:"@fe-free/core/LoadingButton",component:l,tags:["autodocs"]},e={args:{children:"click and resolve",onClick:()=>new Promise(o=>{setTimeout(o,1e3)})}},r={args:{children:"click and reject",onClick:()=>new Promise((o,m)=>{setTimeout(m,1e3)})}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'click and resolve',
    onClick: () => {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,i,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'click and reject',
    onClick: () => {
      return new Promise((_, reject) => {
        setTimeout(reject, 1000);
      });
    }
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["Resolve","Reject"];export{r as Reject,e as Resolve,P as __namedExportsOrder,C as default};
