import classNames from 'classnames';
import { useEffect, useMemo, useRef } from 'react';
import { completeHtml } from '../helper/complete';

function PartialHtml({ srcDoc: propsSrcDoc, className }: { srcDoc: string; className?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  const srcDoc = useMemo(() => {
    return completeHtml(propsSrcDoc);
  }, [propsSrcDoc]);

  useEffect(() => {
    if (ref.current?.contentDocument) {
      ref.current.contentDocument.open();
      ref.current.contentDocument.write(srcDoc);
      ref.current.contentDocument.close();
    }
  }, [srcDoc]);

  return (
    <iframe
      ref={ref}
      className={classNames('border border-01', className)}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}

export { PartialHtml };
