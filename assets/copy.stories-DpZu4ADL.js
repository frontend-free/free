import{j as o}from"./jsx-runtime-DSTTij0Z.js";import"./date-B1aHfNpt.js";import{c as d,R as m}from"./CopyOutlined-BAdzHIwN.js";import{r as h}from"./iframe-DslcrLO9.js";import"./isNumber-C3pds2mi.js";import"./preload-helper-D9Z9MdNV.js";function g(e){return navigator.clipboard.writeText(e)}const u=({value:e,showIcon:l,hoverIcon:r,children:t,onCopied:i})=>{const p=h.useCallback(async()=>{await g(e),i?.()},[e,i]);return l||r?o.jsxs("div",{className:d("flex gap-1",{group:r}),children:[t,o.jsx("div",{className:d("cursor-pointer text-primary",{hidden:r,"group-hover:block":r}),onClick:p,children:o.jsx(m,{})})]}):o.jsx("div",{onClick:p,children:t})};u.__docgenInfo={description:"",methods:[],displayName:"Copy",props:{value:{required:!0,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},hoverIcon:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onCopied:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"@fe-free/core/Copy",component:u,tags:["autodocs"]},a={args:{value:"点击复制",children:"点击复制"}},s={args:{value:"icon复制",showIcon:!0,children:"icon复制"}},n={args:{value:"hover复制",showIcon:!0,hoverIcon:!0,children:"hover复制"}},c={args:{value:"点击复制",onCopied:()=>{alert("复制成功")},children:"点击复制"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: '点击复制',
    children: '点击复制'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'icon复制',
    showIcon: true,
    children: 'icon复制'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hover复制',
    showIcon: true,
    hoverIcon: true,
    children: 'hover复制'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: '点击复制',
    onCopied: () => {
      alert('复制成功');
    },
    children: '点击复制'
  }
}`,...c.parameters?.docs?.source}}};const R=["Basic","ShowIcon","HoverIcon","OnCopied"];export{a as Basic,n as HoverIcon,c as OnCopied,s as ShowIcon,R as __namedExportsOrder,I as default};
