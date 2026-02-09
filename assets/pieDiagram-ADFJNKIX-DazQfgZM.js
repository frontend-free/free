import{mw as y,mx as z,my as j,a0 as p,a2 as Q,a1 as Z,a3 as q,a4 as H,am as J,al as K,a7 as F,a5 as X,ay as Y,aC as ee,aI as te,aQ as R,a8 as ae,ar as re,aA as ne}from"./iframe-DJtjuoPQ.js";import{p as ie}from"./chunk-4BX2VUAB-CqAvbMDw.js";import{p as se}from"./treemap-KMMF4GRG-NBq3eC2c.js";import{o as le}from"./ordinal-D9dNl_Q9.js";import"./preload-helper-PPVm8Dsz.js";import"./filter-YBm9SX2d.js";import"./min-Dc2UfP5s.js";import"./reduce-CvkOlo3q.js";import"./init-Gi6I4Gst.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function ue(){var e=ce,a=oe,f=null,S=y(0),s=y(z),o=y(0);function l(t){var n,c=(t=j(t)).length,d,x,h=0,u=new Array(c),i=new Array(c),v=+S.apply(this,arguments),w=Math.min(z,Math.max(-z,s.apply(this,arguments)-v)),m,D=Math.min(Math.abs(w)/c,o.apply(this,arguments)),$=D*(w<0?-1:1),g;for(n=0;n<c;++n)(g=i[u[n]=n]=+e(t[n],n,t))>0&&(h+=g);for(a!=null?u.sort(function(A,C){return a(i[A],i[C])}):f!=null&&u.sort(function(A,C){return f(t[A],t[C])}),n=0,x=h?(w-c*$)/h:0;n<c;++n,v=m)d=u[n],g=i[d],m=v+(g>0?g*x:0)+$,i[d]={data:t[d],index:n,value:g,startAngle:v,endAngle:m,padAngle:D};return i}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:y(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,f=null,l):a},l.sort=function(t){return arguments.length?(f=t,a=null,l):f},l.startAngle=function(t){return arguments.length?(S=typeof t=="function"?t:y(+t),l):S},l.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:y(+t),l):s},l.padAngle=function(t){return arguments.length?(o=typeof t=="function"?t:y(+t),l):o},l}var pe=ne.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,de=structuredClone(pe),ge=p(()=>structuredClone(de),"getConfig"),fe=p(()=>{T=new Map,N=G.showData,re()},"clear"),me=p(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,a),F.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),he=p(()=>T,"getSections"),ve=p(e=>{N=e},"setShowData"),ye=p(()=>N,"getShowData"),L={getConfig:ge,clear:fe,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:H,getAccTitle:q,setAccDescription:Z,getAccDescription:Q,addSection:me,getSections:he,setShowData:ve,getShowData:ye},Se=p((e,a)=>{ie(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),xe={parse:p(async e=>{const a=await se("pie",e);F.debug(a),Se(a,L)},"parse")},we=p(e=>`
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
`,"getStyles"),Ae=we,Ce=p(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),f=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return ue().value(s=>s.value)(f)},"createPieArcs"),De=p((e,a,f,S)=>{F.debug(`rendering pie chart
`+e);const s=S.db,o=X(),l=Y(s.getConfig(),o.pie),t=40,n=18,c=4,d=450,x=d,h=ee(a),u=h.append("g");u.attr("transform","translate("+x/2+","+d/2+")");const{themeVariables:i}=o;let[v]=te(i.pieOuterStrokeWidth);v??=2;const w=l.textPosition,m=Math.min(x,d)/2-t,D=R().innerRadius(0).outerRadius(m),$=R().innerRadius(m*w).outerRadius(m*w);u.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=s.getSections(),A=Ce(g),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let E=0;g.forEach(r=>{E+=r});const W=A.filter(r=>(r.data.value/E*100).toFixed(0)!=="0"),b=le(C);u.selectAll("mySlices").data(W).enter().append("path").attr("d",D).attr("fill",r=>b(r.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(W).enter().append("text").text(r=>(r.data.value/E*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const I=[...g.entries()].map(([r,M])=>({label:r,value:M})),k=u.selectAll(".legend").data(I).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const P=n+c,B=P*I.length/2,V=12*n,U=M*P-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>b(r.label)).style("stroke",r=>b(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const _=Math.max(...k.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),O=x+t+n+c+_;h.attr("viewBox",`0 0 ${O} ${d}`),ae(h,d,O,l.useMaxWidth)},"draw"),$e={draw:De},We={parser:xe,db:L,renderer:$e,styles:Ae};export{We as diagram};
