import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{M as n,Na as r,Yi as i,t as a}from"./iframe-CnGw9fmU.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),o=t(r()),s=i(),c={title:`@fe-free/core/Editor`,component:n,tags:[`autodocs`]},l=e=>{let[t,r]=(0,o.useState)(e.value||``);return(0,s.jsx)(`div`,{style:{width:`500px`,height:`500px`},children:(0,s.jsx)(n,{...e,value:t,onChange:r})})},u={args:{value:`hello world!`},render:e=>(0,s.jsx)(l,{...e})},d={args:{value:`hello world!`,readOnly:!0},render:e=>(0,s.jsx)(l,{...e})},f={args:{value:`hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!`,lineWrapping:!0},render:e=>(0,s.jsx)(l,{...e})},p={args:{value:`hello world!`,editable:!1},render:e=>(0,s.jsx)(l,{...e})},m={args:{value:``,autoFocus:!0},render:e=>(0,s.jsx)(l,{...e})},h={args:{language:`javascript`,value:`console.log("Hello, World!")`},render:e=>(0,s.jsx)(l,{...e})},g={args:{language:`python`,value:`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`},render:e=>(0,s.jsx)(l,{...e})},_={args:{language:`json`,value:JSON.stringify({action:`hello`,data:`world`},null,2)},render:e=>(0,s.jsx)(l,{...e})},v={args:{language:`markdown`,value:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:e=>(0,s.jsx)(l,{...e})},y={args:{language:`html`,value:`<html><body><h1>Hello, World!</h1></body></html>`},render:e=>(0,s.jsx)(l,{...e})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!'
  },
  render: props => <BasicDemo {...props} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    readOnly: true
  },
  render: props => <BasicDemo {...props} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
    lineWrapping: true
  },
  render: props => <BasicDemo {...props} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    editable: false
  },
  render: props => <BasicDemo {...props} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    autoFocus: true
  },
  render: props => <BasicDemo {...props} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    value: JSON.stringify({
      action: 'hello',
      data: 'world'
    }, null, 2)
  },
  render: props => <BasicDemo {...props} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'html',
    value: '<html><body><h1>Hello, World!</h1></body></html>'
  },
  render: props => <BasicDemo {...props} />
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`ReadOnly`,`Wrap`,`Editable`,`AutoFocus`,`Javascript`,`Python`,`ForJSON`,`Markdown`,`HTML`]}))();export{m as AutoFocus,u as Basic,p as Editable,_ as ForJSON,y as HTML,h as Javascript,v as Markdown,g as Python,d as ReadOnly,f as Wrap,b as __namedExportsOrder,c as default};