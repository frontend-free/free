function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

export { copyToClipboard };
