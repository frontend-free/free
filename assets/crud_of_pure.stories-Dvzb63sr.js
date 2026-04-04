import{n as e}from"./chunk-Bj-mKKzh.js";import{N as t,Yi as n,Yr as r,Zi as i,la as a,qr as o,t as s}from"./iframe-CeTL_ZNt.js";import{i as c,l,n as u,t as d}from"./data-BtVe0GzF.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{o(),s(),i(),l(),f=n(),p={title:`@fe-free/core/CRUDOfPure`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`
CRUDOfPure 组件。（更简洁的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}}},m={render:()=>(0,f.jsx)(t,{actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0,formItemProps:{label:`这是label`}},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,search:{optionRender:(e,t,n)=>[...n,(0,f.jsx)(a,{type:`primary`,className:`ml-2`,children:`额外的按钮`},`1`)]}},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},h={render:()=>(0,f.jsx)(t,{actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,pagination:!1,search:{optionRender:(e,t,n)=>[...n,(0,f.jsx)(a,{type:`primary`,className:`ml-2`,children:`额外的按钮`},`1`)]}},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},g={render:()=>(0,f.jsx)(t,{actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`},{title:`名字(省略)`,dataIndex:`name`,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},_={render:()=>(0,f.jsx)(t,{specialToolbar:!0,actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},v={render:()=>(0,f.jsx)(t,{specialToolbar:`empty`,actions:[`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,pagination:!1},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},y={render:()=>(0,f.jsx)(t,{specialToolbar:!0,actions:[`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,pagination:!1,toolBarRender:()=>[(0,f.jsx)(a,{children:`自定义1`},`custom1`)]},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})},b={render:()=>(0,f.jsx)(`div`,{className:`h-[800px] border border-red-500`,children:(0,f.jsx)(t,{fullPage:!0,specialToolbar:!0,actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:c,search:{optionRender:(e,t,n)=>[...n,(0,f.jsx)(a,{type:`primary`,className:`ml-2`,children:`额外的按钮`},`1`)]}},requestDeleteByRecord:u,deleteProps:{nameIndex:`id`},detailForm:()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestCreateByValues:d})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true,
      formItemProps: {
        label: '这是label'
      }
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
      rowKey: 'id',
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    return <CRUDOfPure specialToolbar="empty" actions={['delete']} tableProps={{
      rowKey: 'id',
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        rowKey: 'id',
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
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`WithCreate`,`NoSearch`,`SpecialToolbar`,`SpecialToolbarEmpty`,`SpecialToolbarWithToolBarRender`,`FullPage`]}))();export{m as Basic,b as FullPage,g as NoSearch,_ as SpecialToolbar,v as SpecialToolbarEmpty,y as SpecialToolbarWithToolBarRender,h as WithCreate,x as __namedExportsOrder,p as default};