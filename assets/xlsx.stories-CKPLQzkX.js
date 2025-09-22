import{$ as F,a0 as C,a1 as V,a2 as b,a3 as W,j as r,K as X,J as d,Y as y,a4 as R}from"./iframe-DC8AL378.js";import{E as h}from"./exceljs.min-u6BQWwN2.js";import"./preload-helper-D9Z9MdNV.js";var I="[object Date]";function E(s){return F(s)&&C(s)==I}var S=b&&b.isDate,O=S?V(S):E;function j(s,n){let a=0;s.eachRow(function(t,o){a=Math.max(a,t._cells.length);for(let e=0;e<a;e++){const l=t.getCell(e+1),i=e+1;n({cell:l,rowNumber:o,colNumber:i})}})}function A(s){const n=new Date(s),a=n.getTimezoneOffset();return new Date(n.getTime()+a*60*1e3)}function k(s,n){const a=[];j(s,({cell:o,colNumber:e,rowNumber:l})=>{n&&n({cell:o,colNumber:e,rowNumber:l}),a[l-1]=a[l-1]||[],a[l-1][e-1]=o.value});let t=a.filter(Boolean);return t=t.map(o=>o.map(e=>O(e)?A(e):e)),t}function D(s,n,a){const{processCell:t=e=>({value:e.value})}=a||{};let o=0;for(let e=0;e<s.length;e++){const l=s[e];o=Math.max(o,l.length);for(let i=0;i<o;i++){const m=l[i],p=t({value:m,colNumber:i+1,rowNumber:e+1});Object.assign(n.getCell(e+1,i+1),p)}}}async function _(s){const n=new h.Workbook;return s.eachSheet(a=>{const t=n.addWorksheet(a.name);j(a,({cell:o,colNumber:e,rowNumber:l})=>{t.getCell(l,e).value=o.value,o.note&&(t.getCell(l,e).note=o.note,t.getCell(l,e).font={color:{argb:"FFFF0000"}})})}),n}function J(s){return new Promise(n=>{const a=new FileReader;a.onload=t=>{n(t.target?.result)},a.readAsArrayBuffer(s)})}async function w(s,n){const a=await s.xlsx.writeBuffer(),t=new window.Blob([a],{type:"application/octet-stream"});W.saveAs(t,n?n.replace(/[<>\\:;?/*|]/g,"-"):"data.xlsx")}async function N(s,n){const{fileName:a="data.xlsx",processCell:t}=n||{},o=new h.Workbook;s.forEach(e=>{const l=o.addWorksheet(e.name);D(e.data,l,{processCell:t})}),await w(o,a)}async function M(s){const n=new h.Workbook,a=await J(s);await n.xlsx.load(a);const t=[];return n.eachSheet(o=>{const e=k(o);t.push({name:o.name,data:e})}),t}async function B(s,n,a){const{fileName:t="data.xlsx"}={},o=new h.Workbook,e=await J(s);await o.xlsx.load(e);const l=[];function i(c,v){const g=n(c);g&&(Object.assign(c.cell,{note:g.message,font:{color:{argb:"FFFF0000"}}}),l[v]=!0)}let m=0;const p=[];o.eachSheet(c=>{const v=k(c,g=>{i(g,m)});p.push({name:c.name,data:v}),m+=1});async function T(){const c=await _(o);await w(c,t)}return{data:p,hasErrors:l,firstError:!!l[0],exportXlsx:T}}const H={title:"@fe-free/file/xlsx",tags:["autodocs"],parameters:{docs:{description:{component:"xlsx 相关工具函数，支持 xlsx 与 JSON 的互转、校验、导出等功能，适用于表格数据的导入导出场景。"}}}},u=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["导入 xlsx",r.jsx("br",{}),r.jsx("input",{type:"file",onChange:s=>{const n=s.target.files?.[0];n&&M(n).then(a=>{const t=document.querySelector(".data1");t&&(t.innerHTML=JSON.stringify(a,null,2))})}})]}),r.jsx("pre",{className:"data1"})]}),f=()=>r.jsxs(r.Fragment,{children:[r.jsxs("pre",{children:["数据源：",JSON.stringify([{name:"sheet1",data:[["日期","必填项"],["2025/1/1","是"],["2025/12/31","否"]]}],null,2)]}),r.jsx("div",{children:r.jsx("button",{onClick:()=>{N([{name:"sheet1",data:[["日期","必填项"],["2025/1/1","是"],["2025/12/31","否"]]}])},children:"export"})}),r.jsx("div",{children:r.jsx("button",{onClick:()=>{N([{name:"sheet1",data:[["日期","必填项"],["2025/1/1","是"],["2024/12/31","否"]]}],{processCell:({rowNumber:s,colNumber:n,value:a})=>n===1&&s>1&&d(a).year()<d().year()?{value:a,font:{color:{argb:"FFFF0000"}},note:"日期需要当前年份"}:{value:a}})},children:"export（标红&备注）"})})]}),x=()=>{const[s,n]=X.useState(null),a=({cell:t,colNumber:o})=>{if(y(t.value)&&(t.value?.startsWith("日期")||t.value?.startsWith("必填项")))return;let e="";if(o===1){if(!t.value)e="错误";else if(R(t.value)&&(e="格式错误"),O(t.value)){const l=d(t.value);l.isValid()||(e="格式错误"),Math.abs(l.year()-d().year())>1&&(e="范围错误")}else if(y(t.value)){/^\d{4}([./-])\d{1,2}([./-])\d{1,2}$/g.test(t.value)||(e="格式错误");const i=d(t.value);Math.abs(i.year()-d().year())>1&&(e="范围错误")}}else o===2&&(t.value?["是","否"].includes(t.value)||(e="格式错误"):e="不能为空");if(e)return{message:e}};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:["导入 xlsx 和 校验(假如第一列为日期限制当前年份，第二列为[是、否])",r.jsx("input",{type:"file",onChange:t=>{const o=t.target.files?.[0];o&&B(o,a).then(e=>{n(e)})}})]}),r.jsx("pre",{children:JSON.stringify(s,null,2)}),r.jsx("button",{onClick:()=>s?.exportXlsx(),disabled:!s,children:"export with validate"})]})};u.__docgenInfo={description:"",methods:[],displayName:"XlsxToJSON"};f.__docgenInfo={description:"",methods:[],displayName:"JSONToXlsxExample"};x.__docgenInfo={description:"",methods:[],displayName:"XlsxToJSONAndValidate"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <>
    <div>
      导入 xlsx
      <br />
      <input type="file" onChange={e => {
      const file = e.target.files?.[0];
      if (file) {
        xlsxToJSON(file).then(json => {
          const element = document.querySelector('.data1');
          if (element) {
            element.innerHTML = JSON.stringify(json, null, 2);
          }
        });
      }
    }} />
    </div>
    <pre className="data1" />
  </>`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <>
    <pre>
      数据源：
      {JSON.stringify([{
      name: 'sheet1',
      data: [['日期', '必填项'], ['2025/1/1', '是'], ['2025/12/31', '否']]
    }], null, 2)}
    </pre>
    <div>
      <button onClick={() => {
      JSONToXlsx([{
        name: 'sheet1',
        data: [['日期', '必填项'], ['2025/1/1', '是'], ['2025/12/31', '否']]
      }]);
    }}>
        export
      </button>
    </div>
    <div>
      <button onClick={() => {
      JSONToXlsx([{
        name: 'sheet1',
        data: [['日期', '必填项'], ['2025/1/1', '是'], ['2024/12/31', '否']]
      }], {
        processCell: ({
          rowNumber,
          colNumber,
          value
        }) => {
          if (colNumber === 1 && rowNumber > 1) {
            const isValid = dayjs(value).year() < dayjs().year();
            if (isValid) {
              return {
                value,
                font: {
                  color: {
                    argb: 'FFFF0000'
                  }
                },
                note: '日期需要当前年份'
              };
            }
          }
          return {
            value
          };
        }
      });
    }}>
        export（标红&备注）
      </button>
    </div>
  </>`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [validateResult, setValidateResult] = React.useState<any>(null);
  const validate = ({
    cell,
    colNumber
  }: {
    cell: any;
    colNumber: number;
  }) => {
    if (isString(cell.value) && (cell.value?.startsWith('日期') || cell.value?.startsWith('必填项'))) {
      return;
    }
    let message = '';

    // 日期列
    if (colNumber === 1) {
      // 空值
      if (!cell.value) {
        message = '错误';
      } else {
        // 如果是数字
        if (isNumber(cell.value)) {
          message = '格式错误';
        }
        // 如果是日期类型
        if (isDate(cell.value)) {
          const d = dayjs(cell.value);
          // 非法
          if (!d.isValid()) {
            message = '格式错误';
          }
          // 超出范围
          if (Math.abs(d.year() - dayjs().year()) > 1) {
            message = '范围错误';
          }
        }
        // 如果是字符串
        else if (isString(cell.value)) {
          const reg = /^\\d{4}([./-])\\d{1,2}([./-])\\d{1,2}$/g;

          // 不合法
          if (!reg.test(cell.value)) {
            message = '格式错误';
          }

          // 超出范围
          const d = dayjs(cell.value);
          if (Math.abs(d.year() - dayjs().year()) > 1) {
            message = '范围错误';
          }
        }
      }
    }
    // 类型列
    else if (colNumber === 2) {
      // 空值
      if (!cell.value) {
        message = '不能为空';
      } else {
        const isValid = ['是', '否'].includes(cell.value);
        if (!isValid) {
          message = '格式错误';
        }
      }
    }
    if (message) {
      return {
        message
      };
    }
  };
  return <>
      <div>
        导入 xlsx 和 校验(假如第一列为日期限制当前年份，第二列为[是、否])
        <input type="file" onChange={e => {
        const file = e.target.files?.[0];
        if (file) {
          xlsxToJSONAndValidate(file, validate).then(res => {
            setValidateResult(res);
          });
        }
      }} />
      </div>
      <pre>{JSON.stringify(validateResult, null, 2)}</pre>
      <button onClick={() => validateResult?.exportXlsx()} disabled={!validateResult}>
        export with validate
      </button>
    </>;
}`,...x.parameters?.docs?.source}}};const U=["XlsxToJSON","JSONToXlsxExample","XlsxToJSONAndValidate"];export{f as JSONToXlsxExample,u as XlsxToJSON,x as XlsxToJSONAndValidate,U as __namedExportsOrder,H as default};
