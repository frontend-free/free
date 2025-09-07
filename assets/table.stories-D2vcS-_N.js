import{j as t}from"./jsx-runtime-Dy1INyx-.js";import{T as r}from"./localforage-BEj-FfsB.js";import"./environment-BkMgb4WI.js";import"./_commonjs-dynamic-modules-BARYDqhF.js";import"./iframe-D2pYwY71.js";import"./isNumber-jLf3BJOH.js";import{c as s}from"./data-Des1XcV3.js";import"./index-28bN7kD3.js";import"./index-DsA9Y7tO.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"@fe-free/core/Table",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Table 基于 ProTable 做了一些封装：<br>
- props column 需要显示的提供 search: true;
- 列宽默认 120，和滚动条
- 搜索样式做了默认设置，具体见代码
- 页码做了默认设置，具体见代码
`}}}},i=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}],e={render:()=>t.jsx(r,{rowKey:"id",columns:i,request:async o=>(console.log(o),{data:s,success:!0,total:s.length})})},a={render:()=>t.jsx("div",{className:"w-[400px]",children:t.jsx(r,{rowKey:"id",columns:[{title:"id",dataIndex:"id"},{title:"名字(省略)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Table rowKey="id" columns={columns} request={async params => {
    console.log(params);
    return {
      data: fakeData,
      success: true,
      total: fakeData.length
    };
  }} />
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const b=["Basic","ScrollX"];export{e as Basic,a as ScrollX,b as __namedExportsOrder,f as default};
