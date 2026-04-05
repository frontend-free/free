import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Na as n,P as r,Yi as i,Yr as a,qr as o,t as s}from"./iframe-CLFZ225d.js";import{i as c,l,n as u,t as d}from"./data-DatHMoNT.js";var f,p,m,h,g,_,v,y,b;e((()=>{o(),s(),f=t(n()),l(),p=i(),m={title:`@fe-free/core/CRUDOfList`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`
CRUDOfList 组件。（简洁的列表形态的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}},decorators:[e=>(0,p.jsx)(`div`,{className:`h-[500px] w-[300px] overflow-y-auto border border-01`,children:(0,p.jsx)(e,{})})]},h={render:()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{onClick:()=>e.current?.getActionRef()?.current?.reload(),children:`reload`}),(0,p.jsx)(r,{ref:e,actions:[],tableProps:{rowKey:`id`,columns:[{title:`名字(省略)`,dataIndex:`name`,ellipsis:!0}],request:c},requestDeleteByRecord:u,deleteProps:{nameIndex:`name`},detailForm:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestCreateByValues:d})]})}},g={render:()=>(0,p.jsx)(r,{actions:[`delete`],tableProps:{rowKey:`id`,columns:[{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0}],request:c},requestDeleteByRecord:u,deleteProps:{nameIndex:`name`,operateIsHidden:e=>e.id===`1`},detailForm:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestCreateByValues:d})},_={render:()=>(0,p.jsx)(r,{toolbarSticky:!0,actions:[`delete`],tableProps:{rowKey:`id`,columns:[{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0}],request:c},requestDeleteByRecord:u,deleteProps:{nameIndex:`name`},detailForm:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestCreateByValues:d})},v={render:()=>(0,p.jsx)(r,{actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0}],request:c},requestDeleteByRecord:u,deleteProps:{nameIndex:`name`},detailForm:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestCreateByValues:d})},y={render:()=>(0,p.jsx)(r,{actions:[`create`,`delete`],tableProps:{rowKey:`id`,columns:[{title:`名字(省略)`,dataIndex:`name`,ellipsis:!0}],request:c},requestDeleteByRecord:u,deleteProps:{nameIndex:`name`},detailForm:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestCreateByValues:d})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<CRUDRef>(null);
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      // search: true,
      ellipsis: true
    }];
    return <div>
        <button onClick={() => ref.current?.getActionRef()?.current?.reload()}>reload</button>
        <CRUDOfList ref={ref} actions={[]} tableProps={{
        rowKey: 'id',
        columns,
        request: fakeRequest
      }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
        nameIndex: 'name'
      }} detailForm={() => <>
              <ProFormText name="name" label="名字" required rules={[{
          required: true
        }]} />
            </>} requestCreateByValues={fakeCreate} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfList actions={['delete']} tableProps={{
      rowKey: 'id',
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name',
      operateIsHidden: record => {
        return record.id === '1';
      }
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfList toolbarSticky actions={['delete']} tableProps={{
      rowKey: 'id',
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }];
    return <CRUDOfList actions={['create', 'delete']} tableProps={{
      rowKey: 'id',
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '名字(省略)',
      dataIndex: 'name',
      ellipsis: true
    }];
    return <CRUDOfList actions={['create', 'delete']} tableProps={{
      rowKey: 'id',
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
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`WithSearch`,`WithToolbarSticky`,`WithCreateDelete`,`NoSearch`]}))();export{h as Basic,y as NoSearch,v as WithCreateDelete,g as WithSearch,_ as WithToolbarSticky,b as __namedExportsOrder,m as default};