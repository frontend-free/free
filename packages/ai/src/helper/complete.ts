function completeHtml(partialHtml?: string) {
  if (!partialHtml) {
    return '';
  }

  // 创建一个临时容器来解析 HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = partialHtml;

  // 浏览器会自动修正不匹配的标签（如自动闭合、忽略无效标签等）
  // 但 innerHTML 不会包含 <html>, <head>, <body> 等顶层结构
  // 所以我们手动构建一个完整文档

  // 提取 head 内容（如果有 <head> 标签，通常不会出现在片段中，但以防万一）
  let headContent = '';
  const headMatch = partialHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    headContent = headMatch[1] || '';
  }

  // 使用 tempDiv.innerHTML 获取浏览器修正后的 body 内容
  const bodyContent = tempDiv.innerHTML;

  // 构建完整 HTML
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  ${headContent}
</head>
<body>
  ${bodyContent}
</body>
</html>`;

  return fullHtml;
}

function completeJson(partialJson?: string): string {
  if (!partialJson) {
    return '';
  }

  let result = partialJson.trim();

  const stack: string[] = [];
  let inString = false;
  let escape = false;

  for (let i = 0; i < result.length; i++) {
    const char = result[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (char === '\\') {
        escape = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') stack.push('}');
    else if (char === '[') stack.push(']');
    else if (char === '}' || char === ']') stack.pop();
  }

  // 1️⃣ 如果字符串没闭合，补一个 "
  if (inString) {
    result += '"';
  }

  // 2️⃣ 去掉末尾非法逗号
  result = result.replace(/,\s*([}\]])/g, '$1');

  // 3️⃣ 补齐所有缺失的 } 或 ]
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

export { completeHtml, completeJson };
