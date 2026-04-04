import{n as e}from"./chunk-Bj-mKKzh.js";import{Vr as t,Yi as n,Zi as r,ea as i,t as a}from"./iframe-CeTL_ZNt.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=n(),s={title:`@fe-free/core/LoadingButton`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`基于 antd Button 封装的 LoadingButton，自动根据 onClick 显示 loading`}}}},c={args:{type:`primary`,children:`click and resolve`,onClick:()=>new Promise(e=>{setTimeout(e,1e3)})}},l={args:{children:`click and reject`,onClick:()=>new Promise((e,t)=>{setTimeout(t,1e3)})}},u={render:()=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(i,{children:`xxx`}),(0,o.jsx)(i,{children:`xxx`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    children: 'click and resolve',
    onClick: () => {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'click and reject',
    onClick: () => {
      return new Promise((_, reject) => {
        setTimeout(reject, 1000);
      });
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Tag>xxx</Tag>
        <Tag>xxx</Tag>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Resolve`,`Reject`,`Debug`]}))();export{u as Debug,l as Reject,c as Resolve,d as __namedExportsOrder,s as default};