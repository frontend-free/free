import{c as t,j as e,W as o,B as d}from"./iframe-xu_WNEFp.js";import{f as n,a as l,b as i}from"./data-B_9DyHPY.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"@fe-free/core/CRUDOfPure",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},r={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(t,{actions:["delete"],tableProps:{columns:a,request:i,pagination:!1,search:{optionRender:(u,c,s)=>[...s,e.jsx(d,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},requestDeleteByRecord:l,deleteProps:{nameIndex:"id"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:n})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Normal"];export{r as Normal,y as __namedExportsOrder,f as default};
