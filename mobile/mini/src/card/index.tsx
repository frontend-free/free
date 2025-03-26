import { View } from '@tarojs/components';
import { Text } from '../text';
import classNames from 'classnames';
import type { ReactNode } from 'react';

interface CardItem {
  label: string;
  value?: string | number;
  children?: string | ReactNode;
}

interface CardProps {
  title?: string | ReactNode;
  right?: ReactNode;
  items: (CardItem | CardItem[])[];
  buttons?: {
    type?: 'primary' | 'error';
    label: string;
    onClick: () => void;
  }[];
}

const Field = ({ label, value, children }: CardItem) => {
  return (
    <View className="flex flex-1 flex-row gap-2 items-center">
      <Text size="sm" className="w-[4em]">
        {label}
      </Text>
      {children ? children : <Text className="text-desc">{value || '-'}</Text>}
    </View>
  );
};

function Card({ title, right, items, buttons }: CardProps) {
  return (
    <View className="bg-white rounded-lg flex flex-col">
      <View className="p-3 flex flex-col gap-2">
        <View className="flex justify-between">
          {typeof title === 'string' ? <Text>{title}</Text> : title}
          {right}
        </View>
        <View>
          {items.map((item, index) => {
            if (Array.isArray(item)) {
              return (
                <View key={index} className="flex flex-row gap-2">
                  {item.map((item, index) => (
                    <Field key={index} {...item} />
                  ))}
                </View>
              );
            }
            return <Field key={index} {...item} />;
          })}
        </View>
      </View>
      {buttons && (
        <>
          <View className="c-border-top" />
          <View className="flex">
            {buttons &&
              buttons.map((button, index) => (
                <>
                  {index > 0 && <View key={`border-${index}`} className="c-border-right" />}
                  <View key={index} className="flex-1">
                    {/* @ts-ignore 后端字段问题，实际上是 coachSetPrice */}
                    {button.label && (
                      <Text
                        className={classNames('rounded-none text-center p-2', {
                          'text-primary': button.type === 'primary',
                          'text-red-500': button.type === 'error',
                        })}
                        onClick={button.onClick}
                      >
                        {button.label}
                      </Text>
                    )}
                  </View>
                </>
              ))}
          </View>
        </>
      )}
    </View>
  );
}

export { Card };
export type { CardProps };
