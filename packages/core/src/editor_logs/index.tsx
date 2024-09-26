import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

interface EditorLogsProps {
  logs: {
    timestamp: string;
    level: 'info' | 'warn' | 'error' | 'system';
    message: string;
  }[];
}

const EditorLogs: React.FC<EditorLogsProps> = ({ logs }) => {
  const formattedLogs = logs
    .map((log) => {
      const levelPadded = `[${log.level}]`.padEnd(8, ' ');
      return `${log.timestamp} ${levelPadded.toUpperCase()} ${log.message}`;
    })
    .join('\n');

  const logExtension = [
    StreamLanguage.define({
      token: (stream) => {
        if (stream.match(/.*\[WARN\s*\].*/)) return 'keyword';
        if (stream.match(/.*\[ERROR\s*\].*/)) return 'invalid';
        if (stream.match(/.*\[SYSTEM\].*/)) return 'comment';
        stream.next();
        return null;
      },
    }),
  ];

  const myTheme = createTheme({
    theme: 'dark',
    settings: {
      background: '#2e3235',
      foreground: 'rgba(243, 244, 246, 1)',
    },
    styles: [
      {
        tag: t.keyword,
        color: 'rgba(252, 211, 77, 1)',
      },
      {
        tag: t.invalid,
        color: 'rgba(248, 113, 113, 1)',
      },
      {
        tag: t.comment,
        color: 'rgba(96, 165, 250, 1)',
      },
    ],
  });

  return (
    <CodeMirror
      value={formattedLogs}
      theme={myTheme}
      extensions={logExtension}
      editable={false}
      height="400px"
      style={{ overflowY: 'auto' }}
    />
  );
};

export { EditorLogs };
