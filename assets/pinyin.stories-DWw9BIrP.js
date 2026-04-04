import{n as e}from"./chunk-Bj-mKKzh.js";import{Sr as t,Yi as n,br as r,gr as i,xr as a}from"./iframe-CeTL_ZNt.js";var o,s,c,l,u,d,f;e((()=>{i(),o=n(),s={title:`@fe-free/tool/Pinyin`,tags:[`autodocs`],parameters:{docs:{description:{component:`Pinyin 相关工具函数，支持中文转拼音、首字母提取、拼音匹配与过滤，适用于搜索、筛选等场景。`}}}},c={render:()=>(0,o.jsx)(`div`,{children:t(`你好`)})},l={render:()=>(0,o.jsx)(`div`,{children:t(`你好`,`first_letter`)})},u={render:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{children:[`匹配结果: `,a(`你好`,`nh`)+``]}),(0,o.jsxs)(`div`,{children:[`不匹配结果: `,a(`你好`,`wo`)+``]})]})},d={render:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{children:[`过滤结果: `,r([`你好`,`我们`],`nh`)]}),(0,o.jsxs)(`div`,{children:[`过滤结果: `,r([`你好`,`我们`],`wo`)]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好')}</div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>{pinyin('你好', 'first_letter')}</div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div>匹配结果: {pinyinMatch('你好', 'nh') + ''}</div>
      <div>不匹配结果: {pinyinMatch('你好', 'wo') + ''}</div>
    </>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'nh')}</div>
      <div>过滤结果: {pinyinFilter(['你好', '我们'], 'wo')}</div>
    </>
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`FirstLetter`,`PinyinMatch`,`PinyinFilter`]}))();export{c as Basic,l as FirstLetter,d as PinyinFilter,u as PinyinMatch,f as __namedExportsOrder,s as default};