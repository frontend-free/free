const path = require('path');
const fse = require('fs-extra');
const sh = require('shelljs');

fse.readdirSync('./packages').forEach((dir) => {
  const p = path.resolve('./packages', dir);
  const pkg = require(path.resolve(p, 'package.json'));
  sh.exec(`cd ${p}; cnpm sync ${pkg.name}`);
});
