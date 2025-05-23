import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { python } from '@codemirror/lang-python';
import type { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useMemo } from 'react';

interface EditorProps {
  language?: 'javascript' | 'python' | 'json' | 'markdown';
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  editable?: boolean;

  // 不对外
  theme?: ReactCodeMirrorProps['theme'];
  extensions?: ReactCodeMirrorProps['extensions'];
}

function Editor(props: EditorProps) {
  const {
    language,
    value,
    onChange,
    readOnly,
    editable,
    autoFocus,
    placeholder,
    theme,
    extensions: originExtensions,
  } = props;

  const extensions = useMemo(() => {
    const result: ReactCodeMirrorProps['extensions'] = [];

    if (originExtensions) {
      result.push(...originExtensions);
    }

    switch (language) {
      case 'javascript':
        result.push(javascript());
        break;
      case 'python':
        result.push(python());
        break;
      case 'json':
        result.push(json());
        break;
      case 'markdown':
        result.push(markdown());
        break;
      default:
        break;
    }

    return result;
  }, [language, originExtensions]);

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <CodeMirror
      className="w-full h-full"
      height="100%"
      width="100%"
      value={value}
      onChange={handleChange}
      extensions={extensions}
      editable={editable}
      readOnly={readOnly}
      autoFocus={autoFocus}
      placeholder={placeholder}
      // 不对外
      theme={theme}
    />
  );
}

export { Editor };
export type { EditorProps };
