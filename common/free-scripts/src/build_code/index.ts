import path from 'path';

import ejs from 'ejs';
import fs from 'fs-extra';

import type { BuildCodeConfig } from '../types';

function resolveTemplatePath(template: string) {
  const candidates = [path.resolve(__dirname, `./template/${template}.ejs`)];

  const found = candidates.find((candidate) => fs.existsSync(candidate));
  if (!found) {
    throw new Error(`template 不存在: ${template}`);
  }

  return found;
}

function buildCode(config: BuildCodeConfig, configDir: string) {
  const outputDir = path.resolve(configDir, './src');
  const template = config.template ?? 'antd';
  const enumsConfigPath = path.resolve(configDir, config.enumsConfig);

  console.log('buildCode', { enumsConfig: config.enumsConfig, outputDir, template });

  if (!fs.existsSync(enumsConfigPath)) {
    throw new Error(`enumsConfig 文件不存在: ${enumsConfigPath}`);
  }

  const { enums } = require(enumsConfigPath);

  const temp = fs.readFileSync(resolveTemplatePath(template)).toString();
  const result = ejs.render(temp, { enums });

  fs.ensureDirSync(path.resolve(outputDir, './code'));
  fs.writeFileSync(path.resolve(outputDir, './code/enums.tsx'), result);

  console.log('buildCode success');
}

export { buildCode };
