import { PageLayout } from '@fe-free/core';

function Chat({
  className,
  start,
  startClassName,
  end,
  endClassName,
  children,
  childrenClassName,
}: {
  className?: string;
  start?: React.ReactNode;
  startClassName?: string;
  end?: React.ReactNode;
  endClassName?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}) {
  return (
    <PageLayout
      direction="vertical"
      className={className}
      start={start}
      startClassName={startClassName}
      end={end}
      endClassName={endClassName}
      childrenClassName={childrenClassName}
    >
      {children}
    </PageLayout>
  );
}

export { Chat };
