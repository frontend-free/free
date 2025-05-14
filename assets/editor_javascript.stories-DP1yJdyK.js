import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as p}from"./index-DmOy-Ncz.js";import{E as a}from"./index-BIZMV8Eg.js";import"./index-D2MAbzvX.js";const f={title:"@fe-free/core/EditorJavascript",component:a,tags:["autodocs"]},u=()=>{const[s,t]=p.useState(`const name = 'world';
console.log('hello', name);
`);return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:s,onChange:t})})},o={render:()=>e.jsx(u,{})},x=()=>{const[s,t]=p.useState(`const name = 'world';
console.log('hello', name);
`);return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:s,onChange:t,readonly:!0})})},r={render:()=>e.jsx(x,{})};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ReadonlyDemo />
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const v=["Basic","Readonly"];export{o as Basic,r as Readonly,v as __namedExportsOrder,f as default};
