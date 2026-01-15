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
            animation: `sender-rectangle-${color} infinite 1s ease-in-out ${getAnimationDelay(index)}s`,
          }}
        />
      ))}
    </div>
  );
}

function generateUUID() {
  return uuidv4();
}

export { generateUUID, RecordLoading };
