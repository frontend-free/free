import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{h as i,i as t,j as f,k as N}from"./pro_form_json-4Hhfp6B9.js";import"./date-BDUOmFEF.js";import"./isNumber-Dc4sICNo.js";import{r as y}from"./index-BTkrZ5ys.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-BxNHxq9Z.js";import"../sb-preview/runtime.js";const k={title:"@fe-free/core/Form",tags:["autodocs"]};function n({children:v,initialValues:h}){const[S,x]=y.useState(void 0);return r.jsxs(N,{initialValues:h,onValuesChange:o=>{console.log("values",o),x(o)},onFinish:o=>{console.log("values",o)},children:[r.jsxs("pre",{children:["values: ",JSON.stringify(S,null,2)]}),v]})}const e={render:()=>r.jsxs(n,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[r.jsx(i,{name:"json"}),r.jsx("div",{children:"readonly"}),r.jsx(i,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},a={render:()=>r.jsxs(n,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[r.jsx(t,{name:"javascript"}),r.jsx("div",{children:"readonly"}),r.jsx(t,{name:"javascript",readonly:!0})]})},s={render:()=>r.jsx(n,{children:r.jsx(f,{name:"switchNumber"})})};var m,l,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var j,F,P;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
    </ProFormBase>
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const R=["ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent"];export{e as ProFormJSONComponent,a as ProFormJavascriptComponent,s as ProFormSwitchNumberComponent,R as __namedExportsOrder,k as default};
