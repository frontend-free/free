import {
  FileExcelFilled,
  FileImageFilled,
  FileMarkdownFilled,
  FilePdfFilled,
  FilePptFilled,
  FileTextFilled,
  FileWordFilled,
  FileZipFilled,
  FolderFilled,
} from '@ant-design/icons';
import AudioIcon from './icon/AudioIcon';
import VideoIcon from './icon/VideoIcon';

type PresetIcons =
  | 'default'
  | 'excel'
  | 'image'
  | 'markdown'
  | 'pdf'
  | 'ppt'
  | 'word'
  | 'zip'
  | 'video'
  | 'audio'
  | 'folder';

const IMG_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg'];

const DEFAULT_ICON_COLOR = '#8c8c8c';
const DEFAULT_ICON = <FileTextFilled />;

const PRESET_FILE_ICONS: {
  key: PresetIcons;
  ext: string[];
  color: string;
  icon: React.ReactElement;
}[] = [
  {
    key: 'default',
    icon: DEFAULT_ICON,
    color: DEFAULT_ICON_COLOR,
    ext: [],
  },
  {
    key: 'excel',
    icon: <FileExcelFilled />,
    color: '#22b35e',
    ext: ['xlsx', 'xls'],
  },
  {
    key: 'image',
    icon: <FileImageFilled />,
    color: 'rgb(22, 119, 255)',
    ext: IMG_EXTS,
  },
  {
    key: 'markdown',
    icon: <FileMarkdownFilled />,
    color: DEFAULT_ICON_COLOR,
    ext: ['md', 'mdx'],
  },
  {
    key: 'pdf',
    icon: <FilePdfFilled />,
    color: '#ff4d4f',
    ext: ['pdf'],
  },
  {
    key: 'ppt',
    icon: <FilePptFilled />,
    color: '#ff6e31',
    ext: ['ppt', 'pptx'],
  },
  {
    key: 'word',
    icon: <FileWordFilled />,
    color: '#1677ff',
    ext: ['doc', 'docx'],
  },
  {
    key: 'zip',
    icon: <FileZipFilled />,
    color: '#fab714',
    ext: ['zip', 'rar', '7z', 'tar', 'gz'],
  },
  {
    key: 'video',
    icon: <VideoIcon />,
    color: '#ff4d4f',
    ext: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'],
  },
  {
    key: 'audio',
    icon: <AudioIcon />,
    color: '#FFDC00',
    ext: ['mp3', 'wav', 'flac', 'ape', 'aac', 'ogg'],
  },
  {
    key: 'folder',
    icon: <FolderFilled />,
    color: '#FFD93B',
    ext: [],
  },
];

function isImage(name: string) {
  return IMG_EXTS.includes(name.split('.').pop() || '');
}

function getFileExt(name?: string) {
  return name?.split('.').pop() || '';
}

function getFileSize(size: number) {
  if (size < 1024) {
    return size + 'B';
  }
  if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + 'KB';
  }
  if (size < 1024 * 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + 'MB';
  }
  return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
}

export { DEFAULT_ICON, DEFAULT_ICON_COLOR, getFileExt, getFileSize, isImage, PRESET_FILE_ICONS };
