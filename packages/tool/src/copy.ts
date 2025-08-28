async function copyToClipboard(text) {
  // 优先尝试 navigator.clipboard
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // 降级方案：document.execCommand
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed'; // 避免滚动
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();

  document.execCommand('copy');

  document.body.removeChild(textArea);
}

export { copyToClipboard };
