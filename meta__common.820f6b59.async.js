"use strict";(self.webpackChunkfree=self.webpackChunkfree||[]).push([[277],{60795:function(o,e,n){n.r(e),n.d(e,{demos:function(){return s}});var a=n(59496),t=n(1700),s={}},76393:function(o,e,n){n.r(e),n.d(e,{demos:function(){return s}});var a=n(59496),t=n(22988),s={}},47573:function(o,e,n){n.r(e),n.d(e,{demos:function(){return s}});var a=n(59496),t=n(52929),s={}},56860:function(o,e,n){n.r(e),n.d(e,{demos:function(){return s}});var a=n(59496),t=n(37018),s={}},15223:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var a=n(1700);const t=[{value:`// commitlint.config.js
module.exports = { extends: ['@fe-free/commit-lint'] };
`,paraId:0,tocIndex:0}]},67512:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var a=n(22988);const t=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@fe-free/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},37443:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var a=n(52929);const t=[{value:"pnpm i @fe-free/free-scripts",paraId:0,tocIndex:0},{value:`program
  .command('build_api')
  .description('swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5')
  .option('-i, --input <input>', 'package.json \u6240\u5728\u7684\u76EE\u5F55\uFF0C\u8BFB\u53D6 package.json \u4E2D\u7684 swaggerDocs \u5B57\u6BB5')
  .option('-o, --output <output>', '\u8F93\u51FA /api /swagger \u7684\u76EE\u5F55')
  .action(buildApi);

program
  .command('build_code')
  .description('\u751F\u6210\u4EE3\u7801')
  .option('-i, --input <input>', 'code_config \u914D\u7F6E\u6587\u4EF6\uFF0C\u63D0\u4F9B export { enums } ')
  .option('-o, --output <output>', '\u8F93\u51FA enums.tsx \u7684\u76EE\u5F55')
  .action(buildCode);
`,paraId:1,tocIndex:0},{value:"\u751F\u6210\u8FD9\u6837\u7684\u4EE3\u7801",paraId:2,tocIndex:1},{value:"\u7ECF\u8FC7\u5904\u7406\u66B4\u6F0F api",paraId:3,tocIndex:1},{value:`import { Api as IotBaseApi } from './api/iot-base';
import { injectInterceptors } from './interceptors';

const iotBaseApi = new IotBaseApi({
  baseURL: '/iot-base',
});

injectInterceptors(iotBaseApi.instance);

export { iotBaseApi };
`,paraId:4,tocIndex:1},{value:"\u4E1A\u52A1\u4F7F\u7528",paraId:5,tocIndex:1},{value:`import { iotBaseApi } from '@lib/api';

iotBaseApi.thing.thingModelMainPageByParam({});
`,paraId:6,tocIndex:1},{value:"\u540E\u7AEF\u63A5\u53E3\u4F1A\u6709\u679A\u4E3E\uFF0C\u63D0\u73B0\u5728\u4EE3\u7801\u4E0A\u662F\u8054\u5408\u7C7B\u578B\u3002",paraId:7,tocIndex:2},{value:`  /** #\u53D1\u5E03\u72B6\u6001#ENUM#0:\u672A\u53D1\u5E03:NOT_RELEASE,2:\u53D1\u5E03\u6210\u529F:RELEASED# */
  releaseStatus?: 'NOT_RELEASE' | 'RELEASED';
`,paraId:8,tocIndex:2},{value:"\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8FD9\u6837\u7684\u573A\u666F",paraId:9,tocIndex:2},{value:`// --- ReleaseStatus

export enum EnumReleaseStatus {
  NOT_RELEASE = 'NOT_RELEASE',
  RELEASED = 'RELEASED',
}

export const valueEnumReleaseStatus = {
  [EnumReleaseStatus.NOT_RELEASE]: {
    text: '\u672A\u53D1\u5E03',
    status: 'Default',
  },

  [EnumReleaseStatus.RELEASED]: {
    text: '\u5DF2\u53D1\u5E03',
    status: 'Success',
  },
};

export const listReleaseStatus = Object.keys(valueEnumReleaseStatus).map((key) => {
  const item = valueEnumReleaseStatus[key];

  return {
    value: key,
    label: item.text,
  };
});

export function TagReleaseStatus(props: { value?: EnumReleaseStatus | string }) {
  const item = props.value && valueEnumReleaseStatus[props.value];

  if (item) {
    return <Tag color={item.color}>{item.text}</Tag>;
  }

  return null;
}
`,paraId:10,tocIndex:2},{value:"\u4EBA\u5DE5\u5199\u592A\u6162\uFF0C\u53C8\u4E0D\u597D\u901A\u8FC7\u4EE3\u7801\u751F\u6210\uFF0C\u6240\u4EE5\u6574\u4E86\u4E2A\u811A\u672C\u3002\u811A\u672C\u9700\u8981\u914D\u7F6E enums.config.js\uFF0C\u5373\u53EF\u751F\u6210\u4E0A\u9762\u7684\u4EE3\u7801",paraId:11,tocIndex:2},{value:`const enums = {
  ReleaseStatus: {
    NOT_RELEASE: {
      text: '\u672A\u53D1\u5E03',
      status: 'Default',
      color: 'default',
    },
    RELEASED: {
      text: '\u5DF2\u53D1\u5E03',
      status: 'Success',
      color: 'success',
    },
  },
};
`,paraId:12,tocIndex:2}]},22103:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});var a=n(37018);const t=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@fe-free/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
