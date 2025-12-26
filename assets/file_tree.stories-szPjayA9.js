import{G as i,j as l}from"./iframe-M43T5Roj.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"@fe-free/core/FileTree",component:i,tags:["autodocs"],decorators:[e=>l.jsx("div",{className:"w-[300px] overflow-y-auto border border-01",children:l.jsx(e,{})})]},t={args:{title:"某某公司",enableSearch:!0,actions:["create","update","delete"],requestCreateByValues:e=>(console.log(e),Promise.resolve()),requestUpdateByValues:e=>(console.log(e),Promise.resolve()),requestDeleteByRecord:e=>(console.log(e),Promise.resolve()),treeProps:{defaultExpandAll:!0,treeData:[{title:"我的桌面",key:"1",children:[{title:"资料1",key:"1-0",children:[]},{title:"资料2",key:"1-1",children:[{title:"资料2-1资料2-1资料2-1资料2-1",key:"1-1-0",children:[]},{title:"资料2-2",key:"1-1-1",children:[]},{title:"资料2-3",key:"1-1-2",children:[]}]},{title:"资料3",key:"1-2",children:[]}]},{title:"我的文档",key:"2",children:[{title:"资料1",key:"2-0",children:[]},{title:"资料2",key:"2-1",children:[{title:"资料2-1",key:"2-1-0",children:[]},{title:"资料2-2",key:"2-1-1",children:[]},{title:"资料2-3",key:"2-1-2",children:[]}]},{title:"资料3",key:"2-0-2",children:[]}]},{title:"我的下载",key:"3",children:[{title:"资料1",key:"3-0",children:[]},{title:"资料2",key:"3-1",children:[]},{title:"资料3",key:"3-2",children:[]}]},{title:"周杰伦.jpg",key:"4",children:[]},{title:"more operateIsDisabled",key:"5",children:[]},{title:"more operateIsHidden",key:"6",children:[]}]},createProps:{operateIsDisabled:e=>e?.key==="5",operateIsHidden:e=>e?.key==="6"},updateProps:{operateIsDisabled:e=>e.key==="5",operateIsHidden:e=>e.key==="6"},deleteProps:{operateIsDisabled:e=>e.key==="5",operateIsHidden:e=>e.key==="6"},renderTitleRight:()=>l.jsx("div",{className:"text-03",children:"10"})}},r={args:{title:"某某目录",enableSearch:!0,treeProps:{treeData:[{title:"周杰伦.jpg",key:"1"},{title:"周杰伦.mp3",key:"2"},{title:"周杰伦.mp4",key:"3"},{title:"周杰伦.pdf",key:"4"},{title:"周杰伦.doc",key:"5"}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '某某公司',
    // titleDescription: '某某公司的描述',
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
    },
    renderTitleRight: () => {
      return <div className="text-03">10</div>;
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const s=["Default","FileList"];export{t as Default,r as FileList,s as __namedExportsOrder,d as default};
