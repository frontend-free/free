import{j as e}from"./jsx-runtime-DOBW4sqk.js";import{E as u}from"./localforage-CGNHCfsK.js";import"./date-3qZGDeQI.js";import{r as h}from"./iframe-Cb2OhvU9.js";import"./isNumber-5w1y0RhS.js";import"./index-BfZmmIMU.js";import"./index-BzdjFUDU.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const y={title:"@fe-free/core/Editor",component:u,tags:["autodocs"]},o=r=>{const[m,g]=h.useState(r.value||"");return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(u,{...r,value:m,onChange:g})})},a={args:{value:"hello world!"},render:r=>e.jsx(o,{...r})},l={args:{value:"hello world!",readOnly:!0},render:r=>e.jsx(o,{...r})},s={args:{value:"hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!",lineWrapping:!0},render:r=>e.jsx(o,{...r})},n={args:{value:"hello world!",editable:!1},render:r=>e.jsx(o,{...r})},t={args:{value:"",autoFocus:!0},render:r=>e.jsx(o,{...r})},c={args:{language:"javascript",value:'console.log("Hello, World!")'},render:r=>e.jsx(o,{...r})},d={args:{language:"python",value:`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`},render:r=>e.jsx(o,{...r})},i={args:{language:"json",value:'{"action": "hello", "data": "world"}'},render:r=>e.jsx(o,{...r})},p={args:{language:"markdown",value:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:r=>e.jsx(o,{...r})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const E=["Basic","ReadOnly","Wrap","Editable","AutoFocus","Javascript","Python","JSON","Markdown"];export{t as AutoFocus,a as Basic,n as Editable,i as JSON,c as Javascript,p as Markdown,d as Python,l as ReadOnly,s as Wrap,E as __namedExportsOrder,y as default};
