import { XRequest } from '@ant-design/x-sdk';

type StreamMessage = { event: string; data: string };

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
      onUpdate?: ({ event, data }: StreamMessage, headers: Headers) => void;
      onSuccess?: (chunks: StreamMessage[], headers: Headers) => void;
      onError?: (error: Error, errorInfo?: any) => void;
    };
  },
) {
  XRequest<any, StreamMessage>(url, {
    ...rest,
    params: params,
    headers: headers,
    callbacks: {
      onUpdate: (message, hs) => {
        // 会存在 message 为 undefined 的情况
        if (message) {
          callbacks?.onUpdate?.(message, hs);
        }
      },
      onSuccess: (chunks, hs) => {
        callbacks?.onSuccess?.(chunks, hs);
      },
      onError: (error, errorInfo) => {
        console.log('XRequest onError', error);
        callbacks?.onError?.(error, errorInfo);
      },
    },
  });
}

export { fetchStream };
