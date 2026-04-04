import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Na as n,Yi as r,fr as i,t as a}from"./iframe-CeTL_ZNt.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(n()),s=r(),c={title:`@fe-free/core/EditorJSON`,component:i,tags:[`autodocs`]},l={render:e=>{let[t,n]=(0,o.useState)(JSON.stringify({name:`world`}));return(0,s.jsx)(`div`,{style:{width:`500px`,height:`500px`},children:(0,s.jsx)(i,{...e,value:t,onChange:n})})}},u={render:()=>{let[e,t]=(0,o.useState)(JSON.stringify({name:`world`},null,2));return(0,s.jsx)(`div`,{style:{width:`500px`,height:`500px`},children:(0,s.jsx)(i,{value:e,onChange:t,readonly:!0})})}},d={render:()=>{let[e,t]=(0,o.useState)(JSON.stringify({name:`world`},null,2));return(0,s.jsx)(`div`,{style:{width:`500px`,height:`500px`},children:(0,s.jsx)(i,{value:e,onChange:t,mode:`tree`,readonly:!0})})}},f={render:()=>{let[e,t]=(0,o.useState)(JSON.stringify({name:`world`},null,2));return(0,s.jsx)(`div`,{style:{width:`500px`,height:`500px`},children:(0,s.jsx)(i,{value:e,onChange:t,readonly:!0,mode:`tree`,mainMenuBar:!1})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Readonly`,`TreeMode`,`NoMenuBar`]}))();export{l as Basic,f as NoMenuBar,u as Readonly,d as TreeMode,p as __namedExportsOrder,c as default};