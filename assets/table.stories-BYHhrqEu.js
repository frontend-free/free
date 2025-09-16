import{j as t}from"./jsx-runtime-BY31FYth.js";import{T as r}from"./localforage-dxIgBH8I.js";import"./environment-DOEKJ4_7.js";import"./_commonjs-dynamic-modules-DrmveZk0.js";import"./iframe-DMNzb9zm.js";import"./isNumber-BvEBZ12q.js";import{c as s}from"./data-BN9W3c-7.js";import"./index-VlagGw1M.js";import"./index-BJ05USiS.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"@fe-free/core/Table",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Table 基于 ProTable 做了一些封装：<br>
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
