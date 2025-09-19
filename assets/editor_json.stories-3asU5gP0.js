import{j as e}from"./jsx-runtime-BcpG4FIS.js";import{f as a}from"./localforage-BhlN-Xla.js";import"./environment-CkU2kBK-.js";import"./_commonjs-dynamic-modules-BTlTUtk5.js";import{r as d}from"./iframe-CK3MLkW7.js";import"./isNumber-CTNJfj3i.js";import"./index-CUzEMD6o.js";import"./index-uc8ny8wp.js";import"./preload-helper-D9Z9MdNV.js";import"./map-DqGPwCiM.js";import"./_nodeUtil-Bx6ljfTx.js";const w={title:"@fe-free/core/EditorJSON",component:a,tags:["autodocs"]},n={render:r=>{const[t,l]=d.useState(JSON.stringify({name:"world"}));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{...r,value:t,onChange:l})})}},s={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0})})}},o={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,mode:"tree",readonly:!0})})}},i={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0,mode:"tree",mainMenuBar:!1})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(JSON.stringify({
      name: 'world'
    }));
    return <div style={{
      width: '500px',
      height: '500px'
    }}>
        <EditorJSON {...args} value={value} onChange={setValue} />
      </div>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(JSON.stringify({
      name: 'world'
    }, null, 2));
    return <div style={{
      width: '500px',
      height: '500px'
    }}>
        <EditorJSON value={value} onChange={setValue} readonly />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(JSON.stringify({
      name: 'world'
    }, null, 2));
    return <div style={{
      width: '500px',
      height: '500px'
    }}>
        <EditorJSON value={value} onChange={setValue} mode="tree" readonly />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(JSON.stringify({
      name: 'world'
    }, null, 2));
    return <div style={{
      width: '500px',
      height: '500px'
    }}>
        <EditorJSON value={value} onChange={setValue} readonly mode="tree" mainMenuBar={false} />
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const N=["Basic","Readonly","TreeMode","NoMenuBar"];export{n as Basic,i as NoMenuBar,s as Readonly,o as TreeMode,N as __namedExportsOrder,w as default};
