import classNames from 'classnames';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getScrollbarWidth } from './helper';

function useScrollFixed({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  const [marginRight, setMarginRight] = useState(0);

  const scrollbarWidth = useMemo(() => {
    return getScrollbarWidth();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateMargin = () => {
      const hasVerticalScrollbar = el.scrollHeight > el.clientHeight;
      setMarginRight(hasVerticalScrollbar ? scrollbarWidth : 0);
    };

    updateMargin();

    const resizeObserver = new ResizeObserver(updateMargin);
    resizeObserver.observe(el);
    el.addEventListener('scroll', updateMargin);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener('scroll', updateMargin);
    };
  }, [ref, scrollbarWidth]);

  return { marginRight };
}

function ScrollFixed({
  refScroll,
  className,
  children,
  ...rest
}: {
  refScroll?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const ref = refScroll || innerRef;
  const { marginRight } = useScrollFixed({ ref });

  return (
    <div
      ref={ref}
      {...rest}
      className={classNames('h-full w-full overflow-y-auto overflow-x-hidden', className)}
    >
      <div style={{ marginRight: `-${marginRight || 0}px` }}>{children}</div>
    </div>
  );
}

export { getScrollbarWidth, ScrollFixed, useScrollFixed };
