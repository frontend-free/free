import{a8 as T,_ as S,j as e,au as w,V as k,a6 as a,a5 as V,W as o,B as C,r as F,i as U}from"./iframe-A23r1te_.js";import{a as G}from"./filter-Dk8mVGbX.js";import{f as u,c as l,a as c,b as s,l as _,d as A,e as D,g as N,h as E}from"./data-CFfR3XsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./filter-DsADSPTM.js";var O=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],K=T.forwardRef(function(r,t){var n=r.fieldProps,d=r.unCheckedChildren,j=r.checkedChildren,v=r.proFieldProps,g=S(r,O);return e.jsx(w,k({valueType:"switch",fieldProps:k({unCheckedChildren:d,checkedChildren:j},n),ref:t,valuePropName:"checked",proFieldProps:v,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},g))});const i={fieldProps:{showSearch:!0,filterOption:(r,t)=>G(t.label,r),fetchDataOnSearch:!1}},X={title:"@fe-free/core/CRUD",component:a,tags:["autodocs"]},m={render:()=>{const r=[{title:"序号",valueType:V.CustomSerialNumber},{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:r,request:s},requestDeleteByRecord:c,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:l,requestCreateByValues:u})}},p={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["read_detail"],tableProps:{columns:r,request:s}})}},x={render:()=>e.jsx(a,{actions:["batch_delete"],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:s},requestDeleteByRecords:async r=>{console.log(r)}})},h={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:r,request:s,toolBarRender:()=>[e.jsx("div",{children:"自定义1"},"custom1"),e.jsx("div",{children:"自定义2"},"custom2")],search:{optionRender:(t,n,d)=>[...d,e.jsx(C,{type:"primary",className:"ml-2",children:"额外的按钮"},"1")]}},operateColumnProps:{width:300,moreOperator:()=>e.jsx("div",{children:"自定义"}),moreOperatorAfter:()=>e.jsx("div",{children:"自定义"})},createButton:e.jsx(C,{type:"primary",children:"自定义新建文本"}),readProps:{operateIsDisabled:t=>!(t.id%3)},requestDeleteByRecord:c,deleteProps:{nameIndex:"name",operateIsDisabled:t=>!(t.id%3)},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:l,requestCreateByValues:u,updateProps:{operateIsDisabled:t=>!(t.id%3),operateIsHidden:t=>!(t.id%4)}})}},M=()=>{const r=F.useRef(),[t]=U.useForm(),n=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["create","read","update"],tableProps:{formRef:r,columns:n,request:s},detailFormInstance:t,detailForm:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),e.jsx(K,{name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:l,requestCreateByValues:u,requestUpdateByValues:D})},y={render:()=>e.jsx(M,{})},W=()=>{const r=F.useRef(null),t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>r.current?.getActionRef()?.current?.reload(),children:"reload"}),e.jsx(a,{ref:r,actions:[],tableProps:{columns:t,request:s}})]})},R={render:()=>e.jsx(W,{})},q={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:_,...i},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await N()).map(n=>({label:n,value:n})),...i},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async t=>(await E(t)).map(d=>({label:d,value:d})),dependencies:["city"],...i},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>A(),...i}];return e.jsx(a,{actions:[],tableProps:{columns:r,request:s}})}},f={render:()=>{const r=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return e.jsx(a,{actions:[],tableProps:{columns:r,request:s,search:!1}})}},I={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:r,request:s},createButton:e.jsx(C,{type:"primary",children:"新建"}),createProps:{submitText:"自定义新建确定",resetText:"自定义新建取消"},readProps:{submitText:"自定义查看确定",resetText:"自定义查看取消",operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",submitText:"自定义编辑确定",resetText:"自定义编辑取消",successText:"编辑成功"},requestDeleteByRecord:c,detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:l,requestCreateByValues:u,requestUpdateByValues:D})}},P={render:()=>e.jsx(a,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:s,rowSelection:{alwaysShowAlert:!0}},batchActions:[{btnText:"批量xxx",onClick:async(r,{selectedRowKeys:t})=>{console.log(t)}},{btnText:"批量danger",danger:!0,onClick:async(r,{selectedRowKeys:t})=>{console.log(t)}}]})},b={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:r,request:s,defaultExpandAllRows:!0,expandable:{expandedRowKeys:["0","1"],expandedRowRender:()=>e.jsx("div",{children:"123"})}},requestDeleteByRecord:c,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:l,requestCreateByValues:u})}},B={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx("div",{className:"h-[800px] border border-red-500",children:e.jsx(a,{fullPage:!0,actions:["create","read","delete","update"],tableProps:{columns:r,request:s},requestDeleteByRecord:c,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(o,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:l,requestCreateByValues:u})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: '序号',
      valueType: CustomValueTypeEnum.CustomSerialNumber
    }, {
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }] as CRUDProps['tableProps']['columns'];
    return <CRUD actions={['create', 'read', 'delete', 'update']} tableProps={{
      columns,
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字',
      dataIndex: 'name',
      search: true
    }];
    return <CRUD actions={['read_detail']} tableProps={{
      columns,
      request: fakeRequest
    }} />;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CRUD actions={['batch_delete']} tableProps={{
      columns: [{
        title: 'id',
        dataIndex: 'id',
        search: true
      }, {
        title: '名字',
        dataIndex: 'name',
        search: true
      }],
      request: fakeRequest
    }} requestDeleteByRecords={async records => {
      console.log(records);
    }} />;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <CRUD actions={['create', 'read', 'delete', 'update']} tableProps={{
      columns,
      request: fakeRequest,
      toolBarRender: () => {
        return [<div key="custom1">自定义1</div>, <div key="custom2">自定义2</div>];
      },
      search: {
        optionRender: (_, __, dom) => {
          return [...dom, <Button key="1" type="primary" className="ml-2">
                  额外的按钮
                </Button>];
        }
      }
    }} operateColumnProps={{
      // 自定义宽度
      width: 300,
      // 自定义操作列
      moreOperator: () => {
        return <div>自定义</div>;
      },
      // 自定义操作列之后
      moreOperatorAfter: () => {
        return <div>自定义</div>;
      }
    }} createButton={<Button type="primary">自定义新建文本</Button>} readProps={{
      operateIsDisabled: record => {
        if (record.id % 3) {
          return false;
        }
        return true;
      }
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name',
      operateIsDisabled: record => {
        if (record.id % 3) {
          return false;
        }
        return true;
      }
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} updateProps={{
      operateIsDisabled: record => {
        if (record.id % 3) {
          return false;
        }
        return true;
      },
      operateIsHidden: record => {
        if (record.id % 4) {
          return false;
        }
        return true;
      }
    }} />;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns: ProColumns<any>[] = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字',
      dataIndex: 'name',
      search: true
    }, {
      title: '等级(本地数据)',
      dataIndex: 'level',
      search: true,
      valueEnum: levels,
      ...proFormSelectSearchProps
    }, {
      title: 'city(远端数据)',
      dataIndex: 'city',
      search: true,
      request: async () => {
        const res = await fakeRequestCity();
        return res.map(item => ({
          label: item,
          value: item
        }));
      },
      ...proFormSelectSearchProps
    }, {
      title: 'area(联动 city)',
      dataIndex: 'area',
      search: true,
      request: async params => {
        const res = await fakeRequestArea(params);
        return res.map(item => ({
          label: item,
          value: item
        }));
      },
      dependencies: ['city'],
      ...proFormSelectSearchProps
    }, {
      title: '学校(远端数据 label value)',
      dataIndex: 'school',
      search: true,
      valueType: 'select' as const,
      request: () => fakeRequestSchool(),
      ...proFormSelectSearchProps
    }];
    return <CRUD actions={[]} tableProps={{
      columns,
      request: fakeRequest
    }} />;
  }
}`,...q.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id'
    }, {
      title: '名字',
      dataIndex: 'name'
    }];
    return <CRUD actions={[]} tableProps={{
      columns,
      request: fakeRequest,
      search: false
    }} />;
  }
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      search: true
    }, {
      title: '名字',
      dataIndex: 'name',
      search: true
    }];
    return <CRUD actions={['create', 'read', 'delete', 'update']} tableProps={{
      columns,
      request: fakeRequest
    }} createButton={<Button type="primary">新建</Button>} createProps={{
      submitText: '自定义新建确定',
      resetText: '自定义新建取消'
    }} readProps={{
      submitText: '自定义查看确定',
      resetText: '自定义查看取消',
      operateText: '查看'
    }} deleteProps={{
      nameIndex: 'name',
      operateText: '删除',
      desc: '确定要删除吗？'
    }} updateProps={{
      operateText: '编辑',
      submitText: '自定义编辑确定',
      resetText: '自定义编辑取消',
      successText: '编辑成功'
    }} requestDeleteByRecord={fakeDeleteByRecord} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateByValues={fakeUpdateById} />;
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CRUD actions={[]} tableProps={{
      columns: [{
        title: 'id',
        dataIndex: 'id',
        search: true
      }, {
        title: '名字',
        dataIndex: 'name',
        search: true
      }],
      request: fakeRequest,
      rowSelection: {
        alwaysShowAlert: true
      }
    }} batchActions={[{
      btnText: '批量xxx',
      onClick: async (_, {
        selectedRowKeys
      }) => {
        console.log(selectedRowKeys);
      }
    }, {
      btnText: '批量danger',
      danger: true,
      onClick: async (_, {
        selectedRowKeys
      }) => {
        console.log(selectedRowKeys);
      }
    }]} />;
  }
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    return <CRUD actions={['create', 'read', 'delete', 'update']} tableProps={{
      columns,
      request: fakeRequest,
      defaultExpandAllRows: true,
      expandable: {
        expandedRowKeys: ['0', '1'],
        expandedRowRender: () => {
          return <div>123</div>;
        }
      }
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} />;
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    }, {
      title: 'city',
      dataIndex: 'city'
    }, {
      title: 'area',
      dataIndex: 'area'
    }];
    return <div className="h-[800px] border border-red-500">
        <CRUD fullPage actions={['create', 'read', 'delete', 'update']} tableProps={{
        columns,
        request: fakeRequest
      }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
        nameIndex: 'name'
      }} detailForm={() => <>
              <ProFormText name="name" label="名字" required rules={[{
          required: true
        }]} extra="extra extra extra extra" />
            </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} />
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const Y=["Normal","ReadDetail","BatchDelete","MoreCustom","FormRef","ActionRef","RemoteData","NoSearch","CustomText","RowSelection","ExpandedRowRender","FullPage"];export{R as ActionRef,x as BatchDelete,I as CustomText,b as ExpandedRowRender,y as FormRef,B as FullPage,h as MoreCustom,f as NoSearch,m as Normal,p as ReadDetail,q as RemoteData,P as RowSelection,Y as __namedExportsOrder,X as default};
