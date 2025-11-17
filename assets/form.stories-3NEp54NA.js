import{g as S,j as e,h as R,i as h,k as y,l as C,m as k,n as v,o as U,p as l,q as B,s as J,t as _,u as w,v as N,r as A}from"./iframe-v_arWlXS.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"@fe-free/core/Form",component:S,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function r({children:b,initialValues:s}){const[n,x]=A.useState(void 0);return e.jsxs(S,{initialValues:s,onValuesChange:a=>{x({...n,...a})},onFinish:a=>{console.log("values",a)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(n,null,2)]}),b]})}const m={render:()=>e.jsx(r,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(R,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},t={render:()=>e.jsxs(r,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(h,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(h,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},i={render:()=>e.jsxs(r,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(y,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(y,{name:"javascript",readonly:!0})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(C,{name:"switchNumber"}),e.jsx(C,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},c={render:()=>e.jsx(r,{children:e.jsx(k,{name:"listText"})})},p={render:()=>e.jsxs(r,{children:[e.jsx(v,{name:"listNumber",label:"listNumber"}),e.jsx(v,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})},u={render:()=>e.jsx(r,{children:e.jsx(U,{name:"listBoolean",label:"listBoolean"})})};function o(b){const{file:s,onProgress:n,onSuccess:x}=b;let a=0;const j=setInterval(()=>{a+=10,n({percent:a}),a>=100&&(clearInterval(j),x({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`,name:s.name,uid:s.uid}}))},100);return{abort:()=>{clearInterval(j),console.log("上传已取消")}}}const P={render:()=>e.jsxs(r,{children:[e.jsx(l,{label:"file",name:"file",fieldProps:{customRequest:o}}),e.jsx(B,{label:"file_dragger",name:"file_dragger",fieldProps:{customRequest:o}}),e.jsx(B,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(l,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:o}}),e.jsx(l,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:o}}),e.jsx(l,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:o}})]})},g={render:()=>e.jsxs(r,{children:[e.jsx(J,{label:"image",name:"image",fieldProps:{customRequest:o}}),e.jsx(_,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:o}}),e.jsx(_,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}})]})},F={render:()=>e.jsxs(r,{children:[e.jsx(w,{name:"record1",label:"record1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:{username:"",password:""}}),e.jsx(w,{name:"record2",label:"record2"})]})},f={render:()=>e.jsxs(r,{children:[e.jsx(N,{name:"recordArray1",label:"recordArray1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:[{key:"username",value:void 0},{key:"password",value:void 0}]}),e.jsx(N,{name:"recordArray2",label:"recordArray2"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
}`,...u.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormRecord name="record1" label="record1" fieldProps={{
      labels: [{
        key: 'username',
        label: '用户名'
      }, {
        key: 'password',
        label: '密码'
      }]
    }} initialValue={{
      username: '',
      password: ''
    }} />
      <ProFormRecord name="record2" label="record2" />
    </ProFormBase>
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormRecordArray name="recordArray1" label="recordArray1" fieldProps={{
      labels: [{
        key: 'username',
        label: '用户名'
      }, {
        key: 'password',
        label: '密码'
      }]
    }} initialValue={[{
      key: 'username',
      value: undefined
    }, {
      key: 'password',
      value: undefined
    }]} />
      <ProFormRecordArray name="recordArray2" label="recordArray2" />
    </ProFormBase>
}`,...f.parameters?.docs?.source}}};const q=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormListBooleanComponent","ProFormUploadComponent","ProFormImageUploadComponent","ProFormRecordComponent","ProFormRecordArrayComponent"];export{m as ProFormEditorComponent,g as ProFormImageUploadComponent,t as ProFormJSONComponent,i as ProFormJavascriptComponent,u as ProFormListBooleanComponent,p as ProFormListNumberComponent,c as ProFormListTextComponent,f as ProFormRecordArrayComponent,F as ProFormRecordComponent,d as ProFormSwitchNumberComponent,P as ProFormUploadComponent,q as __namedExportsOrder,L as default};
