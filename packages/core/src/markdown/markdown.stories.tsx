import { Markdown } from '@fe-free/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Markdown> = {
  title: '@fe-free/core/Markdown',
  component: Markdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    children: `
# Markdown 组件示例

这是一个 **Markdown** 组件的基本用法示例。

---

## 支持的特性

- 标题
- 列表
- 代码高亮
- 表格
- 链接与图片
- 引用
- 内联代码
- 分割线

---

## 代码高亮

\`\`\`typescript
function hello(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

\`\`\`js
// long line long line long line long line long line long line long line long line long line long line long line long line long line
function hello(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

---

## 表格

| 姓名   | 年龄 | 城市   | 职业       | 邮箱                  | 状态   |状态   |状态   |状态   |
| ------ | ---- | ------ | ---------- | --------------------- | ------ |------ |------ |------ |
| 张三   | 28   | 北京   | 前端开发   | zhangsan@example.com  | 在职   |
| 李四   | 32   | 上海   | 产品经理   | lisi@example.com      | 离职   |
| 王五   | 24   | 广州   | 设计师     | wangwu@example.com    | 在职   |
| 赵六   | 29   | 深圳   | 测试工程师 | zhaoliu@example.com   | 实习   |

---

## 链接与图片

[访问 Ant Design 官网](https://ant.design)

![Ant Design Logo](https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg)

---

## 引用

> 这是一段引用文本，可以用于强调内容。

---

## 内联代码

你可以在文本中嵌入 \`const a = 1;\` 这样的内联代码。

---

## 分割线

---
`,
  },
};

export const DeepSeek: Story = {
  args: {
    children: `<think>
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
    `,
  },
};

export const DeepSeekPending: Story = {
  args: {
    children: `<think>
好的，我现在需要处理用户的问题。用户一开始用中文打招呼“你好”，然后我的回应应该遵循之前设定的角色和技能。首先，我需要确认用户是否是前端工程师求职者，或者他们需要哪方面的帮助。根据角色设定，我应该先了解他们的具体情况，比如技术栈、工作年限、项目经验和目标城市。

    `,
  },
};

export const Chart: Story = {
  args: {
    children: `这是一个使用 @ant-design/plots 的 chart 示例

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
`,
  },
};
