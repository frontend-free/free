import{E as u,j as r,r as h}from"./iframe-DtN4gL_v.js";import"./preload-helper-D9Z9MdNV.js";const v={title:"@fe-free/core/Editor",component:u,tags:["autodocs"]},o=e=>{const[m,g]=h.useState(e.value||"");return r.jsx("div",{style:{width:"500px",height:"500px"},children:r.jsx(u,{...e,value:m,onChange:g})})},a={args:{value:"hello world!"},render:e=>r.jsx(o,{...e})},l={args:{value:"hello world!",readOnly:!0},render:e=>r.jsx(o,{...e})},s={args:{value:"hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!",lineWrapping:!0},render:e=>r.jsx(o,{...e})},n={args:{value:"hello world!",editable:!1},render:e=>r.jsx(o,{...e})},c={args:{value:"",autoFocus:!0},render:e=>r.jsx(o,{...e})},t={args:{language:"javascript",value:'console.log("Hello, World!")'},render:e=>r.jsx(o,{...e})},d={args:{language:"python",value:`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`},render:e=>r.jsx(o,{...e})},i={args:{language:"json",value:'{"action": "hello", "data": "world"}'},render:e=>r.jsx(o,{...e})},p={args:{language:"markdown",value:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:e=>r.jsx(o,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    autoFocus: true
  },
  render: props => <BasicDemo {...props} />
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    value: '{"action": "hello", "data": "world"}'
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
}`,...p.parameters?.docs?.source}}};const x=["Basic","ReadOnly","Wrap","Editable","AutoFocus","Javascript","Python","JSON","Markdown"];export{c as AutoFocus,a as Basic,n as Editable,i as JSON,t as Javascript,p as Markdown,d as Python,l as ReadOnly,s as Wrap,x as __namedExportsOrder,v as default};
