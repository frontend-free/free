import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{p as F,a as t,b as a}from"./filter-DOlu8lCY.js";import"./date-BDUOmFEF.js";import"./index-D2MAbzvX.js";import"./isNumber-Dc4sICNo.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _={title:"@fe-free/tool/Pinyin",tags:["autodocs"]},e={render:()=>r.jsx("div",{children:F("你好")})},i={render:()=>r.jsx("div",{children:F("你好","first_letter")})},n={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["匹配结果: ",t("你好","nh")+""]}),r.jsxs("div",{children:["不匹配结果: ",t("你好","wo")+""]})]})},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["过滤结果: ",a(["你好","我们"],"nh")]}),r.jsxs("div",{children:["过滤结果: ",a(["你好","我们"],"wo")]})]})};var o,d,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好')}</div>
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好', 'first_letter')}</div>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var v,h,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
      <div>匹配结果: {pinyinMatch('你好', 'nh') + ''}</div>
      <div>不匹配结果: {pinyinMatch('你好', 'wo') + ''}</div>
    </>
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,x,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'nh')}</div>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'wo')}</div>
    </>
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const B=["Basic","FirstLetter","PinyinMatch","PinyinFilter"];export{e as Basic,i as FirstLetter,s as PinyinFilter,n as PinyinMatch,B as __namedExportsOrder,_ as default};
