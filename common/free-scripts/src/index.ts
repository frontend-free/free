#!/usr/bin/env node

import { Command } from 'commander';
import { buildApi } from './build_api';
import { buildCode } from './build_code';
import packageJSON from '../package.json';

const program = new Command();

program.version(packageJSON.version);

program
  .command('build-api')
  .description('swagger 文档生成 API 方法')
  .option('-i, --input <input>', 'package.json 所在的目录，读取 package.json 中的 swaggerDocs 字段')
  .option('-o, --output <output>', '输出 /api /swagger 的目录')
  .action(buildApi);

program
  .command('build-code')
  .description('生成代码')
  .option('-i, --input <input>', 'code_config 配置文件，提供 export { enums } ')
  .option('-o, --output <output>', '输出 enums.tsx 的目录')
  .option('-t, --template <template>', 'ejs 模板，有 pure antd。默认 pure')
  .action(buildCode);

program.parse(process.argv);
