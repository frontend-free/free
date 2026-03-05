#!/usr/bin/env node

import { Command } from 'commander';

import packageJSON from '../package.json';
import { buildApi } from './build_api';
import { buildCode } from './build_code';
import { loadConfig } from './utils';

const program = new Command();

program.version(packageJSON.version);

program
  .command('build-api')
  .description('swagger 文档生成 API 方法（从 .freescriptsrc.js 的 buildApi 读取配置）')
  .action(() => {
    const cwd = process.cwd();
    const { config, configDir } = loadConfig(cwd);
    if (!config.buildApi) {
      throw new Error('.freescriptsrc.js 中未配置 buildApi');
    }
    return buildApi(config.buildApi, configDir);
  });

program
  .command('build-code')
  .description('生成代码（从 .freescriptsrc.js 的 buildCode 读取配置）')
  .action(() => {
    const cwd = process.cwd();
    const { config, configDir } = loadConfig(cwd);
    if (!config.buildCode) {
      throw new Error('.freescriptsrc.js 中未配置 buildCode');
    }
    return buildCode(config.buildCode, configDir);
  });

program.parse(process.argv);
