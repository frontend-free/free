import ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';

interface Options {
  input?: string;
  output?: string;
  template?: string;
}

function buildCode(options: Options) {
  console.log('buildCode', options);

  if (!options.output || !options.input) {
    throw new Error('请指定有效输入文件和输出目录');
  }

  const outputDir = path.resolve(options.output);

  // console.log('新建 /enums 目录');
  // fs.rmSync(path.resolve(outputDir, './enums'), { recursive: true, force: true });
  // fs.mkdirSync(path.resolve(outputDir, './enums'));

  const { enums } = require(path.resolve(options.input));

  const temp = fs
    .readFileSync(path.resolve(__dirname, `./template/${options.template || 'pure'}.ejs`))
    .toString();
  const result = ejs.render(temp, { enums });

  fs.writeFileSync(path.resolve(outputDir, './enums.tsx'), result);

  console.log('buildCode success');
}

export { buildCode };
