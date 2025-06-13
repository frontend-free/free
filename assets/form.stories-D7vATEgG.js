import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{h as C,i as m,j as t,k as l,l as J}from"./pro_form_switch_number-DPN61ToO.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{r as B}from"./index-BTkrZ5ys.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-6JRucVBG.js";import"./index-BIm0odtm.js";import"./iframe-BHEbOfTr.js";import"../sb-preview/runtime.js";const D={title:"@fe-free/core/Form",tags:["autodocs"]};function i({children:S,initialValues:N}){const[w,y]=B.useState(void 0);return r.jsxs(J,{initialValues:N,onValuesChange:e=>{console.log("values",e),y(e)},onFinish:e=>{console.log("values",e)},children:[r.jsxs("pre",{children:["values: ",JSON.stringify(w,null,2)]}),S]})}const o={render:()=>r.jsx(i,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:r.jsx(C,{name:"code",fieldProps:{language:"javascript",height:"50vh"}})})},a={render:()=>r.jsxs(i,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[r.jsx(m,{name:"json"}),r.jsx("div",{children:"readonly"}),r.jsx(m,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},s={render:()=>r.jsxs(i,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[r.jsx(t,{name:"javascript"}),r.jsx("div",{children:"readonly"}),r.jsx(t,{name:"javascript",readonly:!0})]})},n={render:()=>r.jsxs(i,{children:[r.jsx(l,{name:"switchNumber"}),r.jsx(l,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    code: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormEditor name="code" fieldProps={{
      language: 'javascript',
      height: '50vh'
    }} />
    </ProFormBase>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var j,F,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const G=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent"];export{o as ProFormEditorComponent,a as ProFormJSONComponent,s as ProFormJavascriptComponent,n as ProFormSwitchNumberComponent,G as __namedExportsOrder,D as default};
