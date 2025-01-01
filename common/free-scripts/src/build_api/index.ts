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
// /auth/login 得到 authLogin
function toCamelCase(url) {
  let parts = url.replace('/api/', '/').replace(/-/g, '/').replace(/_/g, '/').split('/');

  // 历史原因，先这样实现
  if (parts[1] === parts[2]) {
    parts = parts.slice(1);
  }

  const camelCase =
    parts[1] +
    parts
      .slice(2)
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

async function swaggerJsonByDocUrl({ docUrl }) {
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

  return mergeJSON;
}

async function swaggerJsonByJsonUrl({ jsonUrl }) {
  const json = await fetch(jsonUrl).then((response) => response.json());
  return json;
}

function processJson({ json }) {
  // operationId 不采用原先值（后端没维护好），于是采用 url
  for (const apiPath in json.paths) {
    const funName = toCamelCase(apiPath);
    // 只有一个方法，get post ...
    for (const method in json.paths[apiPath]) {
      json.paths[apiPath][method].operationId = funName;
    }
  }

  return json;
}

function writeSwaggerJson({ output, docName, json }) {
  const outputDir = path.resolve(output);
  fs.writeFileSync(
    path.resolve(outputDir, `./swagger/${docName}.json`),
    JSON.stringify(json, null, 2)
  );
}

function prepare({ options }) {
  const outputDir = path.resolve(options.output);
  fs.rmSync(path.resolve(outputDir, './api'), { recursive: true, force: true });
  fs.rmSync(path.resolve(outputDir, './swagger'), { recursive: true, force: true });
  fs.mkdirSync(path.resolve(outputDir, './api'));
  fs.mkdirSync(path.resolve(outputDir, './swagger'));
}

interface Options {
  input?: string;
  output?: string;
}

async function buildApi(options: Options) {
  console.log('buildApi', options);

  // 检查输入和输出目录
  if (
    !options.output ||
    !options.input ||
    !fs.existsSync(options.output) ||
    !fs.existsSync(options.input)
  ) {
    throw new Error('请指定有效输入目录和输出目录');
  }

  // 读取 package.json 配置
  const packageJSON = fs.readJSONSync(path.resolve(options.input, './package.json'));
  if (!packageJSON.swaggerDocs) {
    throw new Error('package.json swaggerDocs 未配置');
  }

  // 准备目录
  prepare({ options });

  // 生成 api
  for (const item of packageJSON.swaggerDocs) {
    (async function () {
      let json;
      // 获得 json
      if (item.docUrl) {
        json = await swaggerJsonByDocUrl({ docUrl: item.docUrl });
      } else if (item.jsonUrl) {
        json = await swaggerJsonByJsonUrl({ jsonUrl: item.jsonUrl });
      }

      // 处理 json
      json = processJson({ json });

      // 写入 json
      writeSwaggerJson({ output: options.output, docName: item.docName, json });
      // 生成 ts 文件
      await code({ name: item.docName, options });

      console.log(`build-api success ${item.docName}`);
    })();
  }

  console.log('build-api all success');
}

export { buildApi };