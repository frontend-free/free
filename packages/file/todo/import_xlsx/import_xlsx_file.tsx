import { LoadingButton } from '@fe-free/core';
import { EnumImportType } from '@lib/api';
import type { UploadFile } from 'antd';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { StepImport } from './step_import';
import './style.scss';
import type { ImportXlsxFileProps } from './types';

function ImportXlsxFile(props: ImportXlsxFileProps) {
  const { onTemplateDownload, size, onCancel, onOk, enableImportType } = props;

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [importType, setImportType] = useState<EnumImportType>(EnumImportType.FULL);

  return (
    <div className="flex flex-col gap-4 h-full cl-import-xlsx">
      <div className="flex-1 overflow-y-auto">
        <StepImport
          fileList={fileList}
          setFileList={setFileList}
          onTemplateDownload={onTemplateDownload}
          size={size}
          onImportType={enableImportType ? setImportType : undefined}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button onClick={() => onCancel?.()}>取消</Button>
        <LoadingButton
          disabled={!fileList.length}
          type="primary"
          onClick={() => {
            if (enableImportType) {
              onOk({ uploadFile: fileList[0], importType });
            } else {
              onOk({ uploadFile: fileList[0] });
            }
          }}
        >
          导入
        </LoadingButton>
      </div>
    </div>
  );
}

interface ModalImportXlsxFileProps extends ImportXlsxFileProps {
  children: React.ReactElement;
}
function ModalImportXlsxFile(props: ModalImportXlsxFileProps) {
  const [open, setOpen] = useState(false);
  const { children, onOk, ...rest } = props;

  return (
    <>
      {open && (
        <Modal title="批量导入" onCancel={() => setOpen(false)} footer={null} open>
          <div>
            <ImportXlsxFile
              {...rest}
              onOk={async (data) => {
                await onOk(data);
                setOpen(false);
              }}
              onCancel={() => setOpen(false)}
            />
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

function ImportXlsxFileButton(props: Omit<ModalImportXlsxFileProps, 'children'>) {
  return (
    <ModalImportXlsxFile {...props}>
      <Button>批量导入</Button>
    </ModalImportXlsxFile>
  );
}

export { ImportXlsxFileButton, ModalImportXlsxFile };
