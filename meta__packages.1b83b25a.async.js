"use strict";(self.webpackChunkfree=self.webpackChunkfree||[]).push([[56],{61115:function(b,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(59496),t=e(93850),E={}},93250:function(b,m,e){e.r(m),e.d(m,{demos:function(){return v}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(19244),h=e(10203),v={"button-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,10203));case 2:return u=n.sent,s=u.LoadingButton,n.abrupt("return",{default:function(){return f.createElement("div",null,f.createElement(s,{onClick:function(){}},"\u70B9\u51FB"),f.createElement(s,{onClick:function(){return new Promise(function(a){setTimeout(a,1e3)})}},"\u70B9\u51FB 1000ms resolve"),f.createElement(s,{onClick:function(){return new Promise(function(a,p){setTimeout(p,1e3)})}},"\u70B9\u51FB 1000ms reject"))}});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"button-demo-0",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoadingButton } from '@fe-free/core';

export default () => {
  return (
    <div>
      <LoadingButton
        onClick={() => {
          return;
        }}
      >
        \u70B9\u51FB
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((resolve) => {
            setTimeout(resolve, 1000);
          })
        }
      >
        \u70B9\u51FB 1000ms resolve
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((_, reject) => {
            setTimeout(reject, 1000);
          })
        }
      >
        \u70B9\u51FB 1000ms reject
      </LoadingButton>
    </div>
  );
};`},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/core":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}}}},93879:function(b,m,e){e.r(m),e.d(m,{demos:function(){return v}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(3500),h=e(93106),v={"crud-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.Normal,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-0",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { Normal } from './demo';

export default Normal;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-1":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.ReadDetail,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-1",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { ReadDetail } from './demo';

export default ReadDetail;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-2":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.RemoteData,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-2",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { RemoteData } from './demo';

export default RemoteData;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-3":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.Ref,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-3",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { Ref } from './demo';

export default Ref;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-4":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.ActionRef,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-4",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { ActionRef } from './demo';

export default ActionRef;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-5":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.NoSearch,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-5",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { NoSearch } from './demo';

export default NoSearch;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"crud-demo-6":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,93106));case 2:return u=n.sent,s=u.CustomText,n.abrupt("return",{default:s});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"crud-demo-6",refAtomIds:["crud"],dependencies:{"index.tsx":{type:"FILE",value:`import { CustomText } from './demo';

export default CustomText;`},"./demo.tsx":{type:"FILE",value:e(83233).Z}},entry:"index.tsx"},context:{"/home/runner/work/free/free/packages/core/src/crud/demo/index.tsx":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}}}},32118:function(b,m,e){var P;e.r(m),e.d(m,{demos:function(){return s}});var t=e(90228),E=e.n(t),c=e(48305),f=e.n(c),$=e(87999),h=e.n($),v=e(59496),_=e(84209),u=e(10203),s={"editor_javascript-demo-0":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(`const name = 'world';
console.log('hello', name);
`),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJavascript,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-0",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJavascript } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    \`const name = 'world';
console.log('hello', name);
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}},"editor_javascript-demo-1":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(`const name = 'world';
console.log('hello', name);
`),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T,readonly:!0}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJavascript,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-1",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJavascript } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    \`const name = 'world';
console.log('hello', name);
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}}}},33779:function(b,m,e){var P;e.r(m),e.d(m,{demos:function(){return s}});var t=e(90228),E=e.n(t),c=e(48305),f=e.n(c),$=e(87999),h=e.n($),v=e(59496),_=e(72552),u=e(10203),s={"editor_json-demo-0":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(JSON.stringify({name:"world"},null,2)),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJSON,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_json-demo-0",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}},"editor_json-demo-1":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(JSON.stringify({name:"world"},null,2)),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T,readonly:!0}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJSON,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_json-demo-1",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}},"editor_json-demo-2":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(JSON.stringify({name:"world"},null,2)),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T,mode:"tree",readonly:!0}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJSON,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_json-demo-2",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} mode="tree" readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}},"editor_json-demo-3":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(JSON.stringify({name:"world"},null,2)),B=f()(x,2),C=B[0],T=B[1];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C,onChange:T,readonly:!0,mode:"tree",mainMenuBar:!1}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorJSON,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_json-demo-3",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@fe-free/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly mode="tree" mainMenuBar={false} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}}}},35210:function(b,m,e){e.r(m),e.d(m,{demos:function(){return v}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(74796),h=e(10203),v={"editor_logs-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s,o;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(){return f.createElement(s,{logs:[{timestamp:"2023-01-01 12:00:00",level:"info",message:"This is an info log message."},{timestamp:"2023-01-01 12:00:00",level:"warn",message:"This is a warning log message."},{timestamp:"2023-01-01 12:00:00",level:"error",message:"This is an error log message."},{timestamp:"2023-01-01 12:00:00",level:"system",message:"This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message"}]})},i.next=3,Promise.resolve().then(e.bind(e,10203));case 3:return u=i.sent,s=u.EditorLogs,i.abrupt("return",{default:o});case 6:case"end":return i.stop()}},_)})))),asset:{type:"BLOCK",id:"editor_logs-demo-0",refAtomIds:["editor_logs"],dependencies:{"index.tsx":{type:"FILE",value:`import { EditorLogs } from '@fe-free/core';

function Demo() {
  return (
    <EditorLogs
      logs={[
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'info',
          message: 'This is an info log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'warn',
          message: 'This is a warning log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'error',
          message: 'This is an error log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'system',
          message:
            'This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message',
        },
      ]}
    />
  );
}

export default Demo;`},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/core":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}}}},56940:function(b,m,e){var P;e.r(m),e.d(m,{demos:function(){return s}});var t=e(90228),E=e.n(t),c=e(48305),f=e.n(c),$=e(87999),h=e.n($),v=e(59496),_=e(7239),u=e(10203),s={"editor_markdown-demo-0":{component:v.memo(v.lazy(h()(E()().mark(function o(){var n,i,r,a,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=function(){var x=i(`# hello

world
`),B=f()(x,1),C=B[0];return v.createElement("div",{style:{width:"500px",height:"500px"}},v.createElement(a,{value:C}))},l.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=l.sent,i=n.useState,l.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return r=l.sent,a=r.EditorMarkdown,l.abrupt("return",{default:p});case 10:case"end":return l.stop()}},o)})))),asset:{type:"BLOCK",id:"editor_markdown-demo-0",refAtomIds:["editor_markdown"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorMarkdown } from '@fe-free/core';

function Demo() {
  const [value] = useState(
    \`# hello

world
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorMarkdown value={value} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{react:P||(P=e.t(v,2)),"@fe-free/core":u},renderOpts:{compile:function(){var o=h()(E()().mark(function i(){var r,a=arguments;return E()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(457).then(e.bind(e,75457));case 2:return d.abrupt("return",(r=d.sent).default.apply(r,a));case 3:case"end":return d.stop()}},i)}));function n(){return o.apply(this,arguments)}return n}()}}}},59030:function(b,m,e){e.r(m),e.d(m,{demos:function(){return _}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(84500),h=e(50449),v=e(10203),_={"form-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n,i,r;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return r=function(){return f.createElement(o,null,f.createElement(i,{name:"json",initialValue:JSON.stringify({name:"world"},null,2)}))},p.next=3,Promise.resolve().then(e.bind(e,50449));case 3:return s=p.sent,o=s.ProForm,p.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return n=p.sent,i=n.ProFormJSON,p.abrupt("return",{default:r});case 10:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"form-demo-0",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { ProFormJSON } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@ant-design/pro-components":h,"@fe-free/core":v},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}},"form-demo-1":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n,i,r;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return r=function(){return f.createElement(o,null,f.createElement(i,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1}}))},p.next=3,Promise.resolve().then(e.bind(e,50449));case 3:return s=p.sent,o=s.ProForm,p.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return n=p.sent,i=n.ProFormJSON,p.abrupt("return",{default:r});case 10:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"form-demo-1",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { ProFormJSON } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
        }}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@ant-design/pro-components":h,"@fe-free/core":v},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}},"form-demo-2":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n,i,r;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return r=function(){return f.createElement(o,null,f.createElement(i,{name:"json",initialValue:`const name = 'world';
console.log('hello', name);
`}))},p.next=3,Promise.resolve().then(e.bind(e,50449));case 3:return s=p.sent,o=s.ProForm,p.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return n=p.sent,i=n.ProFormJavascript,p.abrupt("return",{default:r});case 10:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"form-demo-2",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { ProFormJavascript } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJavascript
        name="json"
        initialValue={\`const name = 'world';
console.log('hello', name);
\`}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@ant-design/pro-components":h,"@fe-free/core":v},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}},"form-demo-3":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n,i,r;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return r=function(){return f.createElement(o,null,f.createElement(i,{name:"json",readonly:!0,initialValue:`const name = 'world';
console.log('hello', name);
`}))},p.next=3,Promise.resolve().then(e.bind(e,50449));case 3:return s=p.sent,o=s.ProForm,p.next=7,Promise.resolve().then(e.bind(e,10203));case 7:return n=p.sent,i=n.ProFormJavascript,p.abrupt("return",{default:r});case 10:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"form-demo-3",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { ProFormJavascript } from '@fe-free/core';

function Demo() {
  return (
    <ProForm>
      <ProFormJavascript
        name="json"
        readonly
        initialValue={\`const name = 'world';
console.log('hello', name);
\`}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@ant-design/pro-components":h,"@fe-free/core":v},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}}}},9950:function(b,m,e){e.r(m),e.d(m,{demos:function(){return _}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(98457),h=e(10203),v=e(67205),_={"table-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n,i,r,a;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=function(){return Promise.resolve({data:i,success:!0,total:i.length})},d.next=3,Promise.resolve().then(e.bind(e,10203));case 3:return s=d.sent,o=s.Table,d.next=7,Promise.resolve().then(e.bind(e,67205));case 7:return n=d.sent,i=n.fakeData,a=function(){var I=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57(\u7701\u7565)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return f.createElement(o,{rowKey:"id",columns:I,request:r})},d.abrupt("return",{default:a});case 11:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"table-demo-0",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:`import { Table } from '@fe-free/core';
import { fakeData } from '../crud/demo/data';

function fakeRequest() {
  return Promise.resolve({
    data: fakeData,
    success: true,
    total: fakeData.length,
  });
}

const Demo = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57(\u7701\u7565)',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return <Table rowKey="id" columns={columns} request={fakeRequest} />;
};

export default Demo;`},"@fe-free/core":{type:"NPM",value:"1.2.1"},"../crud/demo/data.tsx":{type:"FILE",value:e(71794).Z}},entry:"index.tsx"},context:{"@fe-free/core":h,"/home/runner/work/free/free/packages/core/src/crud/demo/data.tsx":v},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}},"table-demo-1":{component:f.memo(f.lazy(c()(t()().mark(function u(){var s,o,n;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,10203));case 2:return s=r.sent,o=s.Table,n=function(){var p=[{title:"id",dataIndex:"id"},{title:"\u540D\u5B57(\u7701\u7565)",dataIndex:"name",ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return f.createElement(o,{columns:p,rowKey:"id"})},r.abrupt("return",{default:n});case 6:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"table-demo-1",refAtomIds:["table"],dependencies:{"index.tsx":{type:"FILE",value:`import { Table } from '@fe-free/core';

const Demo = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '\u540D\u5B57(\u7701\u7565)',
      dataIndex: 'name',

      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return <Table columns={columns} rowKey="id" />;
};

export default Demo;`},"@fe-free/core":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/core":h},renderOpts:{compile:function(){var u=c()(t()().mark(function o(){var n,i=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(457).then(e.bind(e,75457));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,i));case 3:case"end":return a.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}}}},67075:function(b,m,e){e.r(m),e.d(m,{demos:function(){return o}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(78682),h=e(10203),v=e(50449),_=e(83693),u=e(16483),s=e.n(u),o={"value_type_map-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function n(){var i,r,a,p,d,l,I,x,B,C,T,S,W,F;return t()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(){return S=c()(t()().mark(function L(){var J;return t()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return J=x(5).map(function(X){return{id:"".concat(X),timeStr:"2024-10-01 10:00:00",timeNumber:+C("2024-10-01 10:00:00"),dateStr:"2024-10-01",dateNumber:+C("2024-10-01"),seconds:Math.abs(+C("2024-10-01")/1e3),jsonText:JSON.stringify({name:"hello world hello world hello world"})}}),K.abrupt("return",Promise.resolve({data:J,success:!0,total:100}));case 2:case"end":return K.stop()}},L)})),S.apply(this,arguments)},T=function(){return S.apply(this,arguments)},w.next=4,Promise.resolve().then(e.bind(e,10203));case 4:return i=w.sent,r=i.CRUD,a=i.customValueTypeMap,p=i.CustomValueTypeEnum,w.next=10,Promise.resolve().then(e.bind(e,50449));case 10:return d=w.sent,l=d.ProConfigProvider,w.next=14,Promise.resolve().then(e.bind(e,83693));case 14:return I=w.sent,x=I.range,w.next=18,Promise.resolve().then(e.t.bind(e,16483,23));case 18:return B=w.sent,C=B.default,W=function(){var L=[{title:"id",dataIndex:"id"},{title:"\u65F6\u95F4 str",dataIndex:"timeStr",valueType:p.CustomDateTimeAndDateRange,search:!0},{title:"\u65F6\u95F4 number",dataIndex:"timeNumber",valueType:p.CustomDateTimeAndDateRange,search:!0},{title:"\u65E5\u671F str",dataIndex:"dateStr",valueType:p.CustomDateAndDateRange,search:!0},{title:"\u65E5\u671F number",dataIndex:"dateNumber",valueType:p.CustomDateAndDateRange,search:!0},{title:"\u79D2\u6570",dataIndex:"seconds",valueType:p.CustomDateAndDateRange,search:!0},{title:"json",dataIndex:"jsonText",ellipsis:!0,valueType:p.CustomJSON}];return f.createElement(r,{actions:[],tableProps:{columns:L,request:T}})},F=function(){return f.createElement(l,{valueTypeMap:a},f.createElement(W,null))},w.abrupt("return",{default:F});case 23:case"end":return w.stop()}},n)})))),asset:{type:"BLOCK",id:"value_type_map-demo-0",refAtomIds:["value_type_map"],dependencies:{"index.tsx":{type:"FILE",value:`import { CRUD, customValueTypeMap, CustomValueTypeEnum } from '@fe-free/core';
import { ProConfigProvider } from '@ant-design/pro-components';
import { range } from 'lodash-es';
import dayjs from 'dayjs';

async function fakeRequest() {
  const data = range(5).map((item) => ({
    id: \`\${item}\`,
    timeStr: \`2024-10-01 10:00:00\`,
    timeNumber: +dayjs('2024-10-01 10:00:00'),
    dateStr: \`2024-10-01\`,
    dateNumber: +dayjs('2024-10-01'),
    seconds: Math.abs(+dayjs('2024-10-01') / 1000),
    jsonText: JSON.stringify({ name: 'hello world hello world hello world' }),
  }));

  return Promise.resolve({
    data,
    success: true,
    total: 100,
  }) as Promise<any>;
}

const Table = () => {
  const columns: any[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '\u65F6\u95F4 str',
      dataIndex: 'timeStr',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '\u65F6\u95F4 number',
      dataIndex: 'timeNumber',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '\u65E5\u671F str',
      dataIndex: 'dateStr',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '\u65E5\u671F number',
      dataIndex: 'dateNumber',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '\u79D2\u6570',
      dataIndex: 'seconds',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: 'json',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSON,
    },
  ];

  return (
    <CRUD
      actions={[]}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
};

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <Table />
  </ProConfigProvider>
);

export default Demo;`},"@fe-free/core":{type:"NPM",value:"1.2.1"},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"lodash-es":{type:"NPM",value:"4.17.21"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{"@fe-free/core":h,"@ant-design/pro-components":v,"lodash-es":_,dayjs:u},renderOpts:{compile:function(){var n=c()(t()().mark(function r(){var a,p=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(457).then(e.bind(e,75457));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,p));case 3:case"end":return l.stop()}},r)}));function i(){return n.apply(this,arguments)}return i}()}}}},67496:function(b,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(59496),t=e(86088),E={}},49253:function(b,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(59496),t=e(94561),E={}},85073:function(b,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(59496),t=e(12567),E={}},97123:function(b,m,e){e.r(m),e.d(m,{demos:function(){return v}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(59496),$=e(32475),h=e(29968),v={"packages-tool-src-pinyin-demo-0":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,29968));case 2:return u=n.sent,s=u.pinyin,n.abrupt("return",{default:function(){return f.createElement("div",null,s("\u4F60\u597D"))}});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@fe-free/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D')}</div>;
};`},"@fe-free/tool":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/tool":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"packages-tool-src-pinyin-demo-1":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,29968));case 2:return u=n.sent,s=u.pinyin,n.abrupt("return",{default:function(){return f.createElement("div",null,s("\u4F60\u597D","first_letter")," ")}});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@fe-free/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D', 'first_letter')} </div>;
};`},"@fe-free/tool":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/tool":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"packages-tool-src-pinyin-demo-2":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,29968));case 2:return u=n.sent,s=u.pinyinMatch,n.abrupt("return",{default:function(){return f.createElement(f.Fragment,null,f.createElement("div",null,s("\u4F60\u597D","nh")+""),f.createElement("div",null,s("\u4F60\u597D","wo")+""," "))}});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinMatch } from '@fe-free/tool';

export default () => {
  return (
    <>
      <div>{pinyinMatch('\u4F60\u597D', 'nh') + ''}</div>
      <div>{pinyinMatch('\u4F60\u597D', 'wo') + ''} </div>
    </>
  );
};`},"@fe-free/tool":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/tool":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}},"packages-tool-src-pinyin-demo-3":{component:f.memo(f.lazy(c()(t()().mark(function _(){var u,s;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,29968));case 2:return u=n.sent,s=u.pinyinFilter,n.abrupt("return",{default:function(){return f.createElement(f.Fragment,null,f.createElement("div",null,s(["\u4F60\u597D"," \u6211\u4EEC"],"nh")," "),f.createElement("div",null,s(["\u4F60\u597D"," \u6211\u4EEC"],"wo")," "))}});case 5:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinFilter } from '@fe-free/tool';

export default () => {
  return (
    <>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'nh')} </div>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'wo')} </div>
    </>
  );
};`},"@fe-free/tool":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@fe-free/tool":h},renderOpts:{compile:function(){var _=c()(t()().mark(function s(){var o,n=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(457).then(e.bind(e,75457));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,n));case 3:case"end":return r.stop()}},s)}));function u(){return _.apply(this,arguments)}return u}()}}}},67205:function(b,m,e){e.r(m),e.d(m,{fakeCreate:function(){return C},fakeData:function(){return a},fakeDeleteByRecord:function(){return l},fakeGetByRecord:function(){return x},fakeRequest:function(){return p},fakeRequestArea:function(){return V},fakeRequestCity:function(){return F},fakeRequestSchool:function(){return w},fakeUpdateById:function(){return S},levels:function(){return _}});var P=e(26068),t=e.n(P),E=e(90228),c=e.n(E),f=e(87999),$=e.n(f),h=e(62802),v={\u5E7F\u5DDE:["\u767D\u4E91","\u9EC4\u57D4","\u589E\u57CE"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71","\u5B9D\u5B89"]},_={HIGH:{text:"\u9AD8"},MEDIUM:{text:"\u4E2D"},LOW:{text:"\u4F4E"}},u=[{value:"0",label:"\u7B2C\u4E00\u5C0F\u5B66"},{value:"1",label:"\u7B2C\u4E8C\u5C0F\u5B66"},{value:"2",label:"\u7B2C\u4E09\u5C0F\u5B66"}];function s(D){return Math.floor(Math.random()*D)}function o(){return Object.keys(v)[s(Object.keys(v).length+1)]}function n(D){if(D.city)return D.city&&v[D.city][s(v[D.city].length+1)]}function i(){return Object.keys(_)[s(Object.keys(_).length+1)]}function r(D){return(0,h.Z)(D).map(function(L){var J=o(),A=n({city:J});return{id:"".concat(L),name:"\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57 ".concat(L),city:J,area:A,level:i(),status:s(2)===1,school:""+s(u.length)}})}var a=r(21);function p(D){return d.apply(this,arguments)}function d(){return d=$()(c()().mark(function D(L){return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("fakeRequest",L),A.abrupt("return",new Promise(function(K){setTimeout(function(){K({data:a,success:!0,total:a.length})},1e3)}));case 2:case"end":return A.stop()}},D)})),d.apply(this,arguments)}function l(D){return I.apply(this,arguments)}function I(){return I=$()(c()().mark(function D(L){return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("fakeDeleteByRecord",L),a=a.filter(function(K){return K.id!==L.id}),A.abrupt("return",Promise.resolve({}));case 3:case"end":return A.stop()}},D)})),I.apply(this,arguments)}function x(D){return B.apply(this,arguments)}function B(){return B=$()(c()().mark(function D(L){return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("fakeGetByRecord",L),A.abrupt("return",new Promise(function(K){setTimeout(function(){K(a.find(function(X){return X.id===L.id}))},1e3)}));case 2:case"end":return A.stop()}},D)})),B.apply(this,arguments)}function C(D){return T.apply(this,arguments)}function T(){return T=$()(c()().mark(function D(L){return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("fakeCreate",L),a.push(t()({id:a.length+1},L)),A.abrupt("return",Promise.resolve({}));case 3:case"end":return A.stop()}},D)})),T.apply(this,arguments)}function S(D){return W.apply(this,arguments)}function W(){return W=$()(c()().mark(function D(L){return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("fakeUpdateById",L),a=a.map(function(K){return K.id===L.id?t()(t()({},K),L):K}),A.abrupt("return",Promise.resolve({}));case 3:case"end":return A.stop()}},D)})),W.apply(this,arguments)}function F(){return Promise.resolve(Object.keys(v))}function V(D){return D!=null&&D.city?Promise.resolve(v[D.city]):Promise.resolve(Object.values(v).reduce(function(L,J){return L.concat(J)},[]))}function w(){return Promise.resolve(u)}},93106:function(b,m,e){e.r(m),e.d(m,{ActionRef:function(){return I},CustomText:function(){return C},NoSearch:function(){return B},Normal:function(){return p},ReadDetail:function(){return d},Ref:function(){return l},RemoteData:function(){return x}});var P=e(90228),t=e.n(P),E=e(87999),c=e.n(E),f=e(48305),$=e.n(f),h=e(26068),v=e.n(h),_=e(59496),u=e(10203),s=e(78960),o=e(94624),n=e(11850),i=e(89152),r=e(67205),a=e(4637),p=function(){var S=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57(\u7701\u7565)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return(0,a.jsx)(u.CRUD,{actions:["create","read","delete","update"],tableProps:{columns:S,request:r.fakeRequest},requestDeleteByRecord:r.fakeDeleteByRecord,deleteProps:{nameIndex:"name"},detailForm:function(F){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,v()(v()({},F),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"}))})},requestGetByRecord:r.fakeGetByRecord,requestCreateByValues:r.fakeCreate,requestUpdateById:r.fakeUpdateById})};function d(){var T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,a.jsx)(u.CRUD,{actions:["read_detail"],tableProps:{columns:T,request:r.fakeRequest}})}function l(){var T=(0,_.useRef)(),S=n.A.useForm(),W=$()(S,1),F=W[0];window._detailFormInstance=F;var V=n.A.useWatch("name",T.current),w=n.A.useWatch("name",F);console.log("useWatch",V,w);var D=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,a.jsx)(u.CRUD,{actions:["create","read","update"],tableProps:{formRef:T,columns:D,request:r.fakeRequest},detailFormInstance:F,detailForm:function(J){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,v()(v()({},J),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}],initialValue:"default"})),(0,a.jsx)(i.Z,v()(v()({},J),{},{name:"status",label:"\u5F00\u542F",initialValue:!1}))]})},requestGetByRecord:r.fakeGetByRecord,requestCreateByValues:r.fakeCreate,requestUpdateById:r.fakeUpdateById})}function I(){var T=(0,_.useRef)(),S=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.ZP,{onClick:function(){var F;return(F=T.current.getActionRef().current)===null||F===void 0?void 0:F.reload()},children:"reload"}),(0,a.jsx)(u.CRUD,{ref:T,actions:[],tableProps:{columns:S,request:r.fakeRequest}})]})}function x(){var T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},v()({title:"\u7B49\u7EA7(\u672C\u5730\u6570\u636E)",dataIndex:"level",search:!0,valueEnum:r.levels},u.proFormSelectSearchProps),v()({title:"city(\u8FDC\u7AEF\u6570\u636E)",dataIndex:"city",search:!0,request:function(){var S=c()(t()().mark(function F(){var V;return t()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return console.log("request"),D.next=3,(0,r.fakeRequestCity)();case 3:return V=D.sent,D.abrupt("return",V.map(function(L){return{label:L,value:L}})||[]);case 5:case"end":return D.stop()}},F)}));function W(){return S.apply(this,arguments)}return W}()},u.proFormSelectSearchProps),v()({title:"area(\u8054\u52A8 city)",dataIndex:"area",search:!0,request:function(){var S=c()(t()().mark(function F(V){var w;return t()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return console.log("params",V),L.next=3,(0,r.fakeRequestArea)(V);case 3:return w=L.sent,L.abrupt("return",w.map(function(J){return{label:J,value:J}})||[]);case 5:case"end":return L.stop()}},F)}));function W(F){return S.apply(this,arguments)}return W}(),dependencies:["city"]},u.proFormSelectSearchProps),v()({title:"\u5B66\u6821(\u8FDC\u7AEF\u6570\u636E label value)",dataIndex:"school",search:!0,valueType:"select",request:function(){return(0,r.fakeRequestSchool)()}},u.proFormSelectSearchProps)];return(0,a.jsx)(u.CRUD,{actions:[],tableProps:{columns:T,request:r.fakeRequest}})}function B(){var T=(0,_.useRef)(),S=[{title:"id",dataIndex:"id"},{title:"\u540D\u5B57",dataIndex:"name"}];return(0,a.jsx)(u.CRUD,{ref:T,actions:[],tableProps:{columns:S,request:r.fakeRequest}})}var C=function(){var S=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0,ellipsis:!0}];return(0,a.jsx)(u.CRUD,{actions:["create","read","delete","update"],tableProps:{columns:S,request:r.fakeRequest},operateColumnProps:{width:230,moreOperator:function(){return(0,a.jsx)("div",{children:"custom"})}},readProps:{operateText:"\u67E5\u770B\u5566"},requestDeleteByRecord:r.fakeDeleteByRecord,deleteProps:{nameIndex:"name",operateText:"\u5220\u9664\u5566"},detailForm:function(F){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,v()(v()({},F),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]}))})},requestGetByRecord:r.fakeGetByRecord,requestCreateByValues:r.fakeCreate,createProps:{successText:"\u65B0\u5EFA\u6210\u529F\u5566"},updateProps:{operateText:"\u66F4\u65B0\u5566",successText:"\u66F4\u65B0\u6210\u529F\u5566"},requestUpdateById:r.fakeUpdateById})}},10203:function(b,m,e){e.r(m),e.d(m,{CRUD:function(){return K},CRUDDetail:function(){return A},CustomValueTypeEnum:function(){return ce},EditorJSON:function(){return re},EditorJavascript:function(){return Te},EditorLogs:function(){return He},EditorMarkdown:function(){return Ve},LoadingButton:function(){return We},OperateDelete:function(){return l},ProFormJSON:function(){return Ue},ProFormJavascript:function(){return Ke},Table:function(){return r},customValueTypeMap:function(){return tn},proFormSelectSearchProps:function(){return $e},useDelete:function(){return d}});var P=e(15558),t=e.n(P),E=e(26068),c=e.n(E),f=e(60774),$=e(78960),h=e(59496),v=e(5791),_=e(33553),u=e(67825),s=e.n(u),o=e(81019),n=e(4637),i=["columns","rowKey","search"];function r(y){var g=y.columns,R=y.rowKey,M=R===void 0?"id":R,U=y.search,N=s()(y,i),O=(0,h.useMemo)(function(){return g&&g.map(function(k){return c()({search:!1},k)})},[g]),j=(0,h.useMemo)(function(){return c()({showSizeChanger:!0,showQuickJumper:!0},N.pagination)},[N.pagination]),z=!!(O!=null&&O.find(function(k){return k.search}));return(0,n.jsx)(o.Z,c()({cardBordered:!0,rowKey:M,pagination:j,options:!1,columns:O,scroll:a(O),search:z&&c()({layout:"vertical",defaultCollapsed:!1},U)},N))}function a(y){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,R={x:0,y:void 0};return y==null||y.forEach(function(M){M.hideInTable||(R.x+=Number(M.width)||g)}),R}var p=e(87055);function d(y){var g=y.name,R=y.desc,M=y.onDelete,U=(0,h.useCallback)(function(){p.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(g,"\u201D \u5417\uFF1F"),content:R||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){M()}})},[g,R,M]);return{doDelete:U}}function l(y){var g=y.name,R=y.desc,M=y.onDelete,U=y.operateText,N=(0,h.useCallback)(function(){p.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(g,"\u201D \u5417\uFF1F"),content:R||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){M()}})},[g,R,M]);return(0,n.jsx)("a",{style:{color:"red"},onClick:N,children:U||"\u5220\u9664"})}var I=e(90228),x=e.n(I),B=e(87999),C=e.n(B),T=e(48305),S=e.n(T),W=e(70162),F=e(51349),V=e(11850),w=e(19331),D=e(83873),L=e(82187),J=e.n(L);function A(y){var g=y.action,R=y.id,M=y.record,U=y.trigger,N=y.onSuccess,O=y.detailForm,j=y.requestGetByRecord,z=y.createProps,k=y.requestCreateByValues,Y=y.updateProps,le=y.requestUpdateById,ge=y.detailFormInstance,Ee=(0,h.useState)(!1),fe=S()(Ee,2),Q=fe[0],pe=fe[1],Pe=(0,h.useState)(!!R),te=S()(Pe,2),ve=te[0],ae=te[1],De=V.A.useForm(ge),se=S()(De,1),q=se[0],xe=(0,h.useCallback)(function(){var Z=C()(x()().mark(function he(de){var me,Ie,H;return x()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(G.prev=0,!(g==="create"&&k)){G.next=8;break}return G.next=4,k(de);case 4:me=G.sent,Ie="\u65B0\u5EFA\u6210\u529F",z!=null&&z.successText&&(Ie=(0,D.Z)(z.successText)?z.successText:z.successText()),W.ZP.open({type:"success",content:Ie});case 8:if(!(g==="update"&&le)){G.next=15;break}return G.next=11,le(c()(c()({},de),{},{id:R}));case 11:me=G.sent,H="\u66F4\u65B0\u6210\u529F",Y!=null&&Y.successText&&(H=(0,D.Z)(Y.successText)?Y.successText:Y.successText()),W.ZP.open({type:"success",content:H});case 15:if(N==null||N(),me===!1){G.next=18;break}return G.abrupt("return",!0);case 18:G.next=23;break;case 20:G.prev=20,G.t0=G.catch(0),setTimeout(function(){throw G.t0},10);case 23:case"end":return G.stop()}},he,null,[[0,20]])}));return function(he){return Z.apply(this,arguments)}}(),[g,k,le,N,z,R,Y]),ee=(0,h.useCallback)(function(){var Z=C()(x()().mark(function he(de){var me;return x()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(de){H.next=4;break}return q==null||q.resetFields(),pe(de),H.abrupt("return");case 4:if(pe(de),!R){H.next=12;break}return ae(!0),H.next=9,j==null?void 0:j(M);case 9:me=H.sent,q==null||q.setFieldsValue(me),ae(!1);case 12:return H.abrupt("return");case 13:case"end":return H.stop()}},he)}));return function(he){return Z.apply(this,arguments)}}(),[q,R,j,M]),ie=(0,h.useMemo)(function(){return!O||!Q?null:ve?(0,n.jsx)("div",{className:"pt-[100px] flex justify-center",children:(0,n.jsx)(F.Z,{})}):(0,n.jsx)("div",{className:J()("crud-detail","crud-detail-action-".concat(g),{"crud-detail-hide-extra":g==="read"}),children:O({readonly:g==="read"&&!!R},{action:g})})},[Q,ve,O,g,R]),je=(0,h.useMemo)(function(){return{destroyOnClose:!0}},[]);return(0,n.jsx)(w.a,{form:q,trigger:U,autoFocusFirstInput:!0,onFinish:xe,onOpenChange:ee,layout:"vertical",readonly:g==="read"&&!!R,drawerProps:je,children:ie})}var K=(0,h.forwardRef)(function(g,R){var M=g.actions,U=g.tableProps,N=g.createButton,O=g.operateColumnProps,j=g.readProps,z=g.requestDeleteByRecord,k=g.deleteProps,Y=g.detailIdIndex,le=g.detailForm,ge=g.requestGetByRecord,Ee=g.createProps,fe=g.requestCreateByValues,Q=g.updateProps,pe=g.requestUpdateById,Pe=g.detailFormInstance,te=(0,h.useRef)(),ve=(0,v.TH)();(0,h.useImperativeHandle)(R,function(){return{getActionRef:function(){return te}}},[te]);var ae=(0,h.useMemo)(function(){return{detailForm:le,requestGetByRecord:ge,requestCreateByValues:fe,requestUpdateById:pe,detailFormInstance:Pe,createProps:Ee,updateProps:Q}},[le,ge,fe,pe,Pe,Ee,Q]),De=(0,h.useCallback)(function(ee){return function(){if(z)return z(ee).then(function(){var ie;(ie=te.current)===null||ie===void 0||ie.reload()});throw new Error("\u6CA1\u6709\u4F20 requestDeleteByRecord")}},[z]),se=(0,h.useCallback)(function(){var ee;(ee=te.current)===null||ee===void 0||ee.reload()},[]),q=(0,h.useMemo)(function(){var ee={title:"\u64CD\u4F5C",fixed:"right",width:(O==null?void 0:O.width)||120,render:function(je,Z){return(0,n.jsxs)(f.Z,{children:[(O==null?void 0:O.moreOperator)&&O.moreOperator(Z),M.includes("read")&&(0,n.jsx)(A,c()({id:Z.id,record:Z,onSuccess:se,trigger:(0,n.jsx)("a",{children:(j==null?void 0:j.operateText)||"\u67E5\u770B"}),action:"read"},ae)),M.includes("read_detail")&&(0,n.jsx)(_.rU,{to:"".concat(ve.pathname,"/detail/").concat(Z[Y||"id"]),target:j==null?void 0:j.target,children:(j==null?void 0:j.operateText)||"\u67E5\u770B"}),M.includes("update")&&(0,n.jsx)(A,c()({id:Z.id,record:Z,onSuccess:se,trigger:(0,n.jsx)("a",{children:(Q==null?void 0:Q.operateText)||"\u7F16\u8F91"}),action:"update"},ae)),M.includes("delete")&&k&&(0,n.jsx)(l,{name:Z[k.nameIndex],desc:k.desc,operateText:k.operateText,onDelete:De(Z)}),(O==null?void 0:O.moreOperatorAfter)&&O.moreOperatorAfter(Z)]})}};return M.includes("read")||M.includes("read_detail")||M.includes("update")||M.includes("delete")||O!=null&&O.moreOperator||O!=null&&O.moreOperatorAfter?[].concat(t()(U.columns||U.columns||[]),[ee]):U.columns},[O,M,U.columns,se,j==null?void 0:j.operateText,j==null?void 0:j.target,ae,ve.pathname,Y,Q==null?void 0:Q.operateText,k,De]),xe=(0,h.useCallback)(function(){return[].concat(t()(U.toolBarRender?U.toolBarRender.apply(U,arguments):[]),[M.includes("create")&&(0,n.jsx)(A,c()({onSuccess:se,trigger:N||(0,n.jsx)($.ZP,{type:"primary",children:"\u65B0\u5EFA"}),action:"create"},ae))])},[M,N,ae,se,U]);return(0,n.jsx)("div",{className:"crud-table",children:(0,n.jsx)(r,c()(c()({rowKey:"id"},U),{},{actionRef:te,toolBarRender:xe,columns:q}))})}),X=e(34813);function re(y){var g=y.value,R=y.onChange,M=y.readonly,U=y.mode,N=y.mainMenuBar,O=(0,h.useRef)(null),j=(0,h.useRef)(null),z=(0,h.useRef)(R);return(0,h.useEffect)(function(){var k;(k=j.current)===null||k===void 0||k.update({text:g||""})},[g]),(0,h.useEffect)(function(){j.current=new X.q9({target:O.current,props:{mainMenuBar:N,tabSize:2,mode:U||"text",readOnly:M,askToFormat:!1,content:{text:g||""},onChange:function(Y){z.current(Y.text)}}})},[]),(0,n.jsx)("div",{ref:O,className:"h-full w-full"})}var oe=e(34019),ye=e(15915),ne=e(41142),Oe=e(19656),ue={width:"100%",height:"100%"};function Te(y){var g=y.value,R=y.onChange,M=y.readonly;return(0,n.jsx)(oe.ZP,{style:ue,mode:"javascript",theme:"monokai",value:g,onChange:R,readOnly:M,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var Re=e(29968),Le=["readonly","fieldProps"],Se=["readonly","fieldProps"];function be(y){return(0,n.jsx)("div",{style:{height:"300px"},children:(0,n.jsx)(re,c()({},y))})}function Ue(y){var g=y.readonly,R=y.fieldProps,M=s()(y,Le);return(0,n.jsx)(V.A.Item,c()(c()({},M),{},{children:(0,n.jsx)(be,c()({readonly:g},R))}))}function Fe(y){return(0,n.jsx)("div",{style:{height:"300px"},children:(0,n.jsx)(Te,c()({},y))})}function Ke(y){var g=y.readonly,R=y.fieldProps,M=s()(y,Se);return(0,n.jsx)(V.A.Item,c()(c()({},M),{},{children:(0,n.jsx)(Fe,c()({readonly:g},R))}))}var $e={fieldProps:{showSearch:!0,filterOption:function(g,R){return(0,Re.pinyinMatch)(R.label,g)},fetchDataOnSearch:!1}},Ne=["onClick"];function We(y){var g=y.onClick,R=s()(y,Ne),M=(0,h.useState)(!1),U=S()(M,2),N=U[0],O=U[1],j=(0,h.useCallback)(function(z){O(!0),Promise.resolve(g&&g(z)).finally(function(){O(!1)})},[g]);return(0,n.jsx)($.ZP,c()(c()({loading:N},R),{},{onClick:j}))}var we=e(949),Je=e(51709),ze=["children","className","node"];function Ve(y){var g=y.value;return(0,n.jsx)(we.U,{unwrapDisallowed:!0,components:{code:function(M){var U=M.children,N=M.className,O=M.node,j=s()(M,ze),z=/language-(\w+)/.exec(N||"");return z?(0,n.jsx)(Je.Z,c()(c()({},j),{},{PreTag:"div",wrapLongLines:!0,children:String(U).replace(/\n$/,""),language:z[1].toLowerCase()})):(0,n.jsx)("code",c()(c()({},j),{},{className:N,children:U}))}},children:g||""})}var ke=e(43349),Ge=e(27893),Ze=e(16374),Me=e(61365),He=function(g){var R=g.logs,M=R.map(function(O){var j="[".concat(O.level,"]").padEnd(8," ");return"".concat(O.timestamp," ").concat(j.toUpperCase()," ").concat(O.message)}).join(`
`),U=[Ge.il.define({token:function(j){return j.match(/.*\[WARN\s*\].*/)?"keyword":j.match(/.*\[ERROR\s*\].*/)?"invalid":j.match(/.*\[SYSTEM\].*/)?"comment":(j.next(),null)}})],N=(0,Ze.j)({theme:"dark",settings:{background:"#2e3235",foreground:"rgba(243, 244, 246, 1)"},styles:[{tag:Me.pJ.keyword,color:"rgba(252, 211, 77, 1)"},{tag:Me.pJ.invalid,color:"rgba(248, 113, 113, 1)"},{tag:Me.pJ.comment,color:"rgba(96, 165, 250, 1)"}]});return(0,n.jsx)(ke.ZP,{value:M,theme:N,extensions:U,editable:!1,height:"400px",style:{overflowY:"auto"}})},Ye=e(82092),Ce=e.n(Ye),Qe=e(61873),Xe=e(16483),Be=e.n(Xe),qe={dateTime:function(g){return g?(0,n.jsx)("div",{children:(0,Re.getDayjs)(g).format("YYYY-MM-DD HH:mm:ss")}):(0,n.jsx)("div",{children:"-"})},date:function(g){return g?(0,n.jsx)("div",{children:(0,Re.getDayjs)(g).format("YYYY-MM-DD")}):(0,n.jsx)("div",{children:"-"})}},en={dateRange:function(g,R){return(0,n.jsx)(Qe.Z,c()(c()({},R),{},{fieldProps:c()(c()({},R.fieldProps),{},{onChange:function(U){var N,O,j=U&&[Be()(U[0]).startOf("day"),Be()(U[1]).endOf("day")];(N=(O=R.fieldProps).onChange)===null||N===void 0||N.call(O,j)}})}))}},_e={renderMap:qe,renderFormItemMap:en},nn=e(84846);function rn(y){var g=y;if(!y)return(0,n.jsx)("div",{children:"-"});try{g=JSON.stringify(JSON.parse(y),null,2)}catch(R){console.error(R,y)}return(0,n.jsx)(nn.Z.Text,{className:"block max-w-full overflow-hidden",ellipsis:{tooltip:{title:(0,n.jsx)("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"},children:g})}},children:y})}var Ae={render:rn,renderFormItem:function(){return(0,n.jsx)(n.Fragment,{})}},ce=function(y){return y.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",y.CustomDateAndDateRange="CustomDateAndDateRange",y.CustomJSON="CustomJSON",y}(ce||{}),tn=Ce()(Ce()(Ce()({},ce.CustomDateTimeAndDateRange,{render:_e.renderMap.dateTime,renderFormItem:_e.renderFormItemMap.dateRange}),ce.CustomDateAndDateRange,{render:_e.renderMap.date,renderFormItem:_e.renderFormItemMap.dateRange}),ce.CustomJSON,{render:Ae.render,renderFormItem:Ae.renderFormItem})},29968:function(b,m,e){e.r(m),e.d(m,{buildURL:function(){return p},getDayjs:function(){return r},pinyin:function(){return E},pinyinFilter:function(){return v},pinyinMatch:function(){return _},pinyinMatchWithoutFirstLetter:function(){return u}});var P=e(79156),t,E=function(l,I){if(t)return t(l,I);var x={\u963F:"a",\u54CE:"ai",\u5B89:"an",\u80AE:"ang",\u51F9:"ao",\u4E37:"ba",\u6300:"bai",\u6273:"ban",\u90A6:"bang",\u52F9:"bao",\u9642:"bei",\u5954:"ben",\u4F3B:"beng",\u5C44:"bi",\u8FB9:"bian",\u706C:"biao",\u618B:"bie",\u6C43:"bin",\u51AB:"bing",\u7676:"bo",\u5CEC:"bu",\u5693:"ca",\u5072:"cai",\u53C2:"can",\u4ED3:"cang",\u64A1:"cao",\u518A:"ce",\u5D7E:"cen",\u66FD:"ceng",\u53C9:"cha",\u8286:"chai",\u8FBF:"chan",\u4F25:"chang",\u6284:"chao",\u8F66:"che",\u62BB:"chen",\u9637:"cheng",\u5403:"chi",\u5145:"chong",\u62BD:"chou",\u51FA:"chu",\u6B3B:"chua",\u63E3:"chuai",\u5DDB:"chuan",\u5205:"chuang",\u5439:"chui",\u65FE:"chun",\u9034:"chuo",\u5472:"ci",\u5306:"cong",\u51D1:"cou",\u7C97:"cu",\u6C46:"cuan",\u5D14:"cui",\u90A8:"cun",\u6413:"cuo",\u5491:"da",\u5446:"dai",\u4E39:"dan",\u5F53:"dang",\u5200:"dao",\u561A:"de",\u6265:"dun",\u706F:"deng",\u6C10:"di",\u7538:"dian",\u5201:"diao",\u7239:"die",\u4E01:"ding",\u4E1F:"diu",\u4E1C:"dong",\u543A:"dou",\u53BE:"du",\u8011:"duan",\u5796:"dui",\u5428:"dun",\u591A:"duo",\u59B8:"e",\u8BF6:"ei",\u5940:"en",\u97A5:"eng",\u513F:"er",\u53D1:"fa",\u5E06:"fan",\u531A:"fang",\u98DE:"fei",\u5206:"fen",\u4E30:"feng",\u8985:"fiao",\u4ECF:"fo",\u7D11:"fou",\u592B:"fu",\u65EE:"ga",\u4F85:"gai",\u7518:"gan",\u5188:"gang",\u768B:"gao",\u6208:"ge",\u7ED9:"gei",\u6839:"gen",\u522F:"geng",\u5DE5:"gong",\u52FE:"gou",\u4F30:"gu",\u74DC:"gua",\u4E56:"guai",\u5173:"guan",\u5149:"guang",\u5F52:"gui",\u4E28:"gun",\u5459:"guo",\u54C8:"ha",\u548D:"hai",\u4F44:"han",\u592F:"hang",\u8320:"hao",\u8BC3:"he",\u9ED2:"hei",\u62EB:"hen",\u4EA8:"heng",\u5677:"hm",\u53FF:"hong",\u9F41:"hou",\u4E4E:"hu",\u82B1:"hua",\u6000:"huai",\u6B22:"huan",\u5DDF:"huang",\u7070:"hui",\u660F:"hun",\u5419:"huo",\u4E0C:"ji",\u52A0:"jia",\u620B:"jian",\u6C5F:"jiang",\u827D:"jiao",\u9636:"jie",\u5DFE:"jin",\u5755:"jing",\u5182:"jiong",\u4E29:"jiu",\u51E5:"ju",\u59E2:"juan",\u5658:"jue",\u519B:"jun",\u5494:"ka",\u5F00:"kai",\u520A:"kan",\u5FFC:"kang",\u5C3B:"kao",\u533C:"ke",\u808E:"ken",\u52A5:"keng",\u7A7A:"kong",\u62A0:"kou",\u625D:"ku",\u5938:"kua",\u84AF:"kuai",\u5BBD:"kuan",\u5321:"kuang",\u4E8F:"kui",\u5764:"kun",\u6269:"kuo",\u5783:"la",\u6765:"lai",\u5170:"lan",\u5577:"lang",\u635E:"lao",\u808B:"le",\u52D2:"lei",\u5D1A:"leng",\u54E9:"li",\u4FE9:"lia",\u5941:"lian",\u826F:"liang",\u64A9:"liao",\u6BDF:"lie",\u62CE:"lin",\u4F36:"ling",\u6E9C:"liu",\u56D6:"lo",\u9F99:"long",\u779C:"lou",\u565C:"lu",\u9A74:"lv",\u5A08:"luan",\u63A0:"l\xFCe",\u62A1:"lun",\u7F57:"luo",\u5463:"m",\u5988:"ma",\u57CB:"mai",\u5ADA:"man",\u7264:"mang",\u732B:"mao",\u5692:"me",\u5445:"mei",\u691A:"men",\u64DD:"meng",\u54AA:"mi",\u5B80:"mian",\u55B5:"miao",\u4E5C:"mie",\u6C11:"min",\u540D:"ming",\u8C2C:"miu",\u6478:"mo",\u54DE:"mou",\u6BEA:"mu",\u55EF:"\u0144g",\u62CF:"na",\u8149:"nai",\u56E1:"nan",\u56D4:"nang",\u5B6C:"nao",\u7592:"ne",\u5A1E:"nei",\u6041:"nen",\u80FD:"neng",\u59AE:"ni",\u62C8:"nian",\u5A18:"niang",\u9E1F:"niao",\u634F:"nie",\u56DC:"nin",\u5B81:"ning",\u599E:"niu",\u519C:"nong",\u7FBA:"nou",\u5974:"nu",\u5973:"nv",\u597B:"nuan",\u759F:"n\xFCe",\u9EC1:"nun",\u632A:"nuo",\u5594:"o",\u8BB4:"ou",\u5991:"pa",\u62CD:"pai",\u7705:"pan",\u4E53:"pang",\u629B:"pao",\u5478:"pei",\u55B7:"pen",\u5309:"peng",\u4E15:"pi",\u56E8:"pian",\u527D:"piao",\u6C15:"pie",\u59D8:"pin",\u4E52:"ping",\u948B:"po",\u5256:"pou",\u4EC6:"pu",\u4E03:"qi",\u6390:"qia",\u5343:"qian",\u545B:"qiang",\u6084:"qiao",\u82C6:"qie",\u4EB2:"qin",\u9751:"qing",\u536D:"qiong",\u4E18:"qiu",\u533A:"qu",\u594D:"quan",\u7F3A:"que",\u590B:"qun",\u5465:"ran",\u7A63:"rang",\u5A06:"rao",\u60F9:"re",\u4EBA:"ren",\u6254:"reng",\u65E5:"ri",\u8338:"rong",\u53B9:"rou",\u909A:"ru",\u633C:"rua",\u5827:"ruan",\u5A51:"rui",\u77A4:"run",\u637C:"ruo",\u4EE8:"sa",\u6BE2:"sai",\u4E09:"san",\u6852:"sang",\u63BB:"sao",\u95AA:"se",\u68EE:"sen",\u50E7:"seng",\u6740:"sha",\u7B5B:"shai",\u5C71:"shan",\u4F24:"shang",\u5F30:"shao",\u5962:"she",\u7533:"shen",\u5347:"sheng",\u5C38:"shi",\u53CE:"shou",\u4E66:"shu",\u5237:"shua",\u8870:"shuai",\u95E9:"shuan",\u53CC:"shuang",\u813D:"shui",\u542E:"shun",\u8BF4:"shuo",\u53B6:"si",\u5FEA:"song",\u51C1:"sou",\u82CF:"su",\u72FB:"suan",\u590A:"sui",\u5B59:"sun",\u5506:"suo",\u4ED6:"ta",\u56FC:"tai",\u574D:"tan",\u6C64:"tang",\u5932:"tao",\u5FD1:"te",\u71A5:"teng",\u5254:"ti",\u5929:"tian",\u65EB:"tiao",\u5E16:"tie",\u5385:"ting",\u56F2:"tong",\u5077:"tou",\u51F8:"tu",\u6E4D:"tuan",\u63A8:"tui",\u541E:"tun",\u4E47:"tuo",\u5C72:"wa",\u6B6A:"wai",\u5F2F:"wan",\u5C23:"wang",\u5371:"wei",\u6637:"wen",\u7FC1:"weng",\u631D:"wo",\u4E4C:"wu",\u5915:"xi",\u8672:"xia",\u4ED9:"xian",\u4E61:"xiang",\u7071:"xiao",\u4E9B:"xie",\u5FC3:"xin",\u661F:"xing",\u51F6:"xiong",\u4F11:"xiu",\u5401:"xu",\u5405:"xuan",\u524A:"xue",\u5743:"xun",\u4E2B:"ya",\u6079:"yan",\u592E:"yang",\u5E7A:"yao",\u503B:"ye",\u4E00:"yi",\u56D9:"yin",\u5E94:"ying",\u54DF:"yo",\u4F63:"yong",\u4F18:"you",\u8FBC:"yu",\u56E6:"yuan",\u66F0:"yue",\u6655:"yun",\u5E00:"za",\u707D:"zai",\u5142:"zan",\u5328:"zang",\u50AE:"zao",\u5219:"ze",\u8D3C:"zei",\u600E:"zen",\u5897:"zeng",\u624E:"zha",\u5908:"zhai",\u67AC:"zhan",\u5F20:"zhang",\u4F4B:"zhao",\u8707:"zhe",\u8D1E:"zhen",\u51E7:"zheng",\u4E4B:"zhi",\u4E2D:"zhong",\u5DDE:"zhou",\u6731:"zhu",\u6293:"zhua",\u62FD:"zhuai",\u4E13:"zhuan",\u5986:"zhuang",\u96B9:"zhui",\u5B92:"zhun",\u5353:"zhuo",\u4E72:"zi",\u5B97:"zong",\u90B9:"zou",\u79DF:"zu",\u94BB:"zuan",\u539C:"zui",\u5C0A:"zun",\u6628:"zuo"},B={\u6C88:"shen",\u55F2:"dia",\u78A1:"zhou",\u8052:"guo",\u7094:"que",\u86B5:"ke",\u7809:"hua",\u5B24:"mo",\u8E52:"pan",\u4E2C:"pan",\u9730:"xian",\u8C49:"chi",\u9967:"xing",\u5E27:"zhen",\u90CD:"na",\u828E:"xiong",\u8C01:"shui"},C=Object.keys(x),T=Object.values(x),S=Object.assign({},x,B),W=!!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);if(W){var F={\u4E37:"\u516B",\u62BD:"\u5A64",\u51D1:"\u8160",\u53BE:"\u8254",\u592B:"\u4F15",\u52FE:"\u4F5D",\u4E4E:"\u4E6F",\u6B22:"\u72BF",\u54E9:"\u5215",\u6BDF:"\u5217",\u4F36:"\u5222",\u5692:"\u4E48",\u691A:"\u95E8",\u64DD:"\u753F",\u5A18:"\u5B22",\u5256:"\u5A1D",\u82C6:"\u767F",\u536D:"\u5314",\u594D:"\u5CD1",\u51C1:"\u635C",\u5077:"\u5078",\u5C72:"\u7A75",\u4ED9:"\u4EDA",\u8FBC:"\u625C",\u4F18:"\u6538",\u5908:"\u635A",\u67AC:"\u6CBE",\u51E7:"\u4E89",\u5DDE:"\u8BCC"};Object.keys(F).forEach(function(A){C[C.indexOf(A)]=F[A]});var V={\u51D2:"ai",\u8C8B:"an",\u98F9:"bao",\u86FD:"bei",\u698C:"bi",\u7541:"bi",\u7986:"bi",\u7371:"bian",\u6E8A:"bo",\u6DFF:"bo",\u9E14:"bu",\u5ECD:"bu",\u7938:"ca",\u835D:"ce",\u72B2:"chai",\u4EE9:"chang",\u7F49:"cheng",\u9423:"cheng",\u7C9A:"chi",\u9D44:"chi",\u6521:"chi",\u8094:"chi",\u69C6:"chun",\u5AA8:"cu",\u81A5:"cun",\u8FCF:"da",\u8FDA:"da",\u8DF6:"da",\u4EA3:"da",\u4FA2:"dai",\u86AE:"dai",\u8254:"dao",\u60B3:"de",\u67A4:"di",\u521F:"diao",\u921F:"diao",\u8B75:"dui",\u907B:"e",\u7B29:"fa",\u5325:"fan",\u4EEE:"fan",\u80D0:"fei",\u8965:"fu",\u7139:"gang",\u7A01:"gao",\u5CFC:"gao",\u6404:"gen",\u5314:"gong",\u7C3C:"gou",\u8E80:"guan",\u8901:"guo",\u99F4:"hai",\u5475:"he",\u5BC9:"he",\u71FA:"he",\u739C:"hong",\u95C0:"hong",\u8624:"hua",\u8AD9:"hua",\u9BF6:"huan",\u5C76:"hui",\u6A85:"hui",\u53DD:"ji",\u8EA4:"ji",\u7B05:"jiao",\u9782:"jie",\u63B6:"jie",\u5AAB:"jie",\u5DBB:"jie",\u64EE:"jie",\u790D:"jie",\u77DD:"jin",\u7161:"jin",\u7484:"jing",\u71DB:"jiong",\u9F30:"ju",\u70E5:"ju",\u704D:"jue",\u9D55:"jun",\u94B6:"ke",\u72C5:"kuang",\u8EE0:"kuang",\u92DB:"kuang",\u55E0:"lao",\u77CB:"lei",\u7AF0:"li",\u7AC2:"liao",\u8B22:"lu",\u7C35:"lu",\u7387:"lv",\u7EFF:"lv",\u5638:"m",\u88AE:"mi",\u7C8E:"mi",\u6763:"mian",\u5AF9:"miao",\u741D:"min",\u5436:"na",\u5450:"na",\u62A9:"nan",\u7175:"nan",\u8E19:"nie",\u503F:"ning",\u6335:"nong",\u8842:"nv",\u6E12:"pai",\u8420:"pan",\u8615:"peng",\u9303:"pi",\u882F:"pi",\u9166:"po",\u7087:"pu",\u5711:"pu",\u669C:"pu",\u637F:"qi",\u7D2A:"qi",\u5D5C:"qi",\u8900:"qi",\u9A39:"qi",\u5CE0:"qia",\u5042:"qian",\u5B31:"qian",\u97A9:"qiao",\u5392:"qie",\u922B:"qin",\u512C:"qing",\u6FEA:"qing",\u5CF5:"rong",\u9491:"sa",\u70B6:"shan",\u692B:"shan",\u7F59:"shen",\u9BD3:"shen",\u67A1:"sheng",\u935F:"sheng",\u7E04:"sheng",\u8184:"shou",\u6BFA:"shu",\u66BA:"tan",\u7819:"wa",\u6665:"wan",\u77A3:"wan",\u69B2:"wen",\u9942:"wen",\u651A:"weng",\u909C:"xi",\u6E7A:"xian",\u9DCD:"xiao",\u70A8:"xie",\u5302:"xiong",\u6F43:"xiu",\u71C5:"xun",\u8A2E:"yan",\u6EE7:"yao",\u647F:"yao",\u78D8:"yao",\u6D02:"ye",\u6359:"ye",\u748D:"ye",\u6E0F:"yi",\u9825:"yi",\u9218:"yi",\u8C96:"yi",\u88AC:"yu",\u9D27:"yu",\u4F1D:"yun",\u9F6B:"yun",\u6CAF:"za",\u6EA8:"zai",\u7170:"zao",\u6B75:"ze",\u830B:"zhi",\u96B2:"zhi",\u9483:"zhu",\u8D7C:"zi",\u8362:"zi",\u71EA:"zong",\u5528:"zu"};Object.assign(S,V)}var w=19968,D=40869,L=function(K,X){var re=K.charCodeAt(0);if(re<w||re>D)return K;if(S[K])return X==="first_letter"?S[K].charAt(0):S[K];for(var oe=0,ye=C.length-1,ne=-1,Oe,ue;oe<=ye;)if(ne=Math.floor((oe+ye)/2),Oe=C[ne],ue=K.localeCompare(Oe,["zh-CN"]),ue===1)oe=ne+1;else if(ue===-1)ye=ne-1;else break;return ue<0&&ne--,S[K]=T[ne],X==="first_letter"?T[ne].charAt(0):T[ne]},J=function(K,X){if(typeof K!="string")return K;var re="";return(0,P.Z)(K,function(oe){re+=L(oe,X)}),re};return function(A,K){return t||(t=J),t(A,K)}(l,I)},c=e(12908),f=e(83873),$=e(55247),h=function(l){return l};function v(d,l){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:h;return l?(l=l.toLowerCase(),(0,c.Z)(d,function(x){return _(I(x),l)})):d||[]}function _(d,l){var I=d;(0,f.Z)(I)||(I=""),I=I.toLowerCase();var x=(0,$.Z)(E(I),function(C){return C[0]}).join(""),B=(0,$.Z)(E(I,"first_letter"),function(C){return C[0]}).join("");return I.indexOf(l)>-1||x.indexOf(l)>-1||B.indexOf(l)>-1}function u(d,l){var I=d;(0,f.Z)(I)||(I=""),I=I.toLowerCase();var x=(0,$.Z)(E(I),function(B){return B[0]}).join("");return I.indexOf(l)>-1||x.indexOf(l)>-1}var s=e(16483),o=e.n(s),n=e(69708),i=Math.abs(+o()().add(100,"year")/1e3);function r(d){if((0,f.Z)(d)&&/^\d+$/.test(d)){var l=parseInt(d);return l>i?o()(l):o()(l*1e3)}return(0,n.Z)(d)?d>i?o()(d):o()(d*1e3):o()(d)}function a(d,l){var I=new URLSearchParams(d),x=new URLSearchParams(l);return new URLSearchParams("".concat(I.toString(),"&").concat(x.toString()))}function p(d,l){var I=l||{},x=I.searchParams,B=I.hashSearchParams,C=new URL(d);if(x){var T=a(C.searchParams,x);C.search="?".concat(T.toString())}if(B){var S=new URLSearchParams(B),W=C.hash,F=W.indexOf("?");if(F>-1){var V=a(W.slice(F+1),S);C.hash="".concat(W.slice(0,F),"?").concat(V.toString())}else C.hash="".concat(W,"?").concat(S.toString())}return C.toString()}},17881:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(93850);const t=[{value:`// commitlint.config.js
module.exports = { extends: ['@fe-free/commit-lint'] };
`,paraId:0,tocIndex:0}]},53524:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(19244);const t=[]},39399:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(3500);const t=[{value:"\u9700\u8981\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CRUD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:1,tocIndex:0},{value:"\u8C03\u6574 actions \u4E3A ",paraId:2,tocIndex:3},{value:"['read_detail']",paraId:2,tocIndex:3},{value:"\uFF0C\u70B9\u51FB<\u67E5\u770B>\u8DF3\u8F6C\u5230 ",paraId:2,tocIndex:3},{value:"xxx/detail/[id]",paraId:2,tocIndex:3},{value:"\uFF0C",paraId:2,tocIndex:3},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ref \u4F60\u53EF\u4EE5\u505A\u66F4\u591A\u64CD\u4F5C",paraId:4,tocIndex:6},{value:`import type { ReactNode } from 'react';
import type { TableProps } from '../table';
import type { ProFormInstance, ActionType } from '@ant-design/pro-components';

/**
 * create \u521B\u5EFA
 * read \u67E5\u770B
 * read_detail \u8BE6\u60C5\u9875\u67E5\u770B
 * update \u7F16\u8F91
 * delete \u5220\u9664
 */
type CrudAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CRUDProps {
  actions: CrudAction[];

  /** \u65B0\u5EFA\u6309\u94AE\uFF0C\u9ED8\u8BA4\u65B0\u5EFA */
  createButton?: ReactNode;

  /** \u8868\u683C\u76F8\u5173 */
  tableProps: TableProps;
  operateColumnProps?: {
    width?: number;
    /** \u6269\u5C55\u64CD\u4F5C\u533A\u57DF */
    moreOperator?: (record) => ReactNode;
  };
  readProps?: {
    /** \u6587\u672C */
    operateText?: string;
    /** \u6253\u5F00\u65B9\u5F0F, action \u4E3A read_detail \u6709\u6548 */
    target?: '_blank';
  };

  /** \u5220\u9664\u63A5\u53E3 */
  requestDeleteByRecord?: (record) => Promise<any>;
  /** \u5220\u9664\u76F8\u5173 */
  deleteProps?: {
    /** \u663E\u793A\u540D\u79F0\u7D22\u5F15 */
    nameIndex: string;
    /** \u5220\u9664\u786E\u8BA4\u63CF\u8FF0 */
    desc?: string;
    /** \u6587\u672C */
    operateText?: string;
  };

  /** \u5F39\u7A97\u8868\u5355 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CrudAction }) => ReactNode;
  /** detailForm \u7684 formRef */
  detailFormInstance?: ProFormInstance;

  /** \u65B0\u589E\u63A5\u53E3 */
  requestCreateByValues?: (values) => Promise<any>;
  createProps?: {
    /** \u6210\u529F\u6587\u6848 */
    successText?: string | (() => string);
  };

  /** \u66F4\u65B0\u63A5\u53E3 */
  requestUpdateById?: (values) => Promise<any>;
  updateProps?: {
    /** \u6587\u672C */
    operateText?: string;
    /** \u6210\u529F\u6587\u6848 */
    successText?: string | (() => string);
  };

  /** \u83B7\u53D6\u8BE6\u60C5\u63A5\u53E3 */
  requestGetByRecord?: (record) => Promise<any>;

  /** \u8DF3\u8F6C\u5230\u8BE6\u60C5\u7684\u7D22\u5F15 \uFF0C\u9ED8\u8BA4 id */
  detailIdIndex?: string;
}

interface CRUDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}
`,paraId:5,tocIndex:9}]},70682:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(84209);const t=[{value:`interface EditorJavascriptProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
`,paraId:0,tocIndex:4}]},36857:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(72552);const t=[{value:`import type { JSONEditor } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
  mode?: JSONEditor['mode'];
}
`,paraId:0,tocIndex:6}]},91616:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(74796);const t=[{value:"LogViewer",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\u7684 React \u7EC4\u4EF6\u3002\u5B83\u4F7F\u7528 CodeMirror \u7F16\u8F91\u5668\u6765\u5448\u73B0\u65E5\u5FD7\uFF0C\u63D0\u4F9B\u4E86\u8BED\u6CD5\u9AD8\u4EAE\u548C\u4E3B\u9898\u652F\u6301\u3002",paraId:0,tocIndex:0}]},35718:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(7239);const t=[{value:`interface EditorMarkdownProps {
  value: string;
}
`,paraId:0,tocIndex:3}]},67601:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(84500);const t=[{value:"JSON",paraId:0,tocIndex:1},{value:"readonly",paraId:1},{value:"JSON",paraId:2,tocIndex:2},{value:"readonly",paraId:3}]},7777:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(98457);const t=[{value:"\u5BF9 ProTable \u505A\u6269\u5C55\u4EE5\u6EE1\u8DB3\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u641C\u7D22\u5173\u95ED\uFF0C\u9700\u8981\u518D\u6253\u5F00 ",paraId:1,tocIndex:0},{value:"search: true",paraId:1,tocIndex:0},{value:"\u6709\u641C\u7D22\u7684\u65F6\u5019\u624D\u663E\u793A\u641C\u7D22\u533A\u57DF",paraId:1,tocIndex:0}]},90279:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(78682);const t=[{value:"\u81EA\u5B9A\u4E49 valueType",paraId:0,tocIndex:0},{value:"\u914D\u7F6E customValueTypeMap",paraId:1,tocIndex:1},{value:`import { customValueTypeMap } from '@fe-free/core';
import { ProConfigProvider } from '@ant-design/pro-components';

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <div>some</div>
  </ProConfigProvider>
);

export default Demo;
`,paraId:2,tocIndex:1},{value:"\u4F7F\u7528",paraId:3,tocIndex:2},{value:`enum CustomValueTypeEnum {
  /** \u6E32\u67D3\u65F6\u95F4 + \u641C\u7D22\u65E5\u671F\u8303\u56F4 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** \u6E32\u67D3\u65E5\u671F + \u641C\u7D22\u65E5\u671F\u8303\u56F4 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
}
`,paraId:4,tocIndex:2}]},46346:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(86088);const t=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@fe-free/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},5396:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(94561);const t=[{value:"pnpm i @fe-free/free-scripts",paraId:0,tocIndex:0},{value:`program
  .command('build_api')
  .description('swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5')
  .option('-i, --input <input>', 'package.json \u6240\u5728\u7684\u76EE\u5F55\uFF0C\u8BFB\u53D6 package.json \u4E2D\u7684 swaggerDocs \u5B57\u6BB5')
  .option('-o, --output <output>', '\u8F93\u51FA /api /swagger \u7684\u76EE\u5F55')
  .action(buildApi);

program
  .command('build_code')
  .description('\u751F\u6210\u4EE3\u7801')
  .option('-i, --input <input>', 'code_config \u914D\u7F6E\u6587\u4EF6\uFF0C\u63D0\u4F9B export { enums } ')
  .option('-o, --output <output>', '\u8F93\u51FA enums.tsx \u7684\u76EE\u5F55')
  .action(buildCode);
`,paraId:1,tocIndex:0},{value:"\u751F\u6210\u8FD9\u6837\u7684\u4EE3\u7801",paraId:2,tocIndex:1},{value:"\u7ECF\u8FC7\u5904\u7406\u66B4\u6F0F api",paraId:3,tocIndex:1},{value:`import { Api as IotBaseApi } from './api/iot-base';
import { injectInterceptors } from './interceptors';

const iotBaseApi = new IotBaseApi({
  baseURL: '/iot-base',
});

injectInterceptors(iotBaseApi.instance);

export { iotBaseApi };
`,paraId:4,tocIndex:1},{value:"\u4E1A\u52A1\u4F7F\u7528",paraId:5,tocIndex:1},{value:`import { iotBaseApi } from '@lib/api';

iotBaseApi.thing.thingModelMainPageByParam({});
`,paraId:6,tocIndex:1},{value:"\u540E\u7AEF\u63A5\u53E3\u4F1A\u6709\u679A\u4E3E\uFF0C\u63D0\u73B0\u5728\u4EE3\u7801\u4E0A\u662F\u8054\u5408\u7C7B\u578B\u3002",paraId:7,tocIndex:2},{value:`  /** #\u53D1\u5E03\u72B6\u6001#ENUM#0:\u672A\u53D1\u5E03:NOT_RELEASE,2:\u53D1\u5E03\u6210\u529F:RELEASED# */
  releaseStatus?: 'NOT_RELEASE' | 'RELEASED';
`,paraId:8,tocIndex:2},{value:"\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8FD9\u6837\u7684\u573A\u666F",paraId:9,tocIndex:2},{value:`// --- ReleaseStatus

export enum EnumReleaseStatus {
  NOT_RELEASE = 'NOT_RELEASE',
  RELEASED = 'RELEASED',
}

export const valueEnumReleaseStatus = {
  [EnumReleaseStatus.NOT_RELEASE]: {
    text: '\u672A\u53D1\u5E03',
    status: 'Default',
  },

  [EnumReleaseStatus.RELEASED]: {
    text: '\u5DF2\u53D1\u5E03',
    status: 'Success',
  },
};

export const listReleaseStatus = Object.keys(valueEnumReleaseStatus).map((key) => {
  const item = valueEnumReleaseStatus[key];

  return {
    value: key,
    label: item.text,
  };
});

export function TagReleaseStatus(props: { value?: EnumReleaseStatus | string }) {
  const item = props.value && valueEnumReleaseStatus[props.value];

  if (item) {
    return <Tag color={item.color}>{item.text}</Tag>;
  }

  return null;
}
`,paraId:10,tocIndex:2},{value:"\u4EBA\u5DE5\u5199\u592A\u6162\uFF0C\u53C8\u4E0D\u597D\u901A\u8FC7\u4EE3\u7801\u751F\u6210\uFF0C\u6240\u4EE5\u6574\u4E86\u4E2A\u811A\u672C\u3002\u811A\u672C\u9700\u8981\u914D\u7F6E enums.config.js\uFF0C\u5373\u53EF\u751F\u6210\u4E0A\u9762\u7684\u4EE3\u7801",paraId:11,tocIndex:2},{value:`const enums = {
  ReleaseStatus: {
    NOT_RELEASE: {
      text: '\u672A\u53D1\u5E03',
      status: 'Default',
      color: 'default',
    },
    RELEASED: {
      text: '\u5DF2\u53D1\u5E03',
      status: 'Success',
      color: 'success',
    },
  },
};
`,paraId:12,tocIndex:2}]},78641:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(12567);const t=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@fe-free/style-lint'],
};
`,paraId:0,tocIndex:0}]},2641:function(b,m,e){e.r(m),e.d(m,{texts:function(){return t}});var P=e(32475);const t=[{value:"\u5C06\u6C49\u5B57\u8F6C\u6362\u4E3A\u62FC\u97F3",paraId:0,tocIndex:0},{value:"\u8F93\u51FA\u62FC\u97F3",paraId:1,tocIndex:1},{value:"\u8F93\u51FA\u9996\u62FC\u97F3",paraId:2},{value:"\u5339\u914D",paraId:3},{value:"\u8FC7\u6EE4",paraId:4}]},71794:function(b,m){m.Z=`import { range } from 'lodash-es';

const citys = {
  \u5E7F\u5DDE: ['\u767D\u4E91', '\u9EC4\u57D4', '\u589E\u57CE'],
  \u6DF1\u5733: ['\u798F\u7530', '\u5357\u5C71', '\u5B9D\u5B89'],
};

const levels = {
  HIGH: { text: '\u9AD8' },
  MEDIUM: { text: '\u4E2D' },
  LOW: { text: '\u4F4E' },
};

const schools = [
  { value: '0', label: '\u7B2C\u4E00\u5C0F\u5B66' },
  { value: '1', label: '\u7B2C\u4E8C\u5C0F\u5B66' },
  { value: '2', label: '\u7B2C\u4E09\u5C0F\u5B66' },
];

function random(length) {
  return Math.floor(Math.random() * length);
}

function randomCity() {
  return Object.keys(citys)[random(Object.keys(citys).length + 1)];
}
function randomArea(params: { city?: string }) {
  if (!params.city) {
    return undefined;
  }

  return params.city && citys[params.city][random(citys[params.city].length + 1)];
}

function randomLevel() {
  return Object.keys(levels)[random(Object.keys(levels).length + 1)];
}

function makeData(count) {
  return range(count).map((id) => {
    const city = randomCity();
    const area = randomArea({ city });

    return {
      id: \`\${id}\`,
      name: \`\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57 \${id}\`,
      city,
      area,
      level: randomLevel(),
      status: random(2) === 1,
      school: '' + random(schools.length),
    };
  });
}

let fakeData = makeData(21);

async function fakeRequest(params) {
  console.log('fakeRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: fakeData,
        success: true,
        total: fakeData.length,
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeDeleteByRecord(record) {
  console.log('fakeDeleteByRecord', record);

  fakeData = fakeData.filter((item) => item.id !== record.id);

  return Promise.resolve({});
}

async function fakeGetByRecord(record) {
  console.log('fakeGetByRecord', record);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData.find((item) => item.id === record.id));
    }, 1000);
  });
}

async function fakeCreate(params) {
  console.log('fakeCreate', params);

  fakeData.push({
    id: fakeData.length + 1,
    ...params,
  });

  return Promise.resolve({});
}

async function fakeUpdateById(params) {
  console.log('fakeUpdateById', params);

  fakeData = fakeData.map((item) => {
    if (item.id === params.id) {
      return {
        ...item,
        ...params,
      };
    }
    return item;
  });

  return Promise.resolve({});
}

function fakeRequestCity(): Promise<string[]> {
  return Promise.resolve(Object.keys(citys));
}

function fakeRequestArea(params?: { city?: string }): Promise<string[]> {
  if (!params?.city) {
    return Promise.resolve(Object.values(citys).reduce((prev, cur) => prev.concat(cur), []));
  }

  return Promise.resolve(citys[params.city]);
}

function fakeRequestSchool() {
  return Promise.resolve(schools);
}

export {
  fakeData,
  levels,
  fakeRequest,
  fakeDeleteByRecord,
  fakeGetByRecord,
  fakeCreate,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
  fakeRequestSchool,
};
`},83233:function(b,m){m.Z=`import React, { useRef } from 'react';
import type { CRUDProps } from '@fe-free/core';
import { CRUD, proFormSelectSearchProps } from '@fe-free/core';
import { Button } from 'antd';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import {
  fakeRequest,
  fakeDeleteByRecord,
  fakeCreate,
  fakeGetByRecord,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
  levels,
  fakeRequestSchool,
} from './data';

const Normal = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57(\u7701\u7565)',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return (
    <CRUD
      actions={['create', 'read', 'delete', 'update']}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
      requestDeleteByRecord={fakeDeleteByRecord}
      deleteProps={{
        nameIndex: 'name',
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
            extra="extra extra extra extra"
          />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreateByValues={fakeCreate}
      requestUpdateById={fakeUpdateById}
    />
  );
};

function ReadDetail() {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <CRUD
      actions={['read_detail']}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
}

function Ref() {
  const formRef = useRef<any>();
  const [detailFormInstance] = ProForm.useForm();

  // @ts-ignore
  window._detailFormInstance = detailFormInstance;

  const name = ProForm.useWatch('name', formRef.current);
  const detailName = ProForm.useWatch('name', detailFormInstance);

  // \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC name \u4E0D\u751F\u6548\uFF0C\u4F46\u662F\u9879\u76EE\u91CC\u662F\u751F\u6548\u7684\u3002\u5148\u5FFD\u7565
  console.log('useWatch', name, detailName);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <CRUD
      actions={['create', 'read', 'update']}
      tableProps={{
        formRef,
        columns,
        request: fakeRequest,
      }}
      detailFormInstance={detailFormInstance}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
            initialValue={'default'}
          />
          <ProFormSwitch {...formProps} name="status" label="\u5F00\u542F" initialValue={false} />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreateByValues={fakeCreate}
      requestUpdateById={fakeUpdateById}
    />
  );
}

function ActionRef() {
  const ref = useRef<any>();

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CRUD
        ref={ref}
        actions={[]}
        tableProps={{
          columns,
          request: fakeRequest,
        }}
      />
    </>
  );
}

function RemoteData() {
  const columns: CRUDProps['tableProps']['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
    {
      title: '\u7B49\u7EA7(\u672C\u5730\u6570\u636E)',
      dataIndex: 'level',
      search: true,
      valueEnum: levels,
      ...proFormSelectSearchProps,
    },
    {
      title: 'city(\u8FDC\u7AEF\u6570\u636E)',
      dataIndex: 'city',
      search: true,
      request: async () => {
        console.log('request');
        const res = await fakeRequestCity();

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      ...proFormSelectSearchProps,
    },
    {
      title: 'area(\u8054\u52A8 city)',
      dataIndex: 'area',
      search: true,
      request: async (params) => {
        console.log('params', params);
        const res = await fakeRequestArea(params);

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      dependencies: ['city'],
      ...proFormSelectSearchProps,
    },
    {
      title: '\u5B66\u6821(\u8FDC\u7AEF\u6570\u636E label value)',
      dataIndex: 'school',
      search: true,
      valueType: 'select',
      request: () => fakeRequestSchool(),
      ...proFormSelectSearchProps,
    },
  ];

  return (
    <CRUD
      actions={[]}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
}

function NoSearch() {
  const ref = useRef<any>();

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
    },
  ];

  return (
    <CRUD
      ref={ref}
      actions={[]}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
    />
  );
}

const CustomText = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
  ];

  return (
    <CRUD
      actions={['create', 'read', 'delete', 'update']}
      tableProps={{
        columns,
        request: fakeRequest,
      }}
      operateColumnProps={{
        width: 230,
        moreOperator: () => <div>custom</div>,
      }}
      readProps={{
        operateText: '\u67E5\u770B\u5566',
      }}
      requestDeleteByRecord={fakeDeleteByRecord}
      deleteProps={{
        nameIndex: 'name',
        operateText: '\u5220\u9664\u5566',
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
          />
        </>
      )}
      requestGetByRecord={fakeGetByRecord}
      requestCreateByValues={fakeCreate}
      createProps={{
        successText: '\u65B0\u5EFA\u6210\u529F\u5566',
      }}
      updateProps={{
        operateText: '\u66F4\u65B0\u5566',
        successText: '\u66F4\u65B0\u6210\u529F\u5566',
      }}
      requestUpdateById={fakeUpdateById}
    />
  );
};

export { Normal, ReadDetail, Ref, ActionRef, RemoteData, NoSearch, CustomText };
`}}]);
