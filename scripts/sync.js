const path = require('path');
const fse = require('fs-extra');
const sh = require('shelljs');

function sync(pkgDirs) {
  fse.readdirSync(pkgDirs).forEach((dir) => {
    const p = path.resolve(pkgDirs, dir);
    const pkg = require(path.resolve(p, 'package.json'));
    sh.exec(`cd ${p}; cnpm sync ${pkg.name}`);
  });
}

sync('./packages');
sync('./mobile');
