import{j as s}from"./iframe-Bh7OMwOY.js";import{s as r}from"./index-mAKpSMLY.js";import"./preload-helper-D9Z9MdNV.js";const c={title:"@fe-free/tool/sleep",tags:["autodocs"],parameters:{docs:{description:{component:"顾名思义"}}}},e={render:()=>s.jsx("div",{onClick:async()=>{await r(1e3),alert("after sleep")},children:"click me sleep 1000"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div onClick={async () => {
    await sleep(1000);
    alert('after sleep');
  }}>
      click me sleep 1000
    </div>
}`,...e.parameters?.docs?.source}}};const n=["Basic"];export{e as Basic,n as __namedExportsOrder,c as default};
