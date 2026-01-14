import { XRequest } from '@ant-design/x-sdk';

async function fetchStream(
  url: string,
  {
    params,
    headers,
    callbacks,
    ...rest
  }: {
    params?: Record<string, any>;
    headers?: Record<string, string>;
    callbacks?: {
      onUpdate?: ({ event, data }: { event: string; data: string }, headers: Headers) => void;
      onError?: (error: Error, errorInfo?: any) => void;
    };
  },
) {
  await XRequest<any, { event: string; data: string }>(url, {
    ...rest,
    params: params,
    headers: headers,
    callbacks: {
      onUpdate: (message, headers) => {
        // 会存在 message 为 undefined 的情况
        if (message) {
          callbacks?.onUpdate?.(message, headers);
        }
      },
      onSuccess: () => {
        // nothing
      },
      onError: (error, errorInfo) => {
        console.log('XRequest onError', error);
        callbacks?.onError?.(error, errorInfo);
      },
    },
  });
}

export { fetchStream };
