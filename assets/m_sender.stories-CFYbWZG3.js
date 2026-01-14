import{j as o,r as l}from"./iframe-CxFoVGlh.js";import{M as m}from"./index-DQbZcVOd.js";import{s as R}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJJrKu4R.js";const v={title:"@fe-free/ai/MSender",component:m,tags:["autodocs"]};function n(e){const[t,u]=l.useState(void 0);return o.jsx(m,{value:t,onChange:r=>{console.log("newValue",r),u(r)},onSubmit:r=>{console.log("onSubmit",r)},...e})}const s={render:e=>o.jsx(n,{...e}),args:{onSubmit:e=>{console.log(e)}}},c={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(n,{...e})},d={render:e=>{const[t,u]=l.useState(void 0),r=a=>{console.log("handleSubmit",a)},p=l.useCallback(async()=>{u("这是录音的文本")},[]),i=l.useCallback(async a=>{if(console.log("handleRecordEnd isSend",a),a){await R(1e3);const S=t;r({...e.value||{},text:S}),alert("submit")}},[e.value,t]);return o.jsxs("div",{children:[o.jsx(n,{...e,allowSpeech:{onRecordStart:p,onRecordEnd:i}}),o.jsx(n,{...e,defaultType:"record",allowSpeech:{onRecordStart:p,onRecordEnd:i}}),o.jsx(n,{...e,defaultType:"record",allowSpeech:{onRecordStart:()=>Promise.reject(new Error("no permission")),onRecordEnd:i}})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    // 假设是字符串，实则是 buffer
    const [recordVoice, setRecordVoice] = useState<string | undefined>(undefined);
    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };
    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      setRecordVoice('这是录音的文本');
      return;
    }, []);
    const handleRecordEnd = useCallback(async (isSend: boolean) => {
      console.log('handleRecordEnd isSend', isSend);
      if (isSend) {
        await sleep(1000);
        const recordResult = recordVoice;
        handleSubmit({
          ...(props.value || {}),
          text: recordResult
        });
        alert('submit');
      }
    }, [props.value, recordVoice]);
    return <div>
        <Component {...props} allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />

        <Component {...props} defaultType="record" allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />

        <Component {...props} defaultType="record" allowSpeech={{
        onRecordStart: () => Promise.reject(new Error('no permission')),
        onRecordEnd: handleRecordEnd
      }} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","Loading","AllowSpeech"];export{d as AllowSpeech,s as Default,c as Loading,x as __namedExportsOrder,v as default};
