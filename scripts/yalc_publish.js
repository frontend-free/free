const path = require('path');
const fse = require('fs-extra');
const sh = require('shelljs');

fse.readdirSync('./packages').forEach((dir) => {
  const p = path.resolve('./packages', dir);
  sh.exec(`cd ${p}; yalc publish --push; `);
});
