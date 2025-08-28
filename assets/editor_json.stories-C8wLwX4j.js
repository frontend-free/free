import{j as e}from"./jsx-runtime-Chh5HdXz.js";import{e as a}from"./localforage-DCmeef05.js";import"./date-Dp97UwJj.js";import"./_commonjs-dynamic-modules-COoBhSuc.js";import{r as d}from"./iframe-DElz4-Bk.js";import"./isNumber-DGKZe9iM.js";import"./index-COzBUs09.js";import"./index-DktT52X-.js";import"./preload-helper-D9Z9MdNV.js";const y={title:"@fe-free/core/EditorJSON",component:a,tags:["autodocs"]},n={render:r=>{const[t,l]=d.useState(JSON.stringify({name:"world"}));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{...r,value:t,onChange:l})})}},s={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0})})}},o={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,mode:"tree",readonly:!0})})}},i={render:()=>{const[r,t]=d.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0,mode:"tree",mainMenuBar:!1})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const f=["Basic","Readonly","TreeMode","NoMenuBar"];export{n as Basic,i as NoMenuBar,s as Readonly,o as TreeMode,f as __namedExportsOrder,y as default};
