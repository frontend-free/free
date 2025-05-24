import type { Cell, Workbook, Worksheet } from 'exceljs';
import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import { isNumber } from 'lodash-es';

type JSONSheetItem = {
  name: string;
  data: any[][];
};

function numberToDate(excelDate: number) {
  if (!isNumber(excelDate)) {
    return excelDate;
  }
  // let utc_days = Math.floor(excelDate - (25567 + 2))
  // Excel 的 bug, 会把 1900 年当作闰年
  // https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year
  // 东半球 & 0 时区 => 25567 + 2
  // 西半球 => 25567 + 1
  const step = new Date().getTimezoneOffset() <= 0 ? 25567 + 2 : 25567 + 1;
  const utc_days = Math.floor(excelDate - step);
  // 86400 => 24 * 60 * 60 => 一天的总秒数
  const utc_value = utc_days * 86400;
  // 一天的总毫秒数
  const date_info = new Date(utc_value * 1000);

  // 误差处理
  const fractional_day = excelDate - Math.floor(excelDate) + 0.0000001;
  // 自 1970 年至今的总秒数
  let total_seconds = Math.floor(86400 * fractional_day);
  const seconds = total_seconds % 60;
  total_seconds -= seconds;
  const hours = Math.floor(total_seconds / (60 * 60));
  const minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds,
  );
}

// 1 worksheet.eachRow 本身会跳过空行
// 2 row.eachCell 会跳过空列, includeEmpty: 试了也没用，不能使用，具体可看源码。
//   尝试 maxColIndex 解决
function eachRowAndCell(worksheet: Worksheet, callback) {
  let maxColIndex = 0;

  worksheet.eachRow(function (row, rowNumber) {
    // @ts-ignore
    maxColIndex = Math.max(maxColIndex, row._cells.length as number);

    for (let colIndex = 0; colIndex < maxColIndex; colIndex++) {
      const cell = row.getCell(colIndex + 1);
      const colNumber = colIndex + 1;

      callback({ cell, rowNumber, colNumber });
    }
  });
}

function worksheetToJSON(
  worksheet: Worksheet,
  processCell?: (info: { cell: Cell; colNumber: number; rowNumber: number }) => void,
) {
  const sheet: any[][] = [];

  eachRowAndCell(worksheet, ({ cell, colNumber, rowNumber }) => {
    if (processCell) {
      processCell({ cell, colNumber, rowNumber });
    }
    sheet[rowNumber - 1] = sheet[rowNumber - 1] || [];
    sheet[rowNumber - 1][colNumber - 1] = cell.value;
  });

  // 挪掉空行。 空行会显示 null
  return sheet.filter(Boolean);
}

interface JSONToWorksheetOption {
  processCell?: (info: { value: any; colNumber: number; rowNumber: number }) => object;
}

function JSONToWorksheet(json: any[][], worksheet: Worksheet, options?: JSONToWorksheetOption) {
  const { processCell = (info) => ({ value: info.value }) } = options || {};

  let maxColIndex = 0;
  // 不能使用 Array.forEach，会忽略数组的 empty [,1,,]。 行不会 empty
  for (let rowIndex = 0; rowIndex < json.length; rowIndex++) {
    const row = json[rowIndex];
    // 列需要取最大的，可能存在一系列因为 empty 导致 length 小。
    maxColIndex = Math.max(maxColIndex, row.length);
    for (let colIndex = 0; colIndex < maxColIndex; colIndex++) {
      const value = row[colIndex];
      const nCell = processCell({
        value,
        colNumber: colIndex + 1,
        rowNumber: rowIndex + 1,
      });

      Object.assign(worksheet.getCell(rowIndex + 1, colIndex + 1), nCell);
    }
  }
}

// 复制 value note font
async function copyWorkbook(workbook: Workbook): Promise<Workbook> {
  const newWorkbook = new ExcelJS.Workbook() as Workbook;

  workbook.eachSheet((worksheet) => {
    const newWorksheet = newWorkbook.addWorksheet(worksheet.name);

    eachRowAndCell(worksheet, ({ cell, colNumber, rowNumber }) => {
      newWorksheet.getCell(rowNumber, colNumber).value = cell.value;

      if (cell.note) {
        newWorksheet.getCell(rowNumber, colNumber).note = cell.note;
        newWorksheet.getCell(rowNumber, colNumber).font = {
          color: {
            argb: 'FFFF0000',
          },
        };
      }
    });
  });

  return newWorkbook;
}

function readFile(file: File): Promise<Buffer> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (data) => {
      resolve(data.target?.result as Buffer);
    };
    reader.readAsArrayBuffer(file);
  });
}

async function exportFile(workbook: Workbook, fileName?: string) {
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new window.Blob([buffer], {
    type: 'application/octet-stream',
  });
  // fileName 中不能包含特殊字符
  FileSaver.saveAs(blob, fileName ? fileName.replace(/[<>\\:;?/*|]/g, '-') : 'data.xlsx');
}

export { copyWorkbook, exportFile, JSONToWorksheet, numberToDate, readFile, worksheetToJSON };
export type { JSONSheetItem };
