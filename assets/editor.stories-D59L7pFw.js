import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{E as R}from"./index-DTEILdXT.js";import"./isNumber-Drx5NVlI.js";import"./date-DYq0-6zX.js";import{r as N}from"./index-BTkrZ5ys.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-C52CROUC.js";import"../sb-preview/runtime.js";const X={title:"@fe-free/core/Editor",component:R,tags:["autodocs"]},a=e=>{const[A,M]=N.useState(e.value||"");return r.jsx("div",{style:{width:"500px",height:"500px"},children:r.jsx(R,{...e,value:A,onChange:M})})},o={args:{value:"hello world!"},render:e=>r.jsx(a,{...e})},s={args:{value:"hello world!",readOnly:!0},render:e=>r.jsx(a,{...e})},n={args:{value:"hello world!",editable:!1},render:e=>r.jsx(a,{...e})},t={args:{value:"",autoFocus:!0},render:e=>r.jsx(a,{...e})},c={args:{language:"javascript",value:'console.log("Hello, World!")'},render:e=>r.jsx(a,{...e})},i={args:{language:"python",value:`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 测试斐波那契数列
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")`},render:e=>r.jsx(a,{...e})},l={args:{language:"json",value:'{"action": "hello", "data": "world"}'},render:e=>r.jsx(a,{...e})},p={args:{language:"markdown",value:`# Hello, World!

This is a markdown file.

## Title2

### Title 3

- Item 1
- Item 2
- Item 3`},render:e=>r.jsx(a,{...e})};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 'hello world!'
  },
  render: props => <BasicDemo {...props} />
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    readOnly: true
  },
  render: props => <BasicDemo {...props} />
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,x,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    editable: false
  },
  render: props => <BasicDemo {...props} />
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,b,B;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: '',
    autoFocus: true
  },
  render: props => <BasicDemo {...props} />
}`,...(B=(b=t.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,y,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var E,O,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var I,T,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    language: 'json',
    value: '{"action": "hello", "data": "world"}'
  },
  render: props => <BasicDemo {...props} />
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var H,J,W;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(J=p.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const Y=["Basic","ReadOnly","Editable","AutoFocus","Javascript","Python","JSON","Markdown"];export{t as AutoFocus,o as Basic,n as Editable,l as JSON,c as Javascript,p as Markdown,i as Python,s as ReadOnly,Y as __namedExportsOrder,X as default};
