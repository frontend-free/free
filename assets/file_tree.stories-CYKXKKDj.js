import{A as l,j as r}from"./iframe-BMRDrK3c.js";import"./preload-helper-D9Z9MdNV.js";const o={title:"@fe-free/core/FileTree",component:l,tags:["autodocs"],decorators:[e=>r.jsx("div",{className:"fec-border w-[200px] overflow-y-auto",children:r.jsx(e,{})})]},n={args:{title:"某某公司",enableSearch:!0,actions:["create","update","delete"],requestCreateByValues:e=>(console.log(e),Promise.resolve()),requestUpdateByValues:e=>(console.log(e),Promise.resolve()),requestDeleteByRecord:e=>(console.log(e),Promise.resolve()),treeProps:{defaultExpandAll:!0,treeData:[{title:"我的桌面",key:"1",children:[{title:"资料1",key:"1-0",children:[]},{title:"资料2",key:"1-1",children:[{title:"资料2-1资料2-1资料2-1资料2-1",key:"1-1-0",children:[]},{title:"资料2-2",key:"1-1-1",children:[]},{title:"资料2-3",key:"1-1-2",children:[]}]},{title:"资料3",key:"1-2",children:[]}]},{title:"我的文档",key:"2",children:[{title:"资料1",key:"2-0",children:[]},{title:"资料2",key:"2-1",children:[{title:"资料2-1",key:"2-1-0",children:[]},{title:"资料2-2",key:"2-1-1",children:[]},{title:"资料2-3",key:"2-1-2",children:[]}]},{title:"资料3",key:"2-0-2",children:[]}]},{title:"我的下载",key:"3",children:[{title:"资料1",key:"3-0",children:[]},{title:"资料2",key:"3-1",children:[]},{title:"资料3",key:"3-2",children:[]}]},{title:"周杰伦.jpg",key:"4",children:[]},{title:"more operateIsDisabled",key:"5",children:[]},{title:"more operateIsHidden",key:"6",children:[]}]},createProps:{operateIsDisabled:e=>e?.key==="5",operateIsHidden:e=>e?.key==="6"},updateProps:{operateIsDisabled:e=>e.key==="5",operateIsHidden:e=>e.key==="6"},deleteProps:{operateIsDisabled:e=>e.key==="5",operateIsHidden:e=>e.key==="6"}}},t={args:{title:"某某目录",enableSearch:!0,treeProps:{treeData:[{title:"周杰伦.jpg",key:"1"},{title:"周杰伦.mp3",key:"2"},{title:"周杰伦.mp4",key:"3"},{title:"周杰伦.pdf",key:"4"},{title:"周杰伦.doc",key:"5"}]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          key: '1-0',
          children: []
        }, {
          title: '资料2',
          key: '1-1',
          children: [{
            title: '资料2-1资料2-1资料2-1资料2-1',
            key: '1-1-0',
            children: []
          }, {
            title: '资料2-2',
            key: '1-1-1',
            children: []
          }, {
            title: '资料2-3',
            key: '1-1-2',
            children: []
          }]
        }, {
          title: '资料3',
          key: '1-2',
          children: []
        }]
      }, {
        title: '我的文档',
        key: '2',
        children: [{
          title: '资料1',
          key: '2-0',
          children: []
        }, {
          title: '资料2',
          key: '2-1',
          children: [{
            title: '资料2-1',
            key: '2-1-0',
            children: []
          }, {
            title: '资料2-2',
            key: '2-1-1',
            children: []
          }, {
            title: '资料2-3',
            key: '2-1-2',
            children: []
          }]
        }, {
          title: '资料3',
          key: '2-0-2',
          children: []
        }]
      }, {
        title: '我的下载',
        key: '3',
        children: [{
          title: '资料1',
          key: '3-0',
          children: []
        }, {
          title: '资料2',
          key: '3-1',
          children: []
        }, {
          title: '资料3',
          key: '3-2',
          children: []
        }]
      }, {
        title: '周杰伦.jpg',
        key: '4',
        children: []
      }, {
        title: 'more operateIsDisabled',
        key: '5',
        children: []
      }, {
        title: 'more operateIsHidden',
        key: '6',
        children: []
      }]
    },
    createProps: {
      operateIsDisabled: nodeData => nodeData?.key === '5',
      operateIsHidden: nodeData => nodeData?.key === '6'
    },
    updateProps: {
      operateIsDisabled: nodeData => nodeData.key === '5',
      operateIsHidden: nodeData => nodeData.key === '6'
    },
    deleteProps: {
      operateIsDisabled: nodeData => nodeData.key === '5',
      operateIsHidden: nodeData => nodeData.key === '6'
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '某某目录',
    enableSearch: true,
    treeProps: {
      treeData: [{
        title: '周杰伦.jpg',
        key: '1'
      }, {
        title: '周杰伦.mp3',
        key: '2'
      }, {
        title: '周杰伦.mp4',
        key: '3'
      }, {
        title: '周杰伦.pdf',
        key: '4'
      }, {
        title: '周杰伦.doc',
        key: '5'
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};const d=["Default","FileList"];export{n as Default,t as FileList,d as __namedExportsOrder,o as default};
