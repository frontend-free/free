import classNames from 'classnames';
import { useMemo } from 'react';
import {
  DEFAULT_ICON,
  DEFAULT_ICON_COLOR,
  getFileExt,
  getFileSize,
  PRESET_FILE_ICONS,
} from './helper';

function FileIcon({
  name,
  className,
  showExt = false,
}: {
  name?: string;
  className?: string;
  showExt?: boolean;
}) {
  const ext = getFileExt(name) || '';

  const iconItem = useMemo(() => {
    return PRESET_FILE_ICONS.find((item) => item.ext.includes(ext));
  }, [ext]);

  return (
    <div className={classNames('flex flex-col items-center', className)}>
      <div style={{ color: iconItem?.color || DEFAULT_ICON_COLOR }}>
        {iconItem?.icon || DEFAULT_ICON}
      </div>
      {showExt && <div className="text-base">{ext}</div>}
    </div>
  );
}

function FileCard({
  name,
  size,
  direction = 'horizontal',
}: {
  name?: string;
  size?: number;
  direction?: 'horizontal' | 'vertical';
}) {
  return (
    <div
      className={classNames('flex items-center gap-1', {
        'flex-row items-center': direction === 'horizontal',
        'flex-col': direction === 'vertical',
      })}
    >
      <FileIcon name={name} className="text-4xl" />
      <div className={classNames('flex flex-col', { 'items-center': direction === 'vertical' })}>
        {name && <div className="truncate">{name}</div>}
        {size && <div className="text-sm text-desc">{getFileSize(size)}</div>}
      </div>
    </div>
  );
}

FileCard.FileIcon = FileIcon;

export { FileCard };
