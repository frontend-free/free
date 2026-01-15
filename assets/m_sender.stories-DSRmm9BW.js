import{j as o,r as u}from"./iframe--Ad6BiIO.js";import{M as S}from"./index-c5COiZFL.js";import{s as g}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C4Nxvahc.js";const x={title:"@fe-free/ai/MSender",component:S,tags:["autodocs"]};function n(e){const[s,i]=u.useState(void 0);return o.jsx(S,{value:s,onChange:r=>{console.log("newValue",r),i(r)},onSubmit:r=>{console.log("onSubmit",r)},...e})}const a={render:e=>o.jsx(n,{...e}),args:{onSubmit:e=>{console.log(e)}}},c={render:e=>o.jsx(n,{...e}),args:{autoFocus:!0,onSubmit:e=>{console.log(e)}}},d={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(n,{...e})},l={render:e=>{const[s,i]=u.useState(void 0),r=t=>{console.log("handleSubmit",t)},m=u.useCallback(async()=>{i("这是录音的文本")},[]),p=u.useCallback(async t=>{if(console.log("handleRecordEnd isSend",t),t){await g(1e3);const R=s;r({...e.value||{},text:R}),alert("submit")}},[e.value,s]);return o.jsxs("div",{children:[o.jsx(n,{...e,allowSpeech:{onRecordStart:m,onRecordEnd:p}}),o.jsx(n,{...e,defaultType:"record",allowSpeech:{onRecordStart:m,onRecordEnd:p}}),o.jsx(n,{...e,defaultType:"record",allowSpeech:{onRecordStart:()=>Promise.reject(new Error("no permission")),onRecordEnd:p}})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    autoFocus: true,
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const w=["Default","AutoFocus","Loading","AllowSpeech"];export{l as AllowSpeech,c as AutoFocus,a as Default,d as Loading,w as __namedExportsOrder,x as default};
