import{E as m,j as r,r as w}from"./iframe-B2djbCm6.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"@fe-free/core/Editor",component:m,tags:["autodocs"]},o=e=>{const[g,h]=w.useState(e.value||"");return r.jsx("div",{style:{width:"500px",height:"500px"},children:r.jsx(m,{...e,value:g,onChange:h})})},a={args:{value:"hello world!"},render:e=>r.jsx(o,{...e})},l={args:{value:"hello world!",readOnly:!0},render:e=>r.jsx(o,{...e})},s={args:{value:"hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!",lineWrapping:!0},render:e=>r.jsx(o,{...e})},n={args:{value:"hello world!",editable:!1},render:e=>r.jsx(o,{...e})},t={args:{value:"",autoFocus:!0},render:e=>r.jsx(o,{...e})},d={args:{language:"javascript",value:'console.log("Hello, World!")'},render:e=>r.jsx(o,{...e})},c={args:{language:"python",value:`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`},render:e=>r.jsx(o,{...e})},i={args:{language:"json",value:JSON.stringify({action:"hello",data:"world"},null,2)},render:e=>r.jsx(o,{...e})},p={args:{language:"markdown",value:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:e=>r.jsx(o,{...e})},u={args:{language:"html",value:"<html><body><h1>Hello, World!</h1></body></html>"},render:e=>r.jsx(o,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!'
  },
  render: props => <BasicDemo {...props} />
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    readOnly: true
  },
  render: props => <BasicDemo {...props} />
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
    lineWrapping: true
  },
  render: props => <BasicDemo {...props} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    editable: false
  },
  render: props => <BasicDemo {...props} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    autoFocus: true
  },
  render: props => <BasicDemo {...props} />
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'python',
    value: \`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")\`
  },
  render: props => <BasicDemo {...props} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    value: JSON.stringify({
      action: 'hello',
      data: 'world'
    }, null, 2)
  },
  render: props => <BasicDemo {...props} />
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'markdown',
    value: \`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3\`
  },
  render: props => <BasicDemo {...props} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'html',
    value: '<html><body><h1>Hello, World!</h1></body></html>'
  },
  render: props => <BasicDemo {...props} />
}`,...u.parameters?.docs?.source}}};const b=["Basic","ReadOnly","Wrap","Editable","AutoFocus","Javascript","Python","ForJSON","Markdown","HTML"];export{t as AutoFocus,a as Basic,n as Editable,i as ForJSON,u as HTML,d as Javascript,p as Markdown,c as Python,l as ReadOnly,s as Wrap,b as __namedExportsOrder,x as default};
