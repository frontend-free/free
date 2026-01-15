import{lh as z,li as B,lj as L,lk as q,ll as U,r as x,lm as $,j as r,ln as N,C as K,B as M,cu as H,cv as J,f$ as Q,g0 as X,c$ as Y,d0 as Z,l6 as ee,lo as te,l8 as se,a1 as ne}from"./iframe-B2t26p-v.js";import{g as D,C as re,a as ae,M as oe}from"./index-BeFwLqWx.js";import{s as ie}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CWFLi4sS.js";function ue(e,t,n,a){if(!z(e))return e;t=B(t,e);for(var o=-1,i=t.length,m=i-1,c=e;c!=null&&++o<i;){var d=L(t[o]),u=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=m){var s=c[d];u=void 0,u===void 0&&(u=z(s)?s:q(t[o+1])?[]:{})}U(c,d,u),c=c[d]}return e}function ce(e,t,n){return e==null?e:ue(e,t,n)}function le({value:e,onCopied:t}){const[n,a]=x.useState(!1),{message:o}=$.useApp(),i=x.useCallback(async()=>{a(!0),t?.(),o.success("复制成功")},[t,o]);return r.jsx(N,{title:"复制",children:r.jsx(K,{value:e,className:"cursor-pointer text-03",onCopied:i,children:r.jsx(M,{type:"text",size:"small",className:"text-03",icon:n?r.jsx(H,{}):r.jsx(J,{})})})})}function de({onClick:e}){const[t,n]=x.useState(!1),a=x.useCallback(async()=>{await Promise.resolve(e?.(!t)),n(!t)},[e,t]);return r.jsx(N,{title:t?"取消点赞":"点赞",children:r.jsx(M,{type:"text",onClick:a,size:"small",className:"text-03",icon:t?r.jsx(Q,{}):r.jsx(X,{})})})}function fe({onClick:e}){const[t,n]=x.useState(!1),a=x.useCallback(async()=>{await Promise.resolve(e?.(!t)),n(!t)},[e,t]);return r.jsx(N,{title:t?"取消点踩":"点踩",children:r.jsx(M,{type:"text",onClick:a,size:"small",className:"text-03",icon:t?r.jsx(Y,{}):r.jsx(Z,{})})})}const I={Copy:le,Like:de,Dislike:fe},me={},P=e=>{let t;const n=new Set,a=(s,l)=>{const f=typeof s=="function"?s(t):s;if(!Object.is(f,t)){const v=t;t=l??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(p=>p(t,v))}},o=()=>t,d={setState:a,getState:o,getInitialState:()=>u,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{(me?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(a,o,d);return d},pe=e=>e?P(e):P;var _={exports:{}},A={};var T;function xe(){if(T)return A;T=1;var e=ee(),t=te();function n(u,s){return u===s&&(u!==0||1/u===1/s)||u!==u&&s!==s}var a=typeof Object.is=="function"?Object.is:n,o=t.useSyncExternalStore,i=e.useRef,m=e.useEffect,c=e.useMemo,d=e.useDebugValue;return A.useSyncExternalStoreWithSelector=function(u,s,l,f,v){var p=i(null);if(p.current===null){var h={hasValue:!1,value:null};p.current=h}else h=p.current;p=c(function(){function O(g){if(!R){if(R=!0,C=g,g=f(g),v!==void 0&&h.hasValue){var S=h.value;if(v(S,g))return E=S}return E=g}if(S=E,a(C,g))return S;var k=f(g);return v!==void 0&&v(S,k)?(C=g,S):(C=g,E=k)}var R=!1,C,E,w=l===void 0?null:l;return[function(){return O(s())},w===null?void 0:function(){return O(w())}]},[s,l,f,v]);var j=o(u,p[0],p[1]);return m(function(){h.hasValue=!0,h.value=j},[j]),d(j),j},A}var F;function ve(){return F||(F=1,_.exports=xe()),_.exports}var ge=ve();const he=se(ge),G={},{useDebugValue:Se}=ne,{useSyncExternalStoreWithSelector:be}=he;let V=!1;const je=e=>e;function Ce(e,t=je,n){(G?"production":void 0)!=="production"&&n&&!V&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),V=!0);const a=be(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Se(a),a}const W=e=>{(G?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?pe(e):e,n=(a,o)=>Ce(t,a,o);return Object.assign(n,t),n},Ee=e=>e?W(e):W;function ye(){const e=Ee((n,a,o)=>({senderValue:void 0,setSenderValue:i=>{n(()=>({senderValue:i}))},messages:[],addMessage:i=>{n(m=>({messages:[...m.messages,{...i,updatedAt:Date.now()}]}))},updateMessage:i=>{n(m=>({messages:m.messages.map(c=>c.uuid===i.uuid?{...i,updatedAt:Date.now()}:c)}))},reset:()=>{n(o.getInitialState())}}));return{useChatStore:e,useChatStoreComputed:()=>{const n=e(o=>o.messages);return{chatStatus:x.useMemo(()=>n[n.length-1]?.status,[n])}}}}var b=(e=>(e.PENDING="pending",e.STREAMING="streaming",e.DONE="done",e.ERROR="error",e))(b||{});const Re={title:"@fe-free/ai/Example",tags:["autodocs"]};async function De(e,{onUpdate:t}){await ie(1e3);let n=0;const a=setInterval(()=>{n>50?(clearInterval(a),t({event:"done",data:""})):(t({event:"message",data:"回复"+n}),n++)},300)}function Ie(){const{useChatStore:e,useChatStoreComputed:t}=x.useMemo(()=>ye(),[]),n=e(s=>s.senderValue),a=e(s=>s.setSenderValue),o=e(s=>s.messages),i=e(s=>s.addMessage),m=e(s=>s.updateMessage),{chatStatus:c}=t(),d=c===b.PENDING||c===b.STREAMING;x.useEffect(()=>{i({uuid:D(),user:{text:"hello"},ai:{data:{text:`你好，
我是AI，很高兴认识你`}}}),i({uuid:D(),user:{text:"hello"},ai:{data:{text:`你
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
`}}})},[]);const u=x.useCallback(s=>{console.log("onSubmit",s);const l={uuid:D(),status:b.PENDING,user:{...s}};i(l),De(s,{onUpdate:({event:f,data:v})=>{if(f==="message"){l.status=b.STREAMING;const p=l.ai?.data?.text||"";ce(l,"ai.data.text",p+v),m({...l})}f==="done"&&(l.status=b.DONE,m({...l}))}})},[]);return r.jsx("div",{className:"h-[800px] w-[500px] border border-red-500",children:r.jsx(re,{end:r.jsx("div",{className:"p-2",onFocus:()=>{console.log("onFocus")},onBlur:()=>{console.log("onBlur")},children:r.jsx(oe,{value:n,onChange:s=>a(s),loading:d,onSubmit:u})}),children:r.jsx(ae,{messages:o,renderMessageOfUser:({message:s})=>r.jsx("div",{className:"p-2",children:r.jsx("div",{className:"rounded-xl bg-primary p-2 text-white",children:s.user?.text})}),renderMessageOfAI:({message:s})=>r.jsxs("div",{className:"p-2",children:[r.jsx("div",{children:s.status}),r.jsx("pre",{className:"whitespace-pre-wrap",children:s.ai?.data?.text}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(I.Copy,{value:s.ai?.data?.text||""}),r.jsx(I.Like,{onClick:async()=>{}}),r.jsx(I.Dislike,{onClick:async()=>{}})]})]})})})})}const y={render:()=>r.jsx(Ie,{})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Component />;
  }
}`,...y.parameters?.docs?.source}}};const we=["Default"];export{y as Default,we as __namedExportsOrder,Re as default};
