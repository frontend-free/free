import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{_ as te,P as re,a as C,l as s,B as P,k as ae}from"./pro_form_switch_number-D9BN8n19.js";import{a as se}from"./filter-Dynzr6vS.js";import"./date-DJ5b9kEY.js";import"./isNumber-Dc4sICNo.js";import{R as ne,r as Y}from"./index-BTkrZ5ys.js";import{f as n,a as B,d as q,b as f,e as R,l as oe,g as de,h as ce,i as ue}from"./data-DDO97U_P.js";import{W as I}from"./index-DGyR-WQo.js";import"./index-D2MAbzvX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqOStK5P.js";import"./index-BIm0odtm.js";import"./iframe-DAt0AXUI.js";import"../sb-preview/runtime.js";var le=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],ie=ne.forwardRef(function(t,r){var a=t.fieldProps,o=t.unCheckedChildren,Z=t.checkedChildren,$=t.proFieldProps,ee=te(t,le);return e.jsx(re,C({valueType:"switch",fieldProps:C({unCheckedChildren:o,checkedChildren:Z},a),ref:r,valuePropName:"checked",proFieldProps:$,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},ee))});const d={fieldProps:{showSearch:!0,filterOption:(t,r)=>se(r.label,t),fetchDataOnSearch:!1}},ve={title:"@fe-free/core/CRUD",component:s,tags:["autodocs"]},c={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n},requestDeleteByRecord:B,deleteProps:{nameIndex:"name"},detailForm:r=>e.jsx(e.Fragment,{children:e.jsx(I,{...r,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:q,requestCreateByValues:f,requestUpdateById:R})}},u={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["read_detail"],tableProps:{columns:t,request:n}})}},l={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字(省略)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n,toolBarRender:()=>[e.jsx("div",{children:"自定义1"},"custom1"),e.jsx("div",{children:"自定义2"},"custom2")]},operateColumnProps:{width:300,moreOperator:()=>e.jsx("div",{children:"自定义"}),moreOperatorAfter:()=>e.jsx("div",{children:"自定义"})},createButton:e.jsx(P,{type:"primary",children:"自定义新建文本"}),requestDeleteByRecord:B,deleteProps:{nameIndex:"name"},detailForm:r=>e.jsx(e.Fragment,{children:e.jsx(I,{...r,name:"name",label:"名字",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"})}),requestGetByRecord:q,requestCreateByValues:f,requestUpdateById:R})}},me=()=>{const t=Y.useRef(),[r]=ae.useForm(),a=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["create","read","update"],tableProps:{formRef:t,columns:a,request:n},detailFormInstance:r,detailForm:o=>e.jsxs(e.Fragment,{children:[e.jsx(I,{...o,name:"name",label:"名字",required:!0,rules:[{required:!0}],initialValue:"default"}),e.jsx(ie,{...o,name:"status",label:"开启",initialValue:!1})]}),requestGetByRecord:q,requestCreateByValues:f,requestUpdateByValues:R})},i={render:()=>e.jsx(me,{})},pe=()=>{const t=Y.useRef(),r=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(P,{onClick:()=>{var a;return(a=t.current.getActionRef().current)==null?void 0:a.reload()},children:"reload"}),e.jsx(s,{ref:t,actions:[],tableProps:{columns:r,request:n}})]})},m={render:()=>e.jsx(pe,{})},p={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0},{title:"等级(本地数据)",dataIndex:"level",search:!0,valueEnum:oe,...d},{title:"city(远端数据)",dataIndex:"city",search:!0,request:async()=>(await de()).map(a=>({label:a,value:a})),...d},{title:"area(联动 city)",dataIndex:"area",search:!0,request:async r=>(await ce(r)).map(o=>({label:o,value:o})),dependencies:["city"],...d},{title:"学校(远端数据 label value)",dataIndex:"school",search:!0,valueType:"select",request:()=>ue(),...d}];return e.jsx(s,{actions:[],tableProps:{columns:t,request:n}})}},x={render:()=>{const t=[{title:"id",dataIndex:"id"},{title:"名字",dataIndex:"name"}];return e.jsx(s,{actions:[],tableProps:{columns:t,request:n,search:!1}})}},h={render:()=>{const t=[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}];return e.jsx(s,{actions:["create","read","delete","update"],tableProps:{columns:t,request:n},createButton:e.jsx(P,{type:"primary",children:"新建"}),createProps:{submitText:"自定义新建确定",resetText:"自定义新建取消"},readProps:{submitText:"自定义查看确定",resetText:"自定义查看取消",operateText:"查看"},deleteProps:{nameIndex:"name",operateText:"删除",desc:"确定要删除吗？"},updateProps:{operateText:"编辑",submitText:"自定义编辑确定",resetText:"自定义编辑取消",successText:"编辑成功"},requestDeleteByRecord:B,detailForm:r=>e.jsx(e.Fragment,{children:e.jsx(I,{...r,name:"name",label:"名字",required:!0,rules:[{required:!0}]})}),requestGetByRecord:q,requestCreateByValues:f,requestUpdateByValues:R})}},y={render:()=>e.jsx(s,{actions:[],tableProps:{columns:[{title:"id",dataIndex:"id",search:!0},{title:"名字",dataIndex:"name",search:!0}],request:n},batchActions:[{btnText:"批量删除",danger:!0,onClick:async(t,{selectedRowKeys:r})=>{console.log(r)}}]})};var k,b,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(b=c.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var j,v,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(v=u.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,g,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      nameIndex: 'name'
    }} detailForm={formProps => <>
            <ProFormText {...formProps} name="name" label="名字" required rules={[{
        required: true
      }]} extra="extra extra extra extra" />
          </>} requestGetByRecord={fakeGetByRecord} requestCreateByValues={fakeCreate} requestUpdateById={fakeUpdateById} />;
  }
}`,...(D=(g=l.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var U,w,V;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...(V=(w=i.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var A,G,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...(O=(G=m.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var N,_,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,W,K;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(K=(W=x.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var L,z,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Te=["Normal","ReadDetail","MoreCustom","FormRef","ActionRef","RemoteData","NoSearch","CustomText","RowSelection"];export{m as ActionRef,h as CustomText,i as FormRef,l as MoreCustom,x as NoSearch,c as Normal,u as ReadDetail,p as RemoteData,y as RowSelection,Te as __namedExportsOrder,ve as default};
