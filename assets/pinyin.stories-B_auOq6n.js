import{j as r}from"./jsx-runtime-DSTTij0Z.js";import"./date-B1aHfNpt.js";import{p as a,a as t,b as o}from"./filter-C3E5M2Gd.js";import"./iframe-DslcrLO9.js";import"./preload-helper-D9Z9MdNV.js";import"./isNumber-C3pds2mi.js";import"./map-CCGXqT_7.js";import"./_nodeUtil-B1Ma02pK.js";const y={title:"@fe-free/tool/Pinyin",tags:["autodocs"],parameters:{docs:{description:{component:"Pinyin 相关工具函数，支持中文转拼音、首字母提取、拼音匹配与过滤，适用于搜索、筛选等场景。"}}}},e={render:()=>r.jsx("div",{children:a("你好")})},i={render:()=>r.jsx("div",{children:a("你好","first_letter")})},n={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["匹配结果: ",t("你好","nh")+""]}),r.jsxs("div",{children:["不匹配结果: ",t("你好","wo")+""]})]})},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["过滤结果: ",o(["你好","我们"],"nh")]}),r.jsxs("div",{children:["过滤结果: ",o(["你好","我们"],"wo")]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Basic","FirstLetter","PinyinMatch","PinyinFilter"];export{e as Basic,i as FirstLetter,s as PinyinFilter,n as PinyinMatch,x as __namedExportsOrder,y as default};
