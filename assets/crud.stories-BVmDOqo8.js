import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{_ as re,P as te,a as C,k as s,B as X,h as ae,p as d}from"./index-B4fAIb49.js";import"./isNumber-Drx5NVlI.js";import"./date-DYq0-6zX.js";import{R as se,r as Y}from"./index-BTkrZ5ys.js";import{f as n,a as P,d as y,b as f,e as R,l as ne,g as oe,h as de,i as ce}from"./data-CKDtBb5g.js";import{W as I}from"./index-V0ybR4y9.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-BGktPy8V.js";import"../sb-preview/runtime.js";var ue=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],le=se.forwardRef(function(r,t){var a=r.fieldProps,o=r.unCheckedChildren,Z=r.checkedChildren,$=r.proFieldProps,ee=re(r,ue);return e.jsx(te,C({valueType:"switch",fieldProps:C({unCheckedChildren:o,checkedChildren:Z},a),ref:t,valuePropName:"checked",proFieldProps:$,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},ee))});const Fe={title:"@fe-free/core/CRUD",component:s,tags:["autodocs"]},c={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:r,request:n},requestDeleteByRecord:P,deleteProps:{nameIndex:"name"},detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(I,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:y,requestCreateByValues:f,requestUpdateById:R})}},u={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["read_detail"],tableProps:{columns:r,request:n}})}},l={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:r,request:n,toolBarRender:()=>[e.jsx("div",{children:"自定义1"},"custom1"),e.jsx("div",{children:"自定义2"},"custom2")]},operateColumnProps:{width:300,moreOperator:()=>e.jsx("div",{children:"自定义"}),moreOperatorAfter:()=>e.jsx("div",{children:"自定义"})},requestDeleteByRecord:P,deleteProps:{nameIndex:"name"},detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(I,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:y,requestCreateByValues:f,requestUpdateById:R})}},ie=()=>{const r=Y.useRef(),[t]=ae.useForm(),a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["create","read","update"],tableProps:{formRef:r,columns:a,request:n},detailFormInstance:t,detailForm:o=>e.jsxs(e.Fragment,{children:[e.jsx(I,{...o,name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),e.jsx(le,{...o,name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:y,requestCreateByValues:f,requestUpdateByValues:R})},i={render:()=>e.jsx(ie,{})},me=()=>{const r=Y.useRef(),t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClick:()=>{var a;return(a=r.current.getActionRef().current)==null?void 0:a.reload()},children:"reload"}),e.jsx(s,{ref:r,actions:[],tableProps:{columns:t,request:n}})]})},m={render:()=>e.jsx(me,{})},p={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:ne,...d},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await oe()).map(a=>({label:a,value:a})),...d},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async t=>(await de(t)).map(o=>({label:o,value:o})),dependencies:["city"],...d},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>ce(),...d}];return e.jsx(s,{actions:[],tableProps:{columns:r,request:n}})}},x={render:()=>{const r=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return e.jsx(s,{actions:[],tableProps:{columns:r,request:n,search:!1}})}},h={render:()=>{const r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:r,request:n},createButton:e.jsx(X,{type:"primary",children:"新建"}),createProps:{submitText:"自定义新建确定",resetText:"自定义新建取消"},readProps:{submitText:"自定义查看确定",resetText:"自定义查看取消",operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",submitText:"自定义编辑确定",resetText:"自定义编辑取消",successText:"编辑成功"},requestDeleteByRecord:P,detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(I,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:y,requestCreateByValues:f,requestUpdateByValues:R})}},q={render:()=>e.jsx(s,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:n},batchActions:[{btnText:"批量删除",danger:!0,onClick:async(r,{selectedRowKeys:t})=>{console.log(t)}}]})};var B,k,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    }} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateById={fakeUpdateById} />;
  }
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var F,j,v;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var T,S,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    }} requestDeleteByRecord={fakeDeleteByRecord} deleteProps={{
      nameIndex: 'name'
    }} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateById={fakeUpdateById} />;
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var D,U,w;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...(w=(U=i.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var V,A,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var N,_,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,W,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(W=x.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var K,L,z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    }} requestDeleteByRecord={fakeDeleteByRecord} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateByValues={fakeUpdateById} />;
  }
}`,...(z=(L=h.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,J,Q;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      btnText: '批量删除',
      danger: true,
      onClick: async (_, {
        selectedRowKeys
      }) => {
        console.log(selectedRowKeys);
      }
    }]} />;
  }
}`,...(Q=(J=q.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const je=["Normal","ReadDetail","MoreCustom","FormRef","ActionRef","RemoteData","NoSearch","CustomText","RowSelection"];export{m as ActionRef,h as CustomText,i as FormRef,l as MoreCustom,x as NoSearch,c as Normal,u as ReadDetail,p as RemoteData,q as RowSelection,je as __namedExportsOrder,Fe as default};
