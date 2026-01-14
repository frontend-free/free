import { PageLayout } from '@fe-free/core';

function Chat({
  end,
  endClassName,
  children,
  childrenClassName,
}: {
  end?: React.ReactNode;
  endClassName?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}) {
  return (
    <PageLayout
      direction="vertical"
      end={end}
      endClassName={endClassName}
      childrenClassName={childrenClassName}
    >
      {children}
    </PageLayout>
  );
}

export { Chat };
