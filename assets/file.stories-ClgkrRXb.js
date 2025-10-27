import{F as r,j as e,P as o}from"./iframe-BPgzUeE5.js";import"./preload-helper-D9Z9MdNV.js";const m={title:"@fe-free/core/FileCard",component:r,tags:["autodocs"]},s={render:()=>{let c=0;return e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-2",children:o.map(t=>e.jsx("div",{className:"flex gap-2",children:e.jsx(r,{name:`这是文件名.${t.ext.join(".")||""}`,size:c+=1e6})},t.key))})})}},a={render:()=>e.jsx("div",{children:e.jsx(r,{name:"这是文件名.pdf",size:1e4,direction:"vertical"})})},i={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.pdf",className:"text-3xl"})})},n={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.xlsx",showExt:!0,className:"text-5xl"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    let size = 0;
    return <div>
        <div className="flex flex-col gap-2">
          {PRESET_FILE_ICONS.map(item => <div key={item.key} className="flex gap-2">
              <FileCard name={\`这是文件名.\${item.ext.join('.') || ''}\`} size={size += 1000000} />
            </div>)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard name="这是文件名.pdf" size={10000} direction="vertical" />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.pdf" className="text-3xl" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.xlsx" showExt className="text-5xl" />
    </div>
}`,...n.parameters?.docs?.source}}};const x=["Default","Direction","FileIcon","FileIconExt"];export{s as Default,a as Direction,i as FileIcon,n as FileIconExt,x as __namedExportsOrder,m as default};
