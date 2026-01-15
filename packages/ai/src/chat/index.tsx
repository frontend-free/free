import { PageLayout } from '@fe-free/core';

function Chat({
  start,
  startClassName,
  end,
  endClassName,
  children,
  childrenClassName,
}: {
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
