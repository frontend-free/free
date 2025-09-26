import { InputNumber, Slider } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import './style.scss';

interface NumberSliderProps {
  /** 默认 0 */
  value?: number;
  onChange: (value: number) => void;
  /** 默认 0 */
  min?: number;
  /** 默认 100 */
  max?: number;
  /** 默认 1 */
  step?: number;
  /** 输入框的数值精度，默认 0 */
  precision?: number;
}

function NumberSlider(props: NumberSliderProps) {
  const { value = 0, onChange, min = 0, max = 100, step = 1, precision = 0 } = props;
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Slider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          marks={{
            [min]: min,
            [value]: value,
            [max]: max,
          }}
        />
      </div>
      <div>
        <InputNumber
          value={value}
          onChange={(v) => onChange(v ?? 0)}
          min={min}
          max={max}
          step={step}
          precision={precision}
        />
      </div>
    </div>
  );
}

interface PercentageSliderProps {
  /** 百分占比数组 */
  value: number[];
  onChange: (value: number[]) => void;
  /** 默认 0 */
  min?: number;
  /** 默认 100 */
  max?: number;
  /** 默认 1 */
  step?: number;
  className?: string;
}

function PercentageSlider(props: PercentageSliderProps) {
  const { value, onChange, min = 0, max = 100, step = 1, className } = props;

  const sliderValue = useMemo(() => {
    let sum = min;
    return value
      .map((v) => {
        sum += v;
        return sum;
      })
      .slice(0, -1);
  }, [value, min]);

  const handleChange = useCallback(
    (newValue: number[]) => {
      const result = [...newValue, max].map((v, i) => v - (newValue[i - 1] || min));
      onChange(result);
    },
    [max, min, onChange],
  );

  const marks = useMemo(() => {
    const result = {
      [min]: min,
      [max]: max,
    };

    [...sliderValue, max].forEach((v, i) => {
      const m = value[i] / 2 + (sliderValue[i - 1] || min);
      result[m] = value[i];
      // result[v] = value[i];
    });

    return result;
  }, [min, max, sliderValue, value]);

  return (
    <Slider
      value={sliderValue}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      range
      marks={marks}
      styles={{
        rail: {
          backgroundColor: '#91caff',
        },
        track: {
          backgroundColor: 'transparent',
        },
      }}
      className={classNames('fec-slider', className)}
    />
  );
}

export { NumberSlider, PercentageSlider };
export type { NumberSliderProps, PercentageSliderProps };
