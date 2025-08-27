import{j as a}from"./jsx-runtime-DSTTij0Z.js";import{T as r}from"./localforage-BQxTAldl.js";import"./date-B1aHfNpt.js";import"./iframe-DslcrLO9.js";import"./isNumber-C3pds2mi.js";import{c as s}from"./data-BOn0RbFZ.js";import"./CopyOutlined-BAdzHIwN.js";import"./index-DxfH3I81.js";import"./index-BVdCrvpg.js";import"./map-CCGXqT_7.js";import"./_nodeUtil-B1Ma02pK.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const T={title:"@fe-free/core/Table",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Table 基于 ProTable 做了一些封装：<br>
- props column 需要显示的提供 search: true;
- 列宽默认 120，和滚动条
- 搜索样式做了默认设置，具体见代码
- 页码做了默认设置，具体见代码
`}}}},i=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}],e={render:()=>a.jsx(r,{rowKey:"id",columns:i,request:async o=>(console.log(o),{data:s,success:!0,total:s.length})})},t={render:()=>a.jsx("div",{className:"w-[400px]",children:a.jsx(r,{rowKey:"id",columns:[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Table rowKey="id" columns={columns} request={async params => {
    console.log(params);
    return {
      data: fakeData,
      success: true,
      total: fakeData.length
    };
  }} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[400px]">
      <Table rowKey="id" columns={[{
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
    }]} />
    </div>
}`,...t.parameters?.docs?.source}}};const h=["Basic","ScrollX"];export{e as Basic,t as ScrollX,h as __namedExportsOrder,T as default};
