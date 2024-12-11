const enums = {
  ReleaseStatus: {
    NOT_RELEASE: {
      text: '未发布',
      status: 'Default',
      color: 'default',
    },
    IN_RELEASE: {
      text: '发布中',
      status: 'Processing',
      color: 'processing',
    },
    RELEASED: {
      text: '已发布',
      status: 'Success',
      color: 'success',
    },
    RELEASED_FAIL: {
      text: '发布失败',
      status: 'Error',
      color: 'error',
    },
  },
  APIType: {
    SYNC: {
      text: '同步',
    },
    ASYNC: {
      text: '异步',
    },
  },
};

module.exports = { enums };
