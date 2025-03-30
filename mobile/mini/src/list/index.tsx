import { memo, type ReactNode } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import './index.scss';
import type { AtListItemProps, AtListProps } from 'taro-ui/types/list';
import classNames from 'classnames';
import { Text } from '../text';
import { isNumber } from 'lodash-es';
import SvgCopy from '../assets/copy.svg';
import { setClipboardData } from '@tarojs/taro';
import { Svg } from '../svg';
import { Picker as TaroPicker } from '@tarojs/components';
import { Picker } from '../picker';

const ListTitle = memo<{ title: string; right?: ReactNode; size?: 'small' }>((props) => {
  return (
    <View
      className={classNames('mini-list-title flex items-end justify-between pb-1 px-2', {
        'pt-3': props.size !== 'small',
        'pt-2': props.size === 'small',
      })}
    >
      <Text className="text-desc">{props.title}</Text>
      <View>{props.right}</View>
    </View>
  );
});

interface ListProps extends AtListProps {
  title?: string;
  size?: 'small';
  responseWidth?: boolean;
}
const List = (props: ListProps) => {
  return (
    <View>
      {props.title && <ListTitle title={props.title} size={props.size} />}
      <View
        className={classNames('mini-list', {
          'mini-list-response-width': props.responseWidth,
          'mini-list-size-small': props.size === 'small',
        })}
      >
        <AtList {...props} />
      </View>
    </View>
  );
};

interface ListItemProps extends Omit<AtListItemProps, 'title' | 'note' | 'extraText'> {
  title?: string | ReactNode;
  note?: string | ReactNode;
  extraText?: string | ReactNode;
  required?: boolean;
  extraTextDefaultColor?: boolean;
}

const ListItem = ({
  required,
  title,
  note,
  extraText,
  extraTextDefaultColor,
  ...rest
}: ListItemProps) => {
  return (
    <AtListItem
      {...rest}
      className={classNames('mini-list-item', {
        'mini-list-item-extra-text-default-color': extraTextDefaultColor,
      })}
      title={required ? <View className="mini-required">{title}</View> : (title as any)}
      note={note as any}
      extraText={extraText as any}
    />
  );
};

const ListSelectItem = (props: {
  value: any;
  onChange: (v: any) => void;
  options: { label: string; value: any; originData?: any }[];
  title: string | ReactNode;
  note?: string | ReactNode;
  extraText?: string | ReactNode;
  disabled?: boolean;
}) => {
  const option = props.options.find((item) => item.value === props.value);

  return (
    <Picker
      value={props.value}
      onChange={(v) => props.onChange(v)}
      options={props.options}
      disabled={props.disabled}
    >
      <List.Item
        title={props.title}
        note={props.note}
        extraText={props.extraText || option?.label || '请选择'}
        arrow="right"
        disabled={props.disabled}
      />
    </Picker>
  );
};

const ListDateItem = (props: {
  value: any;
  onChange: (v: any) => void;
  title: string | ReactNode;
  note?: string | ReactNode;
  extraText: string | ReactNode;
  disabled?: boolean;
}) => {
  return (
    <TaroPicker mode="date" value={props.value} onChange={(e) => props.onChange(e.detail.value)}>
      <List.Item
        title={props.title}
        note={props.note}
        extraText={props.extraText || '请选择'}
        arrow="right"
        disabled={props.disabled}
      />
    </TaroPicker>
  );
};

List.Item = ListItem;
List.Title = ListTitle;
List.SelectItem = ListSelectItem;
List.DateItem = ListDateItem;

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

export { List, ListDescription };
export type { ListProps, ListItemProps, ListDescriptionProps };
