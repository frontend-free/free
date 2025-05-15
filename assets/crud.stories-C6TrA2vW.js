import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{_ as S,f as g,g as d,h as ae,o as oe,u as de,F as le,i as ce,C as l,B as ne,P as ue,p as h}from"./index-tfnyfrW1.js";import"./date-CuSWkN_9.js";import{R as ie,r as j}from"./index-BTkrZ5ys.js";import{a as c,b as se,c as T,d as b,e as D,l as pe,g as me,h as xe,i as he}from"./data-B42kEGSK.js";import"./index-D2MAbzvX.js";import"./index-BqOStK5P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BIm0odtm.js";import"./iframe-DJY4KTZY.js";import"../sb-preview/runtime.js";var fe=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],Pe=ie.forwardRef(function(a,t){var e=a.fieldProps,n=a.unCheckedChildren,o=a.checkedChildren,i=a.proFieldProps,p=S(a,fe);return r.jsx(g,d({valueType:"switch",fieldProps:d({unCheckedChildren:n,checkedChildren:o},e),ref:t,valuePropName:"checked",proFieldProps:i,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},p))}),ye=["fieldProps","proFieldProps"],Re=["fieldProps","proFieldProps"],k="text",ve=function(t){var e=t.fieldProps,n=t.proFieldProps,o=S(t,ye);return r.jsx(g,d({valueType:k,fieldProps:e,filedConfig:{valueType:k},proFieldProps:n},o))},qe=function(t){var e=de(t.open||!1,{value:t.open,onChange:t.onOpenChange}),n=ae(e,2),o=n[0],i=n[1];return r.jsx(le.Item,{shouldUpdate:!0,noStyle:!0,children:function(F){var u,B=F.getFieldValue(t.name||[]);return r.jsx(ce,d(d({getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},onOpenChange:function(s){return i(s)},content:r.jsxs("div",{style:{padding:"4px 0"},children:[(u=t.statusRender)===null||u===void 0?void 0:u.call(t,B),t.strengthText?r.jsx("div",{style:{marginTop:10},children:r.jsx("span",{children:t.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},t.popoverProps),{},{open:o,children:t.children}))}})},Ce=function(t){var e=t.fieldProps,n=t.proFieldProps,o=S(t,Re),i=j.useState(!1),p=ae(i,2),F=p[0],u=p[1];return e!=null&&e.statusRender&&o.name?r.jsx(qe,{name:o.name,statusRender:e==null?void 0:e.statusRender,popoverProps:e==null?void 0:e.popoverProps,strengthText:e==null?void 0:e.strengthText,open:F,onOpenChange:u,children:r.jsx("div",{children:r.jsx(g,d({valueType:"password",fieldProps:d(d({},oe(e,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(m){var s;e==null||(s=e.onBlur)===null||s===void 0||s.call(e,m),u(!1)},onClick:function(m){var s;e==null||(s=e.onClick)===null||s===void 0||s.call(e,m),u(!0)}}),proFieldProps:n,filedConfig:{valueType:k}},o))})}):r.jsx(g,d({valueType:"password",fieldProps:e,proFieldProps:n,filedConfig:{valueType:k}},o))},x=ve;x.Password=Ce;x.displayName="ProFormComponent";const Ve={title:"@fe-free/core/CRUD",component:l,tags:["autodocs"]},f={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return r.jsx(l,{actions:["create","read","delete","update"],tableProps:{columns:a,request:c},requestDeleteByRecord:se,deleteProps:{nameIndex:"name"},detailForm:t=>r.jsx(r.Fragment,{children:r.jsx(x,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:T,requestCreateByValues:b,requestUpdateById:D})}},P={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["read_detail"],tableProps:{columns:a,request:c}})}},Ie=()=>{const a=j.useRef(),[t]=ue.useForm(),e=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["create","read","update"],tableProps:{formRef:a,columns:e,request:c},detailFormInstance:t,detailForm:n=>r.jsxs(r.Fragment,{children:[r.jsx(x,{...n,name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),r.jsx(Pe,{...n,name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:T,requestCreateByValues:b,requestUpdateByValues:D})},y={render:()=>r.jsx(Ie,{})},ge=()=>{const a=j.useRef(),t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsxs(r.Fragment,{children:[r.jsx(ne,{onClick:()=>{var e;return(e=a.current.getActionRef().current)==null?void 0:e.reload()},children:"reload"}),r.jsx(l,{ref:a,actions:[],tableProps:{columns:t,request:c}})]})},R={render:()=>r.jsx(ge,{})},v={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:pe,...h},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await me()).map(e=>({label:e,value:e})),...h},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async t=>(await xe(t)).map(n=>({label:n,value:n})),dependencies:["city"],...h},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>he(),...h}];return r.jsx(l,{actions:[],tableProps:{columns:a,request:c}})}},q={render:()=>{const a=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return r.jsx(l,{actions:[],tableProps:{columns:a,request:c,search:!1}})}},C={render:()=>{const a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return r.jsx(l,{actions:["create","read","delete","update"],tableProps:{columns:a,request:c},createButton:r.jsx(ne,{type:"primary",children:"新建"}),readProps:{operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",successText:"编辑成功"},requestDeleteByRecord:se,detailForm:t=>r.jsx(r.Fragment,{children:r.jsx(x,{...t,name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:T,requestCreateByValues:b,requestUpdateByValues:D})}},I={render:()=>r.jsx(l,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:c},batchActions:[{btnText:"批量删除",danger:!0,onClick:async(a,{selectedRowKeys:t})=>{console.log(t)}}]})};var w,U,_;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(U=f.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var V,A,N;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(A=P.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var G,O,M;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <RefComponent />
}`,...(M=(O=y.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var E,W,$;R.parameters={...R.parameters,docs:{...(E=R.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...($=(W=R.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,L,z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,J,Q;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(J=q.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(re=I.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ae=["Normal","ReadDetail","Ref","ActionRef","RemoteData","NoSearch","CustomText","RowSelection"];export{R as ActionRef,C as CustomText,q as NoSearch,f as Normal,P as ReadDetail,y as Ref,v as RemoteData,I as RowSelection,Ae as __namedExportsOrder,Ve as default};
