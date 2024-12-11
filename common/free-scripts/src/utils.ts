import path from 'path';

function getPackageJSON(dir?: string) {
  return require(path.resolve(dir || process.cwd(), './package.json'));
}

export { getPackageJSON };
