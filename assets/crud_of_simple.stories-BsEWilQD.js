import{j as e}from"./jsx-runtime-C_dzdOzI.js";import{a as t}from"./localforage-OviMTT0A.js";import"./date-DwpxwKTw.js";import"./_commonjs-dynamic-modules-Bhyh6_UQ.js";import"./iframe-BnwM4uAj.js";import"./isNumber-2NGMk2GK.js";import{f as n,a as u,b as m}from"./data-DX5TKi6y.js";import{W as i}from"./index-Bu1rOQjq.js";import"./index-aWJbKh8f.js";import"./index-B6UH0wWN.js";import"./preload-helper-D9Z9MdNV.js";const B={title:"@fe-free/core/CRUDOfSimple",component:t,tags:["autodocs"]},a={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:m,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:n})}},s={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:m,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:n,simpleSearchProps:{name:"name",widthFull:!0}})}},o={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:m,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:n,simpleOperateHoverShow:!0})}},l={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["delete"],tableProps:{columns:r,request:m,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:n,simpleSearchProps:{name:"name",widthFull:!0}})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const F=["Normal","WithSearch","HoverShow","JustSearch"];export{o as HoverShow,l as JustSearch,a as Normal,s as WithSearch,F as __namedExportsOrder,B as default};
