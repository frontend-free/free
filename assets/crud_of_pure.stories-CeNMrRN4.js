import{c as r,j as e,W as l,B as m}from"./iframe-BPgzUeE5.js";import{f as i,a as o,b as u}from"./data-NV9FI86X.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"@fe-free/core/CRUDOfPure",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},a={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1,search:{optionRender:(x,p,c)=>[...c,e.jsx(m,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:i})}},s={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1,search:{optionRender:(x,p,c)=>[...c,e.jsx(m,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:i})}},d={render:()=>{const t=[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:i})}},n={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(r,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:i,specialToolbar:!0})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'id'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} specialToolbar />;
  }
}`,...n.parameters?.docs?.source}}};const R=["Basic","WithCreate","NoSearch","SpecialToolbar"];export{a as Basic,d as NoSearch,n as SpecialToolbar,s as WithCreate,R as __namedExportsOrder,f as default};
