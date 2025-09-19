import{j as r}from"./jsx-runtime-BcpG4FIS.js";import"./environment-CkU2kBK-.js";import{s}from"./index-mAKpSMLY.js";import"./iframe-CK3MLkW7.js";import"./preload-helper-D9Z9MdNV.js";import"./isNumber-CTNJfj3i.js";const p={title:"@fe-free/tool/sleep",tags:["autodocs"],parameters:{docs:{description:{component:"顾名思义"}}}},e={render:()=>r.jsx("div",{onClick:async()=>{await s(1e3),alert("after sleep")},children:"click me sleep 1000"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div onClick={async () => {
    await sleep(1000);
    alert('after sleep');
  }}>
      click me sleep 1000
    </div>
}`,...e.parameters?.docs?.source}}};const m=["Basic"];export{e as Basic,m as __namedExportsOrder,p as default};
