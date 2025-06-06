import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{C as s}from"./pro_form_switch_number-BIoPRE9H.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{f as u,a as c,b as p}from"./data-Crn5wXCq.js";import{W as x}from"./index-mLKPjKk9.js";import"./index-D2MAbzvX.js";import"./index-BTkrZ5ys.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-6JRucVBG.js";import"./index-BIm0odtm.js";import"./iframe-CA1Oc5CG.js";import"../sb-preview/runtime.js";const k={title:"@fe-free/core/CRUDOfSimple",component:s,tags:["autodocs"]},r={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(s,{actions:["create","delete"],tableProps:{columns:a,request:u,pagination:!1},requestDeleteByRecord:c,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(x,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:p})}},t={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(s,{actions:["create","delete"],tableProps:{columns:a,request:u,pagination:!1},requestDeleteByRecord:c,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(x,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestCreateByValues:p,simpleSearchProps:{name:"id"}})}};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} />;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestCreateByValues={fakeCreate} simpleSearchProps={{
      name: 'id'
    }} />;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const F=["Normal","WithSearch"];export{r as Normal,t as WithSearch,F as __namedExportsOrder,k as default};
