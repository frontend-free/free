import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{_ as ne,P as oe,a as C,m as a,B,l as de}from"./pro_form_switch_number-CwK8AvaD.js";import{a as ce}from"./filter-Dynzr6vS.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{R as ue,r as te}from"./index-BTkrZ5ys.js";import{f as n,a as b,d as f,b as R,e as I,l as le,g as ie,h as me,i as pe}from"./data-BwWKbX1d.js";import{W as P}from"./index-C6Zl10c4.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DzG6B8EN.js";import"../sb-preview/runtime.js";var xe=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],he=ue.forwardRef(function(t,r){var s=t.fieldProps,o=t.unCheckedChildren,re=t.checkedChildren,ae=t.proFieldProps,se=ne(t,xe);return e.jsx(oe,C({valueType:"switch",fieldProps:C({unCheckedChildren:o,checkedChildren:re},s),ref:r,valuePropName:"checked",proFieldProps:ae,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},se))});const d={fieldProps:{showSearch:!0,filterOption:(t,r)=>ce(r.label,t),fetchDataOnSearch:!1}},Se={title:"@fe-free/core/CRUD",component:a,tags:["autodocs"]},c={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n},requestDeleteByRecord:b,deleteProps:{nameIndex:"name"},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(P,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:f,requestCreateByValues:R,requestUpdateById:I})}},u={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["read_detail"],tableProps:{columns:t,request:n}})}},l={render:()=>e.jsx(a,{actions:["batch_delete"],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:n},requestDeleteByRecords:async t=>{console.log(t)}})},i={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n,toolBarRender:()=>[e.jsx("div",{children:"自定义1"},"custom1"),e.jsx("div",{children:"自定义2"},"custom2")]},operateColumnProps:{width:300,moreOperator:()=>e.jsx("div",{children:"自定义"}),moreOperatorAfter:()=>e.jsx("div",{children:"自定义"})},createButton:e.jsx(B,{type:"primary",children:"自定义新建文本"}),requestDeleteByRecord:b,deleteProps:{nameIndex:"name",operateIsDisabled:r=>!(r.id%3)},detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(P,{name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:f,requestCreateByValues:R,requestUpdateById:I,updateProps:{operateIsDisabled:r=>!(r.id%3)}})}},ye=()=>{const t=te.useRef(),[r]=de.useForm(),s=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["create","read","update"],tableProps:{formRef:t,columns:s,request:n},detailFormInstance:r,detailForm:()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),e.jsx(he,{name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:f,requestCreateByValues:R,requestUpdateByValues:I})},m={render:()=>e.jsx(ye,{})},qe=()=>{const t=te.useRef(),r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{onClick:()=>{var s;return(s=t.current.getActionRef().current)==null?void 0:s.reload()},children:"reload"}),e.jsx(a,{ref:t,actions:[],tableProps:{columns:r,request:n}})]})},p={render:()=>e.jsx(qe,{})},x={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:le,...d},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await ie()).map(s=>({label:s,value:s})),...d},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async r=>(await me(r)).map(o=>({label:o,value:o})),dependencies:["city"],...d},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>pe(),...d}];return e.jsx(a,{actions:[],tableProps:{columns:t,request:n}})}},h={render:()=>{const t=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return e.jsx(a,{actions:[],tableProps:{columns:t,request:n,search:!1}})}},y={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(a,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n},createButton:e.jsx(B,{type:"primary",children:"新建"}),createProps:{submitText:"自定义新建确定",resetText:"自定义新建取消"},readProps:{submitText:"自定义查看确定",resetText:"自定义查看取消",operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",submitText:"自定义编辑确定",resetText:"自定义编辑取消",successText:"编辑成功"},requestDeleteByRecord:b,detailForm:()=>e.jsx(e.Fragment,{children:e.jsx(P,{name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:f,requestCreateByValues:R,requestUpdateByValues:I})}},q={render:()=>e.jsx(a,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:n},batchActions:[{btnText:"批量xxx",onClick:async(t,{selectedRowKeys:r})=>{console.log(r)}},{btnText:"批量danger",danger:!0,onClick:async(t,{selectedRowKeys:r})=>{console.log(r)}}]})};var k,F,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      request: fakeRequest
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={() => <>
            <ProFormText name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateById={fakeUpdateById} />;
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var D,T,v;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(v=(T=u.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var g,S,U;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(U=(S=l.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var w,V,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    }} createButton={<Button type="primary">自定义新建文本</Button>} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
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
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateById={fakeUpdateById} updateProps={{
      operateIsDisabled: record => {
        if (record.id % 3) {
          return false;
        }
        return true;
      }
    }} />;
  }
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var G,_,O;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var N,E,K;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...(K=(E=p.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var M,W,L;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(W=x.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var z,H,J;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
      request: fakeRequest
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
}`,...(ee=($=q.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ue=["Normal","ReadDetail","BatchDelete","MoreCustom","FormRef","ActionRef","RemoteData","NoSearch","CustomText","RowSelection"];export{p as ActionRef,l as BatchDelete,y as CustomText,m as FormRef,i as MoreCustom,h as NoSearch,c as Normal,u as ReadDetail,x as RemoteData,q as RowSelection,Ue as __namedExportsOrder,Se as default};
