import { FileCard } from '@fe-free/core';
import { Image } from 'antd';
import './style.scss';

function isUrl(url: string) {
  return url.startsWith('http') || url.startsWith('https');
}

function FileView({ url, isImage: propsIsImage }: { url: string; isImage?: boolean }) {
  const isImage = propsIsImage ?? FileCard.isImage(url);

  // 判断是 url 才 decodeURIComponent
  const decodedUrl = isUrl(url) ? decodeURIComponent(url) : url;
  const name = decodedUrl.split('/').pop() || decodedUrl;

  return (
    <div className="fea-file-view">
      {isImage ? (
        <Image width={60} height={60} src={url} />
      ) : (
        <div className="flex h-[60px] w-[250px] items-center rounded bg-01 px-1">
          <div className="min-w-0">
            <FileCard name={name} />
          </div>
        </div>
      )}
    </div>
  );
}

function FileViewList({ urls }: { urls: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {urls.map((url) => (
        <FileView key={url} url={url} />
      ))}
    </div>
  );
}

export { FileView, FileViewList };
