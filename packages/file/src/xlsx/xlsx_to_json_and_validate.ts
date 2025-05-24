import type { Cell, Workbook } from 'exceljs';
import ExcelJS from 'exceljs';
import type { JSONSheetItem } from './helper';
import { copyWorkbook, exportFile, readFile, worksheetToJSON } from './helper';

// 如果错误这返回错误信息，这将会修改 xlsx，且标红和批注.
// col row 从 1 开始
type xlsxToJSONAndValidateValidate = (info: {
  cell: Cell;
  colNumber: number;
  rowNumber: number;
}) => undefined | { message };

interface xlsxToJSONAndValidateOptions {
  fileName?: string;
}

interface xlsxToJSONAndValidateResult {
  data: JSONSheetItem[];
  // 每个 sheet 是否有错误
  hasErrors: boolean[];
  // 第一个 sheet 是否有错误
  firstError: boolean;
  exportXlsx: () => Promise<void>;
}

async function xlsxToJSONAndValidate(
  file: File,
  validate: xlsxToJSONAndValidateValidate,
  options?: xlsxToJSONAndValidateOptions,
): Promise<xlsxToJSONAndValidateResult> {
  const { fileName = 'data.xlsx' } = options || {};

  const workbook = new ExcelJS.Workbook() as Workbook;

  // 读 file
  const buffer = await readFile(file);
  await workbook.xlsx.load(buffer);

  // 错误处理
  const hasErrors: boolean[] = [];
  function doValidate(info, sheetIndex) {
    const validateResult = validate(info);
    if (validateResult) {
      Object.assign(info.cell, {
        note: validateResult.message,
        font: {
          color: {
            argb: 'FFFF0000',
          },
        },
      });

      hasErrors[sheetIndex] = true;
    }
  }

  let sheetIndex = 0;
  // 转换成 json
  const xlsxJSON: JSONSheetItem[] = [];
  workbook.eachSheet((worksheet) => {
    const data = worksheetToJSON(worksheet, (info) => {
      doValidate(info, sheetIndex);
    });

    xlsxJSON.push({
      name: worksheet.name,
      data,
    });

    sheetIndex += 1;
  });

  // 导出错误的 xlsx
  async function exportXlsx() {
    const newWorkbook = await copyWorkbook(workbook);
    await exportFile(newWorkbook, fileName);
  }

  return {
    data: xlsxJSON,
    hasErrors,
    firstError: !!hasErrors[0],
    exportXlsx,
  };
}

export { xlsxToJSONAndValidate };
