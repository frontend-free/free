import{g as L,j as e,h as R,i as y,k as C,l as v,m as l,n as k,o as S,p as U,q as t,s as O,t as J,u as N,v as B,w as _,r as A}from"./iframe-n1Qv-Hue.js";import"./preload-helper-PPVm8Dsz.js";const q={title:"@fe-free/core/Form",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function r({children:h,initialValues:s}){const[n,j]=A.useState(void 0);return e.jsxs(L,{initialValues:s,onValuesChange:a=>{j({...n,...a})},onFinish:a=>{console.log("values",a)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(n,null,2)]}),h]})}const m={render:()=>e.jsx(r,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(R,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},i={render:()=>e.jsxs(r,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(y,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(y,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},d={render:()=>e.jsxs(r,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(C,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(C,{name:"javascript",readonly:!0})]})},c={render:()=>e.jsxs(r,{children:[e.jsx(v,{name:"switchNumber"}),e.jsx(v,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},p={render:()=>e.jsxs(r,{children:[e.jsx(l,{name:"switchOptions",fieldProps:{options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(l,{name:"switchOptionsLabel",fieldProps:{enableLabel:!0,options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(l,{name:"switchOptions2",fieldProps:{options:["OFF","ON"]}}),e.jsx(l,{name:"switchOptions2Label",fieldProps:{enableLabel:!0,options:["OFF","ON"]}})]})},u={render:()=>e.jsx(r,{children:e.jsx(k,{name:"listText"})})},P={render:()=>e.jsxs(r,{children:[e.jsx(S,{name:"listNumber",label:"listNumber"}),e.jsx(S,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})},F={render:()=>e.jsx(r,{children:e.jsx(U,{name:"listBoolean",label:"listBoolean"})})};function o(h){const{file:s,onProgress:n,onSuccess:j}=h;let a=0;const w=setInterval(()=>{a+=10,n({percent:a}),a>=100&&(clearInterval(w),j({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`,name:s.name,uid:s.uid}}))},100);return{abort:()=>{clearInterval(w),console.log("上传已取消")}}}const g={render:()=>e.jsxs(r,{children:[e.jsx(t,{label:"file",name:"file",fieldProps:{customRequest:o}}),e.jsx(O,{label:"file_dragger",name:"file_dragger",fieldProps:{customRequest:o}}),e.jsx(O,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(t,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:o}}),e.jsx(t,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:o}}),e.jsx(t,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:o}})]})},b={render:()=>e.jsxs(r,{children:[e.jsx(J,{label:"image",name:"image",fieldProps:{customRequest:o}}),e.jsx(N,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:o}}),e.jsx(N,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}})]})},f={render:()=>e.jsxs(r,{children:[e.jsx(B,{name:"record1",label:"record1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:{username:"",password:""}}),e.jsx(B,{name:"record2",label:"record2"})]})},x={render:()=>e.jsxs(r,{children:[e.jsx(_,{name:"recordArray1",label:"recordArray1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:[{key:"username",value:void 0},{key:"password",value:void 0}]}),e.jsx(_,{name:"recordArray2",label:"recordArray2"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchOptions name="switchOptions" fieldProps={{
      options: [{
        value: 'NO',
        label: '否'
      }, {
        value: 'YES',
        label: '是'
      }]
    }} />
      <ProFormSwitchOptions name="switchOptionsLabel" fieldProps={{
      enableLabel: true,
      options: [{
        value: 'NO',
        label: '否'
      }, {
        value: 'YES',
        label: '是'
      }]
    }} />
      <ProFormSwitchOptions name="switchOptions2" fieldProps={{
      options: ['OFF', 'ON']
    }} />
      <ProFormSwitchOptions name="switchOptions2Label" fieldProps={{
      enableLabel: true,
      options: ['OFF', 'ON']
    }} />
    </ProFormBase>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListText name="listText" />
    </ProFormBase>
}`,...u.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{
      precision: 0
    }} />
    </ProFormBase>
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
}`,...F.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const E=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormSwitchOptionsComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormListBooleanComponent","ProFormUploadComponent","ProFormImageUploadComponent","ProFormRecordComponent","ProFormRecordArrayComponent"];export{m as ProFormEditorComponent,b as ProFormImageUploadComponent,i as ProFormJSONComponent,d as ProFormJavascriptComponent,F as ProFormListBooleanComponent,P as ProFormListNumberComponent,u as ProFormListTextComponent,x as ProFormRecordArrayComponent,f as ProFormRecordComponent,c as ProFormSwitchNumberComponent,p as ProFormSwitchOptionsComponent,g as ProFormUploadComponent,E as __namedExportsOrder,q as default};
