import type { Workbook } from 'exceljs';
import ExcelJS from 'exceljs';
import type { JSONSheetItem } from './helper';
import { readFile, worksheetToJSON } from './helper';

/**
 * xlsx 转 json  [ {name: 'sheet1', data: [ [], [] ]} ]
 */
async function xlsxToJSON(file: File): Promise<JSONSheetItem[]> {
  const workbook = new ExcelJS.Workbook() as Workbook;

  // 读 file
  const buffer = await readFile(file);
  await workbook.xlsx.load(buffer);

  // 转换成 json
  const xlsxJSON: JSONSheetItem[] = [];
  workbook.eachSheet((worksheet) => {
    const data = worksheetToJSON(worksheet);

    xlsxJSON.push({
      name: worksheet.name,
      data,
    });
  });

  return xlsxJSON;
}

export { xlsxToJSON };
