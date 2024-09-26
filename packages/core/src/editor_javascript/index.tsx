import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const fullStyle = { width: '100%', height: '100%' };

interface EditorJavascriptProps {
  value: string;
  onChange?: (value: string, event?: any) => void;
  readonly?: boolean;
}
function EditorJavascript({ value, onChange, readonly }: EditorJavascriptProps) {
  return (
    <AceEditor
      style={fullStyle}
      mode="javascript"
      theme="monokai"
      value={value}
      onChange={onChange}
      readOnly={readonly}
      name="javascript_editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export { EditorJavascript };
