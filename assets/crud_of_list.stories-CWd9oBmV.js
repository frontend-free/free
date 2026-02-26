import{c as t,r as p,j as e,W as a}from"./iframe-DWUpTyye.js";import{f as s,a as o,b as n}from"./data-Csw86eBQ.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"@fe-free/core/CRUDOfList",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfList 组件。（简洁的列表形态的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}},decorators:[r=>e.jsx("div",{className:"h-[500px] w-[300px] overflow-y-auto border border-01",children:e.jsx(r,{})})]},l={render:()=>{const r=p.useRef(null),m=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r.current?.getActionRef()?.current?.reload(),children:"reload"}),e.jsx(t,{ref:r,actions:[],tableProps:{rowKey:"id",columns:m,request:n},requestDeleteByRecord:o,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:s})]})}},u={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["delete"],tableProps:{rowKey:"id",columns:r,request:n},requestDeleteByRecord:o,deleteProps:{nameIndex:"name",operateIsHidden:m=>m.id==="1"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:s})}},d={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{toolbarSticky:!0,actions:["delete"],tableProps:{rowKey:"id",columns:r,request:n},requestDeleteByRecord:o,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:s})}},c={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{rowKey:"id",columns:r,request:n},requestDeleteByRecord:o,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:s})}},i={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{rowKey:"id",columns:r,request:n},requestDeleteByRecord:o,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(a,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:s})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const R=["Basic","WithSearch","WithToolbarSticky","WithCreateDelete","NoSearch"];export{l as Basic,i as NoSearch,c as WithCreateDelete,u as WithSearch,d as WithToolbarSticky,R as __namedExportsOrder,y as default};
