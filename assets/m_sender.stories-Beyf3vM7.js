import{j as a,r as t,A as v}from"./iframe-CMPoagji.js";import{M as b}from"./index-CeKBVpXv.js";import{g as E,a as f}from"./index-D5mFeJj6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DoxDeKr3.js";import"./index-DrFu-skq.js";const j={title:"@fe-free/ai/MSender",component:b,tags:["autodocs"]};function c(e){const[d,n]=t.useState(void 0);return a.jsx(b,{value:d,onChange:r=>{console.log("newValue",r),n(r)},onSubmit:r=>{console.log("onSubmit",r)},...e})}const l={render:e=>a.jsx(c,{...e}),args:{onSubmit:e=>{console.log(e)}}},u={render:e=>a.jsx(c,{...e}),args:{autoFocus:!0,onSubmit:e=>{console.log(e)}}},p={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>a.jsx(c,{...e})},i={render:e=>{const d=s=>{console.log("handleSubmit",s)},n=t.useCallback(async()=>{},[]),r=t.useCallback(async s=>{console.log("handleRecordEnd isSend",s),s&&d({...e.value||{},text:"假设这是识别的文字"})},[e.value]);return a.jsxs("div",{className:"flex flex-col gap-10",children:[a.jsx(c,{...e,allowSpeech:{onRecordStart:n,onRecordEnd:r}}),a.jsx(c,{value:{text:"test"},...e,allowSpeech:{onRecordStart:n,onRecordEnd:r}}),a.jsx("div",{}),a.jsx(c,{...e,defaultType:"record",allowSpeech:{onRecordStart:n,onRecordEnd:r}})]})}},m={render:e=>{const{message:d}=v.useApp(),{start:n,stop:r}=t.useMemo(()=>E(),[]),s=o=>{console.log("handleSubmit",o)},R=t.useCallback(async()=>{try{await n({onAudio:o=>{console.log("onAudio",o)},onError:o=>{d.error(o.message)}})}catch(o){console.error(o)}},[]),h=t.useCallback(async o=>{console.log("handleRecordEnd isSend",o);const g=await r();console.log("voiceData",g),o&&s({...e.value||{},text:"假设这是识别的文字"})},[e.value,r]);return a.jsx(c,{...e,defaultType:"record",allowSpeech:{onRecordStart:R,onRecordEnd:h}})}},S={render:e=>{const{message:d}=v.useApp(),{start:n,stop:r}=t.useMemo(()=>f(),[]),s=o=>{console.log("handleSubmit",o)},R=t.useCallback(async()=>{try{await n({onAudio:o=>{console.log("onAudio",o)},onError:o=>{d.error(o.message)}})}catch(o){console.error(o)}},[]),h=t.useCallback(async o=>{console.log("handleRecordEnd isSend",o);const g=await r();console.log("voiceData",g),o&&s({...e.value||{},text:"假设这是识别的文字"})},[e.value,r]);return a.jsx(c,{...e,defaultType:"record",allowSpeech:{onRecordStart:R,onRecordEnd:h}})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    autoFocus: true,
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };
    const handleRecordStart = useCallback(async () => {
      // fake
    }, []);
    const handleRecordEnd = useCallback(async isSend => {
      console.log('handleRecordEnd isSend', isSend);
      if (isSend) {
        handleSubmit({
          ...(props.value || {}),
          text: '假设这是识别的文字'
        });
      }
    }, [props.value]);
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      message
    } = App.useApp();
    const {
      start: startRecord,
      stop: stopRecord
    } = useMemo(() => {
      return getRecordAudioOfPCM();
    }, []);
    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };
    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      try {
        await startRecord({
          onAudio: data => {
            console.log('onAudio', data);
          },
          onError: err => {
            message.error(err.message);
          }
        });
      } catch (err) {
        console.error(err);
      }
      return;
    }, []);
    const handleRecordEnd = useCallback(async isSend => {
      console.log('handleRecordEnd isSend', isSend);
      const voiceData = await stopRecord();
      console.log('voiceData', voiceData);
      if (isSend) {
        handleSubmit({
          ...(props.value || {}),
          text: '假设这是识别的文字'
        });
      }
    }, [props.value, stopRecord]);
    return <Component {...props} defaultType="record" allowSpeech={{
      onRecordStart: handleRecordStart,
      onRecordEnd: handleRecordEnd
    }} />;
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      message
    } = App.useApp();
    const {
      start: startRecord,
      stop: stopRecord
    } = useMemo(() => {
      return getRecordAudioOfBlob();
    }, []);
    const handleSubmit = (value: MSenderValue) => {
      console.log('handleSubmit', value);
    };
    const handleRecordStart = useCallback(async () => {
      // 假设这是录音的文本
      try {
        await startRecord({
          onAudio: data => {
            console.log('onAudio', data);
          },
          onError: err => {
            message.error(err.message);
          }
        });
      } catch (err) {
        console.error(err);
      }
      return;
    }, []);
    const handleRecordEnd = useCallback(async isSend => {
      console.log('handleRecordEnd isSend', isSend);
      const voiceData = await stopRecord();
      console.log('voiceData', voiceData);
      if (isSend) {
        handleSubmit({
          ...(props.value || {}),
          text: '假设这是识别的文字'
        });
      }
    }, [props.value, stopRecord]);
    return <Component {...props} defaultType="record" allowSpeech={{
      onRecordStart: handleRecordStart,
      onRecordEnd: handleRecordEnd
    }} />;
  }
}`,...S.parameters?.docs?.source}}};const k=["Default","AutoFocus","Loading","AllowSpeech","AllowSpeechPCM","AllowSpeechBlob"];export{i as AllowSpeech,S as AllowSpeechBlob,m as AllowSpeechPCM,u as AutoFocus,l as Default,p as Loading,k as __namedExportsOrder,j as default};
