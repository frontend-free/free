import{F as l,j as n}from"./iframe-BPIFr1G2.js";import"./preload-helper-D9Z9MdNV.js";const s={title:"@fe-free/core/FileTree",component:l,tags:["autodocs"],decorators:[e=>n.jsx("div",{className:"c-border w-[200px] overflow-y-auto",children:n.jsx(e,{})})]},t={args:{title:"某某公司",enableSearch:!0,actions:["create","update","delete"],requestCreateByValues:e=>(console.log(e),Promise.resolve()),requestUpdateByValues:e=>(console.log(e),Promise.resolve()),requestDeleteByRecord:e=>(console.log(e),Promise.resolve()),treeProps:{defaultExpandAll:!0,treeData:[{title:"我的桌面",key:"1",children:[{title:"资料1",key:"1-0"},{title:"资料2",key:"1-1",children:[{title:"资料2-1资料2-1资料2-1资料2-1",key:"1-1-0"},{title:"资料2-2",key:"1-1-1"},{title:"资料2-3",key:"1-1-2"}]},{title:"资料3",key:"1-2"}]},{title:"我的文档",key:"2",children:[{title:"资料1",key:"2-0"},{title:"资料2",key:"2-1",children:[{title:"资料2-1",key:"2-1-0"},{title:"资料2-2",key:"2-1-1"},{title:"资料2-3",key:"2-1-2"}]},{title:"资料3",key:"2-0-2"}]},{title:"我的下载",key:"3",children:[{title:"资料1",key:"3-0"},{title:"资料2",key:"3-1"},{title:"资料3",key:"3-2"}]},{title:"周杰伦.jpg",key:"4"}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '某某公司',
    enableSearch: true,
    actions: ['create', 'update', 'delete'],
    requestCreateByValues: values => {
      console.log(values);
      return Promise.resolve();
    },
    requestUpdateByValues: values => {
      console.log(values);
      return Promise.resolve();
    },
    requestDeleteByRecord: values => {
      console.log(values);
      return Promise.resolve();
    },
    treeProps: {
      defaultExpandAll: true,
      treeData: [{
        title: '我的桌面',
        key: '1',
        children: [{
          title: '资料1',
          key: '1-0'
        }, {
          title: '资料2',
          key: '1-1',
          children: [{
            title: '资料2-1资料2-1资料2-1资料2-1',
            key: '1-1-0'
          }, {
            title: '资料2-2',
            key: '1-1-1'
          }, {
            title: '资料2-3',
            key: '1-1-2'
          }]
        }, {
          title: '资料3',
          key: '1-2'
        }]
      }, {
        title: '我的文档',
        key: '2',
        children: [{
          title: '资料1',
          key: '2-0'
        }, {
          title: '资料2',
          key: '2-1',
          children: [{
            title: '资料2-1',
            key: '2-1-0'
          }, {
            title: '资料2-2',
            key: '2-1-1'
          }, {
            title: '资料2-3',
            key: '2-1-2'
          }]
        }, {
          title: '资料3',
          key: '2-0-2'
        }]
      }, {
        title: '我的下载',
        key: '3',
        children: [{
          title: '资料1',
          key: '3-0'
        }, {
          title: '资料2',
          key: '3-1'
        }, {
          title: '资料3',
          key: '3-2'
        }]
      }, {
        title: '周杰伦.jpg',
        key: '4'
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,s as default};
