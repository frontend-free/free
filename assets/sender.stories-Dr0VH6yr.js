import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Dr as n,Na as r,Tr as i,Yi as a,Zi as o,la as s,wr as c}from"./iframe-CeTL_ZNt.js";import{a as l,t as u}from"./src-CCsP66Kq.js";function d(e){let[t,n]=(0,f.useState)(void 0);return(0,p.jsx)(l,{value:t,onChange:e=>{console.log(`newValue`,e),n(e)},onSubmit:e=>{console.log(`onSubmit`,e)},...e})}var f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),c(),o(),f=t(r()),p=a(),m={title:`@fe-free/ai/Sender`,component:l,tags:[`autodocs`]},h={render:e=>(0,p.jsx)(d,{...e}),args:{onSubmit:e=>{console.log(e)}}},g={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>(0,p.jsx)(d,{...e})},_={args:{allowUpload:{uploadAction:`/api/ai-service/v1/file_upload/upload`,filesMaxCount:3}},render:e=>(0,p.jsx)(d,{...e})},v={args:{allowUpload:{uploadAction:`/api/ai-service/v1/file_upload/upload`,filesMaxCount:3,accept:`image/*,.pdf`}},render:e=>(0,p.jsx)(d,{...e})},y={args:{allowUpload:{uploadAction:`/api/ai-service/v1/file_upload/upload`,accept:`image/*`,renderUpload:e=>(0,p.jsx)(s,{type:`text`,shape:`circle`,icon:(0,p.jsx)(i,{component:n,onClick:()=>e.refUpload.current?.click()})})}},render:e=>(0,p.jsx)(d,{...e})},b={render:e=>{let[t,n]=(0,f.useState)(!0);return(0,p.jsx)(d,{...e,allowSpeech:{recording:t,onRecordingChange:n}})}},x={args:{statement:`内容由 AI 生成，无法确保信息的真实准确，仅供参考`},render:e=>(0,p.jsx)(d,{...e})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3
    }
  },
  render: props => <Component {...props} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3,
      accept: 'image/*,.pdf'
    }
  },
  render: props => <Component {...props} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      accept: 'image/*',
      renderUpload: props => <Button type="text" shape="circle" icon={<Icons component={PlusOutlined} onClick={() => props.refUpload.current?.click()} />} />
    }
  },
  render: props => <Component {...props} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [recording, setRecording] = useState(true);
    return <Component {...props} allowSpeech={{
      recording,
      onRecordingChange: setRecording
    }} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    statement: '内容由 AI 生成，无法确保信息的真实准确，仅供参考'
  },
  render: props => <Component {...props} />
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Loading`,`AllowUpload`,`AllowUploadWithAccept`,`RenderUpload`,`AllowSpeech`,`Statement`]}))();export{b as AllowSpeech,_ as AllowUpload,v as AllowUploadWithAccept,h as Default,g as Loading,y as RenderUpload,x as Statement,S as __namedExportsOrder,m as default};