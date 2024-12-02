import { memo, type ReactNode } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import './index.scss';
import type { AtListItemProps, AtListProps } from 'taro-ui/types/list';
import classNames from 'classnames';
import { Text } from '../text';
import { isNumber } from 'lodash-es';
import SvgCopy from '../assets/copy.svg';
import Taro from '@tarojs/taro';
import { Svg } from '../svg';

const ListTitle = memo<{ title: string; right?: ReactNode }>((props) => {
  return (
    <View className="mini-list-title flex items-end justify-between p-1 px-2 pt-2">
      <Text className="text-desc">{props.title}</Text>
      <View>{props.right}</View>
    </View>
  );
});

interface ListProps extends AtListProps {
  title?: string;
  size?: 'small';
  responseWidth?: boolean;
  extraTextDefaultColor?: boolean;
}
const List = (props) => {
  return (
    <View>
      {props.title && <ListTitle title={props.title} />}
      <View
        className={classNames('mini-list', {
          'mini-list-response-width': props.responseWidth,
          'mini-list-extra-text-default-color': props.extraTextDefaultColor,
          'mini-list-size-small': props.size === 'small',
        })}
      >
        <AtList {...props} />
      </View>
    </View>
  );
};

interface ListItemProps extends Omit<AtListItemProps, 'title'> {
  title?: string | ReactNode;
  required?: boolean;
}

const ListItem = ({ required, title, ...rest }: ListItemProps) => {
  return (
    <AtListItem
      {...rest}
      title={required ? <View className="mini-required">{title}</View> : (title as any)}
    />
  );
};

List.Item = ListItem;
List.Title = ListTitle;

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
    <List title={props.title} size={props.size} responseWidth extraTextDefaultColor>
      {props.items.map((item, index) => {
        let extraText = item.value;

        if (isNumber(item.value)) {
          extraText = item.value!.toString();
        }

        const handleClick = (e: any) => {
          if (item.copy) {
            Taro.setClipboardData({
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
          />
        );
      })}
    </List>
  );
};

List.Description = ListDescription;

export { List };
export type { ListProps, ListItemProps };
