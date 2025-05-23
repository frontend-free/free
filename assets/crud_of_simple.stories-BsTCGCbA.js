import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{C as o}from"./index-6z2hoAv9.js";import"./date-CuSWkN_9.js";import{f as c,a as p,b as x}from"./data-B1-eQtU-.js";import{W as f}from"./index-C5XYVFO3.js";import"./index-D2MAbzvX.js";import"./index-BTkrZ5ys.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DaDQTE_p.js";import"../sb-preview/runtime.js";const k={title:"@fe-free/core/CRUDOfSimple",component:o,tags:["autodocs"]},r={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(o,{actions:["create","delete"],tableProps:{columns:a,request:c,pagination:!1},requestDeleteByRecord:p,deleteProps:{nameIndex:"name"},detailForm:s=>e.jsx(e.Fragment,{children:e.jsx(f,{...s,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:x})}},t={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(o,{actions:["create","delete"],tableProps:{columns:a,request:c,pagination:!1},requestDeleteByRecord:p,deleteProps:{nameIndex:"name"},detailForm:s=>e.jsx(e.Fragment,{children:e.jsx(f,{...s,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:x,simpleSearchProps:{name:"id"}})}};var l,i,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    }];
    return <CRUDOfSimple actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    }];
    return <CRUDOfSimple actions={['create', 'delete']} tableProps={{
      columns,
      request: fakeRequest,
      pagination: false
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} simpleSearchProps={{
      name: 'id'
    }} />;
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["Normal","WithSearch"];export{r as Normal,t as WithSearch,F as __namedExportsOrder,k as default};
