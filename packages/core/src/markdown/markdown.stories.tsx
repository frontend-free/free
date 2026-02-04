import { Markdown } from '@fe-free/ai';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Markdown> = {
  title: '@fe-free/core/Markdown',
  component: Markdown,
  tags: ['autodocs'],
};

export default meta;

function StreamingComponent(args) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((value) => value + 1);
    }, 50);
  }, []);

  return (
    <Markdown
      {...args}
      content={args.content.slice(0, index)}
      isStreaming={index !== args.content.length}
    />
  );
}

type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    content: `
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

export const Streaming: Story = {
  render: StreamingComponent,
  args: {
    content: `
# Markdown 组件示例

这是一个 **Markdown** 组件的基本用法示例。

---

## 支持的特性

- 标题
- 列表

---

## 代码高亮

\`\`\`typescript
function hello(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`


## 表格

| 姓名   | 年龄 | 城市   | 职业       | 邮箱                  | 状态   |状态   |状态   |状态   |
| ------ | ---- | ------ | ---------- | --------------------- | ------ |------ |------ |------ |
| 张三   | 28   | 北京   | 前端开发   | zhangsan@example.com  | 在职   |
| 李四   | 32   | 上海   | 产品经理   | lisi@example.com      | 离职   |
| 王五   | 24   | 广州   | 设计师     | wangwu@example.com    | 在职   |
| 赵六   | 29   | 深圳   | 测试工程师 | zhaoliu@example.com   | 实习   |

---
`,
  },
};

export const Latex: Story = {
  args: {
    content: `
### Latex
inline standard: $\\frac{df}{dt}$ \n
block standard：\n
$$
\\Delta t' = \\frac{\\Delta t}{\\sqrt{1 - \\frac{v^2}{c^2}}}
$$

inline: \\(\\frac{df}{dt}\\)  \n
block: \n
\\[
\\Delta t' = \\frac{\\Delta t}{\\sqrt{1 - \\frac{v^2}{c^2}}}
\\]

`,
  },
};

export const Think: Story = {
  render: StreamingComponent,
  args: {
    content: `
<think>Deep thinking is a systematic and structured cognitive approach that requires individuals to move beyond intuition and superficial information, delving into the essence of a problem and its underlying principles through logical analysis, multi-perspective examination, and persistent inquiry. Unlike quick reactions or heuristic judgments, deep thinking emphasizes slow thinking, actively engaging knowledge reserves, critical thinking, and creativity to uncover deeper connections and meanings.
Key characteristics of deep thinking include:
Probing the Essence: Not settling for "what it is," but continuously asking "why" and "how it works" until reaching the fundamental logic.
Multidimensional Connections: Placing the issue in a broader context and analyzing it through interdisciplinary knowledge or diverse perspectives.
Skepticism & Reflection: Challenging existing conclusions, authoritative opinions, and even personal biases, validating them through logic or evidence.
Long-term Value Focus: Prioritizing systemic consequences and sustainable impact over short-term or localized benefits.
This mode of thinking helps individuals avoid cognitive biases in complex scenarios, improve decision-making, and generate groundbreaking insights in fields such as academic research, business innovation, and social problem-solving.</think>
# Hello Deep Thinking\n Deep thinking is over.\n\n You can use the think tag to package your thoughts.
`,
  },
};
