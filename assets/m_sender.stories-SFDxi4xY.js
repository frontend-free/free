import{j as o,r as u}from"./iframe-Dbz12fmw.js";import{M as S}from"./index-DP3Cm8Hg.js";import{s as R}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CR92VDxb.js";import"./index-DrFu-skq.js";const C={title:"@fe-free/ai/MSender",component:S,tags:["autodocs"]};function n(e){const[a,p]=u.useState(void 0);return o.jsx(S,{value:a,onChange:r=>{console.log("newValue",r),p(r)},onSubmit:r=>{console.log("onSubmit",r)},...e})}const s={render:e=>o.jsx(n,{...e}),args:{onSubmit:e=>{console.log(e)}}},c={render:e=>o.jsx(n,{...e}),args:{autoFocus:!0,onSubmit:e=>{console.log(e)}}},d={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>o.jsx(n,{...e})},l={render:e=>{const[a,p]=u.useState(void 0),r=t=>{console.log("handleSubmit",t)},i=u.useCallback(async()=>{p("这是录音的文本")},[]),m=u.useCallback(async t=>{if(console.log("handleRecordEnd isSend",t),t){await R(1e3);const g=a;r({...e.value||{},text:g})}},[e.value,a]);return o.jsxs("div",{className:"flex flex-col gap-10",children:[o.jsx(n,{...e,allowSpeech:{onRecordStart:i,onRecordEnd:m}}),o.jsx(n,{value:{text:"test"},...e,allowSpeech:{onRecordStart:i,onRecordEnd:m}}),o.jsx("div",{}),o.jsx(n,{...e,defaultType:"record",allowSpeech:{onRecordStart:i,onRecordEnd:m}})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      }
    }, [props.value, recordVoice]);
    return <div className="flex flex-col gap-10">
        <Component {...props} allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />

        <Component value={{
        text: 'test'
      } as MSenderValue} {...props} allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />

        <div />

        <Component {...props} defaultType="record" allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","AutoFocus","Loading","AllowSpeech"];export{l as AllowSpeech,c as AutoFocus,s as Default,d as Loading,j as __namedExportsOrder,C as default};
