import{g as w,j as e,h as B,i as j,k as h,l as y,m as R,n as C,o as l,p as _,q as I,s as N,t as v,u as S,r as U}from"./iframe-Cl3Z1TH4.js";import"./preload-helper-D9Z9MdNV.js";const k={title:"@fe-free/core/Form",component:w,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function r({children:f,initialValues:s}){const[n,x]=U.useState(void 0);return e.jsxs(w,{initialValues:s,onValuesChange:a=>{x({...n,...a})},onFinish:a=>{console.log("values",a)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(n,null,2)]}),f]})}const m={render:()=>e.jsx(r,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(B,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},t={render:()=>e.jsxs(r,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(j,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(j,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},i={render:()=>e.jsxs(r,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(h,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(h,{name:"javascript",readonly:!0})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(y,{name:"switchNumber"}),e.jsx(y,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},c={render:()=>e.jsx(r,{children:e.jsx(R,{name:"listText"})})},p={render:()=>e.jsxs(r,{children:[e.jsx(C,{name:"listNumber",label:"listNumber"}),e.jsx(C,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})};function o(f){const{file:s,onProgress:n,onSuccess:x}=f;let a=0;const b=setInterval(()=>{a+=10,n({percent:a}),a>=100&&(clearInterval(b),x({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`,name:s.name,uid:s.uid}}))},100);return{abort:()=>{clearInterval(b),console.log("上传已取消")}}}const u={render:()=>e.jsxs(r,{children:[e.jsx(l,{label:"file",name:"file",fieldProps:{customRequest:o}}),e.jsx(_,{label:"file_dragger",name:"file_dragger",fieldProps:{customRequest:o}}),e.jsx(_,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(l,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:o}}),e.jsx(l,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:o}}),e.jsx(l,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:o}})]})},P={render:()=>e.jsxs(r,{children:[e.jsx(I,{label:"image",name:"image",fieldProps:{customRequest:o}}),e.jsx(N,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:o}}),e.jsx(N,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}})]})},g={render:()=>e.jsxs(r,{children:[e.jsx(v,{name:"record1",label:"record1",fieldProps:{defaultItems:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]}}),e.jsx(v,{name:"record2",label:"record2"})]})},F={render:()=>e.jsxs(r,{children:[e.jsx(S,{name:"recordArray1",label:"recordArray1",fieldProps:{defaultItems:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]}}),e.jsx(S,{name:"recordArray2",label:"recordArray2"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormRecord name="record1" label="record1" fieldProps={{
      defaultItems: [{
        key: 'username',
        label: '用户名'
      }, {
        key: 'password',
        label: '密码'
      }]
    }} />
      <ProFormRecord name="record2" label="record2" />
    </ProFormBase>
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormRecordArray name="recordArray1" label="recordArray1" fieldProps={{
      defaultItems: [{
        key: 'username',
        label: '用户名'
      }, {
        key: 'password',
        label: '密码'
      }]
    }} />
      <ProFormRecordArray name="recordArray2" label="recordArray2" />
    </ProFormBase>
}`,...F.parameters?.docs?.source}}};const q=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormUploadComponent","ProFormImageUploadComponent","ProFormRecordComponent","ProFormRecordArrayComponent"];export{m as ProFormEditorComponent,P as ProFormImageUploadComponent,t as ProFormJSONComponent,i as ProFormJavascriptComponent,p as ProFormListNumberComponent,c as ProFormListTextComponent,F as ProFormRecordArrayComponent,g as ProFormRecordComponent,d as ProFormSwitchNumberComponent,u as ProFormUploadComponent,q as __namedExportsOrder,k as default};
