import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Jr as n,Na as r,R as i,S as a,Yi as o,_ as s,b as c,d as l,f as u,g as d,gr as f,h as p,m,p as h,qr as g,t as _,u as v,v as y,x as b,y as x,yr as S,z as C}from"./iframe-CnGw9fmU.js";function w({children:e,initialValues:t}){let[r,i]=(0,E.useState)(void 0);return(0,D.jsxs)(n,{initialValues:t,onValuesChange:e=>{i(e)},onFinish:e=>{console.log(`values`,e)},children:[(0,D.jsxs)(`pre`,{children:[`values: `,JSON.stringify(r,null,2)]}),e]})}function T(e){let{onSuccess:t}=e;return S(1e3).then(()=>{t({data:{url:`https://picsum.photos/200/300?random=${Date.now()}`}})}),{abort:()=>{console.log(`上传已取消`)}}}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{g(),_(),f(),E=t(r()),D=o(),O={title:`@fe-free/core/Form`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Form 组件基于 Ant Design ProForm，支持多种表单类型和扩展字段，适用于复杂表单场景。`}}}},k={render:()=>(0,D.jsx)(w,{initialValues:{code:`const name = 'world';
console.log('hello', name);
`},children:(0,D.jsx)(x,{name:`code`,fieldProps:{language:`javascript`,height:`400px`}})})},A={render:()=>(0,D.jsxs)(w,{initialValues:{json:JSON.stringify({name:`world`},null,2)},children:[(0,D.jsx)(s,{name:`json`}),(0,D.jsx)(`div`,{children:`readonly`}),(0,D.jsx)(s,{name:`json`,readonly:!0,initialValue:JSON.stringify({name:`world`},null,2),fieldProps:{mainMenuBar:!1,readonly:!0}})]})},j={render:()=>(0,D.jsxs)(w,{initialValues:{javascript:`const name = 'world';
console.log('hello', name);
`},children:[(0,D.jsx)(y,{name:`javascript`}),(0,D.jsx)(`div`,{children:`readonly`}),(0,D.jsx)(y,{name:`javascript`,readonly:!0})]})},M={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(i,{name:`switchNumber`}),(0,D.jsx)(i,{name:`switchNumber`,fieldProps:{checkedChildren:`开启`,unCheckedChildren:`关闭`}})]})},N={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{name:`switchOptions`,fieldProps:{options:[{value:`NO`,label:`否`},{value:`YES`,label:`是`}]}}),(0,D.jsx)(C,{name:`switchOptionsLabel`,fieldProps:{enableLabel:!0,options:[{value:`NO`,label:`否`},{value:`YES`,label:`是`}]}}),(0,D.jsx)(C,{name:`switchOptions2`,fieldProps:{options:[`OFF`,`ON`]}}),(0,D.jsx)(C,{name:`switchOptions2Label`,fieldProps:{enableLabel:!0,options:[`OFF`,`ON`]}})]})},P={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(a,{name:`listText`,label:`listText`,required:!1}),(0,D.jsx)(a,{name:`listText_isValueLabel`,label:`listText_isValueLabel`,fieldProps:{isValueLabel:!0}})]})},F={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(b,{name:`listNumber`,label:`listNumber`}),(0,D.jsx)(b,{name:`listNumber_isValueLabel`,fieldProps:{isValueLabel:!0}}),(0,D.jsx)(b,{name:`listInteger`,label:`listInteger`,fieldProps:{precision:0}}),(0,D.jsx)(b,{name:`listInteger_isValueLabel`,fieldProps:{isValueLabel:!0,precision:0}})]})},I={render:()=>(0,D.jsx)(w,{children:(0,D.jsx)(c,{name:`listBoolean`,label:`listBoolean`})})},L={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(h,{label:`file`,name:`file`,fieldProps:{customRequest:T}}),(0,D.jsx)(m,{label:`file_dragger`,name:`file_dragger`,fieldProps:{title:`这是标题`,description:`这是描述`,customRequest:T}}),(0,D.jsx)(m,{label:`files_dragger`,name:`files_dragger`,fieldProps:{multiple:!0,maxCount:2,customRequest:T}}),(0,D.jsx)(m,{label:`knowledge_files_dragger`,name:`knowledge_files_dragger`,fieldProps:{directory:!0,accept:`.doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.mp3,.mp4,.txt,.markdown,.excel`,multiple:!0,maxCount:100,customRequest:T,showStatus:!0,description:(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-01`,children:`支持doc、docx、pdf、ppt、jpg、png、mp3、mp4、txt、markdown、excel格式文件`}),(0,D.jsx)(`div`,{className:`text-03`,children:`pdf 文件不超过100MiB、图片文件不超过10MiB、音频文件不超过300MiB、视频文件不超过400MiB 其他单文件不超过50MiB 单次最多上传 100 个文件`})]})}}),(0,D.jsx)(h,{label:`files`,name:`files`,fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:T}}),(0,D.jsx)(h,{label:`files_custom`,name:`files`,fieldProps:{multiple:!0,maxCount:2,showCount:!0,customRequest:T,children:(0,D.jsx)(`div`,{children:`click me`})}}),(0,D.jsx)(h,{label:`files_picture`,name:`files_picture`,fieldProps:{multiple:!0,maxCount:2,listType:`picture`,customRequest:T}}),(0,D.jsx)(h,{label:`files_picture_card`,name:`files_picture_card`,fieldProps:{multiple:!0,maxCount:2,listType:`picture-card`,customRequest:T}})]})},R={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(l,{label:`image`,name:`image`,fieldProps:{customRequest:T}}),(0,D.jsx)(u,{label:`image_dragger`,name:`image_dragger`,fieldProps:{customRequest:T}}),(0,D.jsx)(u,{label:`images_dragger`,name:`images_dragger`,fieldProps:{multiple:!0,maxCount:2,customRequest:T}}),(0,D.jsx)(v,{label:`avatar_image`,name:`avatar_image`,fieldProps:{customRequest:T}})]})},z={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(p,{name:`record1`,label:`record1`,fieldProps:{labels:[{key:`username`,label:`用户名`},{key:`password`,label:`密码`}]},initialValue:{username:``,password:``}}),(0,D.jsx)(p,{name:`record2`,label:`record2`})]})},B={render:()=>(0,D.jsxs)(w,{children:[(0,D.jsx)(d,{name:`recordArray1`,label:`recordArray1`,fieldProps:{labels:[{key:`username`,label:`用户名`},{key:`password`,label:`密码`}]},initialValue:[{key:`username`,value:void 0},{key:`password`,value:void 0}]}),(0,D.jsx)(d,{name:`recordArray2`,label:`recordArray2`})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase initialValues={{
    javascript: \`const name = 'world';
console.log('hello', name);
\`
  }}>
      <ProFormJavascript name="javascript" />
      <div>readonly</div>
      <ProFormJavascript name="javascript" readonly />
    </ProFormBase>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormSwitchNumber name="switchNumber" />
      <ProFormSwitchNumber name="switchNumber" fieldProps={{
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }} />
    </ProFormBase>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListText name="listText" label="listText" required={false} />
      <ProFormListText name="listText_isValueLabel" label="listText_isValueLabel" fieldProps={{
      isValueLabel: true
    }} />
    </ProFormBase>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListNumber name="listNumber" label="listNumber" />
      <ProFormListNumber name="listNumber_isValueLabel" fieldProps={{
      isValueLabel: true
    }} />
      <ProFormListNumber name="listInteger" label="listInteger" fieldProps={{
      precision: 0
    }} />
      <ProFormListNumber name="listInteger_isValueLabel" fieldProps={{
      isValueLabel: true,
      precision: 0
    }} />
    </ProFormBase>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ProFormBase>
      <ProFormListBoolean name="listBoolean" label="listBoolean" />
    </ProFormBase>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
      <ProFormUpload label="files_custom" name="files" fieldProps={{
      multiple: true,
      maxCount: 2,
      showCount: true,
      customRequest,
      children: <div>click me</div>
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`ProFormEditorComponent`,`ProFormJSONComponent`,`ProFormJavascriptComponent`,`ProFormSwitchNumberComponent`,`ProFormSwitchOptionsComponent`,`ProFormListTextComponent`,`ProFormListNumberComponent`,`ProFormListBooleanComponent`,`ProFormUploadComponent`,`ProFormImageUploadComponent`,`ProFormRecordComponent`,`ProFormRecordArrayComponent`]}))();export{k as ProFormEditorComponent,R as ProFormImageUploadComponent,A as ProFormJSONComponent,j as ProFormJavascriptComponent,I as ProFormListBooleanComponent,F as ProFormListNumberComponent,P as ProFormListTextComponent,B as ProFormRecordArrayComponent,z as ProFormRecordComponent,M as ProFormSwitchNumberComponent,N as ProFormSwitchOptionsComponent,L as ProFormUploadComponent,V as __namedExportsOrder,O as default};