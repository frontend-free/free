import{c as t,j as e,W as a,B as p}from"./iframe-wJ_jkgLW.js";import{f as s,a as d,b as l}from"./data-BzT2TqCN.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"@fe-free/core/CRUDOfPure",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},i={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:l,search:{optionRender:(y,q,n)=>[...n,e.jsx(p,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},o={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:l,pagination:!1,search:{optionRender:(y,q,n)=>[...n,e.jsx(p,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},u={render:()=>{const r=[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:l,pagination:!1},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},c={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{specialToolbar:!0,actions:["create","delete"],tableProps:{columns:r,request:l,pagination:!1},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},x={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{specialToolbar:!0,actions:["delete"],tableProps:{columns:r,request:l,pagination:!1,toolBarRender:()=>[e.jsx(p,{children:"自定义1"},"custom1")]},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})}},m={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx("div",{className:"h-[800px] border border-red-500",children:e.jsx(t,{fullPage:!0,specialToolbar:!0,actions:["create","delete"],tableProps:{columns:r,request:l,search:{optionRender:(y,q,n)=>[...n,e.jsx(p,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:d,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:s})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    return <div className="h-[800px] border border-red-500">
        <CRUDOfPure fullPage specialToolbar actions={['create', 'delete']} tableProps={{
        columns,
        request: fakeRequest,
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
            </>} requestCreateByValues={fakeCreate} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const P=["Basic","WithCreate","NoSearch","SpecialToolbar","SpecialToolbar2","FullPage"];export{i as Basic,m as FullPage,u as NoSearch,c as SpecialToolbar,x as SpecialToolbar2,o as WithCreate,P as __namedExportsOrder,R as default};
