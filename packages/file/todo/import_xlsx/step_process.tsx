import { LoadingButton } from '@fe-free/core';
import { CheckOutlined, LoadingOutlined } from '@fe-free/icons';
import type { StepsProps, UploadFile } from 'antd';
import { Button } from 'antd';
import { useEffect } from 'react';
import { ItemRender } from './step_import';
import type { ImportXlsxProps } from './types';

function StepProcess({
  fileList,
  status,
  setStatus,
  uploadData,
  onImport,
}: {
  fileList: UploadFile[];
  status: StepsProps['status'];
  setStatus: (status: StepsProps['status']) => void;
  uploadData: any[][];
  onImport: ImportXlsxProps['onImport'];
}) {
  const handleImport = async () => {
    setStatus('process');
    try {
      const records: Record<string, any>[] = [];
      const fields = uploadData[0];
      uploadData.slice(1).forEach((record) => {
        const recordObj: Record<string, any> = {};
        record.forEach((cell, index) => {
          recordObj[fields[index]] = cell;
        });
        records.push(recordObj);
      });

      await onImport(records);
      setStatus('finish');
    } catch (error) {
      setStatus('error');
      throw error;
    }
  };

  let right;
  if (status === 'process') {
    right = (
      <Button icon={<LoadingOutlined />} type="text">
        导入中
      </Button>
    );
  } else if (status === 'finish') {
    right = (
      <Button icon={<CheckOutlined />} type="text">
        导入完成
      </Button>
    );
  } else if (status === 'error') {
    right = (
      <LoadingButton type="text" danger onClick={() => handleImport()}>
        重新导入
      </LoadingButton>
    );
  }

  useEffect(() => {
    handleImport();
  }, []);

  return (
    <div>
      <ItemRender file={fileList[0]} right={right} />
    </div>
  );
}

export { StepProcess };
