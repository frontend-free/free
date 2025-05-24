import ExcelJS from 'exceljs';
import type { JSONSheetItem } from './helper';
import { exportFile, JSONToWorksheet } from './helper';

interface JSONToXlsxOptions {
  /** 默认 data.xlsx */
  fileName?: string;
  /** 用法参考 exceljs。可做比如 标红、备注等 */
  processCell?: (info: { value: any; colNumber: number; rowNumber: number }) => {
    value: any;
    font?: object;
    note?: string;
  };
}

/** xlsxJSON 转 xlsx，其中日期格式按字符串输出 */
async function JSONToXlsx(xlsxJSON: JSONSheetItem[], options?: JSONToXlsxOptions): Promise<void> {
  const { fileName = 'data.xlsx', processCell } = options || {};
  const workbook = new ExcelJS.Workbook();

  // json 写入 workbook
  xlsxJSON.forEach((sheet) => {
    const worksheet = workbook.addWorksheet(sheet.name);
    JSONToWorksheet(sheet.data, worksheet, {
      processCell,
    });
  });

  // export
  await exportFile(workbook, fileName);
}

export { JSONToXlsx };
