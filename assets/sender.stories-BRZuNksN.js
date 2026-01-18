import{j as o,r as d}from"./iframe-B7VN3Wem.js";import{S as i}from"./index-DHKCR0R5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-O7nA1r26.js";import"./index-DrFu-skq.js";const x={title:"@fe-free/ai/Sender",component:i,tags:["autodocs"]};function p(e){const[c,l]=d.useState(void 0);return o.jsx(i,{value:c,onChange:r=>{console.log("newValue",r),l(r)},onSubmit:r=>{console.log("onSubmit",r)},...e})}const n={render:e=>o.jsx(p,{...e}),args:{onSubmit:e=>{console.log(e)}}},a={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(p,{...e})},s={args:{allowUpload:{uploadAction:"/api/ai-service/v1/file_upload/upload",filesMaxCount:3}},render:e=>o.jsx(p,{...e})},t={render:e=>{const[c,l]=d.useState(!0);return o.jsx(p,{...e,allowSpeech:{recording:c,onRecordingChange:l}})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    allowUpload: {
      uploadAction: '/api/ai-service/v1/file_upload/upload',
      filesMaxCount: 3
    }
  },
  render: props => <Component {...props} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [recording, setRecording] = useState(true);
    return <Component {...props} allowSpeech={{
      recording,
      onRecordingChange: setRecording
    }} />;
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","Loading","AllowUpload","AllowSpeech"];export{t as AllowSpeech,s as AllowUpload,n as Default,a as Loading,v as __namedExportsOrder,x as default};
