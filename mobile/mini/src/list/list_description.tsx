import { type ReactNode } from 'react';
import { View } from '@tarojs/components';
import './index.scss';
import { isNumber } from 'lodash-es';
import SvgCopy from '../assets/copy.svg';
import { setClipboardData } from '@tarojs/taro';
import { Svg } from '../svg';
import { List, type ListProps } from './list';

interface ListDescriptionProps extends Pick<ListProps, 'size' | 'title'> {
  items: {
    label: string | ReactNode;
    value?: string | number | ReactNode;
    desc?: string;
    onClick?: (e: any) => void;
    access?: boolean;
    /** 复制值，为 true 时复制 value，为 string时复制 copy */
    copy?: string | boolean;
  }[];
}

const ListDescription = (props: ListDescriptionProps) => {
  return (
    <List title={props.title} size={props.size} responseWidth>
      {props.items.map((item, index) => {
        let extraText = item.value;

        if (isNumber(item.value)) {
          extraText = item.value!.toString();
        }

        const handleClick = (e: any) => {
          if (item.copy) {
            setClipboardData({
              data: item.copy === true ? item.value!.toString() : item.copy,
            });
          }
          item.onClick?.(e);
        };

        if (item.copy) {
          extraText = (
            <View className="flex items-center gap-1">
              {extraText}
              <Svg icon={SvgCopy} />
            </View>
          );
        }

        return (
          <List.Item
            key={index}
            title={item.label as any}
            extraText={extraText as any}
            note={item.desc}
            onClick={handleClick}
            arrow={item.access ? 'right' : undefined}
            extraTextDefaultColor
          />
        );
      })}
    </List>
  );
};

export { ListDescription };
export type { ListDescriptionProps };
