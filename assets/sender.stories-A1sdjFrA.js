import{j as o,r as u}from"./iframe-CIQ77GZG.js";import{S as i}from"./index-CNE4Z8lM.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"@fe-free/ai/Sender",component:i,tags:["autodocs"]};function r(e){const[l,d]=u.useState(void 0);return o.jsx(i,{value:l,onChange:n=>{console.log("newValue",n),d(n)},onSubmit:n=>{console.log("onSubmit",n)},...e})}const s={render:e=>o.jsx(r,{...e}),args:{onSubmit:e=>{console.log(e)}}},a={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(r,{...e})},t={args:{allowUpload:{uploadAction:"/api/ai-service/v1/file_upload/upload",filesMaxCount:3}},render:e=>o.jsx(r,{...e})},p={render:e=>{const[l,d]=u.useState(!0);return o.jsx(r,{...e,allowSpeech:{recording:l,onRecordingChange:d}})}},c={args:{statement:"内容由 AI 生成，无法确保信息的真实准确，仅供参考"},render:e=>o.jsx(r,{...e})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3
    }
  },
  render: props => <Component {...props} />
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [recording, setRecording] = useState(true);
    return <Component {...props} allowSpeech={{
      recording,
      onRecordingChange: setRecording
    }} />;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    statement: '内容由 AI 生成，无法确保信息的真实准确，仅供参考'
  },
  render: props => <Component {...props} />
}`,...c.parameters?.docs?.source}}};const f=["Default","Loading","AllowUpload","AllowSpeech","Statement"];export{p as AllowSpeech,t as AllowUpload,s as Default,a as Loading,c as Statement,f as __namedExportsOrder,x as default};
