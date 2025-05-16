import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{_ as D,f as F,g as l,h as le,o as ie,u as ce,F as pe,i as me,C as d,B as ue,P as xe,p as h}from"./index-Cz7almIm.js";import"./date-CuSWkN_9.js";import{R as he,r as U}from"./index-BTkrZ5ys.js";import{a as u,b as w,c as k,d as j,e as b,l as fe,g as Pe,h as ye,i as qe}from"./data-Dms4XzZl.js";import"./index-D2MAbzvX.js";import"./index-BqOStK5P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BIm0odtm.js";import"./iframe-K2R3IjMt.js";import"../sb-preview/runtime.js";var ve=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],Re=he.forwardRef(function(a,t){var r=a.fieldProps,n=a.unCheckedChildren,o=a.checkedChildren,p=a.proFieldProps,m=D(a,ve);return e.jsx(F,l({valueType:"switch",fieldProps:l({unCheckedChildren:n,checkedChildren:o},r),ref:t,valuePropName:"checked",proFieldProps:p,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},m))}),Ce=["fieldProps","proFieldProps"],Ie=["fieldProps","proFieldProps"],g="text",Be=function(t){var r=t.fieldProps,n=t.proFieldProps,o=D(t,Ce);return e.jsx(F,l({valueType:g,fieldProps:r,filedConfig:{valueType:g},proFieldProps:n},o))},Fe=function(t){var r=ce(t.open||!1,{value:t.open,onChange:t.onOpenChange}),n=le(r,2),o=n[0],p=n[1];return e.jsx(pe.Item,{shouldUpdate:!0,noStyle:!0,children:function(S){var i,T=S.getFieldValue(t.name||[]);return e.jsx(me,l(l({getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},onOpenChange:function(s){return p(s)},content:e.jsxs("div",{style:{padding:"4px 0"},children:[(i=t.statusRender)===null||i===void 0?void 0:i.call(t,T),t.strengthText?e.jsx("div",{style:{marginTop:10},children:e.jsx("span",{children:t.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},t.popoverProps),{},{open:o,children:t.children}))}})},ge=function(t){var r=t.fieldProps,n=t.proFieldProps,o=D(t,Ie),p=U.useState(!1),m=le(p,2),S=m[0],i=m[1];return r!=null&&r.statusRender&&o.name?e.jsx(Fe,{name:o.name,statusRender:r==null?void 0:r.statusRender,popoverProps:r==null?void 0:r.popoverProps,strengthText:r==null?void 0:r.strengthText,open:S,onOpenChange:i,children:e.jsx("div",{children:e.jsx(F,l({valueType:"password",fieldProps:l(l({},ie(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(x){var s;r==null||(s=r.onBlur)===null||s===void 0||s.call(r,x),i(!1)},onClick:function(x){var s;r==null||(s=r.onClick)===null||s===void 0||s.call(r,x),i(!0)}}),proFieldProps:n,filedConfig:{valueType:g}},o))})}):e.jsx(F,l({valueType:"password",fieldProps:r,proFieldProps:n,filedConfig:{valueType:g}},o))},c=Be;c.Password=ge;c.displayName="ProFormComponent";const Ne={title:"@fe-free/core/CRUD",component:d,tags:["autodocs"]},f={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(d,{actions:["create","read","delete","update"],tableProps:{columns:a,request:u},requestDeleteByRecord:w,deleteProps:{nameIndex:"name"},detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(c,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:k,requestCreateByValues:j,requestUpdateById:b})}},P={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(d,{actions:["read_detail"],tableProps:{columns:a,request:u}})}},y={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(d,{actions:["create","read","delete","update"],tableProps:{columns:a,request:u,toolBarRender:()=>[e.jsx("div",{children:"自定义1"},"custom1"),e.jsx("div",{children:"自定义2"},"custom2")]},operateColumnProps:{width:300,moreOperator:()=>e.jsx("div",{children:"自定义"}),moreOperatorAfter:()=>e.jsx("div",{children:"自定义"})},requestDeleteByRecord:w,deleteProps:{nameIndex:"name"},detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(c,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:k,requestCreateByValues:j,requestUpdateById:b})}},ke=()=>{const a=U.useRef(),[t]=xe.useForm(),r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(d,{actions:["create","read","update"],tableProps:{formRef:a,columns:r,request:u},detailFormInstance:t,detailForm:n=>e.jsxs(e.Fragment,{children:[e.jsx(c,{...n,name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),e.jsx(Re,{...n,name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:k,requestCreateByValues:j,requestUpdateByValues:b})},q={render:()=>e.jsx(ke,{})},je=()=>{const a=U.useRef(),t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(ue,{onClick:()=>{var r;return(r=a.current.getActionRef().current)==null?void 0:r.reload()},children:"reload"}),e.jsx(d,{ref:a,actions:[],tableProps:{columns:t,request:u}})]})},v={render:()=>e.jsx(je,{})},R={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:fe,...h},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await Pe()).map(r=>({label:r,value:r})),...h},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async t=>(await ye(t)).map(n=>({label:n,value:n})),dependencies:["city"],...h},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>qe(),...h}];return e.jsx(d,{actions:[],tableProps:{columns:a,request:u}})}},C={render:()=>{const a=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return e.jsx(d,{actions:[],tableProps:{columns:a,request:u,search:!1}})}},I={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(d,{actions:["create","read","delete","update"],tableProps:{columns:a,request:u},createButton:e.jsx(ue,{type:"primary",children:"新建"}),readProps:{operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",successText:"编辑成功"},requestDeleteByRecord:w,detailForm:t=>e.jsx(e.Fragment,{children:e.jsx(c,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:k,requestCreateByValues:j,requestUpdateByValues:b})}},B={render:()=>e.jsx(d,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:u},batchActions:[{btnText:"批量删除",danger:!0,onClick:async(a,{selectedRowKeys:t})=>{console.log(t)}}]})};var V,A,_;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var G,O,N;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(O=P.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var M,E,W;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(E=y.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var $,K,L;q.parameters={...q.parameters,docs:{...($=q.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...(L=(K=q.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var z,H,J;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    }} createButton={<Button type="primary">新建</Button>} readProps={{
      operateText: '查看'
    }} deleteProps={{
      nameIndex: 'name',
      operateText: '删除',
      desc: '确定要删除吗？'
    }} updateProps={{
      operateText: '编辑',
      successText: '编辑成功'
    }} requestDeleteByRecord={fakeDeleteByRecord} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateByValues={fakeUpdateById} />;
  }
}`,...(ne=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,de;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const Me=["Normal","ReadDetail","MoreCustom","FormRef","ActionRef","RemoteData","NoSearch","CustomText","RowSelection"];export{v as ActionRef,I as CustomText,q as FormRef,y as MoreCustom,C as NoSearch,f as Normal,P as ReadDetail,R as RemoteData,B as RowSelection,Me as __namedExportsOrder,Ne as default};
