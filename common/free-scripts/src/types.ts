export interface BuildCodeConfig {
  /** 枚举配置文件，提供 export { enums } 的文件 */
  enumsConfig: string;
  /** default: antd */
  template?: string;
}

export interface BuildApiConfigItem {
  /** 文档名称，用于输出文件名 */
  docName: string;
  /** 线上获取 swagger.json 的 url */
  jsonUrl?: string;
  /** 本地获取 swagger.json 的文件 */
  jsonFile?: string;
}

/** buildApi 完整配置：模块名索引及文档列表 */
export interface BuildApiConfig {
  /** generateApi moduleNameIndex，默认 0 */
  moduleNameIndex?: number;
  items: BuildApiConfigItem[];
}

export interface Config {
  buildCode?: BuildCodeConfig;
  buildApi?: BuildApiConfig;
}
