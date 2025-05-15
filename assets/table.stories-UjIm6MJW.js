import{j as c}from"./jsx-runtime-BjgbQsUx.js";import{T as l}from"./index-tfnyfrW1.js";import"./date-CuSWkN_9.js";import{f as a}from"./data-B42kEGSK.js";import"./index-D2MAbzvX.js";import"./index-BTkrZ5ys.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DJY4KTZY.js";import"../sb-preview/runtime.js";const K={title:"@fe-free/core/Table",tags:["autodocs"]},p=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}],e={render:()=>c.jsx(l,{rowKey:"id",columns:p,request:async m=>(console.log(m),{data:a,success:!0,total:a.length})})},t={render:()=>c.jsx(l,{columns:[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}],rowKey:"id"})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <Table rowKey="id" columns={columns} request={async params => {
    console.log(params);
    return {
      data: fakeData,
      success: true,
      total: fakeData.length
    };
  }} />
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,d,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Table columns={[{
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
  }]} rowKey="id" />
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const S=["Basic","Search"];export{e as Basic,t as Search,S as __namedExportsOrder,K as default};
