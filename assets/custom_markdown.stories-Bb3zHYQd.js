import{G as s,j as h}from"./iframe-CIQ77GZG.js";import"./index-CNE4Z8lM.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"@fe-free/core/CustomMarkdown",component:s,tags:["autodocs"]},n={args:{content:`<think>
好的，我现在需要处理用户的问题。用户一开始用中文打招呼“你好”，然后我的回应应该遵循之前设定的角色和技能。首先，我需要确认用户是否是前端工程师求职者，或者他们需要哪方面的帮助。根据角色设定，我应该先了解他们的具体情况，比如技术栈、工作年限、项目经验和目标城市。

用户可能没有详细说明他们的需求，所以我需要引导他们提供更多信息。根据技能1中的步骤，我应该先询问他们的技术栈、工作年限、项目经验和目标城市。同时，我需要保持友好和专业，确保用户感到被理解和支持。

另外，用户可能对生成卡通头像感兴趣，但根据限制，我需要先处理求职相关的问题，再提及头像生成。因此，在初始回复中，我应该先专注于求职建议，然后在适当的时候提到头像生成选项。

我需要确保回复符合Markdown格式，使用适当的标题和列表结构，使信息清晰易读。同时，避免使用复杂术语，保持语言简洁明了，适合不同水平的用户。

现在，我需要按照模板组织回复，先欢迎用户，然后分步骤询问必要的信息，最后提到头像生成的选项。确保每个问题都明确，帮助用户逐步提供所需的信息，以便我能够提供有针对性的建议。
</think>

你好！欢迎来到前端工程师求职助手。为了提供更有针对性的建议，请告诉我以下信息：

### 1. 你的技术栈
- 是否掌握核心三件套（HTML/CSS/JavaScript）？
- 熟悉哪些前端框架（React/Vue/Angular等）？
- 是否有Node.js/Webpack/Vite等工程化经验？

### 2. 工作年限
- 应届毕业生/1-3年经验/3-5年经验/5年以上？

### 3. 项目亮点
- 请用一句话描述你最具代表性的项目（如：主导开发日均UV百万级的电商前端架构）

### 4. 目标城市
- 期望在哪个城市发展？

---

💡 **小贴士**：需要生成专属前端工程师卡通头像吗？可同步告知：
1. 意向职位（如：高级前端开发）
2. 工作年限
3. 目标城市

我会根据你的信息提供：求职策略+技术提升路径+简历优化建议+面试指南+定制头像（如需）
    `}},t={args:{content:`
## 折线图示例

\`\`\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2],
      ["2025-06-23", 10],
      ["2025-07-01", 85.5],
      ["2025-07-15", 156.8]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\`\`\`

多条折线

\`\`\`chart
{
  "data": {
    "columns": ["quarter", "L'Oreal", "P&G", "Proya"],
    "rows": [
      ["FY23-Q4/23-Q2", 8, 7, null],
      ["FY24-Q1/23-Q3", 7, 6, null],
      ["FY24-Q2/23-Q4", 4, 3, null],
      ["FY24-Q3/24-Q1", 3, null, null],
      ["FY24-Q4/24-Q2", null, null, null],
      ["FY25-Q1/24-Q34",null,null,null]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "quarter",
    "y_field": ["L'Oreal", "P&G","Proya"],
    "title": "欧莱雅、宝洁及珀莱雅增长率变化趋势"
  }
}
\`\`\`

## 柱状图示例

\`\`\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2],
      ["2025-06-23", 10],
      ["2025-07-01", 85.5],
      ["2025-07-15", 156.8]
    ]
  },
  "chart": {
    "chart_type": "bar",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\`\`\`


## 饼图示例

\`\`\`chart
{
  "data": {
    "columns": ["category", "sales"],
    "rows": [
      ["电子产品", 45],
      ["服装", 30],
      ["食品", 15],
      ["家居", 10]
    ]
  },
  "chart": {
    "chart_type": "pie",
    "angle_field": "sales",
    "color_field": "category",
    "title": "销售品类分布"
  }
}
\`\`\`

## 散点图示例

\`\`\`chart
{
  "data": {
    "columns": ["width", "height"],
    "rows": [
      [100, 200],
      [300, 400],
      [500, 600]
    ]
  },
  "chart": {
    "chart_type": "scatter",
    "x_field": "width",
    "y_field": "height",
    "title": "散点图示例"
  }
}
\`\`\`

## 错误处理示例

### JSON 解析错误

\`\`\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
\`\`\`

### 字段不存在错误

\`\`\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "nonexistent_field",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\`\`\`

### 不支持的图表类型

\`\`\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "some_chart_type",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\`\`\`
`}},a={args:{content:`
类型定义见：https://github.com/frontend-free/free/blob/main/packages/core/src/markdown/hm_chart.tsx

## 折线图示例

\`\`\`hmchart
{
  "title": "趋势变化",
  "type": "line",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "xField": "year",
  "yField": "value"
}
\`\`\`

\`\`\`hmchart
{
  "title": "多条趋势变化",
  "type": "line",
  "data": [
    { "year": "1991", "type": "A", "value": 3 },
    { "year": "1991", "type": "B", "value": 4 },
    { "year": "1992", "type": "A", "value": 4 },
    { "year": "1992", "type": "B", "value": 4.5 },
    { "year": "1993", "type": "A", "value": 3.5 },
    { "year": "1993", "type": "B", "value": 6 }
  ],
  "xField": "year",
  "yField": "value",
  "seriesField": "type"
}
\`\`\`

\`\`\`hmchart
{
  "title": "柱状图",
  "type": "bar",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "xField": "year",
  "yField": "value"
}
\`\`\`

\`\`\`hmchart
{
  "title": "多条柱状图",
  "type": "bar",
  "data": [
    { "year": "1991", "type": "A", "value": 3 },
    { "year": "1991", "type": "B", "value": 4 },
    { "year": "1992", "type": "A", "value": 4 },
    { "year": "1992", "type": "B", "value": 4.5 },
    { "year": "1993", "type": "A", "value": 3.5 },
    { "year": "1993", "type": "B", "value": 6 }
  ],
  "xField": "year",
  "yField": "value",
  "seriesField": "type"
}
\`\`\`

\`\`\`hmchart
{
  "title": "饼图",
  "type": "pie",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "angleField": "value",
  "colorField": "year"
}
\`\`\`

\`\`\`hmchart
{
  "title": "散点图示例",
  "type": "scatter",
  "data": [
    {
        "gender": "female",
        "height": 161.2,
        "weight": 51.6
    },
    {
        "gender": "male",
        "height": 167.5,
        "weight": 59
    },
    {
        "gender": "female",
        "height": 159.5,
        "weight": 49.2
    },
    {
        "gender": "male",
        "height": 157,
        "weight": 63
    },
    {
        "gender": "male",
        "height": 155.8,
        "weight": 53.6
    },
    {
        "gender": "female",
        "height": 170,
        "weight": 59
    },
    {
        "gender": "female",
        "height": 159.1,
        "weight": 47.6
    },
    {
        "gender": "female",
        "height": 166,
        "weight": 69.8
    },
    {
        "gender": "female",
        "height": 176.2,
        "weight": 66.8
    },
    {
        "gender": "female",
        "height": 160.2,
        "weight": 75.2
    },
    {
        "gender": "female",
        "height": 172.5,
        "weight": 55.2
    },
    {
        "gender": "female",
        "height": 170.9,
        "weight": 54.2
    },
    {
        "gender": "female",
        "height": 172.9,
        "weight": 62.5
    },
    {
        "gender": "male",
        "height": 153.4,
        "weight": 42
    },
    {
        "gender": "male",
        "height": 160,
        "weight": 50
    }
  ],
  "xField": "height",
  "yField": "weight",
  "colorField": "gender"
}
\`\`\`

`}},l={args:{content:`
   根据检索结果，知识库中包含多个酒店的信息。[^knowledge:1-0]例如：

- **杭州城中香格里拉**：位于杭州长寿路6号，提供多种餐饮选择，包括非凡酒廊、美食汇、城中啤酒餐吧以及城中小馆中餐厅[^knowledge:0-0]。
- **凯恩斯香格里拉**：位于澳大利亚Pierpoint Road Cairns, Queensland，提供纯正澳式待客之道，靠近马林码头与珊瑚海交汇处[^knowledge:2-0]。
- **马斯喀特 Al Husn 香格里拉**：位于阿曼P.O. Box 644, Muscat 100，是一个成人专享的世外桃源，拥有私人海滩和海湾[^knowledge:3-0]。

此外，还有一家未直接命名但详细描述了其服务特色的豪华酒店，该酒店以江南丝绸商贸之家为灵感设计，提供独特的入住体验，包括定制贴心体验、精致餐饮及新颖的康养项目[^knowledge:4-0][^knowledge:14-0]。
    `,knowledgeRefs:[{id:"0-0",title:"杭州城中香格里拉"},{id:"1-0",title:"巴拉巴拉酒店"},{id:"2-0",title:"凯恩斯香格里拉"},{id:"3-0",title:"马斯喀特 Al Husn 香格里拉"},{id:"4-0",title:"江南丝绸商贸之家"}],onKnowledgeRef:e=>{console.log("onKnowledgeRef",e)}}},r={args:{content:`
   根据检索结果，知识库中包含多个酒店的信息。[^knowledge:1-0]例如：

- **杭州城中香格里拉**：位于杭州长寿路6号，提供多种餐饮选择，包括非凡酒廊、美食汇、城中啤酒餐吧以及城中小馆中餐厅[^knowledge:0-0]。
- **凯恩斯香格里拉**：位于澳大利亚Pierpoint Road Cairns, Queensland，提供纯正澳式待客之道，靠近马林码头与珊瑚海交汇处[^knowledge:2-0]。
- **马斯喀特 Al Husn 香格里拉**：位于阿曼P.O. Box 644, Muscat 100，是一个成人专享的世外桃源，拥有私人海滩和海湾[^knowledge:3-0]。

此外，还有一家未直接命名但详细描述了其服务特色的豪华酒店，该酒店以江南丝绸商贸之家为灵感设计，提供独特的入住体验，包括定制贴心体验、精致餐饮及新颖的康养项目[^knowledge:4-0][^knowledge:14-0]。
    `,onKnowledgeRef:e=>{console.log("onKnowledgeRef",e)}}},i={args:{content:`
# 测试

啊沙发沙发发按时发

\`\`\`balabala
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <div>案发时发发</div>
  <div>案发时发发</div>
  <div>案发时发发</div>
  <div>案发时发
\`\`\`

ababa
    `,getComponents:e=>({...e,code:o=>{const d=e?.code;return(o.className?.match(/language-(\w+)/)?.[1]||"")==="balabala"?h.jsx("div",{className:"bg-red-100",children:o.children}):d?h.jsx(d,{...o}):null}})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`<think>
好的，我现在需要处理用户的问题。用户一开始用中文打招呼“你好”，然后我的回应应该遵循之前设定的角色和技能。首先，我需要确认用户是否是前端工程师求职者，或者他们需要哪方面的帮助。根据角色设定，我应该先了解他们的具体情况，比如技术栈、工作年限、项目经验和目标城市。

用户可能没有详细说明他们的需求，所以我需要引导他们提供更多信息。根据技能1中的步骤，我应该先询问他们的技术栈、工作年限、项目经验和目标城市。同时，我需要保持友好和专业，确保用户感到被理解和支持。

另外，用户可能对生成卡通头像感兴趣，但根据限制，我需要先处理求职相关的问题，再提及头像生成。因此，在初始回复中，我应该先专注于求职建议，然后在适当的时候提到头像生成选项。

我需要确保回复符合Markdown格式，使用适当的标题和列表结构，使信息清晰易读。同时，避免使用复杂术语，保持语言简洁明了，适合不同水平的用户。

现在，我需要按照模板组织回复，先欢迎用户，然后分步骤询问必要的信息，最后提到头像生成的选项。确保每个问题都明确，帮助用户逐步提供所需的信息，以便我能够提供有针对性的建议。
</think>

你好！欢迎来到前端工程师求职助手。为了提供更有针对性的建议，请告诉我以下信息：

### 1. 你的技术栈
- 是否掌握核心三件套（HTML/CSS/JavaScript）？
- 熟悉哪些前端框架（React/Vue/Angular等）？
- 是否有Node.js/Webpack/Vite等工程化经验？

### 2. 工作年限
- 应届毕业生/1-3年经验/3-5年经验/5年以上？

### 3. 项目亮点
- 请用一句话描述你最具代表性的项目（如：主导开发日均UV百万级的电商前端架构）

### 4. 目标城市
- 期望在哪个城市发展？

---

💡 **小贴士**：需要生成专属前端工程师卡通头像吗？可同步告知：
1. 意向职位（如：高级前端开发）
2. 工作年限
3. 目标城市

我会根据你的信息提供：求职策略+技术提升路径+简历优化建议+面试指南+定制头像（如需）
    \`
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`
## 折线图示例

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2],
      ["2025-06-23", 10],
      ["2025-07-01", 85.5],
      ["2025-07-15", 156.8]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\\\`\\\`\\\`

多条折线

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["quarter", "L'Oreal", "P&G", "Proya"],
    "rows": [
      ["FY23-Q4/23-Q2", 8, 7, null],
      ["FY24-Q1/23-Q3", 7, 6, null],
      ["FY24-Q2/23-Q4", 4, 3, null],
      ["FY24-Q3/24-Q1", 3, null, null],
      ["FY24-Q4/24-Q2", null, null, null],
      ["FY25-Q1/24-Q34",null,null,null]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "quarter",
    "y_field": ["L'Oreal", "P&G","Proya"],
    "title": "欧莱雅、宝洁及珀莱雅增长率变化趋势"
  }
}
\\\`\\\`\\\`

## 柱状图示例

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2],
      ["2025-06-23", 10],
      ["2025-07-01", 85.5],
      ["2025-07-15", 156.8]
    ]
  },
  "chart": {
    "chart_type": "bar",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\\\`\\\`\\\`


## 饼图示例

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["category", "sales"],
    "rows": [
      ["电子产品", 45],
      ["服装", 30],
      ["食品", 15],
      ["家居", 10]
    ]
  },
  "chart": {
    "chart_type": "pie",
    "angle_field": "sales",
    "color_field": "category",
    "title": "销售品类分布"
  }
}
\\\`\\\`\\\`

## 散点图示例

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["width", "height"],
    "rows": [
      [100, 200],
      [300, 400],
      [500, 600]
    ]
  },
  "chart": {
    "chart_type": "scatter",
    "x_field": "width",
    "y_field": "height",
    "title": "散点图示例"
  }
}
\\\`\\\`\\\`

## 错误处理示例

### JSON 解析错误

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
\\\`\\\`\\\`

### 字段不存在错误

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "line",
    "x_field": "nonexistent_field",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\\\`\\\`\\\`

### 不支持的图表类型

\\\`\\\`\\\`chart
{
  "data": {
    "columns": ["time", "amount"],
    "rows": [
      ["2025-06-03", 18.23],
      ["2025-06-10", 112.2]
    ]
  },
  "chart": {
    "chart_type": "some_chart_type",
    "x_field": "time",
    "y_field": "amount",
    "title": "张三金额变化趋势图"
  }
}
\\\`\\\`\\\`
\`
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`
类型定义见：https://github.com/frontend-free/free/blob/main/packages/core/src/markdown/hm_chart.tsx

## 折线图示例

\\\`\\\`\\\`hmchart
{
  "title": "趋势变化",
  "type": "line",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "xField": "year",
  "yField": "value"
}
\\\`\\\`\\\`

\\\`\\\`\\\`hmchart
{
  "title": "多条趋势变化",
  "type": "line",
  "data": [
    { "year": "1991", "type": "A", "value": 3 },
    { "year": "1991", "type": "B", "value": 4 },
    { "year": "1992", "type": "A", "value": 4 },
    { "year": "1992", "type": "B", "value": 4.5 },
    { "year": "1993", "type": "A", "value": 3.5 },
    { "year": "1993", "type": "B", "value": 6 }
  ],
  "xField": "year",
  "yField": "value",
  "seriesField": "type"
}
\\\`\\\`\\\`

\\\`\\\`\\\`hmchart
{
  "title": "柱状图",
  "type": "bar",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "xField": "year",
  "yField": "value"
}
\\\`\\\`\\\`

\\\`\\\`\\\`hmchart
{
  "title": "多条柱状图",
  "type": "bar",
  "data": [
    { "year": "1991", "type": "A", "value": 3 },
    { "year": "1991", "type": "B", "value": 4 },
    { "year": "1992", "type": "A", "value": 4 },
    { "year": "1992", "type": "B", "value": 4.5 },
    { "year": "1993", "type": "A", "value": 3.5 },
    { "year": "1993", "type": "B", "value": 6 }
  ],
  "xField": "year",
  "yField": "value",
  "seriesField": "type"
}
\\\`\\\`\\\`

\\\`\\\`\\\`hmchart
{
  "title": "饼图",
  "type": "pie",
  "data": [
    { "year": "1991", "value": 3 },
    { "year": "1992", "value": 4 },
    { "year": "1993", "value": 3.5 }
  ],
  "angleField": "value",
  "colorField": "year"
}
\\\`\\\`\\\`

\\\`\\\`\\\`hmchart
{
  "title": "散点图示例",
  "type": "scatter",
  "data": [
    {
        "gender": "female",
        "height": 161.2,
        "weight": 51.6
    },
    {
        "gender": "male",
        "height": 167.5,
        "weight": 59
    },
    {
        "gender": "female",
        "height": 159.5,
        "weight": 49.2
    },
    {
        "gender": "male",
        "height": 157,
        "weight": 63
    },
    {
        "gender": "male",
        "height": 155.8,
        "weight": 53.6
    },
    {
        "gender": "female",
        "height": 170,
        "weight": 59
    },
    {
        "gender": "female",
        "height": 159.1,
        "weight": 47.6
    },
    {
        "gender": "female",
        "height": 166,
        "weight": 69.8
    },
    {
        "gender": "female",
        "height": 176.2,
        "weight": 66.8
    },
    {
        "gender": "female",
        "height": 160.2,
        "weight": 75.2
    },
    {
        "gender": "female",
        "height": 172.5,
        "weight": 55.2
    },
    {
        "gender": "female",
        "height": 170.9,
        "weight": 54.2
    },
    {
        "gender": "female",
        "height": 172.9,
        "weight": 62.5
    },
    {
        "gender": "male",
        "height": 153.4,
        "weight": 42
    },
    {
        "gender": "male",
        "height": 160,
        "weight": 50
    }
  ],
  "xField": "height",
  "yField": "weight",
  "colorField": "gender"
}
\\\`\\\`\\\`

\`
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`
   根据检索结果，知识库中包含多个酒店的信息。[^knowledge:1-0]例如：\\n\\n- **杭州城中香格里拉**：位于杭州长寿路6号，提供多种餐饮选择，包括非凡酒廊、美食汇、城中啤酒餐吧以及城中小馆中餐厅[^knowledge:0-0]。\\n- **凯恩斯香格里拉**：位于澳大利亚Pierpoint Road Cairns, Queensland，提供纯正澳式待客之道，靠近马林码头与珊瑚海交汇处[^knowledge:2-0]。\\n- **马斯喀特 Al Husn 香格里拉**：位于阿曼P.O. Box 644, Muscat 100，是一个成人专享的世外桃源，拥有私人海滩和海湾[^knowledge:3-0]。\\n\\n此外，还有一家未直接命名但详细描述了其服务特色的豪华酒店，该酒店以江南丝绸商贸之家为灵感设计，提供独特的入住体验，包括定制贴心体验、精致餐饮及新颖的康养项目[^knowledge:4-0][^knowledge:14-0]。
    \`,
    knowledgeRefs: [{
      id: '0-0',
      title: '杭州城中香格里拉'
    }, {
      id: '1-0',
      title: '巴拉巴拉酒店'
    }, {
      id: '2-0',
      title: '凯恩斯香格里拉'
    }, {
      id: '3-0',
      title: '马斯喀特 Al Husn 香格里拉'
    }, {
      id: '4-0',
      title: '江南丝绸商贸之家'
    }],
    onKnowledgeRef: (id?: string) => {
      console.log('onKnowledgeRef', id);
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`
   根据检索结果，知识库中包含多个酒店的信息。[^knowledge:1-0]例如：\\n\\n- **杭州城中香格里拉**：位于杭州长寿路6号，提供多种餐饮选择，包括非凡酒廊、美食汇、城中啤酒餐吧以及城中小馆中餐厅[^knowledge:0-0]。\\n- **凯恩斯香格里拉**：位于澳大利亚Pierpoint Road Cairns, Queensland，提供纯正澳式待客之道，靠近马林码头与珊瑚海交汇处[^knowledge:2-0]。\\n- **马斯喀特 Al Husn 香格里拉**：位于阿曼P.O. Box 644, Muscat 100，是一个成人专享的世外桃源，拥有私人海滩和海湾[^knowledge:3-0]。\\n\\n此外，还有一家未直接命名但详细描述了其服务特色的豪华酒店，该酒店以江南丝绸商贸之家为灵感设计，提供独特的入住体验，包括定制贴心体验、精致餐饮及新颖的康养项目[^knowledge:4-0][^knowledge:14-0]。
    \`,
    onKnowledgeRef: (id?: string) => {
      console.log('onKnowledgeRef', id);
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`
# 测试

啊沙发沙发发按时发

\\\`\\\`\\\`balabala
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <div>案发时发发</div>
  <div>案发时发发</div>
  <div>案发时发发</div>
  <div>案发时发
\\\`\\\`\\\`

ababa
    \`,
    getComponents: (components: XMarkdownProps['components']) => {
      return {
        ...components,
        code: (props: ComponentProps) => {
          const CodeComponent = components?.code as React.ComponentType<ComponentProps>;
          const lang = props.className?.match(/language-(\\w+)/)?.[1] || '';
          if (lang === 'balabala') {
            return <div className="bg-red-100">{props.children}</div>;
          }
          if (!CodeComponent) {
            return null;
          }
          return <CodeComponent {...props} />;
        }
      };
    }
  }
}`,...i.parameters?.docs?.source}}};const p=["CustomThink","Chart","HMChart","Knowledge","KnowledgeWithoutData","GetComponents"];export{t as Chart,n as CustomThink,i as GetComponents,a as HMChart,l as Knowledge,r as KnowledgeWithoutData,p as __namedExportsOrder,y as default};
