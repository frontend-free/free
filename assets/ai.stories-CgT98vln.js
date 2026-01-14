import{l6 as P,l9 as z,l8 as q,a1 as F,r as D,j as d}from"./iframe-CxFoVGlh.js";import{g as y,C as U,a as k,M as B}from"./index-DQbZcVOd.js";import{s as $}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJJrKu4R.js";const H={},A=e=>{let r;const s=new Set,n=(t,a)=>{const i=typeof t=="function"?t(r):t;if(!Object.is(i,r)){const f=r;r=a??(typeof i!="object"||i===null)?i:Object.assign({},r,i),s.forEach(g=>g(r,f))}},u=()=>r,v={setState:n,getState:u,getInitialState:()=>c,subscribe:t=>(s.add(t),()=>s.delete(t)),destroy:()=>{(H?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}},c=r=e(n,u,v);return v},J=e=>e?A(e):A;var _={exports:{}},R={};var V;function K(){if(V)return R;V=1;var e=P(),r=z();function s(c,t){return c===t&&(c!==0||1/c===1/t)||c!==c&&t!==t}var n=typeof Object.is=="function"?Object.is:s,u=r.useSyncExternalStore,o=e.useRef,l=e.useEffect,p=e.useMemo,v=e.useDebugValue;return R.useSyncExternalStoreWithSelector=function(c,t,a,i,f){var g=o(null);if(g.current===null){var h={hasValue:!1,value:null};g.current=h}else h=g.current;g=p(function(){function w(m){if(!N){if(N=!0,E=m,m=i(m),f!==void 0&&h.hasValue){var S=h.value;if(f(S,m))return I=S}return I=m}if(S=I,n(E,m))return S;var M=i(m);return f!==void 0&&f(S,M)?(E=m,S):(E=m,I=M)}var N=!1,E,I,C=a===void 0?null:a;return[function(){return w(t())},C===null?void 0:function(){return w(C())}]},[t,a,i,f]);var x=u(c,g[0],g[1]);return l(function(){h.hasValue=!0,h.value=x},[x]),v(x),x},R}var O;function L(){return O||(O=1,_.exports=K()),_.exports}var Q=L();const X=q(Q),G={},{useDebugValue:Y}=F,{useSyncExternalStoreWithSelector:Z}=X;let W=!1;const ee=e=>e;function te(e,r=ee,s){(G?"production":void 0)!=="production"&&s&&!W&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),W=!0);const n=Z(e.subscribe,e.getState,e.getServerState||e.getInitialState,r,s);return Y(n),n}const T=e=>{(G?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof e=="function"?J(e):e,s=(n,u)=>te(r,n,u);return Object.assign(s,r),s},se=e=>e?T(e):T;function re(){const e=se((s,n,u)=>({senderValue:void 0,setSenderValue:o=>{s(()=>({senderValue:o}))},messages:[],addMessage:o=>{s(l=>({messages:[...l.messages,{...o,updatedAt:Date.now()}]}))},updateMessage:o=>{s(l=>({messages:l.messages.map(p=>p.uuid===o.uuid?{...o,updatedAt:Date.now()}:p)}))},reset:()=>{s(u.getInitialState())}}));return{useChatStore:e,useChatStoreComputed:()=>{const s=e(u=>u.messages);return{chatStatus:D.useMemo(()=>s[s.length-1]?.status,[s])}}}}var b=(e=>(e.PENDING="pending",e.STREAMING="streaming",e.DONE="done",e.ERROR="error",e))(b||{});const le={title:"@fe-free/ai/Example",tags:["autodocs"]};async function ne(e,{onUpdate:r}){await $(1e3);let s=0;const n=setInterval(()=>{s>50?(clearInterval(n),r({event:"done",data:""})):(r({event:"message",data:"回复"+s}),s++)},300)}function oe(){const{useChatStore:e,useChatStoreComputed:r}=D.useMemo(()=>re(),[]),s=e(t=>t.senderValue),n=e(t=>t.setSenderValue),u=e(t=>t.messages),o=e(t=>t.addMessage),l=e(t=>t.updateMessage),{chatStatus:p}=r(),v=p===b.PENDING||p===b.STREAMING;D.useEffect(()=>{o({uuid:y(),user:{text:"hello"},ai:{data:{text:`你好，
我是AI，很高兴认识你`}}}),o({uuid:y(),user:{text:"hello"},ai:{data:{text:`你
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
`}}})},[]);const c=D.useCallback(t=>{console.log("onSubmit",t);const a={uuid:y(),status:b.PENDING,user:{...t},ai:{data:{text:""}}};o(a),ne(t,{onUpdate:({event:i,data:f})=>{i==="message"&&(a.status=b.STREAMING,a.ai.data.text+=f,l({...a})),i==="done"&&(a.status=b.DONE,l({...a}))}})},[]);return d.jsx("div",{className:"h-[800px] w-[500px] border border-red-500",children:d.jsx(U,{end:d.jsx("div",{className:"p-2",children:d.jsx(B,{value:s,onChange:t=>n(t),loading:v,onSubmit:c})}),children:d.jsx(k,{messages:u,renderMessageOfUser:t=>d.jsx("div",{className:"p-2",children:d.jsx("div",{className:"rounded-xl bg-primary p-2 text-white",children:t.user?.text})}),renderMessageOfAI:t=>d.jsxs("div",{className:"p-2",children:[d.jsx("div",{children:t.status}),d.jsx("pre",{className:"whitespace-pre-wrap",children:t.ai?.data?.text})]})})})})}const j={render:()=>d.jsx(oe,{})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Component />;
  }
}`,...j.parameters?.docs?.source}}};const fe=["Default"];export{j as Default,fe as __namedExportsOrder,le as default};
