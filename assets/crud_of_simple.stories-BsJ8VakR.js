import{b as a,j as e,W as n}from"./iframe-BQwWGWhi.js";import{f as u,a as m,b as d}from"./data-CkqOrUhF.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"@fe-free/core/CRUDOfSimple",component:a,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"c-border h-[500px] w-[300px] overflow-x-auto",children:e.jsx(r,{})})]},t={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(a,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u})}},s={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(a,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleSearchProps:{name:"name",widthFull:!0}})}},l={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(a,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleOperateHoverShow:!0})}},o={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(a,{actions:["delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleSearchProps:{name:"name",widthFull:!0}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfSimple actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfSimple actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} simpleSearchProps={{
      name: 'name',
      widthFull: true
    }} />;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfSimple actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} simpleOperateHoverShow />;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfSimple actions={['delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} simpleSearchProps={{
      name: 'name',
      widthFull: true
    }} />;
  }
}`,...o.parameters?.docs?.source}}};const q=["Normal","WithSearch","HoverShow","JustSearch"];export{l as HoverShow,o as JustSearch,t as Normal,s as WithSearch,q as __namedExportsOrder,p as default};
