import{n as e}from"./chunk-Bj-mKKzh.js";import{En as t,Et as n,Hn as r,In as i,Jn as a,Mn as o,Nn as s,Pn as c,Ut as l,Wt as u,Xn as d,cr as f,jn as p,jt as m,kn as h,lr as g,qn as _,sr as v}from"./iframe-CLFZ225d.js";import{n as y,t as b}from"./chunk-4BX2VUAB-CvNL0mZ-.js";import{n as x,t as S}from"./mermaid-parser.core-2YR7lLCq.js";var C,w,T,E,D,O,k,A,j,M,N;e((()=>{l(),b(),m(),r(),f(),S(),C=p.packet,w=class{constructor(){this.packet=[],this.setAccTitle=a,this.getAccTitle=s,this.setDiagramTitle=d,this.getDiagramTitle=i,this.getAccDescription=o,this.setAccDescription=_}static{v(this,`PacketDB`)}getConfig(){let e=n({...C,...c().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){t(),this.packet=[]}},T=1e4,E=v((e,t)=>{y(e,t);let n=-1,r=[],i=1,{bitsPerRow:a}=t.getConfig();for(let{start:o,end:s,bits:c,label:l}of e.blocks){if(o!==void 0&&s!==void 0&&s<o)throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);if(o??=n+1,o!==n+1)throw Error(`Packet block ${o} - ${s??o} is not contiguous. It should start from ${n+1}.`);if(c===0)throw Error(`Packet block ${o} is invalid. Cannot have a zero bit field.`);for(s??=o+(c??1)-1,c??=s-o+1,n=s,g.debug(`Packet block ${o} - ${n} with label ${l}`);r.length<=a+1&&t.getPacket().length<T;){let[e,n]=D({start:o,end:s,bits:c,label:l},i,a);if(r.push(e),e.end+1===i*a&&(t.pushWord(r),r=[],i++),!n)break;({start:o,end:s,bits:c,label:l}=n)}}t.pushWord(r)},`populate`),D=v((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),O={parser:{yy:void 0},parse:v(async e=>{let t=await x(`packet`,e),n=O.parser?.yy;if(!(n instanceof w))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);g.debug(t),E(t,n)},`parse`)},k=v((e,t,n,r)=>{let i=r.db,a=i.getConfig(),{rowHeight:o,paddingY:s,bitWidth:c,bitsPerRow:l}=a,d=i.getPacket(),f=i.getDiagramTitle(),p=o+s,m=p*(d.length+1)-(f?0:o),g=c*l+2,_=u(t);_.attr(`viewBox`,`0 0 ${g} ${m}`),h(_,m,g,a.useMaxWidth);for(let[e,t]of d.entries())A(_,t,e,a);_.append(`text`).text(f).attr(`x`,g/2).attr(`y`,m-p/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),A=v((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),j={draw:k},M={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},N={parser:O,get db(){return new w},renderer:j,styles:v(({packet:e}={})=>{let t=n(M,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)}}))();export{N as diagram};