import{j as r,A as h,r as n}from"./iframe-D-jB6qCX.js";import{M as v}from"./index-DmjRZCEj.js";import{g as x,a as f}from"./index-D5mFeJj6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CVcV1uw3.js";import"./index-DrFu-skq.js";const j={title:"@fe-free/ai/MSender",component:v,tags:["autodocs"]};function t(e){const[s,c]=n.useState(void 0);return r.jsx(v,{value:s,onChange:a=>{console.log("newValue",a),c(a)},onSubmit:a=>{console.log("onSubmit",a)},...e})}const u={render:e=>r.jsx(t,{...e}),args:{onSubmit:e=>{console.log(e)}}},p={render:e=>r.jsx(t,{...e}),args:{autoFocus:!0,onSubmit:e=>{console.log(e)}}},i={args:{loading:!0,onSubmit:e=>{console.log(e)}},render:e=>r.jsx(t,{...e})},m={render:e=>{const{message:s}=h.useApp(),{start:c,stop:a}=n.useMemo(()=>x(),[]),g=o=>{console.log("handleSubmit",o)},d=n.useCallback(async()=>{try{await c({onAudio:o=>{console.log("onAudio",o)},onError:o=>{s.error(o.message)}})}catch(o){console.error(o)}},[]),l=n.useCallback(async o=>{console.log("handleRecordEnd isSend",o);const R=await a();console.log("voiceData",R),o&&g({...e.value||{},text:"假设这是识别的文字"})},[e.value,a]);return r.jsxs("div",{className:"flex flex-col gap-10",children:[r.jsx(t,{...e,allowSpeech:{onRecordStart:d,onRecordEnd:l}}),r.jsx(t,{value:{text:"test"},...e,allowSpeech:{onRecordStart:d,onRecordEnd:l}}),r.jsx("div",{}),r.jsx(t,{...e,defaultType:"record",allowSpeech:{onRecordStart:d,onRecordEnd:l}})]})}},S={render:e=>{const{message:s}=h.useApp(),{start:c,stop:a}=n.useMemo(()=>f(),[]),g=o=>{console.log("handleSubmit",o)},d=n.useCallback(async()=>{try{await c({onAudio:o=>{console.log("onAudio",o)},onError:o=>{s.error(o.message)}})}catch(o){console.error(o)}},[]),l=n.useCallback(async o=>{console.log("handleRecordEnd isSend",o);const R=await a();console.log("voiceData",R),o&&g({...e.value||{},text:"假设这是识别的文字"})},[e.value,a]);return r.jsx("div",{className:"flex flex-col gap-10",children:r.jsx(t,{...e,defaultType:"record",allowSpeech:{onRecordStart:d,onRecordEnd:l}})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Component {...props} />,
  args: {
    autoFocus: true,
    onSubmit: value => {
      console.log(value);
    }
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onSubmit: value => {
      console.log(value);
    }
  },
  render: props => <Component {...props} />
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
    return <div className="flex flex-col gap-10">
        <Component {...props} defaultType="record" allowSpeech={{
        onRecordStart: handleRecordStart,
        onRecordEnd: handleRecordEnd
      }} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const D=["Default","AutoFocus","Loading","AllowSpeech","AllowSpeech2"];export{m as AllowSpeech,S as AllowSpeech2,p as AutoFocus,u as Default,i as Loading,D as __namedExportsOrder,j as default};
