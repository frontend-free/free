import{b as t,j as e,W as o}from"./iframe-BsW-mQmd.js";import{f as u,a as m,b as d}from"./data-BqRPERSv.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"@fe-free/core/CRUDOfSimple",component:t,tags:["autodocs"]},a={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u})}},s={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleSearchProps:{name:"name",widthFull:!0}})}},l={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleOperateHoverShow:!0})}},n={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["delete"],tableProps:{columns:r,request:d,pagination:!1},requestDeleteByRecord:m,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:u,simpleSearchProps:{name:"name",widthFull:!0}})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const q=["Normal","WithSearch","HoverShow","JustSearch"];export{l as HoverShow,n as JustSearch,a as Normal,s as WithSearch,q as __namedExportsOrder,p as default};
