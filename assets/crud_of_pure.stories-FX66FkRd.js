import{c as r,j as e,W as a,B as m}from"./iframe-6b7CZIpp.js";import{f as s,a as d,b as l}from"./data-_Z4kaLOP.js";import"./preload-helper-PPVm8Dsz.js";const B={title:"@fe-free/core/CRUDOfPure",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},n={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:l,pagination:!1,search:{optionRender:(p,y,x)=>[...x,e.jsx(m,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},i={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:l,pagination:!1,search:{optionRender:(p,y,x)=>[...x,e.jsx(m,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},o={render:()=>{const t=[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:l,pagination:!1},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},u={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{specialToolbar:!0,actions:["create","delete"],tableProps:{columns:t,request:l,pagination:!1},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},c={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{specialToolbar:!0,actions:["delete"],tableProps:{columns:t,request:l,pagination:!1,toolBarRender:()=>[e.jsx(m,{children:"自定义1"},"custom1")]},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUDOfPure actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false,
      search: {
        optionRender: (_, __, dom) => {
          return [...dom, <Button key="1" type="primary" className="ml-2">
                  额外的按钮
                </Button>];
        }
      }
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUDOfPure actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false,
      search: {
        optionRender: (_, __, dom) => {
          return [...dom, <Button key="1" type="primary" className="ml-2">
                  额外的按钮
                </Button>];
        }
      }
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id'
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUDOfPure actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUDOfPure specialToolbar actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUDOfPure specialToolbar actions={['delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false,
      toolBarRender: () => {
        return [<Button key="custom1">自定义1</Button>];
      }
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...c.parameters?.docs?.source}}};const R=["Basic","WithCreate","NoSearch","SpecialToolbar","SpecialToolbar2"];export{n as Basic,o as NoSearch,u as SpecialToolbar,c as SpecialToolbar2,i as WithCreate,R as __namedExportsOrder,B as default};
