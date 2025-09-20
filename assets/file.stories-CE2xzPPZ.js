import{j as e}from"./iframe-D8zT026r.js";import{F as r,P as c}from"./exceljs.min-B_CZ100H.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"@fe-free/file/FileCard",component:r,tags:["autodocs"]},s={render:()=>{let o=0;return e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-2",children:c.map(n=>e.jsx("div",{className:"flex gap-2",children:e.jsx(r,{name:`这是文件名.${n.ext.join(".")||""}`,size:o+=1e6})},n.key))})})}},a={render:()=>e.jsx("div",{children:e.jsx(r,{name:"这是文件名.pdf",size:1e4,direction:"vertical"})})},i={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.pdf",className:"text-3xl"})})},t={render:()=>e.jsx("div",{children:e.jsx(r.FileIcon,{name:"这是文件名.xlsx",showExt:!0,className:"text-5xl"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.xlsx" showExt className="text-5xl" />
    </div>
}`,...t.parameters?.docs?.source}}};const p=["Default","Direction","FileIcon","FileIconExt"];export{s as Default,a as Direction,i as FileIcon,t as FileIconExt,p as __namedExportsOrder,x as default};
