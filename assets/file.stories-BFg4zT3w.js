import{F as r,j as e,P as c}from"./iframe-ClWRqrR7.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"@fe-free/core/FileCard",component:r,tags:["autodocs"]},s={render:()=>{let t=0;return e.jsx("div",{children:e.jsx("div",{className:"flex w-[200px] flex-col gap-2 border border-01",children:c.map(o=>e.jsx(r,{name:`这是文件名.${o.ext.join(".")||""}`,size:t+=1e6},o.key))})})}},a={render:()=>e.jsx("div",{children:e.jsx(r,{name:"这是文件名.pdf",size:1e4,direction:"vertical"})})},n={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.pdf",className:"text-3xl"})})},i={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.xlsx",showExt:!0,className:"text-5xl"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    let size = 0;
    return <div>
        <div className="flex w-[200px] flex-col gap-2 border border-01">
          {PRESET_FILE_ICONS.map(item => <FileCard key={item.key} name={\`这是文件名.\${item.ext.join('.') || ''}\`} size={size += 1000000} />)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard name="这是文件名.pdf" size={10000} direction="vertical" />
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.pdf" className="text-3xl" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.xlsx" showExt className="text-5xl" />
    </div>
}`,...i.parameters?.docs?.source}}};const x=["Default","Direction","FileIcon","FileIconExt"];export{s as Default,a as Direction,n as FileIcon,i as FileIconExt,x as __namedExportsOrder,m as default};
