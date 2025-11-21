import{D as n,j as r}from"./iframe-C2uA3o1V.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"@fe-free/core/DataViewer",component:n,tags:["autodocs"]},t=e=>r.jsx("div",{style:{width:"500px",height:"500px"},children:r.jsx(n,{...e})}),a={args:{data:"hello world!",title:"输入",enableMaximize:!0},render:e=>r.jsx(t,{...e})},s={args:{data:JSON.stringify({action:"hello",data:"world"})},render:e=>r.jsx(t,{...e})},o={args:{data:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:e=>r.jsx(t,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: 'hello world!',
    title: '输入',
    enableMaximize: true
  },
  render: props => <BasicDemo {...props} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: JSON.stringify({
      action: 'hello',
      data: 'world'
    })
  },
  render: props => <BasicDemo {...props} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: \`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3\`
  },
  render: props => <BasicDemo {...props} />
}`,...o.parameters?.docs?.source}}};const l=["Basic","ForJSON","Markdown"];export{a as Basic,s as ForJSON,o as Markdown,l as __namedExportsOrder,c as default};
