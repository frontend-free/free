import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{C as o}from"./pro_form_switch_number-D9BN8n19.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{f as c,a as p,b as x}from"./data-DDO97U_P.js";import{W as f}from"./index-DGyR-WQo.js";import"./index-D2MAbzvX.js";import"./index-BTkrZ5ys.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DAt0AXUI.js";import"../sb-preview/runtime.js";const F={title:"@fe-free/core/CRUDOfSimple",component:o,tags:["autodocs"]},r={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(o,{actions:["create","delete"],tableProps:{columns:a,request:c,pagination:!1},requestDeleteByRecord:p,deleteProps:{nameIndex:"name"},detailForm:s=>e.jsx(e.Fragment,{children:e.jsx(f,{...s,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:x})}},t={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(o,{actions:["create","delete"],tableProps:{columns:a,request:c,pagination:!1},requestDeleteByRecord:p,deleteProps:{nameIndex:"name"},detailForm:s=>e.jsx(e.Fragment,{children:e.jsx(f,{...s,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:x,simpleSearchProps:{name:"id"}})}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,d,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Normal","WithSearch"];export{r as Normal,t as WithSearch,j as __namedExportsOrder,F as default};
