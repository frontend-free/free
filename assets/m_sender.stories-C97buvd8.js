import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Na as n,Yi as r,Zi as i,da as a}from"./iframe-CLFZ225d.js";import{d as o,n as s,r as c,t as l}from"./src-CoJ70l3u.js";function u(e){let[t,n]=(0,d.useState)(void 0);return(0,f.jsx)(o,{value:t,onChange:e=>{console.log(`newValue`,e),n(e)},onSubmit:e=>{console.log(`onSubmit`,e)},...e})}var d,f,p,m,h,g,_,v,y,b;e((()=>{l(),i(),d=t(n()),f=r(),p={title:`@fe-free/ai/MSender`,component:o,tags:[`autodocs`]},m={render:e=>(0,f.jsx)(u,{...e}),args:{onSubmit:e=>{console.log(e)}}},h={render:e=>(0,f.jsx)(u,{...e}),args:{autoFocus:!0,onSubmit:e=>{console.log(e)}}},g={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>(0,f.jsx)(u,{...e})},_={render:e=>{let t=e=>{console.log(`handleSubmit`,e)},n=(0,d.useCallback)(async()=>{},[]),r=(0,d.useCallback)(async n=>{console.log(`handleRecordEnd isSend`,n),n&&t({...e.value,text:`假设这是识别的文字`})},[e.value]);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,f.jsx)(u,{...e,allowSpeech:{onRecordStart:n,onRecordEnd:r}}),(0,f.jsx)(u,{value:{text:`test`},...e,allowSpeech:{onRecordStart:n,onRecordEnd:r}}),(0,f.jsx)(`div`,{}),(0,f.jsx)(u,{...e,defaultType:`record`,allowSpeech:{onRecordStart:n,onRecordEnd:r}})]})}},v={render:e=>{let{message:t}=a.useApp(),{start:n,stop:r}=(0,d.useMemo)(()=>c(),[]),i=(0,d.useCallback)(e=>{console.log(`handleSubmit`,e)},[]),o=(0,d.useCallback)(async()=>{try{await n({onAudio:e=>{console.log(`onAudio`,e)},onError:e=>{t.error(e.message)}})}catch(e){console.error(e)}},[n,t]),s=(0,d.useCallback)(async t=>{console.log(`handleRecordEnd isSend`,t);let n=await r();console.log(`voiceData`,n),t&&i({...e.value,text:`假设这是识别的文字`})},[e.value,r,i]);return(0,f.jsx)(u,{...e,defaultType:`record`,allowSpeech:{onRecordStart:o,onRecordEnd:s}})}},y={render:e=>{let{message:t}=a.useApp(),{start:n,stop:r}=(0,d.useMemo)(()=>s(),[]),i=e=>{console.log(`handleSubmit`,e)},o=(0,d.useCallback)(async()=>{try{await n({onAudio:e=>{console.log(`onAudio`,e)},onError:e=>{t.error(e.message)}})}catch(e){console.error(e)}},[n,t]),c=(0,d.useCallback)(async t=>{console.log(`handleRecordEnd isSend`,t);let n=await r();console.log(`voiceData`,n),t&&i({...e.value,text:`假设这是识别的文字`})},[e.value,r]);return(0,f.jsx)(u,{...e,defaultType:`record`,allowSpeech:{onRecordStart:o,onRecordEnd:c}})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    autoFocus: true,
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
          ...props.value,
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const handleSubmit = useCallback((value: MSenderValue) => {
      console.log('handleSubmit', value);
    }, []);
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
    }, [startRecord, message]);
    const handleRecordEnd = useCallback(async isSend => {
      console.log('handleRecordEnd isSend', isSend);
      const voiceData = await stopRecord();
      console.log('voiceData', voiceData);
      if (isSend) {
        handleSubmit({
          ...props.value,
          text: '假设这是识别的文字'
        });
      }
    }, [props.value, stopRecord, handleSubmit]);
    return <Component {...props} defaultType="record" allowSpeech={{
      onRecordStart: handleRecordStart,
      onRecordEnd: handleRecordEnd
    }} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    }, [startRecord, message]);
    const handleRecordEnd = useCallback(async isSend => {
      console.log('handleRecordEnd isSend', isSend);
      const voiceData = await stopRecord();
      console.log('voiceData', voiceData);
      if (isSend) {
        handleSubmit({
          ...props.value,
          text: '假设这是识别的文字'
        });
      }
    }, [props.value, stopRecord]);
    return <Component {...props} defaultType="record" allowSpeech={{
      onRecordStart: handleRecordStart,
      onRecordEnd: handleRecordEnd
    }} />;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`AutoFocus`,`Loading`,`AllowSpeech`,`AllowSpeechPCM`,`AllowSpeechBlob`]}))();export{_ as AllowSpeech,y as AllowSpeechBlob,v as AllowSpeechPCM,h as AutoFocus,m as Default,g as Loading,b as __namedExportsOrder,p as default};