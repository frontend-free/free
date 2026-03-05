/**
 * free-scripts 配置文件示例
 * 复制到项目根目录并重命名为 .freescriptsrc.js，按需修改
 *
 * 支持两种导出方式：
 *   module.exports = { ... };
 *   export default { ... };
 */
module.exports = {
  buildCode: {
    enumsConfig: './path/to/enums_config.js', // 提供 export { enums } 的文件
    template: 'antd', // 可选，默认 antd，可选 pure
  },
  buildApi: {
    moduleNameIndex: 0, // 可选，默认 0
    items: [
      {
        docName: 'example',
        jsonUrl: 'https://example.com/v2/api-docs',
        // 或使用本地文件： jsonFile: './swagger/example.json',
      },
    ],
  },
};
