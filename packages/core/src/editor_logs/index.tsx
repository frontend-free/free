import { StreamLanguage } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import React from 'react';
import { Editor } from '../editor';

interface EditorLogsProps {
  logs: {
    timestamp?: string;
    level?: 'info' | 'warn' | 'error' | 'system';
    message: string;
  }[];
}

const EditorLogs: React.FC<EditorLogsProps> = ({ logs }) => {
  const notPure = logs.find((item) => item.timestamp || item.level);

  let formattedLogs = '';
  if (notPure) {
    formattedLogs = logs
      .map((log) => {
        const arr: string[] = [];

        arr.push((log.timestamp || '').padEnd(19, ' '));

        arr.push(`[${log.level || ''}]`.padEnd(8, ' ').toUpperCase());

        if (log.message) {
          arr.push(log.message);
        }

        return arr.join(' ');
      })
      .join('\n');
  } else {
    formattedLogs = logs.map((log) => log.message).join('\n');
  }

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
    <Editor value={formattedLogs} theme={myTheme} extensions={logExtension} editable={false} />
  );
};

export { EditorLogs };
export type { EditorLogsProps };
