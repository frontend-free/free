import{b as t,j as e,r as m,W as l}from"./iframe-BY3zE6mA.js";import{f as u,a as d,b as c}from"./data-BR_YkP0s.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"@fe-free/core/CRUDOfList",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
CRUDOfList 组件。（简洁的列表形态的 CRUD 组件）
- 隐藏 label
- 搜索表单按钮一行
- 移除卡片布局
`}}},decorators:[r=>e.jsx("div",{className:"h-[500px] w-[300px] overflow-y-auto border border-01",children:e.jsx(r,{})})]},a={render:()=>{const r=m.useRef(null),i=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r.current?.getActionRef()?.current?.reload(),children:"reload"}),e.jsx(t,{ref:r,actions:[],tableProps:{columns:i,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})]})}},s={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}},o={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}},n={render:()=>{const r=[{title:"名字(省略)",dataIndex:"name",ellipsis:!0}];return e.jsx(t,{actions:["create","delete"],tableProps:{columns:r,request:c},requestDeleteByRecord:d,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(l,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestCreateByValues:u})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const R=["Basic","WithSearch","WithCreateDelete","NoSearch"];export{a as Basic,n as NoSearch,o as WithCreateDelete,s as WithSearch,R as __namedExportsOrder,f as default};
