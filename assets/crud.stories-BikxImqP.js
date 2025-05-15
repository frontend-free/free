import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{_ as B,f as I,g as d,h as Z,o as te,u as ae,F as ne,i as se,C as l,B as ee,P as oe,p as h}from"./index-kfNFhcCn.js";import"./date-CuSWkN_9.js";import{R as de,r as j}from"./index-BTkrZ5ys.js";import{a as i,b as re,c as S,d as T,e as b,l as le,g as ue,h as ie,i as ce}from"./data-DGUCLL-B.js";import"./index-D2MAbzvX.js";import"./index-BqOStK5P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BIm0odtm.js";import"./iframe-8aNR3Sq_.js";import"../sb-preview/runtime.js";var pe=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],me=de.forwardRef(function(a,t){var e=a.fieldProps,n=a.unCheckedChildren,o=a.checkedChildren,c=a.proFieldProps,p=B(a,pe);return r.jsx(I,d({valueType:"switch",fieldProps:d({unCheckedChildren:n,checkedChildren:o},e),ref:t,valuePropName:"checked",proFieldProps:c,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},p))}),xe=["fieldProps","proFieldProps"],he=["fieldProps","proFieldProps"],g="text",fe=function(t){var e=t.fieldProps,n=t.proFieldProps,o=B(t,xe);return r.jsx(I,d({valueType:g,fieldProps:e,filedConfig:{valueType:g},proFieldProps:n},o))},Pe=function(t){var e=ae(t.open||!1,{value:t.open,onChange:t.onOpenChange}),n=Z(e,2),o=n[0],c=n[1];return r.jsx(ne.Item,{shouldUpdate:!0,noStyle:!0,children:function(F){var u,k=F.getFieldValue(t.name||[]);return r.jsx(se,d(d({getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},onOpenChange:function(s){return c(s)},content:r.jsxs("div",{style:{padding:"4px 0"},children:[(u=t.statusRender)===null||u===void 0?void 0:u.call(t,k),t.strengthText?r.jsx("div",{style:{marginTop:10},children:r.jsx("span",{children:t.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},t.popoverProps),{},{open:o,children:t.children}))}})},ye=function(t){var e=t.fieldProps,n=t.proFieldProps,o=B(t,he),c=j.useState(!1),p=Z(c,2),F=p[0],u=p[1];return e!=null&&e.statusRender&&o.name?r.jsx(Pe,{name:o.name,statusRender:e==null?void 0:e.statusRender,popoverProps:e==null?void 0:e.popoverProps,strengthText:e==null?void 0:e.strengthText,open:F,onOpenChange:u,children:r.jsx("div",{children:r.jsx(I,d({valueType:"password",fieldProps:d(d({},te(e,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(m){var s;e==null||(s=e.onBlur)===null||s===void 0||s.call(e,m),u(!1)},onClick:function(m){var s;e==null||(s=e.onClick)===null||s===void 0||s.call(e,m),u(!0)}}),proFieldProps:n,filedConfig:{valueType:g}},o))})}):r.jsx(I,d({valueType:"password",fieldProps:e,proFieldProps:n,filedConfig:{valueType:g}},o))},x=fe;x.Password=ye;x.displayName="ProFormComponent";const De={title:"@fe-free/core/CRUD",component:l,tags:["autodocs"]},f={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return r.jsx(l,{actions:["create","read","delete","update"],tableProps:{columns:a,request:i},requestDeleteByRecord:re,deleteProps:{nameIndex:"name"},detailForm:t=>r.jsx(r.Fragment,{children:r.jsx(x,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:S,requestCreateByValues:T,requestUpdateById:b})}},P={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["read_detail"],tableProps:{columns:a,request:i}})}},ve=()=>{const a=j.useRef(),[t]=oe.useForm(),e=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["create","read","update"],tableProps:{formRef:a,columns:e,request:i},detailFormInstance:t,detailForm:n=>r.jsxs(r.Fragment,{children:[r.jsx(x,{...n,name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),r.jsx(me,{...n,name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:S,requestCreateByValues:T,requestUpdateByValues:b})},y={render:()=>r.jsx(ve,{})},Re=()=>{const a=j.useRef(),t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsxs(r.Fragment,{children:[r.jsx(ee,{onClick:()=>{var e;return(e=a.current.getActionRef().current)==null?void 0:e.reload()},children:"reload"}),r.jsx(l,{ref:a,actions:[],tableProps:{columns:t,request:i}})]})},v={render:()=>r.jsx(Re,{})},R={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:le,...h},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await ue()).map(e=>({label:e,value:e})),...h},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async t=>(await ie(t)).map(n=>({label:n,value:n})),dependencies:["city"],...h},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>ce(),...h}];return r.jsx(l,{actions:[],tableProps:{columns:a,request:i}})}},q={render:()=>{const a=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return r.jsx(l,{actions:[],tableProps:{columns:a,request:i,search:!1}})}},C={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["create","read","delete","update"],tableProps:{columns:a,request:i},createButton:r.jsx(ee,{type:"primary",children:"新建"}),readProps:{operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",successText:"编辑成功"},requestDeleteByRecord:re,detailForm:t=>r.jsx(r.Fragment,{children:r.jsx(x,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:S,requestCreateByValues:T,requestUpdateByValues:b})}};var D,U,w;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(U=f.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var V,_,N;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(_=P.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var A,G,O;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <RefComponent />
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var M,E,W;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...(W=(E=v.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var $,L,z;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(L=R.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,J,K;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=q.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ue=["Normal","ReadDetail","Ref","ActionRef","RemoteData","NoSearch","CustomText"];export{v as ActionRef,C as CustomText,q as NoSearch,f as Normal,P as ReadDetail,y as Ref,R as RemoteData,Ue as __namedExportsOrder,De as default};
