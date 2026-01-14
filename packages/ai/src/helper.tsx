import classNames from 'classnames';
import { range } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

function RecordLoading({
  count = 4,
  gap = 2,
  color = 'white',
}: {
  count?: number;
  gap?: number;
  color?: 'white' | 'primary';
}) {
  return (
    <div className="flex h-0 gap-[2px]" style={{ gap: `${gap}px` }}>
      {range(count).map((index) => (
        <div
          key={index}
          className={classNames('h-[4px] w-[2px]', {
            'bg-white': color === 'white',
            'bg-primary': color === 'primary',
          })}
          style={{
            animation: `sender-rectangle-${color} infinite 1s ease-in-out ${((index * 1.5) / count) % 1}s`,
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
