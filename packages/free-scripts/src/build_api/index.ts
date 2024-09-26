import fs from 'fs-extra';
import fetch from 'node-fetch';
import path from 'path';
import { generateApi } from 'swagger-typescript-api';

async function code({ name, options }) {
  const outputDir = path.resolve(options.output);
  const filename = path.resolve(outputDir, `./swagger/${name}.json`);

  console.log('code', filename);

  return generateApi({
    name: `${name}.ts`,
    output: path.resolve(outputDir, './api'),
    input: filename,
    httpClientType: 'axios',
    // 后端接口规则是 /api/:module/xxxx, 于是 moduleIndex 为 1
    moduleNameIndex: 1,
    // @ts-ignore
    primitiveTypeConstructs: () => ({
      integer: (schema) => {
        if (schema.format === 'int64') {
          return 'string';
        }
        return 'number';
      },
    }),
  });
}

// /api/base/base-dictionary/add 得到 baseDictionaryAdd
function toCamelCase(url) {
  const parts = url.replace(/-/g, '/').replace(/_/g, '/').split('/');
  const camelCase =
    parts[3] +
    parts
      .slice(4)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  return camelCase;
}

function merge(mergeJSON, json) {
  Object.assign(mergeJSON, {
    swagger: json.swagger,
    info: json.info,
    host: json.host,
    basePath: json.basePath,
    paths: {
      ...mergeJSON.paths,
      ...json.paths,
    },
    definitions: {
      ...mergeJSON.definitions,
      ...json.definitions,
    },
  });
}

async function build({ swaggerDoc: { docName, docUrl }, options }) {
  const mergeJSON: any = {};

  const resources = await fetch(`${docUrl}/swagger-resources`).then((response) => response.json());

  for (const item of resources) {
    const data = await fetch(
      item.url.startsWith('/') ? `${docUrl}${item.url}` : `${docUrl}${item.url}`
    ).then((response) => response.json());

    merge(mergeJSON, data);
  }

  // fix，否则跑不通 generateApi
  mergeJSON.info.termsOfService = docUrl;

  // operationId 不采用原先值（后端没维护好），于是采用 url
  for (const apiPath in mergeJSON.paths) {
    const funName = toCamelCase(apiPath);
    // 只有一个方法，get post ...
    for (const method in mergeJSON.paths[apiPath]) {
      mergeJSON.paths[apiPath][method].operationId = funName;
    }
  }

  const outputDir = path.resolve(options.output);
  fs.writeFileSync(
    path.resolve(outputDir, `./swagger/${docName}.json`),
    JSON.stringify(mergeJSON, null, 2)
  );

  await code({ name: docName, options });

  console.log('build_api success');
}

interface Options {
  input?: string;
  output?: string;
}

async function buildApi(options: Options) {
  console.log('buildApi', options);

  if (
    !options.output ||
    !options.input ||
    !fs.existsSync(options.output) ||
    !fs.existsSync(options.input)
  ) {
    throw new Error('请指定有效输入目录和输出目录');
  }

  const outputDir = path.resolve(options.output);

  console.log('新建 api 目录 和 swagger 目录');
  fs.rmSync(path.resolve(outputDir, './api'), { recursive: true, force: true });
  fs.rmSync(path.resolve(outputDir, './swagger'), { recursive: true, force: true });
  fs.mkdirSync(path.resolve(outputDir, './api'));
  fs.mkdirSync(path.resolve(outputDir, './swagger'));

  const packageJSON = fs.readJSONSync(path.resolve(options.input, './package.json'));

  if (!packageJSON.swaggerDocs) {
    throw new Error('package.json swaggerDocs 未配置');
  }

  for (const item of packageJSON.swaggerDocs) {
    await build({ swaggerDoc: item, options });
  }

  console.log('buildApi success');
}

export { buildApi };
