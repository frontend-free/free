import { useEffect, useRef } from 'react';
import type { Mode } from 'vanilla-jsoneditor';
import { JSONEditor } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange?: (value: string, event?: any) => void;
  readonly?: boolean;
  mode?: 'text' | 'tree' | 'table';
  mainMenuBar?: boolean;
}

function EditorJSON({ value, onChange, readonly, mode, mainMenuBar }: EditorJSONProps) {
  const ref = useRef<HTMLDivElement>(null);
  const refEditor = useRef<JSONEditor | null>(null);

  const refOnChange = useRef(onChange);

  useEffect(() => {
    refEditor.current?.update({
      text: value || '',
    });
  }, [value]);

  useEffect(() => {
    refEditor.current = new JSONEditor({
      target: ref.current!,
      props: {
        mainMenuBar,
        tabSize: 2,
        mode: (mode || 'text') as Mode,
        readOnly: readonly,
        askToFormat: false,
        content: {
          text: value || '',
        },
        onChange: (newContent) => {
          // @ts-ignore
          refOnChange.current(newContent.text);
        },
      },
    });
  }, []);

  return <div ref={ref} className="h-full w-full" />;
}

export { EditorJSON };
