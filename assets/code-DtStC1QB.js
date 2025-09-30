import{j as n}from"./iframe-Cl3Z1TH4.js";import{useMDXComponents as r}from"./index-CS9bHtPU.js";import{M as i}from"./blocks-DOz0h0fr.js";import"./preload-helper-D9Z9MdNV.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@fe-free/free-scripts/build-code"}),`
`,n.jsx(e.h1,{id:"build-code",children:"Build Code"}),`
`,n.jsx(e.p,{children:"这是一个用于构建代码的工具。"}),`
`,n.jsx(e.h2,{id:"build-code-1",children:"build-code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`// package.json
{
  "scripts": {
    "build-enums": "free-scripts build-code -i ./enums.config.js -o ./src/code -t antd && prettier ./src/code --write"
  }
}
`})}),`
`,n.jsx(e.p,{children:"enums.config.js 配置如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const enums = {
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
`,n.jsx(e.p,{children:"会生成如下代码，供使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { TagProps } from 'antd';
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

`})})]})}function c(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default};
