import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{F as n,Jr as r,L as i,Na as a,Xr as o,Yi as s,Yr as c,Zi as l,l as u,la as d,qr as f,t as p}from"./iframe-CLFZ225d.js";import{a as m,c as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S,u as C}from"./data-DatHMoNT.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{f(),p(),l(),w=t(a()),_(),T=s(),E={title:`@fe-free/core/CRUD`,component:n,tags:[`autodocs`]},D={render:()=>(0,T.jsx)(n,{actions:[`create`,`read`,`delete`,`update`],tableProps:{rowKey:`id`,columns:[{title:`序号`,valueType:i.CustomSerialNumber},{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:g},requestDeleteByRecord:v,deleteProps:{nameIndex:`name`},detailForm:()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestGetByRecord:b,requestCreateByValues:S})},O={render:()=>(0,T.jsx)(n,{actions:[`read_detail`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g}})},k={render:()=>(0,T.jsx)(n,{actions:[`batch_delete`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g},requestDeleteByRecords:async e=>{console.log(e)}})},A={render:()=>(0,T.jsx)(n,{actions:[`create`,`read`,`delete`,`update`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:g,toolBarRender:()=>[(0,T.jsx)(`div`,{children:`自定义1`},`custom1`),(0,T.jsx)(`div`,{children:`自定义2`},`custom2`)],search:{optionRender:(e,t,n)=>[...n,(0,T.jsx)(d,{type:`primary`,className:`ml-2`,children:`额外的按钮`},`1`)]}},operateColumnProps:{width:300,moreOperator:()=>(0,T.jsx)(`div`,{children:`自定义`}),moreOperatorAfter:()=>(0,T.jsx)(`div`,{children:`自定义`})},createButton:(0,T.jsx)(d,{type:`primary`,children:`自定义新建文本`}),readProps:{operateIsDisabled:e=>!(e.id%3)},requestDeleteByRecord:v,deleteProps:{nameIndex:`name`,operateIsDisabled:e=>!(e.id%3)},detailForm:()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestGetByRecord:b,requestCreateByValues:S,updateProps:{operateIsDisabled:e=>!(e.id%3),operateIsHidden:e=>!(e.id%4)}})},j=()=>{let e=(0,w.useRef)(null),[t]=r.useForm();return(0,T.jsx)(n,{actions:[`create`,`read`,`update`],tableProps:{rowKey:`id`,formRef:e,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g},detailFormInstance:t,detailForm:()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],initialValue:`default`}),(0,T.jsx)(o,{name:`status`,label:`开启`,initialValue:!1})]}),requestGetByRecord:b,requestCreateByValues:S,requestUpdateByValues:h})},M={render:()=>(0,T.jsx)(j,{})},N=()=>{let e=(0,w.useRef)(null);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d,{onClick:()=>e.current?.getActionRef()?.current?.reload(),children:`reload`}),(0,T.jsx)(n,{ref:e,actions:[],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g}})]})},P={render:()=>(0,T.jsx)(N,{})},F={render:()=>(0,T.jsx)(n,{actions:[],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0},{title:`等级(本地数据)`,dataIndex:`level`,search:!0,valueEnum:C,...u},{title:`city(远端数据)`,dataIndex:`city`,search:!0,request:async()=>(await y()).map(e=>({label:e,value:e})),...u},{title:`area(联动 city)`,dataIndex:`area`,search:!0,request:async e=>(await m(e)).map(e=>({label:e,value:e})),dependencies:[`city`],...u},{title:`学校(远端数据 label value)`,dataIndex:`school`,search:!0,valueType:`select`,request:()=>x(),...u}],request:g}})},I={render:()=>(0,T.jsx)(n,{actions:[],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`},{title:`名字`,dataIndex:`name`}],request:g,search:!1}})},L={render:()=>(0,T.jsx)(n,{actions:[`create`,`read`,`delete`,`update`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g},createButton:(0,T.jsx)(d,{type:`primary`,children:`新建`}),createProps:{submitText:`自定义新建确定`,resetText:`自定义新建取消`},readProps:{submitText:`自定义查看确定`,resetText:`自定义查看取消`,operateText:`查看`},deleteProps:{nameIndex:`name`,operateText:`删除`,desc:`确定要删除吗？`},updateProps:{operateText:`编辑`,submitText:`自定义编辑确定`,resetText:`自定义编辑取消`,successText:`编辑成功`},requestDeleteByRecord:v,detailForm:()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}]})}),requestGetByRecord:b,requestCreateByValues:S,requestUpdateByValues:h})},R={render:()=>(0,T.jsx)(n,{actions:[],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字`,dataIndex:`name`,search:!0}],request:g,rowSelection:{alwaysShowAlert:!0}},batchActions:[{btnText:`批量xxx`,onClick:async(e,{selectedRowKeys:t})=>{console.log(t)}},{btnText:`批量danger`,danger:!0,onClick:async(e,{selectedRowKeys:t})=>{console.log(t)}}]})},z={render:()=>(0,T.jsx)(n,{actions:[`create`,`read`,`delete`,`update`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0}],request:g,defaultExpandAllRows:!0,expandable:{expandedRowKeys:[`0`,`1`],expandedRowRender:()=>(0,T.jsx)(`div`,{children:`123`})}},requestDeleteByRecord:v,deleteProps:{nameIndex:`name`},detailForm:()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestGetByRecord:b,requestCreateByValues:S})},B={render:()=>(0,T.jsx)(`div`,{className:`h-[800px] border border-red-500`,children:(0,T.jsx)(n,{fullPage:!0,actions:[`create`,`read`,`delete`,`update`],tableProps:{rowKey:`id`,columns:[{title:`id`,dataIndex:`id`,search:!0},{title:`名字(省略)`,dataIndex:`name`,search:!0,ellipsis:!0},{title:`city`,dataIndex:`city`},{title:`area`,dataIndex:`area`}],request:g},requestDeleteByRecord:v,deleteProps:{nameIndex:`name`},detailForm:()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(c,{name:`name`,label:`名字`,required:!0,rules:[{required:!0}],extra:`extra extra extra extra`})}),requestGetByRecord:b,requestCreateByValues:S})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
      columns,
      request: fakeRequest
    }} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CRUD actions={['batch_delete']} tableProps={{
      rowKey: 'id',
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <FormRefComponent />
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ActionRefComponent />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
      columns,
      request: fakeRequest
    }} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'id',
      dataIndex: 'id'
    }, {
      title: '名字',
      dataIndex: 'name'
    }];
    return <CRUD actions={[]} tableProps={{
      rowKey: 'id',
      columns,
      request: fakeRequest,
      search: false
    }} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CRUD actions={[]} tableProps={{
      rowKey: 'id',
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
      rowKey: 'id',
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
        rowKey: 'id',
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
}`,...B.parameters?.docs?.source}}},V=[`Normal`,`ReadDetail`,`BatchDelete`,`MoreCustom`,`FormRef`,`ActionRef`,`RemoteData`,`NoSearch`,`CustomText`,`RowSelection`,`ExpandedRowRender`,`FullPage`]}))();export{P as ActionRef,k as BatchDelete,L as CustomText,z as ExpandedRowRender,M as FormRef,B as FullPage,A as MoreCustom,I as NoSearch,D as Normal,O as ReadDetail,F as RemoteData,R as RowSelection,V as __namedExportsOrder,E as default};