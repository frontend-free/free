import cn from 'classnames';

interface PageLayoutProps {
  direction?: 'horizontal' | 'vertical';
  start?: React.ReactNode;
  children?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
}

function PageLayout({
  direction = 'horizontal',
  start,
  children,
  end,
  className,
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        'flex w-full h-full',
        {
          'flex-row': direction === 'horizontal',
          'flex-col': direction === 'vertical',
        },
        className,
      )}
    >
      <div className="flex-none">{start}</div>
      <div className="flex-1 overflow-auto">{children}</div>
      <div className="flex-none">{end}</div>
    </div>
  );
}

export { PageLayout };
