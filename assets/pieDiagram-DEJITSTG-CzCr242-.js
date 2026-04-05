import{n as e}from"./chunk-Bj-mKKzh.js";import{En as t,Et as n,Fn as r,Gt as i,Hn as a,In as o,Jn as s,Mn as c,Mt as l,Nn as u,Ut as d,Wt as f,Xn as p,Yt as m,cr as h,jn as g,jt as _,kn as v,lr as y,mn as b,qn as x,qt as S,sr as C}from"./iframe-CLFZ225d.js";import{n as w,t as T}from"./chunk-4BX2VUAB-CvNL0mZ-.js";import{n as E,t as D}from"./mermaid-parser.core-2YR7lLCq.js";var O,k,A,j,M,N,P,F,I,L,R;e((()=>{d(),T(),_(),a(),h(),D(),i(),O=g.pie,k={sections:new Map,showData:!1,config:O},A=k.sections,j=k.showData,M=structuredClone(O),N={getConfig:C(()=>structuredClone(M),`getConfig`),clear:C(()=>{A=new Map,j=k.showData,t()},`clear`),setDiagramTitle:p,getDiagramTitle:o,setAccTitle:s,getAccTitle:u,setAccDescription:x,getAccDescription:c,addSection:C(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);A.has(e)||(A.set(e,t),y.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:C(()=>A,`getSections`),setShowData:C(e=>{j=e},`setShowData`),getShowData:C(()=>j,`getShowData`)},P=C((e,t)=>{w(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),F={parse:C(async e=>{let t=await E(`pie`,e);y.debug(t),P(t,N)},`parse`)},I=C(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),L=C(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return S().value(e=>e.value).sort(null)(n)},`createPieArcs`),R={parser:F,db:N,renderer:{draw:C((e,t,i,a)=>{y.debug(`rendering pie chart
`+e);let o=a.db,s=r(),c=n(o.getConfig(),s.pie),u=f(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=s,[h]=l(p.pieOuterStrokeWidth);h??=2;let g=c.textPosition,_=m().innerRadius(0).outerRadius(185),x=m().innerRadius(185*g).outerRadius(185*g);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+h/2).attr(`class`,`pieOuterCircle`);let S=o.getSections(),C=L(S),w=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=b(w).domain([...S.keys()]);d.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,_).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),d.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),k=[...S.entries()].map(([e,t])=>({label:e,value:t})),A=d.selectAll(`.legend`).data(k).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*k.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),M=O.node()?.getBoundingClientRect().width??0,N=450/2-M/2,P=450/2+M/2,F=Math.min(0,N),I=Math.max(j,P)-F;u.attr(`viewBox`,`${F} 0 ${I} 450`),v(u,450,I,c.useMaxWidth)},`draw`)},styles:I}}))();export{R as diagram};