import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{h as i,i as m,j as t,k as x}from"./pro_form_switch_number-CkXBNZSx.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{r as w}from"./index-BTkrZ5ys.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DV2Nc1mN.js";import"../sb-preview/runtime.js";const _={title:"@fe-free/core/Form",tags:["autodocs"]};function n({children:v,initialValues:N}){const[S,f]=w.useState(void 0);return r.jsxs(x,{initialValues:N,onValuesChange:e=>{console.log("values",e),f(e)},onFinish:e=>{console.log("values",e)},children:[r.jsxs("pre",{children:["values: ",JSON.stringify(S,null,2)]}),v]})}const o={render:()=>r.jsxs(n,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[r.jsx(i,{name:"json"}),r.jsx("div",{children:"readonly"}),r.jsx(i,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},a={render:()=>r.jsxs(n,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[r.jsx(m,{name:"javascript"}),r.jsx("div",{children:"readonly"}),r.jsx(m,{name:"javascript",readonly:!0})]})},s={render:()=>r.jsxs(n,{children:[r.jsx(t,{name:"switchNumber"}),r.jsx(t,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    json: JSON.stringify({
      name: 'world'
    }, null, 2)
  }}>
      <ProFormJSON name="json" />
      <div>readonly</div>
      <ProFormJSON name="json" readonly initialValue={JSON.stringify({
      name: 'world'
    }, null, 2)} fieldProps={{
      mainMenuBar: false,
      readonly: true
    }} />
    </ProFormBase>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var j,P,F;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...(F=(P=s.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const R=["ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent"];export{o as ProFormJSONComponent,a as ProFormJavascriptComponent,s as ProFormSwitchNumberComponent,R as __namedExportsOrder,_ as default};
