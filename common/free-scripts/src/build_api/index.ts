import path from 'path';

import fs from 'fs-extra';
import fetch from 'node-fetch';
import { generateApi } from 'swagger-typescript-api';

import type { BuildApiConfig, BuildApiConfigItem } from '../types';

async function code({
  name,
  outputDir,
  moduleNameIndex = 0,
}: {
  name: string;
  outputDir: string;
  moduleNameIndex?: number;
}) {
  const resolvedOutput = path.resolve(outputDir);
  const filename = path.resolve(resolvedOutput, `./swagger/${name}.json`);

  console.log('code', filename);

  return generateApi({
    fileName: `${name}.ts`,
    output: path.resolve(resolvedOutput, './api'),
    input: filename,
    httpClientType: 'axios',
    moduleNameIndex,
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

function toCamelCase(url: string, moduleNameIndex: number) {
  let parts = url.split('/').slice(moduleNameIndex + 2);
  parts = parts.join('/').replace(/-/g, '/').replace(/_/g, '/').split('/');
  const camelCase =
    parts[0] +
    parts
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  return camelCase;
}

async function swaggerJsonByJsonFile(jsonFile: string) {
  return fs.readJson(jsonFile);
}

async function swaggerJsonByJsonUrl(jsonUrl: string) {
  const res = await fetch(jsonUrl);
  return res.json();
}

function processJson(
  json: { paths: Record<string, Record<string, { operationId: string }>> },
  moduleNameIndex: number,
) {
  for (const apiPath in json.paths) {
    const funName = toCamelCase(apiPath, moduleNameIndex);
    for (const method in json.paths[apiPath]) {
      json.paths[apiPath][method].operationId = funName;
    }
  }
  return json;
}

function writeSwaggerJson(outputDir: string, docName: string, json: object) {
  const resolved = path.resolve(outputDir);
  fs.writeFileSync(
    path.resolve(resolved, `./swagger/${docName}.json`),
    JSON.stringify(json, null, 2),
  );
}

function prepare(outputDir: string) {
  const resolved = path.resolve(outputDir);
  fs.rmSync(path.resolve(resolved, './api'), { recursive: true, force: true });
  fs.rmSync(path.resolve(resolved, './swagger'), { recursive: true, force: true });
  fs.mkdirSync(path.resolve(resolved, './api'));
  fs.mkdirSync(path.resolve(resolved, './swagger'));
}

async function buildApi(config: BuildApiConfig, configDir: string) {
  const outputDir = path.resolve(configDir, './src');
  const moduleNameIndex = config.moduleNameIndex ?? 0;

  console.log('buildApi', { outputDir, moduleNameIndex, items: config.items });

  if (!config.items?.length) {
    throw new Error('buildApi.items 不能为空');
  }

  prepare(outputDir);

  const ps = config.items.map(async (item: BuildApiConfigItem) => {
    let json: object;
    if (item.jsonFile) {
      const jsonPath = path.resolve(configDir, item.jsonFile);
      json = await swaggerJsonByJsonFile(jsonPath);
    } else if (item.jsonUrl) {
      json = await swaggerJsonByJsonUrl(item.jsonUrl);
    } else {
      throw new Error(`buildApi.items[].docName="${item.docName}" 需配置 jsonUrl 或 jsonFile`);
    }

    json = processJson(json as any, moduleNameIndex);
    writeSwaggerJson(outputDir, item.docName, json);
    await code({ name: item.docName, outputDir, moduleNameIndex });

    console.log(`build-api success ${item.docName}`);
  });

  await Promise.all(ps);
  console.log('build-api all success');
}

export { buildApi };
