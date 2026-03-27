import{r as m,j as o,B as S,I as f,P as x}from"./iframe-C-CLUcA3.js";import{S as g}from"./index-Ck3LveH3.js";import"./preload-helper-PPVm8Dsz.js";const U={title:"@fe-free/ai/Sender",component:g,tags:["autodocs"]};function r(e){const[i,u]=m.useState(void 0);return o.jsx(g,{value:i,onChange:a=>{console.log("newValue",a),u(a)},onSubmit:a=>{console.log("onSubmit",a)},...e})}const n={render:e=>o.jsx(r,{...e}),args:{onSubmit:e=>{console.log(e)}}},s={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(r,{...e})},t={args:{allowUpload:{uploadAction:"/api/ai-service/v1/file_upload/upload",filesMaxCount:3}},render:e=>o.jsx(r,{...e})},p={args:{allowUpload:{uploadAction:"/api/ai-service/v1/file_upload/upload",filesMaxCount:3,accept:"image/*,.pdf"}},render:e=>o.jsx(r,{...e})},c={args:{allowUpload:{uploadAction:"/api/ai-service/v1/file_upload/upload",accept:"image/*",renderUpload:e=>o.jsx(S,{type:"text",shape:"circle",icon:o.jsx(f,{component:x,onClick:()=>e.refUpload.current?.click()})})}},render:e=>o.jsx(r,{...e})},l={render:e=>{const[i,u]=m.useState(!0);return o.jsx(r,{...e,allowSpeech:{recording:i,onRecordingChange:u}})}},d={args:{statement:"内容由 AI 生成，无法确保信息的真实准确，仅供参考"},render:e=>o.jsx(r,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3
    }
  },
  render: props => <Component {...props} />
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3,
      accept: 'image/*,.pdf'
    }
  },
  render: props => <Component {...props} />
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      accept: 'image/*',
      renderUpload: props => <Button type="text" shape="circle" icon={<Icons component={PlusOutlined} onClick={() => props.refUpload.current?.click()} />} />
    }
  },
  render: props => <Component {...props} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [recording, setRecording] = useState(true);
    return <Component {...props} allowSpeech={{
      recording,
      onRecordingChange: setRecording
    }} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    statement: '内容由 AI 生成，无法确保信息的真实准确，仅供参考'
  },
  render: props => <Component {...props} />
}`,...d.parameters?.docs?.source}}};const w=["Default","Loading","AllowUpload","AllowUploadWithAccept","RenderUpload","AllowSpeech","Statement"];export{l as AllowSpeech,t as AllowUpload,p as AllowUploadWithAccept,n as Default,s as Loading,c as RenderUpload,d as Statement,w as __namedExportsOrder,U as default};
