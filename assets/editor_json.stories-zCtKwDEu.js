import{j as e}from"./jsx-runtime-VCcGjxbf.js";import{d as a}from"./localforage-jNGLhox0.js";import"./date-CvgjZid_.js";import{r as i}from"./iframe-Dz6Nc1QS.js";import"./isNumber-DKtQc1Du.js";import"./index-BCE3KO5C.js";import"./index-Cc8IMFZa.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const S={title:"@fe-free/core/EditorJSON",component:a,tags:["autodocs"]},n={render:r=>{const[t,l]=i.useState(JSON.stringify({name:"world"}));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{...r,value:t,onChange:l})})}},s={render:()=>{const[r,t]=i.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0})})}},o={render:()=>{const[r,t]=i.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,mode:"tree",readonly:!0})})}},d={render:()=>{const[r,t]=i.useState(JSON.stringify({name:"world"},null,2));return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(a,{value:r,onChange:t,readonly:!0,mode:"tree",mainMenuBar:!1})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const y=["Basic","Readonly","TreeMode","NoMenuBar"];export{n as Basic,d as NoMenuBar,s as Readonly,o as TreeMode,y as __namedExportsOrder,S as default};
