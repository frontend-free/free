import{j as r}from"./iframe-BQwWGWhi.js";import{p as o,a as t,b as a}from"./filter-BBt_fA-3.js";import"./preload-helper-D9Z9MdNV.js";const m={title:"@fe-free/tool/Pinyin",tags:["autodocs"],parameters:{docs:{description:{component:"Pinyin 相关工具函数，支持中文转拼音、首字母提取、拼音匹配与过滤，适用于搜索、筛选等场景。"}}}},e={render:()=>r.jsx("div",{children:o("你好")})},i={render:()=>r.jsx("div",{children:o("你好","first_letter")})},n={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["匹配结果: ",t("你好","nh")+""]}),r.jsxs("div",{children:["不匹配结果: ",t("你好","wo")+""]})]})},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["过滤结果: ",a(["你好","我们"],"nh")]}),r.jsxs("div",{children:["过滤结果: ",a(["你好","我们"],"wo")]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好')}</div>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好', 'first_letter')}</div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div>匹配结果: {pinyinMatch('你好', 'nh') + ''}</div>
      <div>不匹配结果: {pinyinMatch('你好', 'wo') + ''}</div>
    </>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'nh')}</div>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'wo')}</div>
    </>
}`,...s.parameters?.docs?.source}}};const l=["Basic","FirstLetter","PinyinMatch","PinyinFilter"];export{e as Basic,i as FirstLetter,s as PinyinFilter,n as PinyinMatch,l as __namedExportsOrder,m as default};
