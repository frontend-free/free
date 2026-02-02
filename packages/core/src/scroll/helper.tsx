function getScrollbarWidth() {
  const target = document.body;

  // 创建一个不可见的 div 元素
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // 强制显示滚动条
  target.appendChild(outer);

  // 创建一个内部 div，宽度为 100%
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // 滚动条宽度 = 外部容器的宽度 - 内部内容的宽度
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // 清理 DOM
  target.removeChild(outer);

  return scrollbarWidth;
}

export { getScrollbarWidth };
