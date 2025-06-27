import type { StepsProps, UploadFile } from 'antd';
import { Button, Modal, Steps } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { StepImport } from './step_import';
import { StepPreview } from './step_preview';
import { StepProcess } from './step_process';
import './style.scss';
import type { ImportXlsxProps, XlsxDataItem } from './types';

function ImportXlsx(props: ImportXlsxProps) {
  const { onTemplateDownload, size, onImport, onOk } = props;

  const [current, setCurrent] = useState(0);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [xlsxData, setXlsxData] = useState<XlsxDataItem[]>([]);

  const [sheetIndex, setSheetIndex] = useState(0);
  const [headerIndex, setHeaderIndex] = useState(0);
  const [dataStartIndex, setDataStartIndex] = useState(1);

  const [status, setStatus] = useState<StepsProps['status']>(undefined);

  const sheetData = xlsxData[sheetIndex];

  const uploadData = useMemo(() => {
    if (!sheetData) {
      return;
    }

    return [sheetData.data[headerIndex], ...sheetData.data.slice(dataStartIndex)];
  }, [dataStartIndex, headerIndex, sheetData]);

  return (
    <div className="flex flex-col gap-4 h-full cl-import-xlsx">
      <Steps
        items={[
          {
            title: '上传',
          },
          {
            title: '预览',
          },
          {
            title: '数据导入',
            status,
          },
        ]}
        current={current}
      />
      <div className="flex-1 overflow-y-auto">
        {current === 0 && (
          <StepImport
            fileList={fileList}
            setFileList={setFileList}
            setXlsxData={setXlsxData}
            onTemplateDownload={onTemplateDownload}
            size={size}
          />
        )}
        {current === 1 && (
          <StepPreview
            xlsxData={xlsxData}
            sheetIndex={sheetIndex}
            setSheetIndex={setSheetIndex}
            headerIndex={headerIndex}
            setHeaderIndex={setHeaderIndex}
            dataStartIndex={dataStartIndex}
            setDataStartIndex={setDataStartIndex}
          />
        )}
        {current === 2 && (
          <StepProcess
            fileList={fileList}
            status={status}
            setStatus={setStatus}
            uploadData={uploadData!}
            onImport={onImport}
          />
        )}
      </div>
      <div className="flex justify-end gap-2">
        {current === 0 && (
          <>
            <Button disabled onClick={() => setCurrent(current - 1)}>
              上一步
            </Button>

            <Button
              type="primary"
              disabled={!fileList.length}
              onClick={() => setCurrent(current + 1)}
            >
              下一步
            </Button>
          </>
        )}
        {current === 1 && (
          <>
            <Button onClick={() => setCurrent(current - 1)}>上一步</Button>

            <Button type="primary" onClick={() => setCurrent(current + 1)}>
              下一步
            </Button>
          </>
        )}
        {current === 2 && (
          <>
            <Button onClick={() => setCurrent(current - 1)}>上一步</Button>

            <Button disabled={status !== 'finish'} type="primary" onClick={onOk}>
              导入
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

interface ModalImportXlsxProps extends Omit<ImportXlsxProps, 'onOk'> {
  children: React.ReactElement;
}
function ModalImportXlsx(props: ModalImportXlsxProps) {
  const [open, setOpen] = useState(false);
  const { children, ...rest } = props;

  const handleOk = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {open && (
        <Modal title="批量导入" onCancel={() => setOpen(false)} footer={null} open width={850}>
          <div className="h-[450px]">
            <ImportXlsx {...rest} onOk={handleOk} />
          </div>
        </Modal>
      )}
      {React.cloneElement(children, {
        onClick: () => {
          console.log('click');
          setOpen(true);
        },
      })}
    </>
  );
}

function ImportXlsxButton(props: Omit<ModalImportXlsxProps, 'children'>) {
  return (
    <ModalImportXlsx {...props}>
      <Button>批量导入</Button>
    </ModalImportXlsx>
  );
}

export { ImportXlsxButton, ModalImportXlsx };
