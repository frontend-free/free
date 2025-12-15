// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const SVGS_DIR = path.join(__dirname, '../src/svgs');
const ICONS_DIR = path.join(__dirname, '../src/icons');

// 确保 icons 目录存在
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// 将文件名转换为 PascalCase 组件名
function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

// 读取 SVG 文件并生成图标组件
function generateIconComponent(svgFileName, subDir) {
  const svgPath = path.join(SVGS_DIR, subDir, svgFileName);
  const svgContent = fs.readFileSync(svgPath, 'utf-8');

  // 提取文件名（不含扩展名）
  const baseName = path.basename(svgFileName, '.svg');
  // 根据子目录名添加后缀：filled -> Filled, outlined -> Outlined
  const suffix = subDir.charAt(0).toUpperCase() + subDir.slice(1);
  const componentName = toPascalCase(baseName) + suffix;
  const fileName = componentName + '.tsx';

  // 生成组件代码
  const componentCode = `import { createIcon } from '../utils';

const svgContent = \`${svgContent.trim()}\`;

export const ${componentName} = createIcon('${componentName}', svgContent);

export default ${componentName};
`;

  // 写入文件
  const outputPath = path.join(ICONS_DIR, fileName);
  fs.writeFileSync(outputPath, componentCode, 'utf-8');

  return { componentName, fileName };
}

// 生成 index.ts 导出文件
function generateIndexFile(components) {
  const exports = components
    .map(({ componentName }) => {
      return `export { ${componentName} } from './icons/${componentName}';`;
    })
    .join('\n');

  const indexContent = `export * from './types';

import Icons from '@ant-design/icons';
export default Icons;

${exports}
`;

  const indexPath = path.join(__dirname, '../src/index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

// 主函数
function main() {
  // 支持的子目录
  const subDirs = ['filled', 'outlined'];
  const components = [];

  // 遍历每个子目录
  subDirs.forEach((subDir) => {
    const subDirPath = path.join(SVGS_DIR, subDir);

    // 检查子目录是否存在
    if (!fs.existsSync(subDirPath)) {
      console.log(`Directory ${subDir} does not exist, skipping...`);
      return;
    }

    // 读取子目录下的所有 SVG 文件
    const svgFiles = fs.readdirSync(subDirPath).filter((file) => file.endsWith('.svg'));

    if (svgFiles.length === 0) {
      console.log(`No SVG files found in ${subDir}`);
      return;
    }

    console.log(`Found ${svgFiles.length} SVG file(s) in ${subDir}/`);

    // 生成该目录下的所有图标组件
    svgFiles.forEach((svgFile) => {
      try {
        const { componentName, fileName } = generateIconComponent(svgFile, subDir);
        components.push({ componentName, fileName });
        console.log(`Generated: ${fileName}`);
      } catch (error) {
        console.error(`Error generating icon from ${subDir}/${svgFile}:`, error.message);
      }
    });
  });

  if (components.length === 0) {
    console.log('No SVG files found in any subdirectory');
    return;
  }

  // 生成 index.ts
  generateIndexFile(components);
  console.log(`Generated: index.ts with ${components.length} icon(s)`);
}

main();
