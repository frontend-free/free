import { JSONToXlsx, xlsxToJSON, xlsxToJSONAndValidate } from '@fe-free/file';
import dayjs from 'dayjs';
import { isDate, isNumber, isString } from 'lodash-es';
import React from 'react';

export default {
  title: '@fe-free/file/xlsx',
};

export const XlsxToJSON = () => (
  <>
    <div>
      导入 xlsx
      <br />
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            xlsxToJSON(file).then((json) => {
              const element = document.querySelector('.data1');
              if (element) {
                element.innerHTML = JSON.stringify(json, null, 2);
              }
            });
          }
        }}
      />
    </div>
    <pre className="data1" />
  </>
);

export const JSONToXlsxExample = () => (
  <>
    <pre>
      数据源：
      {JSON.stringify(
        [
          {
            name: 'sheet1',
            data: [
              ['日期', '必填项'],
              ['2025/1/1', '是'],
              ['2025/12/31', '否'],
            ],
          },
        ],
        null,
        2,
      )}
    </pre>
    <div>
      <button
        onClick={() => {
          JSONToXlsx([
            {
              name: 'sheet1',
              data: [
                ['日期', '必填项'],
                ['2025/1/1', '是'],
                ['2025/12/31', '否'],
              ],
            },
          ]);
        }}
      >
        export
      </button>
    </div>
    <div>
      <button
        onClick={() => {
          JSONToXlsx(
            [
              {
                name: 'sheet1',
                data: [
                  ['日期', '必填项'],
                  ['2025/1/1', '是'],
                  ['2024/12/31', '否'],
                ],
              },
            ],
            {
              processCell: ({ rowNumber, colNumber, value }) => {
                if (colNumber === 1 && rowNumber > 1) {
                  const isValid = dayjs(value).year() < dayjs().year();
                  if (isValid) {
                    return {
                      value,
                      font: {
                        color: {
                          argb: 'FFFF0000',
                        },
                      },
                      note: '日期需要当前年份',
                    };
                  }
                }
                return { value };
              },
            },
          );
        }}
      >
        export（标红&备注）
      </button>
    </div>
  </>
);

export const XlsxToJSONAndValidate = () => {
  const [validateResult, setValidateResult] = React.useState<any>(null);

  const validate = ({ cell, colNumber }: { cell: any; colNumber: number }) => {
    if (
      isString(cell.value) &&
      (cell.value?.startsWith('日期') || cell.value?.startsWith('必填项'))
    ) {
      return;
    }

    let message = '';

    // 日期列
    if (colNumber === 1) {
      // 空值
      if (!cell.value) {
        message = '错误';
      } else {
        // 如果是数字
        if (isNumber(cell.value)) {
          message = '格式错误';
        }
        // 如果是日期类型
        if (isDate(cell.value)) {
          const d = dayjs(cell.value);
          // 非法
          if (!d.isValid()) {
            message = '格式错误';
          }
          // 超出范围
          if (Math.abs(d.year() - dayjs().year()) > 1) {
            message = '范围错误';
          }
        }
        // 如果是字符串
        else if (isString(cell.value)) {
          const reg = /^\d{4}([./-])\d{1,2}([./-])\d{1,2}$/g;

          // 不合法
          if (!reg.test(cell.value)) {
            message = '格式错误';
          }

          // 超出范围
          const d = dayjs(cell.value);
          if (Math.abs(d.year() - dayjs().year()) > 1) {
            message = '范围错误';
          }
        }
      }
    }
    // 类型列
    else if (colNumber === 2) {
      // 空值
      if (!cell.value) {
        message = '不能为空';
      } else {
        const isValid = ['是', '否'].includes(cell.value);
        if (!isValid) {
          message = '格式错误';
        }
      }
    }

    if (message) {
      return { message };
    }
  };

  return (
    <>
      <div>
        导入 xlsx 和 校验(假如第一列为日期限制当前年份，第二列为[是、否])
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              xlsxToJSONAndValidate(file, validate).then((res) => {
                setValidateResult(res);
              });
            }
          }}
        />
      </div>
      <pre>{JSON.stringify(validateResult, null, 2)}</pre>
      <button onClick={() => validateResult?.exportXlsx()} disabled={!validateResult}>
        export with validate
      </button>
    </>
  );
};
