module.exports = {
  '*.{js,jsx,ts,tsx}': ['oxlint --fix', 'oxfmt'],
  '*.{css,less,scss,sass}': ['oxfmt'],
  '*.{md,mdx,json,html}': ['oxfmt'],
};
