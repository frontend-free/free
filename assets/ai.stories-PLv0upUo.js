import{lh as A,li as G,lj as F,lk as q,ll as U,l6 as B,lm as K,l8 as $,a1 as H,r as D,j as m}from"./iframe--Ad6BiIO.js";import{g as R,C as J,a as L,M as Q}from"./index-c5COiZFL.js";import{s as X}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C4Nxvahc.js";function Y(e,r,s,o){if(!A(e))return e;r=G(r,e);for(var n=-1,a=r.length,f=a-1,i=e;i!=null&&++n<a;){var d=F(r[n]),u=s;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(n!=f){var t=i[d];u=void 0,u===void 0&&(u=A(t)?t:q(r[n+1])?[]:{})}U(i,d,u),i=i[d]}return e}function Z(e,r,s){return e==null?e:Y(e,r,s)}const k={},O=e=>{let r;const s=new Set,o=(t,c)=>{const l=typeof t=="function"?t(r):t;if(!Object.is(l,r)){const g=r;r=c??(typeof l!="object"||l===null)?l:Object.assign({},r,l),s.forEach(p=>p(r,g))}},n=()=>r,d={setState:o,getState:n,getInitialState:()=>u,subscribe:t=>(s.add(t),()=>s.delete(t)),destroy:()=>{(k?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}},u=r=e(o,n,d);return d},ee=e=>e?O(e):O;var N={exports:{}},y={};var T;function te(){if(T)return y;T=1;var e=B(),r=K();function s(u,t){return u===t&&(u!==0||1/u===1/t)||u!==u&&t!==t}var o=typeof Object.is=="function"?Object.is:s,n=r.useSyncExternalStore,a=e.useRef,f=e.useEffect,i=e.useMemo,d=e.useDebugValue;return y.useSyncExternalStoreWithSelector=function(u,t,c,l,g){var p=a(null);if(p.current===null){var h={hasValue:!1,value:null};p.current=h}else h=p.current;p=i(function(){function C(v){if(!M){if(M=!0,E=v,v=l(v),g!==void 0&&h.hasValue){var S=h.value;if(g(S,v))return I=S}return I=v}if(S=I,o(E,v))return S;var w=l(v);return g!==void 0&&g(S,w)?(E=v,S):(E=v,I=w)}var M=!1,E,I,j=c===void 0?null:c;return[function(){return C(t())},j===null?void 0:function(){return C(j())}]},[t,c,l,g]);var b=n(u,p[0],p[1]);return f(function(){h.hasValue=!0,h.value=b},[b]),d(b),b},y}var V;function se(){return V||(V=1,N.exports=te()),N.exports}var re=se();const ne=$(re),z={},{useDebugValue:oe}=H,{useSyncExternalStoreWithSelector:ae}=ne;let W=!1;const ue=e=>e;function ie(e,r=ue,s){(z?"production":void 0)!=="production"&&s&&!W&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),W=!0);const o=ae(e.subscribe,e.getState,e.getServerState||e.getInitialState,r,s);return oe(o),o}const P=e=>{(z?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof e=="function"?ee(e):e,s=(o,n)=>ie(r,o,n);return Object.assign(s,r),s},ce=e=>e?P(e):P;function de(){const e=ce((s,o,n)=>({senderValue:void 0,setSenderValue:a=>{s(()=>({senderValue:a}))},messages:[],addMessage:a=>{s(f=>({messages:[...f.messages,{...a,updatedAt:Date.now()}]}))},updateMessage:a=>{s(f=>({messages:f.messages.map(i=>i.uuid===a.uuid?{...a,updatedAt:Date.now()}:i)}))},reset:()=>{s(n.getInitialState())}}));return{useChatStore:e,useChatStoreComputed:()=>{const s=e(n=>n.messages);return{chatStatus:D.useMemo(()=>s[s.length-1]?.status,[s])}}}}var x=(e=>(e.PENDING="pending",e.STREAMING="streaming",e.DONE="done",e.ERROR="error",e))(x||{});const Se={title:"@fe-free/ai/Example",tags:["autodocs"]};async function le(e,{onUpdate:r}){await X(1e3);let s=0;const o=setInterval(()=>{s>50?(clearInterval(o),r({event:"done",data:""})):(r({event:"message",data:"回复"+s}),s++)},300)}function fe(){const{useChatStore:e,useChatStoreComputed:r}=D.useMemo(()=>de(),[]),s=e(t=>t.senderValue),o=e(t=>t.setSenderValue),n=e(t=>t.messages),a=e(t=>t.addMessage),f=e(t=>t.updateMessage),{chatStatus:i}=r(),d=i===x.PENDING||i===x.STREAMING;D.useEffect(()=>{a({uuid:R(),user:{text:"hello"},ai:{data:{text:`你好，
我是AI，很高兴认识你`}}}),a({uuid:R(),user:{text:"hello"},ai:{data:{text:`你
好，
我
是
AI，
很
高
兴
认
识
你
你
好，
我
是
AI，
很
高
兴
认
识
你
很
高
兴
认
识
你
`}}})},[]);const u=D.useCallback(t=>{console.log("onSubmit",t);const c={uuid:R(),status:x.PENDING,user:{...t}};a(c),le(t,{onUpdate:({event:l,data:g})=>{if(l==="message"){c.status=x.STREAMING;const p=c.ai?.data?.text||"";Z(c,"ai.data.text",p+g),f({...c})}l==="done"&&(c.status=x.DONE,f({...c}))}})},[]);return m.jsx("div",{className:"h-[800px] w-[500px] border border-red-500",children:m.jsx(J,{end:m.jsx("div",{className:"p-2",onFocus:()=>{console.log("onFocus")},onBlur:()=>{console.log("onBlur")},children:m.jsx(Q,{value:s,onChange:t=>o(t),loading:d,onSubmit:u})}),children:m.jsx(L,{messages:n,renderMessageOfUser:({message:t})=>m.jsx("div",{className:"p-2",children:m.jsx("div",{className:"rounded-xl bg-primary p-2 text-white",children:t.user?.text})}),renderMessageOfAI:({message:t})=>m.jsxs("div",{className:"p-2",children:[m.jsx("div",{children:t.status}),m.jsx("pre",{className:"whitespace-pre-wrap",children:t.ai?.data?.text})]})})})})}const _={render:()=>m.jsx(fe,{})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Component />;
  }
}`,..._.parameters?.docs?.source}}};const xe=["Default"];export{_ as Default,xe as __namedExportsOrder,Se as default};
