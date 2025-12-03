import{h as k,j as e,i as R,k as y,l as B,m as C,n as l,o as L,p as S,q as U,s as n,t as v,u as A,v as _,w as I,x as N,y as O,r as J}from"./iframe-DhsM-gaz.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"@fe-free/core/Form",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function r({children:b,initialValues:s}){const[j,h]=J.useState(void 0);return e.jsxs(k,{initialValues:s,onValuesChange:a=>{h(a)},onFinish:a=>{console.log("values",a)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(j,null,2)]}),b]})}const t={render:()=>e.jsx(r,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(R,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},i={render:()=>e.jsxs(r,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(y,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(y,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},m={render:()=>e.jsxs(r,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(B,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(B,{name:"javascript",readonly:!0})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(C,{name:"switchNumber"}),e.jsx(C,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},p={render:()=>e.jsxs(r,{children:[e.jsx(l,{name:"switchOptions",fieldProps:{options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(l,{name:"switchOptionsLabel",fieldProps:{enableLabel:!0,options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(l,{name:"switchOptions2",fieldProps:{options:["OFF","ON"]}}),e.jsx(l,{name:"switchOptions2Label",fieldProps:{enableLabel:!0,options:["OFF","ON"]}})]})},c={render:()=>e.jsx(r,{children:e.jsx(L,{name:"listText"})})},u={render:()=>e.jsxs(r,{children:[e.jsx(S,{name:"listNumber",label:"listNumber"}),e.jsx(S,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})},P={render:()=>e.jsx(r,{children:e.jsx(U,{name:"listBoolean",label:"listBoolean"})})};function o(b){const{file:s,onProgress:j,onSuccess:h}=b;let a=0;const w=setInterval(()=>{a+=10,j({percent:a}),a>=100&&(clearInterval(w),h({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`,name:s.name,uid:s.uid}}))},1e3);return{abort:()=>{clearInterval(w),console.log("上传已取消")}}}const g={render:()=>e.jsxs(r,{children:[e.jsx(n,{label:"file",name:"file",fieldProps:{customRequest:o}}),e.jsx(v,{label:"file_dragger",name:"file_dragger",fieldProps:{title:"这是标题",description:"这是描述",customRequest:o}}),e.jsx(v,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(v,{label:"knowledge_files_dragger",name:"knowledge_files_dragger",fieldProps:{accept:".doc,.docx,.pdf,.ppt,.jpg, jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel",multiple:!0,maxCount:100,customRequest:o,showStatus:!0,description:e.jsxs("div",{children:[e.jsx("div",{className:"text-01",children:"支持doc、docx、pdf、ppt、jpg、png、mp3、mp4、txt、markdown、excel格式文件"}),e.jsx("div",{className:"text-03",children:"pdf 文件不超过100MiB、图片文件不超过10MiB、音频文件不超过300MiB、视频文件不超过400MiB 其他单文件不超过50MiB 单次最多上传 100 个文件"})]})}}),e.jsx(n,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:o}}),e.jsx(n,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:o}}),e.jsx(n,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:o}})]})},F={render:()=>e.jsxs(r,{children:[e.jsx(A,{label:"image",name:"image",fieldProps:{customRequest:o}}),e.jsx(_,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:o}}),e.jsx(_,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(I,{label:"avatar_image",name:"avatar_image",fieldProps:{customRequest:o}})]})},f={render:()=>e.jsxs(r,{children:[e.jsx(N,{name:"record1",label:"record1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:{username:"",password:""}}),e.jsx(N,{name:"record2",label:"record2"})]})},x={render:()=>e.jsxs(r,{children:[e.jsx(O,{name:"recordArray1",label:"recordArray1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:[{key:"username",value:void 0},{key:"password",value:void 0}]}),e.jsx(O,{name:"recordArray2",label:"recordArray2"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListText name="listText" />
    </ProFormBase>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{
      precision: 0
    }} />
    </ProFormBase>
}`,...u.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
}`,...P.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormUpload label="file" name="file" fieldProps={{
      customRequest
    }} />
      <ProFormUploadDragger label="file_dragger" name="file_dragger" fieldProps={{
      title: '这是标题',
      description: '这是描述',
      customRequest
    }} />
      <ProFormUploadDragger label="files_dragger" name="files_dragger" fieldProps={{
      multiple: true,
      maxCount: 2,
      customRequest
    }} />
      <ProFormUploadDragger label="knowledge_files_dragger" name="knowledge_files_dragger" fieldProps={{
      accept: '.doc,.docx,.pdf,.ppt,.jpg, jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel',
      multiple: true,
      maxCount: 100,
      customRequest,
      showStatus: true,
      description: <div>
              <div className="text-01">
                支持doc、docx、pdf、ppt、jpg、png、mp3、mp4、txt、markdown、excel格式文件
              </div>
              <div className="text-03">
                pdf
                文件不超过100MiB、图片文件不超过10MiB、音频文件不超过300MiB、视频文件不超过400MiB
                其他单文件不超过50MiB 单次最多上传 100 个文件
              </div>
            </div>
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
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      <ProFormAvatarImageUpload label="avatar_image" name="avatar_image" fieldProps={{
      customRequest
    }} />
    </ProFormBase>
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const E=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormSwitchOptionsComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormListBooleanComponent","ProFormUploadComponent","ProFormImageUploadComponent","ProFormRecordComponent","ProFormRecordArrayComponent"];export{t as ProFormEditorComponent,F as ProFormImageUploadComponent,i as ProFormJSONComponent,m as ProFormJavascriptComponent,P as ProFormListBooleanComponent,u as ProFormListNumberComponent,c as ProFormListTextComponent,x as ProFormRecordArrayComponent,f as ProFormRecordComponent,d as ProFormSwitchNumberComponent,p as ProFormSwitchOptionsComponent,g as ProFormUploadComponent,E as __namedExportsOrder,M as default};
