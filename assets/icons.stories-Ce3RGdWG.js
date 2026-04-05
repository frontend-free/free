import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{Br as n,Cr as r,Er as i,Na as a,Yi as o,gr as s,jr as c,wr as l}from"./iframe-CnGw9fmU.js";var u=e((()=>{}));function d({name:e,icon:t}){let[n,i]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:`flex w-[150px] cursor-pointer flex-col items-center rounded border border-transparent p-2 hover:border-01`,onClick:async()=>{try{await r(e),i(!0)}catch(e){console.error(`复制失败:`,e)}},children:[(0,m.jsx)(`div`,{className:`relative`,children:(0,m.jsx)(t,{className:`text-3xl`})}),(0,m.jsx)(`span`,{className:`text-sm`,children:e}),(0,m.jsx)(`span`,{className:(0,f.default)(`text-xs text-03`,{invisible:!n,visible:n}),children:n?`已复制!`:`点击复制`})]})}var f,p,m,h,g,_,v;e((()=>{l(),s(),f=t(n()),p=t(a()),u(),m=o(),h={title:`@fe-free/icons`,tags:[`autodocs`]},console.log(i),g={render:()=>{let[e,t]=(0,p.useState)(``),{outlinedIcons:n,filledIcons:r}=(0,p.useMemo)(()=>{let t=Object.entries(i).map(([e,t])=>({name:e,icon:t})).filter(({name:t})=>e.trim()?t.toLowerCase().includes(e.toLowerCase()):!0);return{outlinedIcons:t.filter(({name:e})=>e.endsWith(`Outlined`)).sort((e,t)=>e.name.localeCompare(t.name)),filledIcons:t.filter(({name:e})=>e.endsWith(`Filled`)).sort((e,t)=>e.name.localeCompare(t.name))}},[e]);return console.log({outlinedIcons:n,filledIcons:r}),(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(`div`,{className:`w-full max-w-md`,children:(0,m.jsx)(`input`,{type:`text`,placeholder:`搜索图标...`,value:e,onChange:e=>t(e.target.value),className:`w-full rounded border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`})}),n.length>0&&(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Outlined`}),(0,m.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:n.map(({name:e,icon:t})=>(0,m.jsx)(d,{name:e,icon:t},e))})]}),r.length>0&&(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Filled`}),(0,m.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:r.map(({name:e,icon:t})=>(0,m.jsx)(d,{name:e,icon:t},e))})]}),n.length===0&&r.length===0&&(0,m.jsx)(`div`,{className:`w-full text-center text-gray-500`,children:`未找到匹配的图标`})]})},parameters:{docs:{description:{story:`所有可用的图标列表，点击图标卡片可复制组件名称`}}}},_={render:()=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(c,{}),(0,m.jsx)(c,{className:`text-xl`}),(0,m.jsx)(c,{className:`text-primary`}),(0,m.jsx)(c,{rotate:45}),(0,m.jsx)(c,{spin:!0,className:`text-2xl`}),(0,m.jsxs)(`div`,{className:`text-2xl`,children:[`@fe-free/icons 图标 `,(0,m.jsx)(c,{})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [searchText, setSearchText] = useState('');

    // 自动获取所有导出的图标组件，并分成两组
    const {
      outlinedIcons,
      filledIcons
    } = useMemo(() => {
      const allIcons = Object.entries(Icons).map(([name, icon]) => ({
        name,
        icon: icon as typeof Icons.DeleteOutlined
      }))
      // .filter(({ name, icon }) => {
      //   // 过滤掉非图标组件（如 types）
      //   return name !== 'types' && typeof icon === 'function';
      // })
      .filter(({
        name
      }) => {
        // 搜索过滤
        if (!searchText.trim()) return true;
        return name.toLowerCase().includes(searchText.toLowerCase());
      });

      // 分成两组
      const outlined = allIcons.filter(({
        name
      }) => name.endsWith('Outlined')).sort((a, b) => a.name.localeCompare(b.name));
      const filled = allIcons.filter(({
        name
      }) => name.endsWith('Filled')).sort((a, b) => a.name.localeCompare(b.name));
      return {
        outlinedIcons: outlined,
        filledIcons: filled
      };
    }, [searchText]);
    console.log({
      outlinedIcons,
      filledIcons
    });
    return <div className="space-y-4">
        {/* 搜索框 */}
        <div className="w-full max-w-md">
          <input type="text" placeholder="搜索图标..." value={searchText} onChange={e => setSearchText(e.target.value)} className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        {/* Outlined 图标组 */}
        {outlinedIcons.length > 0 && <div className="space-y-2">
            <h3 className="text-lg font-semibold">Outlined</h3>
            <div className="flex flex-wrap gap-4">
              {outlinedIcons.map(({
            name,
            icon
          }) => <IconItem key={name} name={name} icon={icon} />)}
            </div>
          </div>}

        {/* Filled 图标组 */}
        {filledIcons.length > 0 && <div className="space-y-2">
            <h3 className="text-lg font-semibold">Filled</h3>
            <div className="flex flex-wrap gap-4">
              {filledIcons.map(({
            name,
            icon
          }) => <IconItem key={name} name={name} icon={icon} />)}
            </div>
          </div>}

        {/* 无匹配结果 */}
        {outlinedIcons.length === 0 && filledIcons.length === 0 && <div className="w-full text-center text-gray-500">未找到匹配的图标</div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '所有可用的图标列表，点击图标卡片可复制组件名称'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Icons.DeleteOutlined />
      <Icons.DeleteOutlined className="text-xl" />
      <Icons.DeleteOutlined className="text-primary" />
      <Icons.DeleteOutlined rotate={45} />
      <Icons.DeleteOutlined spin className="text-2xl" />

      <div className="text-2xl">
        @fe-free/icons 图标 <Icons.DeleteOutlined />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`Usages`]}))();export{g as Basic,_ as Usages,v as __namedExportsOrder,h as default};