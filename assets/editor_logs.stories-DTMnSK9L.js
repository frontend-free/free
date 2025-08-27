import{j as a}from"./jsx-runtime-TjNF8EJ0.js";import{e as g}from"./localforage-D7AXApJS.js";import"./date-Clclsp2H.js";import"./iframe-CLePEaeZ.js";import"./isNumber-DWr_q2IE.js";import"./index-Dw8jUQq6.js";import"./index-kd-uQ2ks.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const T={title:"@fe-free/core/EditorLogs",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"一个用于显示日志内容的 React 组件。它使用 CodeMirror 编辑器来呈现日志，提供了语法高亮和主题支持。"}}}},s={args:{logs:[{timestamp:"2023-01-01 12:00:00",level:"info",message:"This is an info log message."},{timestamp:"2023-01-01 12:00:00",level:"warn",message:"This is a warning log message."},{timestamp:"2023-01-01 12:00:00",level:"error",message:"This is an error log message."},{timestamp:"2023-01-01 12:00:00",level:"system",message:"This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message"},{timestamp:"2023-01-01 12:00:00",message:"This is an log message."},{level:"info",message:"This is an log message."},{message:"This is an log message."}]},render:i=>a.jsx("div",{style:{width:"500px",height:"500px"},children:a.jsx(g,{...i})})},e={args:{logs:[{message:"This is an info log message."},{message:"This is a warning log message."},{message:"This is an error log message."}]},render:i=>a.jsx("div",{style:{width:"500px",height:"500px"},children:a.jsx(g,{...i})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [{
      timestamp: '2023-01-01 12:00:00',
      level: 'info',
      message: 'This is an info log message.'
    }, {
      timestamp: '2023-01-01 12:00:00',
      level: 'warn',
      message: 'This is a warning log message.'
    }, {
      timestamp: '2023-01-01 12:00:00',
      level: 'error',
      message: 'This is an error log message.'
    }, {
      timestamp: '2023-01-01 12:00:00',
      level: 'system',
      message: 'This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message'
    }, {
      timestamp: '2023-01-01 12:00:00',
      message: 'This is an log message.'
    }, {
      level: 'info',
      message: 'This is an log message.'
    }, {
      message: 'This is an log message.'
    }]
  },
  render: props => <div style={{
    width: '500px',
    height: '500px'
  }}>
      <EditorLogs {...props} />
    </div>
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [{
      message: 'This is an info log message.'
    }, {
      message: 'This is a warning log message.'
    }, {
      message: 'This is an error log message.'
    }]
  },
  render: props => <div style={{
    width: '500px',
    height: '500px'
  }}>
      <EditorLogs {...props} />
    </div>
}`,...e.parameters?.docs?.source}}};const c=["Basic","Pure"];export{s as Basic,e as Pure,c as __namedExportsOrder,T as default};
