import { useEffect, useRef } from 'react';
import { OrganizerGraph } from '../graph';
import type { CSSProperties } from 'react';
import cn from 'classnames';

interface OrganizerProps {
  className?: string;
  style?: CSSProperties;
  onReady?: (organizerGraph: OrganizerGraph) => void;
}

function Organizer(props: OrganizerProps) {
  const { onReady } = props;
  const refDom = useRef<HTMLDivElement | null>(null);
  const refStencil = useRef<HTMLDivElement | null>(null);

  // 规避 onReady 闭包问题
  const refReady = useRef(onReady);
  useEffect(() => {
    refReady.current = onReady;
  }, [onReady]);

  useEffect(() => {
    if (!refDom.current || !refStencil.current) {
      return;
    }

    const organizerGraph = new OrganizerGraph(
      {
        container: refDom.current,
      },
      {
        stencilContainer: refStencil.current,
      }
    );

    if (refReady.current) {
      refReady.current(organizerGraph);
    }

    // @ts-ignore
    window.__x6_instances__ = [organizerGraph];
  }, []);

  return (
    <div className={cn('flex h-full w-full', props.className)} style={props.style}>
      <div ref={refStencil} className="relative h-full w-[300px]" />
      <div className="h-full flex-1">
        <div ref={refDom} />
      </div>
    </div>
  );
}

export { Organizer };
