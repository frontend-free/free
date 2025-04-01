import { memo, type ReactNode } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import './index.scss';
import type { AtListItemProps, AtListProps } from 'taro-ui/types/list';
import classNames from 'classnames';
import { Text } from '../text';
import { Picker as TaroPicker } from '@tarojs/components';
import { Picker } from '../picker';
import { Input, DigitInput, PriceInput } from '../input';

const ListTitleItem = memo<{ title: string; right?: ReactNode; size?: 'small' }>((props) => {
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
  className?: string;
}
const List = (props: ListProps) => {
  return (
    <View className={props.className}>
      {props.title && <ListTitleItem title={props.title} size={props.size} />}
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


interface ListSelectItemProps {
  value: any;
  onChange: (v: any) => void;
  options: { label: string; value: any; originData?: any }[];
  title: string | ReactNode;
  note?: string | ReactNode;
  extraText?: string | ReactNode;
  disabled?: boolean;
}
const ListSelectItem = (props: ListSelectItemProps) => {
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

interface ListDateItemProps {
  value: any;
  onChange: (v: any) => void;
  title: string | ReactNode;
  note?: string | ReactNode;
  extraText: string | ReactNode;
  disabled?: boolean;
}

const ListDateItem = (props: ListDateItemProps) => {
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
List.TitleItem = ListTitleItem;
List.InputItem = Input;
List.DigitInputItem = DigitInput;
List.PriceInputItem = PriceInput;
List.SelectItem = ListSelectItem;
List.DateItem = ListDateItem;

export { List };
export type { ListProps, ListItemProps, ListDateItemProps, ListSelectItemProps };
