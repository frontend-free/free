import { Table } from '@fe-free/core';
import { Select } from 'antd';
import { isDate, range } from 'lodash-es';
import type { XlsxDataItem } from './types';

function StepPreview({
  xlsxData,
  sheetIndex,
  setSheetIndex,
  headerIndex,
  setHeaderIndex,
  dataStartIndex,
  setDataStartIndex,
}: {
  xlsxData: XlsxDataItem[];
  sheetIndex: number;
  setSheetIndex: (index: number) => void;
  headerIndex: number;
  setHeaderIndex: (index: number) => void;
  dataStartIndex: number;
  setDataStartIndex: (index: number) => void;
}) {
  const sheetData = xlsxData[sheetIndex] || [];

  const sheetOptions = xlsxData.map((item, index) => ({ label: item.name, value: index }));
  const lineOptions = range(sheetData.data.length).map((line) => ({
    label: `第 ${line + 1} 行`,
    value: line,
  }));

  const columns = sheetData.data[headerIndex].map((v, index) => {
    if (isDate(v)) {
      return {
        title: v.toString(),
        dataIndex: index,
      };
    }

    return {
      title: v,
      dataIndex: index,
    };
  });

  const dataSource = sheetData.data.slice(dataStartIndex).map((item, line) => {
    const result = {
      id: line,
    };

    item.forEach((v, index) => {
      if (isDate(v)) {
        result[index] = v.toString();
      } else {
        result[index] = v;
      }
    });

    return result;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          导入表
          <Select
            options={sheetOptions}
            value={sheetIndex}
            onChange={(index) => {
              setSheetIndex(index);
              setHeaderIndex(0);
              setDataStartIndex(1);
            }}
            className="w-[150px]"
          />
        </div>
        <div className="flex items-center gap-2">
          表头
          <Select
            options={lineOptions}
            value={headerIndex}
            onChange={(index) => {
              setHeaderIndex(index);
              setDataStartIndex(index + 1);
            }}
            className="w-[150px]"
          />
        </div>
        <div className="flex items-center gap-2">
          数据起始行
          <Select
            options={lineOptions}
            value={dataStartIndex}
            onChange={(index) => {
              setDataStartIndex(index);
            }}
            className="w-[150px]"
          />
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
}

export { StepPreview };
