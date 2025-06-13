import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{E as P}from"./pro_form_switch_number-C7DvDE5x.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{r as V}from"./index-BTkrZ5ys.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-6JRucVBG.js";import"./index-BIm0odtm.js";import"./iframe-DXQlIYFj.js";import"../sb-preview/runtime.js";const rr={title:"@fe-free/core/Editor",component:P,tags:["autodocs"]},o=r=>{const[_,C]=V.useState(r.value||"");return e.jsx("div",{style:{width:"500px",height:"500px"},children:e.jsx(P,{...r,value:_,onChange:C})})},a={args:{value:"hello world!"},render:r=>e.jsx(o,{...r})},l={args:{value:"hello world!",readOnly:!0},render:r=>e.jsx(o,{...r})},s={args:{value:"hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!",lineWrapping:!0},render:r=>e.jsx(o,{...r})},n={args:{value:"hello world!",editable:!1},render:r=>e.jsx(o,{...r})},t={args:{value:"",autoFocus:!0},render:r=>e.jsx(o,{...r})},c={args:{language:"javascript",value:'console.log("Hello, World!")'},render:r=>e.jsx(o,{...r})},d={args:{language:"python",value:`def fibonacci(n):
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
- Item 3`},render:r=>e.jsx(o,{...r})};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'hello world!'
  },
  render: props => <BasicDemo {...props} />
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,w,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    readOnly: true
  },
  render: props => <BasicDemo {...props} />
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,x,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
    lineWrapping: true
  },
  render: props => <BasicDemo {...props} />
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,B,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'hello world!',
    editable: false
  },
  render: props => <BasicDemo {...props} />
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,y,E;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: '',
    autoFocus: true
  },
  render: props => <BasicDemo {...props} />
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var W,O,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    value: 'console.log("Hello, World!")'
  },
  render: props => <BasicDemo {...props} />
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var I,T,F;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var H,J,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    language: 'json',
    value: '{"action": "hello", "data": "world"}'
  },
  render: props => <BasicDemo {...props} />
}`,...(R=(J=i.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var A,M,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const er=["Basic","ReadOnly","Wrap","Editable","AutoFocus","Javascript","Python","JSON","Markdown"];export{t as AutoFocus,a as Basic,n as Editable,i as JSON,c as Javascript,p as Markdown,d as Python,l as ReadOnly,s as Wrap,er as __namedExportsOrder,rr as default};
