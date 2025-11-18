import{b as t,j as e,W as n}from"./iframe-DP28mdkc.js";import{f as u,a as d,b as c}from"./data-2RZhs2mR.js";import"./preload-helper-PPVm8Dsz.js";const q={title:"@fe-free/core/CRUDOfList",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfList 组件。（简洁的列表形态的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}},decorators:[r=>e.jsx("div",{className:"h-[500px] w-[300px] overflow-y-auto border border-01",children:e.jsx(r,{})})]},a={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsx(t,{actions:[],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}},s={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}},o={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}},l={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(n,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      // search: true,
      ellipsis: true
    }];
    return <CRUDOfList actions={[]} tableProps={{
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
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
    return <CRUDOfList actions={['delete']} tableProps={{
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfList actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      ellipsis: true
    }];
    return <CRUDOfList actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...l.parameters?.docs?.source}}};const x=["Basic","WithSearch","WithCreateDelete","NoSearch"];export{a as Basic,l as NoSearch,o as WithCreateDelete,s as WithSearch,x as __namedExportsOrder,q as default};
