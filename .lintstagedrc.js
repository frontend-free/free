module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,scss,sass}': ['prettier --write', 'stylelint --fix'],
  '*.{md,mdx,json,html}': ['prettier --write'],
};
