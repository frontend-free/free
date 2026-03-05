import path from 'path';

import ejs from 'ejs';
import fs from 'fs-extra';

import type { BuildCodeConfig } from '../types';

function buildCode(config: BuildCodeConfig, configDir: string) {
  const outputDir = path.resolve(configDir, './src');
  const template = config.template ?? 'antd';
  const enumsConfigPath = path.resolve(configDir, config.enumsConfig);

  console.log('buildCode', { enumsConfig: config.enumsConfig, outputDir, template });

  if (!fs.existsSync(enumsConfigPath)) {
    throw new Error(`enumsConfig 文件不存在: ${enumsConfigPath}`);
  }

  const { enums } = require(enumsConfigPath);

  const temp = fs.readFileSync(path.resolve(__dirname, `./template/${template}.ejs`)).toString();
  const result = ejs.render(temp, { enums });

  fs.ensureDirSync(path.resolve(outputDir, './code'));
  fs.writeFileSync(path.resolve(outputDir, './code/enums.tsx'), result);

  console.log('buildCode success');
}

export { buildCode };
