import{c as d,j as e,W as i,B as c}from"./iframe-DIttv1M3.js";import{f as l,a as o,b as u}from"./data-lEiwVgsl.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"@fe-free/core/CRUDOfPure",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},r={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(d,{actions:["delete"],tableProps:{columns:t,request:u,pagination:!1,search:{optionRender:(m,x,n)=>[...n,e.jsx(c,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:l})}},a={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(d,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1,search:{optionRender:(m,x,n)=>[...n,e.jsx(c,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:l})}},s={render:()=>{const t=[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(d,{actions:["create","delete"],tableProps:{columns:t,request:u,pagination:!1},requestDeleteByRecord:o,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(i,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:l})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    return <CRUDOfPure actions={['delete']} tableProps={{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const I=["Basic","WithCreate","NoSearch"];export{r as Basic,s as NoSearch,a as WithCreate,I as __namedExportsOrder,f as default};
