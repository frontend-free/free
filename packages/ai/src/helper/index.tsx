import classNames from 'classnames';
import { range } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

function getAnimationDelay(index: number) {
  const arr = [0.1, 0.2, 0.4, 0.6, 0.8, 0.9];
  return arr[index % arr.length];
}

function RecordLoading({
  count = 4,
  gap = 2,
  color = 'white',
}: {
  count?: number;
  height?: number;
  width?: number;
  gap?: number;
  color?: 'white' | 'primary';
}) {
  return (
    <div className="flex h-0 gap-[2px]" style={{ gap: `${gap}px` }}>
      {range(count).map((index) => (
        <div
          key={index}
          className={classNames({
            'bg-white': color === 'white',
            'bg-primary': color === 'primary',
          })}
          style={{
            height: '4px',
            width: '2px',
            animation: `fea-sender-rectangle-${color} infinite 1s ease-in-out ${getAnimationDelay(index)}s`,
          }}
        />
      ))}
    </div>
  );
}

function generateUUID() {
  return uuidv4();
}

function getScrollbarWidth() {
  // 创建一个不可见的 div 元素
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // 强制显示滚动条
  document.body.appendChild(outer);

  // 创建一个内部 div，宽度为 100%
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // 滚动条宽度 = 外部容器的宽度 - 内部内容的宽度
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // 清理 DOM
  document.body.removeChild(outer);

  return scrollbarWidth;
}

export { generateUUID, getScrollbarWidth, RecordLoading };
