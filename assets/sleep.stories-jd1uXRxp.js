import{j as s}from"./iframe-ByQeaL5k.js";import{s as r}from"./index-mAKpSMLY.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"@fe-free/tool/sleep",tags:["autodocs"],parameters:{docs:{description:{component:"顾名思义"}}}},e={render:()=>s.jsx("div",{onClick:async()=>{await r(1e3),alert("after sleep")},children:"click me sleep 1000"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div onClick={async () => {
    await sleep(1000);
    alert('after sleep');
  }}>
      click me sleep 1000
    </div>
}`,...e.parameters?.docs?.source}}};const n=["Basic"];export{e as Basic,n as __namedExportsOrder,c as default};
