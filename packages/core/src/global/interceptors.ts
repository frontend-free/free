import type { AxiosInstance } from 'axios';
import { saveAs } from 'file-saver';

function downloadInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(async function (response) {
    const contentDisposition = response.headers['content-disposition'];

    if (contentDisposition) {
      if (response.config.responseType !== 'blob') {
        console.error('responseType is not blob。', response.config.responseType);
      }

      let filename;
      // 更加健壮且简洁的写法，优先处理 filename*=，否则处理 filename=
      if (contentDisposition.includes('filename*=')) {
        // RFC 5987 格式：filename*=utf-8''xxx
        const match = contentDisposition.match(/filename\*\s*=\s*([^']*)''([^;]+)/i);
        filename = match ? decodeURIComponent(match[2]) : undefined;
      } else if (contentDisposition.includes('filename=')) {
        // 普通格式：filename=xxx
        const match = contentDisposition.match(/filename\s*=\s*("?)([^";]+)\1/i);
        filename = match ? decodeURIComponent(match[2]) : undefined;
      }
      filename = filename || 'download';

      // 处理文件下载 - 确保正确处理二进制数据
      saveAs(response.data, filename);
    }

    return response;
  });
}

export { downloadInterceptor };
