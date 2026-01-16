import { FileCard } from '@fe-free/core';
import { Image, Typography } from 'antd';
import classNames from 'classnames';
import './style.scss';

function isUrl(url: string) {
  return url.startsWith('http') || url.startsWith('https');
}

function FileView({
  url,
  isImage: propsIsImage,
  size,
  className,
}: {
  url: string;
  size?: number;
  isImage?: boolean;
  className?: string;
}) {
  const isImage = propsIsImage ?? FileCard.isImage(url);

  // 判断是 url 才 decodeURIComponent
  const decodedUrl = isUrl(url) ? decodeURIComponent(url) : url;
  const name = decodedUrl.split('/').pop() || decodedUrl;

  return (
    <div className={classNames('fea-file-view bg-01', className)}>
      {isImage ? (
        <Image width={60} height={60} src={url} />
      ) : (
        <div className="flex h-[60px] w-[250px] items-center rounded px-1">
          <div className="flex min-w-0 items-center gap-1">
            <FileCard.FileIcon name={name} className="text-4xl" />
            <div className="flex flex-1 flex-col overflow-hidden">
              {name && <Typography.Text ellipsis={{ tooltip: name }}>{name}</Typography.Text>}
              {size && <div className="text-sm text-03">{FileCard.getFileSize(size)}</div>}
            </div>
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
