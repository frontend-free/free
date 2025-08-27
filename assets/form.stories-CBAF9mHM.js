import{j as e}from"./jsx-runtime-TjNF8EJ0.js";import{g as N,h as v,i as x,j,k as h,l as S,m as b,n as m,p as C,q as w,r as _}from"./localforage-D7AXApJS.js";import"./date-Clclsp2H.js";import{r as y}from"./iframe-CLePEaeZ.js";import"./isNumber-DWr_q2IE.js";import"./index-Dw8jUQq6.js";import"./index-kd-uQ2ks.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const L={title:"@fe-free/core/Form",component:N,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function o({children:P,initialValues:s}){const[n,f]=y.useState(void 0);return e.jsxs(N,{initialValues:s,onValuesChange:a=>{f({...n,...a})},onFinish:a=>{console.log("values",a)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(n,null,2)]}),P]})}const t={render:()=>e.jsx(o,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(v,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},l={render:()=>e.jsxs(o,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(x,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(x,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},i={render:()=>e.jsxs(o,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(j,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(j,{name:"javascript",readonly:!0})]})},d={render:()=>e.jsxs(o,{children:[e.jsx(h,{name:"switchNumber"}),e.jsx(h,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},c={render:()=>e.jsx(o,{children:e.jsx(S,{name:"listText"})})},p={render:()=>e.jsxs(o,{children:[e.jsx(b,{name:"listNumber",label:"listNumber"}),e.jsx(b,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})};function r(P){const{file:s,onProgress:n,onSuccess:f}=P;let a=0;const F=setInterval(()=>{a+=10,n({percent:a}),a>=100&&(clearInterval(F),f({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`,name:s.name,uid:s.uid}}))},100);return{abort:()=>{clearInterval(F),console.log("上传已取消")}}}const u={render:()=>e.jsxs(o,{children:[e.jsx(m,{label:"file",name:"file",fieldProps:{customRequest:r}}),e.jsx(C,{label:"file_dragger",name:"file_dragger",fieldProps:{customRequest:r}}),e.jsx(C,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:r}}),e.jsx(m,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:r}}),e.jsx(m,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:r}}),e.jsx(m,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:r}})]})},g={render:()=>e.jsxs(o,{children:[e.jsx(w,{label:"image",name:"image",fieldProps:{customRequest:r}}),e.jsx(_,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:r}}),e.jsx(_,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:r}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    code: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormEditor name="code" fieldProps={{
      language: 'javascript',
      height: '400px'
    }} />
    </ProFormBase>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListText name="listText" />
    </ProFormBase>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{
      precision: 0
    }} />
    </ProFormBase>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormUpload label="file" name="file" fieldProps={{
      customRequest
    }} />
      <ProFormUploadDragger label="file_dragger" name="file_dragger" fieldProps={{
      customRequest
    }} />
      <ProFormUploadDragger label="files_dragger" name="files_dragger" fieldProps={{
      multiple: true,
      maxCount: 2,
      customRequest
    }} />
      <ProFormUpload label="files" name="files" fieldProps={{
      multiple: true,
      maxCount: 2,
      showCount: true,
      customRequest
    }} />
      <ProFormUpload label="files_picture" name="files_picture" fieldProps={{
      multiple: true,
      maxCount: 2,
      listType: 'picture',
      customRequest
    }} />
      <ProFormUpload label="files_picture_card" name="files_picture_card" fieldProps={{
      multiple: true,
      maxCount: 2,
      listType: 'picture-card',
      customRequest
    }} />
    </ProFormBase>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormImageUpload label="image" name="image" fieldProps={{
      customRequest
    }} />
      <ProFormImageUploadDragger label="image_dragger" name="image_dragger" fieldProps={{
      customRequest
    }} />
      <ProFormImageUploadDragger label="images_dragger" name="images_dragger" fieldProps={{
      multiple: true,
      maxCount: 2,
      customRequest
    }} />
    </ProFormBase>
}`,...g.parameters?.docs?.source}}};const D=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormUploadComponent","ProFormImageUploadComponent"];export{t as ProFormEditorComponent,g as ProFormImageUploadComponent,l as ProFormJSONComponent,i as ProFormJavascriptComponent,p as ProFormListNumberComponent,c as ProFormListTextComponent,d as ProFormSwitchNumberComponent,u as ProFormUploadComponent,D as __namedExportsOrder,L as default};
