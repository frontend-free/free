module.exports = {
  buildCode: {
    enumsConfig: './enums.config.js',
  },
  buildApi: {
    items: [
      {
        docName: 'ai-service',
        jsonUrl:
          'http://pivot-agent-web.agent.gz.pivotinteract.cn:23456/api/ai-service/v1/tools/getSwaggerJson',
      },
      {
        docName: 'adapter_runwork',
        jsonFile: './openapi.json',
      },
    ],
  },
};
