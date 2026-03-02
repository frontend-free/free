module.exports = {
  '*.{js,jsx,ts,tsx}': ['oxlint --fix', 'oxfmt'],
  '*.{css,less,scss,sass}': ['oxfmt', 'stylelint --fix'],
  '*.{md,mdx,json,html}': ['oxfmt'],
};
