import path from 'path';

import fs from 'fs-extra';

import type { Config } from './types';

function getPackageJSON(dir?: string) {
  return require(path.resolve(dir || process.cwd(), './package.json'));
}

const CONFIG_FILE = '.freescriptsrc.js';

/**
 * 从项目目录读取 .freescriptsrc.js 配置
 * @param projectRoot 项目根目录，默认为 process.cwd()
 * @returns 配置对象与配置文件所在目录（用于解析相对路径）
 */
function loadConfig(projectRoot: string = process.cwd()): { config: Config; configDir: string } {
  const configPath = path.resolve(projectRoot, CONFIG_FILE);
  if (!fs.existsSync(configPath)) {
    throw new Error(`未找到配置文件: ${configPath}`);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const raw = require(configPath);
  const config: Config = raw?.default ?? raw;
  if (!config || typeof config !== 'object') {
    throw new Error(`${CONFIG_FILE} 需导出 Config 对象`);
  }
  return { config, configDir: path.dirname(configPath) };
}

export { getPackageJSON, loadConfig, CONFIG_FILE };
