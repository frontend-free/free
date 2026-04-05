import{n as e}from"./chunk-Bj-mKKzh.js";import{C as t,T as n,Yi as r,t as i,w as a}from"./iframe-CnGw9fmU.js";var o,s,c,l,u,d,f;e((()=>{i(),n(),o=r(),s={title:`@fe-free/core/FileCard`,component:t,tags:[`autodocs`]},c={render:()=>{let e=0;return(0,o.jsx)(`div`,{children:(0,o.jsx)(`div`,{className:`flex w-[200px] flex-col gap-2 border border-01`,children:a.map(n=>(0,o.jsx)(t,{name:`这是文件名.${n.ext.join(`.`)||``}`,size:e+=1e6},n.key))})})}},l={render:()=>(0,o.jsx)(`div`,{children:(0,o.jsx)(t,{name:`这是文件名.pdf`,size:1e4,direction:`vertical`})})},u={render:()=>(0,o.jsx)(`div`,{children:(0,o.jsx)(t.FileIcon,{name:`这是文件名.pdf`,className:`text-3xl`})})},d={render:()=>(0,o.jsx)(`div`,{children:(0,o.jsx)(t.FileIcon,{name:`这是文件名.xlsx`,showExt:!0,className:`text-5xl`})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    let size = 0;
    return <div>
        <div className="flex w-[200px] flex-col gap-2 border border-01">
          {PRESET_FILE_ICONS.map(item => <FileCard key={item.key} name={\`这是文件名.\${item.ext.join('.') || ''}\`} size={size += 1000000} />)}
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard name="这是文件名.pdf" size={10000} direction="vertical" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.pdf" className="text-3xl" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <FileCard.FileIcon name="这是文件名.xlsx" showExt className="text-5xl" />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Direction`,`FileIcon`,`FileIconExt`]}))();export{c as Default,l as Direction,u as FileIcon,d as FileIconExt,f as __namedExportsOrder,s as default};