import{K as a,j as e}from"./iframe-3S6YhdzH.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"@fe-free/core/PageLayout",component:a,tags:["autodocs"]},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"h-[200px] w-[500px]",children:e.jsx(a,{start:e.jsx("div",{className:"h-full w-[100px] bg-red-500",children:"start"}),end:e.jsx("div",{className:"h-full w-[100px] bg-green-500",children:"end"}),children:e.jsx("div",{className:"h-full bg-blue-500",children:"children"})})}),e.jsx("div",{className:"h-[200px] w-[500px]",children:e.jsx(a,{start:e.jsx("div",{className:"h-full w-[100px] bg-red-500",children:"start"}),end:e.jsx("div",{className:"h-full w-[100px] bg-green-500",children:"end"}),children:e.jsx("div",{className:"h-full w-[2000px] bg-blue-500",children:"children"})})})]})},l={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"h-[500px] w-[200px]",children:e.jsx(a,{direction:"vertical",start:e.jsx("div",{className:"h-[100px] w-full bg-red-500",children:"start"}),end:e.jsx("div",{className:"h-[100px] w-full bg-green-500",children:"end"}),children:e.jsx("div",{className:"h-full bg-blue-500",children:"children"})})}),e.jsx("div",{className:"h-[500px] w-[200px]",children:e.jsx(a,{direction:"vertical",start:e.jsx("div",{className:"h-[100px] w-full bg-red-500",children:"start"}),end:e.jsx("div",{className:"h-[100px] w-full bg-green-500",children:"end"}),children:e.jsx("div",{className:"h-[2000px] w-full bg-blue-500",children:"children"})})})]})},r={render:()=>e.jsx("div",{className:"h-[200px] w-[500px]",children:e.jsxs(a,{equalParts:!0,className:"bg-gray-200",children:[e.jsx("div",{className:"h-full bg-blue-500",children:"children"}),e.jsx("div",{className:"h-full w-[600px] bg-green-500",children:"end"})]})})},d={render:()=>e.jsx("div",{className:"h-[200px] w-[500px]",children:e.jsx(a,{startClassName:"p-4 bg-red-200",childrenClassName:"p-4 bg-blue-200",endClassName:"p-4 bg-green-200",start:e.jsx("div",{className:"h-full w-[100px] bg-red-500",children:"start"}),end:e.jsx("div",{className:"h-full w-[100px] bg-green-500",children:"end"}),children:e.jsx("div",{className:"h-full bg-blue-500",children:"children"})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <div className="h-[200px] w-[500px]">
          <PageLayout start={<div className="h-full w-[100px] bg-red-500">start</div>} end={<div className="h-full w-[100px] bg-green-500">end</div>}>
            <div className="h-full bg-blue-500">children</div>
          </PageLayout>
        </div>

        <div className="h-[200px] w-[500px]">
          <PageLayout start={<div className="h-full w-[100px] bg-red-500">start</div>} end={<div className="h-full w-[100px] bg-green-500">end</div>}>
            <div className="h-full w-[2000px] bg-blue-500">children</div>
          </PageLayout>
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-4">
        <div className="h-[500px] w-[200px]">
          <PageLayout direction="vertical" start={<div className="h-[100px] w-full bg-red-500">start</div>} end={<div className="h-[100px] w-full bg-green-500">end</div>}>
            <div className="h-full bg-blue-500">children</div>
          </PageLayout>
        </div>

        <div className="h-[500px] w-[200px]">
          <PageLayout direction="vertical" start={<div className="h-[100px] w-full bg-red-500">start</div>} end={<div className="h-[100px] w-full bg-green-500">end</div>}>
            <div className="h-[2000px] w-full bg-blue-500">children</div>
          </PageLayout>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="h-[200px] w-[500px]">
        <PageLayout equalParts={true} className="bg-gray-200">
          <div className="h-full bg-blue-500">children</div>
          <div className="h-full w-[600px] bg-green-500">end</div>
        </PageLayout>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="h-[200px] w-[500px]">
        <PageLayout startClassName="p-4 bg-red-200" childrenClassName="p-4 bg-blue-200" endClassName="p-4 bg-green-200" start={<div className="h-full w-[100px] bg-red-500">start</div>} end={<div className="h-full w-[100px] bg-green-500">end</div>}>
          <div className="h-full bg-blue-500">children</div>
        </PageLayout>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const t=["Default","DirectionVertical","EqualParts","ClassNamePadding"];export{d as ClassNamePadding,s as Default,l as DirectionVertical,r as EqualParts,t as __namedExportsOrder,c as default};
