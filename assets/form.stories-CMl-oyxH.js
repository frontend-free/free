import{h as _,j as e,i as k,k as h,l as w,m as v,n as a,o as R,p as y,q as L,s,t as j,u as U,v as B,w as A,x as C,y as S,r as J}from"./iframe-DPgntSBr.js";import{s as V}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"@fe-free/core/Form",component:_,tags:["autodocs"],parameters:{docs:{description:{component:"Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。"}}}};function r({children:f,initialValues:x}){const[N,O]=J.useState(void 0);return e.jsxs(_,{initialValues:x,onValuesChange:b=>{O(b)},onFinish:b=>{console.log("values",b)},children:[e.jsxs("pre",{children:["values: ",JSON.stringify(N,null,2)]}),f]})}const l={render:()=>e.jsx(r,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:e.jsx(k,{name:"code",fieldProps:{language:"javascript",height:"400px"}})})},n={render:()=>e.jsxs(r,{initialValues:{json:JSON.stringify({name:"world"},null,2)},children:[e.jsx(h,{name:"json"}),e.jsx("div",{children:"readonly"}),e.jsx(h,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},t={render:()=>e.jsxs(r,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[e.jsx(w,{name:"javascript"}),e.jsx("div",{children:"readonly"}),e.jsx(w,{name:"javascript",readonly:!0})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(v,{name:"switchNumber"}),e.jsx(v,{name:"switchNumber",fieldProps:{checkedChildren:"开启",unCheckedChildren:"关闭"}})]})},m={render:()=>e.jsxs(r,{children:[e.jsx(a,{name:"switchOptions",fieldProps:{options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(a,{name:"switchOptionsLabel",fieldProps:{enableLabel:!0,options:[{value:"NO",label:"否"},{value:"YES",label:"是"}]}}),e.jsx(a,{name:"switchOptions2",fieldProps:{options:["OFF","ON"]}}),e.jsx(a,{name:"switchOptions2Label",fieldProps:{enableLabel:!0,options:["OFF","ON"]}})]})},d={render:()=>e.jsx(r,{children:e.jsx(R,{name:"listText"})})},p={render:()=>e.jsxs(r,{children:[e.jsx(y,{name:"listNumber",label:"listNumber"}),e.jsx(y,{name:"listInteger",label:"listInteger",fieldProps:{precision:0}})]})},c={render:()=>e.jsx(r,{children:e.jsx(L,{name:"listBoolean",label:"listBoolean"})})};function o(f){const{onSuccess:x}=f;return V(1e3).then(()=>{x({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`}})}),{abort:()=>{console.log("上传已取消")}}}const u={render:()=>e.jsxs(r,{children:[e.jsx(s,{label:"file",name:"file",fieldProps:{customRequest:o}}),e.jsx(j,{label:"file_dragger",name:"file_dragger",fieldProps:{title:"这是标题",description:"这是描述",customRequest:o}}),e.jsx(j,{label:"files_dragger",name:"files_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(j,{label:"knowledge_files_dragger",name:"knowledge_files_dragger",fieldProps:{directory:!0,accept:".doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel",multiple:!0,maxCount:100,customRequest:o,showStatus:!0,description:e.jsxs("div",{children:[e.jsx("div",{className:"text-01",children:"支持doc、docx、pdf、ppt、jpg、png、mp3、mp4、txt、markdown、excel格式文件"}),e.jsx("div",{className:"text-03",children:"pdf 文件不超过100MiB、图片文件不超过10MiB、音频文件不超过300MiB、视频文件不超过400MiB 其他单文件不超过50MiB 单次最多上传 100 个文件"})]})}}),e.jsx(s,{label:"files",name:"files",fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:o}}),e.jsx(s,{label:"files_picture",name:"files_picture",fieldProps:{multiple:!0,maxCount:2,listType:"picture",customRequest:o}}),e.jsx(s,{label:"files_picture_card",name:"files_picture_card",fieldProps:{multiple:!0,maxCount:2,listType:"picture-card",customRequest:o}})]})},P={render:()=>e.jsxs(r,{children:[e.jsx(U,{label:"image",name:"image",fieldProps:{customRequest:o}}),e.jsx(B,{label:"image_dragger",name:"image_dragger",fieldProps:{customRequest:o}}),e.jsx(B,{label:"images_dragger",name:"images_dragger",fieldProps:{multiple:!0,maxCount:2,customRequest:o}}),e.jsx(A,{label:"avatar_image",name:"avatar_image",fieldProps:{customRequest:o}})]})},g={render:()=>e.jsxs(r,{children:[e.jsx(C,{name:"record1",label:"record1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:{username:"",password:""}}),e.jsx(C,{name:"record2",label:"record2"})]})},F={render:()=>e.jsxs(r,{children:[e.jsx(S,{name:"recordArray1",label:"recordArray1",fieldProps:{labels:[{key:"username",label:"用户名"},{key:"password",label:"密码"}]},initialValue:[{key:"username",value:void 0},{key:"password",value:void 0}]}),e.jsx(S,{name:"recordArray2",label:"recordArray2"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListText name="listText" />
    </ProFormBase>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{
      precision: 0
    }} />
    </ProFormBase>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      directory: true,
      accept: '.doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel',
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
      <ProFormAvatarImageUpload label="avatar_image" name="avatar_image" fieldProps={{
      customRequest
    }} />
    </ProFormBase>
}`,...P.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const T=["ProFormEditorComponent","ProFormJSONComponent","ProFormJavascriptComponent","ProFormSwitchNumberComponent","ProFormSwitchOptionsComponent","ProFormListTextComponent","ProFormListNumberComponent","ProFormListBooleanComponent","ProFormUploadComponent","ProFormImageUploadComponent","ProFormRecordComponent","ProFormRecordArrayComponent"];export{l as ProFormEditorComponent,P as ProFormImageUploadComponent,n as ProFormJSONComponent,t as ProFormJavascriptComponent,c as ProFormListBooleanComponent,p as ProFormListNumberComponent,d as ProFormListTextComponent,F as ProFormRecordArrayComponent,g as ProFormRecordComponent,i as ProFormSwitchNumberComponent,m as ProFormSwitchOptionsComponent,u as ProFormUploadComponent,T as __namedExportsOrder,E as default};
