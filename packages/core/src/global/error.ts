// eslint-disable-next-line no-restricted-imports
import { message } from 'antd';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

class RequestError extends Error {
  silent: boolean | undefined;
  status: string | undefined;
  config: AxiosRequestConfig<any> | undefined;
  request: XMLHttpRequest | undefined;
  response: AxiosResponse<any, any> | undefined;

  constructor(
    message: string,
    {
      silent,
      config,
      request,
      response,
    }: {
      silent?: boolean;
      status?: number;
      config?: AxiosRequestConfig;
      request?: XMLHttpRequest;
      response?: AxiosResponse;
    },
  ) {
    super(message);
    this.name = 'RequestError';

    this.silent = silent;
    this.status = status;
    this.config = config;
    this.request = request;
    this.response = response;
  }
}

function commonHandleError(event) {
  console.log('handleError', event);

  if (event.reason) {
    if (event.reason instanceof AxiosError) {
      if (event.reason.code === 'ERR_NETWORK') {
        message.error('网络异常');
        return;
      }
      if (event.reason.code === 'ECONNABORTED') {
        message.error('请求超时');
        return;
      }

      if (event.reason.code === 'ERR_CANCELED') {
        // 正常逻辑
        return;
      }
    }

    if (event.reason.message || event.reason.reason) {
      message.error(event.reason.message || event.reason.reason);
      return;
    }
  }

  if (event.error) {
    if (event.error.message || event.error.reason) {
      message.error(event.error.message || event.error.reason);
      return;
    }
  }

  // unknown error
}

function initErrorHandle(onError?: (event: ErrorEvent | PromiseRejectionEvent) => void | false) {
  const handleError = (event) => {
    const result = onError?.(event);
    if (result === false) {
      return;
    }

    commonHandleError(event);
  };

  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleError);

  return () => {
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleError);
  };
}

export { initErrorHandle, RequestError };
