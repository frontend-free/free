import { ArrowsAltOutlined } from '@ant-design/icons';
import { Button, Modal, Select } from 'antd';
import { useMemo, useState } from 'react';
import { Editor } from '../editor';
import { PageLayout } from '../page_layout';

interface DataViewerProps {
  data: string;
  title?: string | React.ReactNode;
  enableMaximize?: boolean;
}

type DataViewerLanguage = 'json' | 'markdown' | 'text';

const options = [
  { label: 'Text', value: 'text' },
  { label: 'JSON', value: 'json' },
  { label: 'Markdown', value: 'markdown' },
];

function DataViewer({ data, title, enableMaximize }: DataViewerProps) {
  const [maximize, setMaximize] = useState(false);
  const [language, setLanguage] = useState<DataViewerLanguage>(
    options[0].value as DataViewerLanguage,
  );

  const value = useMemo(() => {
    try {
      if (language === 'json') {
        return JSON.stringify(JSON.parse(data), null, 2);
      }
      return data;
    } catch (err) {
      console.error(err);
      return data;
    }
  }, [data, language]);

  return (
    <>
      <PageLayout
        direction="vertical"
        start={
          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex-1">{title}</div>
            <Select
              options={options}
              value={language}
              onChange={(v) => setLanguage(v)}
              className="w-[110px]"
            />
            {enableMaximize && (
              <Button icon={<ArrowsAltOutlined />} onClick={() => setMaximize(!maximize)} />
            )}
          </div>
        }
      >
        <div className="relative h-full">
          <Editor
            value={value}
            language={language === 'text' ? undefined : language}
            editable={false}
          />
        </div>
      </PageLayout>
      {maximize && (
        <Modal title="查看" open width={'80vw'} onCancel={() => setMaximize(false)} footer={null}>
          <div className="h-[80vh]">
            <Editor
              value={value}
              language={language === 'text' ? undefined : language}
              editable={false}
            />
          </div>
        </Modal>
      )}
    </>
  );
}

export { DataViewer };
export type { DataViewerProps };
