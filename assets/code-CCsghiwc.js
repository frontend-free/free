import{n as e}from"./chunk-Bj-mKKzh.js";import{Yi as t}from"./iframe-CeTL_ZNt.js";import{r as n,t as r}from"./react-CFeSWgEv.js";import{a as i,o as a}from"./blocks-DwKE9HME.js";var o=e((()=>{r()}));function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`@fe-free/free-scripts/build-code`}),`
`,(0,l.jsx)(t.h1,{id:`build-code`,children:`Build Code`}),`
`,(0,l.jsx)(t.p,{children:`这是一个用于构建代码的工具。`}),`
`,(0,l.jsx)(t.h2,{id:`build-code-1`,children:`build-code`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-json`,children:`// package.json
{
  "scripts": {
    "build-enums": "free-scripts build-code -i ./enums.config.js -o ./src/code -t antd && prettier ./src/code --write"
  }
}
`})}),`
`,(0,l.jsx)(t.p,{children:`enums.config.js 配置如下`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`const enums = {
  SomeThing: {
    // 建议大写开头
    STRING: {
      text: '文本',
      value: 'string',
    },
    NUMBER: {
      text: '数字',
      // 如果不提供 value，则默认和 Key 一致
      // value: 'NUMBER',
    },
    Time: {
      text: '时间',
      value: 'time',
      // color 用于 Tag 的 color
      color: 'green',
      // status pro-components 的 valueEnum 定义 'Success' | 'Error' | 'Processing' | 'Warning' | 'Default';
      status: 'Default',
    },
  },
};
module.exports = { enums };
`})}),`
`,(0,l.jsx)(t.p,{children:`会生成如下代码，供使用`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import type { TagProps } from 'antd';
import { Tag } from 'antd';

// --- SomeThing

export enum EnumSomeThing {
  STRING = 'string',
  NUMBER = 'NUMBER',
  Time = 'time',
}

export const valueEnumSomeThing = {
  [EnumSomeThing.STRING]: {
    text: '文本',
    value: 'string',
  },
  [EnumSomeThing.NUMBER]: {
    text: '数字',
    value: 'NUMBER',
  },
  [EnumSomeThing.Time]: {
    text: '时间',
    value: 'time',
    status: 'Default',
    color: 'green',
  },
};

export const listSomeThing = Object.keys(valueEnumSomeThing).map((key) => {
  const item = valueEnumSomeThing[key];

  return {
    value: item.value !== undefined ? item.value : key,
    label: item.text,
    originData: item.data,
  };
});

export function TagSomeThing(props: { value?: EnumSomeThing | string } & TagProps) {
  const item = props.value && valueEnumSomeThing[props.value];

  if (item) {
    return (
      <Tag color={item.color} {...props}>
        {item.text}
      </Tag>
    );
  }

  return null;
}

`})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(),o(),a()}))();export{c as default};